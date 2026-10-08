"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

export default function ConsultForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const note = String(data.get("note") || "");
    const language = String(data.get("language") || "English");
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nLanguage: ${language}\n\n${note}`
    );
    window.location.href = `sms:${site.phoneTel}?&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-gold/30 bg-white p-5 sm:p-6">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-lg border border-navy/15 bg-cream px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="phone" className="text-sm font-medium text-navy">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="mt-1 w-full rounded-lg border border-navy/15 bg-cream px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="language" className="text-sm font-medium text-navy">
          Preferred language
        </label>
        <select
          id="language"
          name="language"
          className="mt-1 w-full rounded-lg border border-navy/15 bg-cream px-3 py-2"
        >
          <option>English</option>
          <option>Español</option>
        </select>
      </div>
      <div>
        <label htmlFor="note" className="text-sm font-medium text-navy">
          What would you like to talk about?
        </label>
        <textarea
          id="note"
          name="note"
          rows={4}
          className="mt-1 w-full rounded-lg border border-navy/15 bg-cream px-3 py-2"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-cream hover:bg-navy-soft"
      >
        Text this request
      </button>
      <p className="text-xs leading-relaxed text-mute">
        This opens a text to {site.phoneDisplay}. It is not an emergency service and does not
        create a patient relationship. No email address is published on this page yet.
      </p>
      {sent && (
        <p role="status" className="text-sm text-navy">
          If your text app did not open, call or text {site.phoneDisplay}.
        </p>
      )}
    </form>
  );
}
