import { Resend } from "resend";

export const runtime = "nodejs";

const submissions = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 1 * 60 * 1000;
const MAX_SUBMISSIONS = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  for (const [key, value] of submissions) {
    if (value.resetAt <= now) submissions.delete(key);
  }

  const current = submissions.get(ip);
  if (!current || current.resetAt <= now) {
    submissions.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (current.count >= MAX_SUBMISSIONS) return true;
  current.count += 1;
  return false;
}

export async function POST(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip =
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  // Quietly accept bot submissions caught by the visually hidden honeypot.
  if (typeof data.website === "string" && data.website.trim()) {
    return Response.json({ success: true });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (
    name.length < 1 ||
    name.length > 120 ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length < 1 ||
    message.length > 5000
  ) {
    return Response.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "hello@tenorq.com";
  if (!apiKey || !from) {
    console.error(
      "Contact email is not configured: set RESEND_API_KEY and RESEND_FROM_EMAIL.",
    );
    return Response.json(
      { error: "Contact form is temporarily unavailable." },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { data: sent, error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `Website inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error || !sent) {
      console.error(
        "Resend contact email failed:",
        error?.message ?? "No message ID returned.",
      );
      return Response.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend contact email failed:", error);
    return Response.json(
      { error: "Could not send your message. Please try again." },
      { status: 502 },
    );
  }
}
