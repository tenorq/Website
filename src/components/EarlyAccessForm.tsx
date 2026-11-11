"use client";

import {
  useEffect,
  useId,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";

type EarlyAccessFormProps = {
  className?: string;
  children?: ReactNode;
};

export function EarlyAccessForm({
  className = "dukaan-solid inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold",
  children = "Join the waitlist",
}: EarlyAccessFormProps) {
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);
  const emailInputId = useId();

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(null), 5000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email");
    const website = (formData.get("website") as string) || "";

    if (typeof email !== "string" || !email.trim()) return;

    setSending(true);
    setNotice(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "dukaanai-waitlist",
          name: "DukaanAI waitlist",
          email,
          message:
            "Please add this email address to the DukaanAI early access waitlist and let me know when it is available.",
          website,
        }),
      });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true) {
        throw new Error(result?.error ?? "Could not submit your email.");
      }

      form.reset();
      setNotice({
        kind: "success",
        text: "You’re on the DukaanAI waitlist. We’ll be in touch.",
      });
    } catch {
      setNotice({
        kind: "error",
        text: "We couldn’t submit your email. Please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid w-full max-w-md gap-3 sm:flex sm:items-center"
      >
        <label className="sr-only" htmlFor={emailInputId}>
          Email address
        </label>
        <input
          id={emailInputId}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Your email address"
          className="min-h-12 min-w-0 flex-1 rounded-full border border-white/10 bg-[#121212] px-5 text-sm text-white placeholder:text-gray-400 outline-none focus:border-[#146c3a]"
        />

        {/* Honeypot field for bot trapping */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={sending}
          className={`${className} disabled:cursor-wait disabled:opacity-70`}
        >
          {sending ? "Joining…" : children}
        </button>
      </form>
      {notice && (
        <div
          role={notice.kind === "success" ? "status" : "alert"}
          className={`fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-xl border px-5 py-4 text-sm shadow-2xl backdrop-blur-xl ${notice.kind === "success" ? "border-emerald-400/30 bg-emerald-950/90 text-emerald-100" : "border-red-400/30 bg-red-950/90 text-red-100"}`}
        >
          {notice.text}
        </div>
      )}
    </>
  );
}
