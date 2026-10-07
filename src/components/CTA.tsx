"use client";

import { useEffect, useState, type FormEvent } from "react";

type SubmissionNotice = { kind: "success" | "error"; message: string } | null;

export function CTA() {
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState<SubmissionNotice>(null);

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(null), 5000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setNotice(null);
    const form = event.currentTarget;

    try {
      const formData = new FormData(form);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const responseBody = await response.text();
      let result: { success?: boolean | string; message?: string };
      try {
        result = JSON.parse(responseBody);
      } catch {
        throw new Error(
          `Contact endpoint returned ${response.status}: ${responseBody}`,
        );
      }
      if (
        !response.ok ||
        !(result.success === true || result.success === "true")
      ) {
        throw new Error(
          result.message ?? `Contact endpoint returned ${response.status}`,
        );
      }
      form.reset();
      setNotice({
        kind: "success",
        message: "Message sent! Thanks for reaching out. We’ll be in touch.",
      });
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setNotice({
        kind: "error",
        message:
          "We couldn’t send your message. Make sure your details are correct and please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="cta" className="scroll-mt-24 border-t border-white/10 px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">Contact</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">Let’s talk about what you’re building.</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-gray-400">Tell us what you’re looking to modernise. We’ll get back to you to understand the problem and explore what could help.</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-4 text-left"
        >
          <div
            aria-hidden="true"
            className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
          >
            <label>
              Leave this field empty
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <label className="grid gap-2 text-sm text-gray-300">
            Name
            <input
              required
              name="name"
              autoComplete="name"
              className="rounded-xl border border-white/10 bg-[#121212] px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </label>
          <label className="grid gap-2 text-sm text-gray-300">
            Work email
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="rounded-xl border border-white/10 bg-[#121212] px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </label>
          <label className="grid gap-2 text-sm text-gray-300">
            Message
            <textarea
              required
              name="message"
              rows={4}
              className="resize-y rounded-xl border border-white/10 bg-[#121212] px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </label>
          <button
            type="submit"
            disabled={sending}
            className="mt-2 w-full justify-self-start rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-blue-500 sm:w-auto"
          >
            {sending ? "Sending…" : "Talk to Tenorq"}
          </button>
        </form>
      </div>
      {notice && (
        <div
          role={notice.kind === "success" ? "status" : "alert"}
          className={`fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-xl border px-5 py-4 text-sm shadow-2xl backdrop-blur-xl ${notice.kind === "success" ? "border-emerald-400/30 bg-emerald-950/90 text-emerald-100" : "border-red-400/30 bg-red-950/90 text-red-100"}`}
        >
          {notice.message}
        </div>
      )}
    </section>
  );
}
