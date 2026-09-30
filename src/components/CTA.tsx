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
        throw new Error(`Contact endpoint returned ${response.status}: ${responseBody}`);
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
        message: "We couldn’t send your message. Please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="cta" className="py-24 px-6 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 p-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-md text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Talk with <span className="text-blue-500">Tenorq.</span>
        </h2>

        <p className="max-w-xl mx-auto text-gray-400 text-lg mb-10">
          Have a question about Tenorq or our merchant collection application?
          Send us a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto grid gap-4 text-left"
        >
          <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
            <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <label className="grid gap-2 text-sm text-gray-300">
            Your name
            <input
              required
              name="name"
              autoComplete="name"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </label>
          <label className="grid gap-2 text-sm text-gray-300">
            Email address
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </label>
          <label className="grid gap-2 text-sm text-gray-300">
            Message
            <textarea
              required
              name="message"
              rows={4}
              className="resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </label>
          <button
            type="submit"
            disabled={sending}
            className="mt-2 w-full sm:w-auto justify-self-center px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 active:scale-95"
          >
            {sending ? "Sending…" : "Send message"}
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
