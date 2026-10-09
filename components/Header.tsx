"use client";

import { useState } from "react";
import { nav, site } from "@/lib/site";

function Icon({ label }: { label: string }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true as const };
  if (label === "Instagram") {
    return (
      <svg {...common}>
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm6.2-.9a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM12 9.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2z" />
      </svg>
    );
  }
  if (label === "Facebook") {
    return (
      <svg {...common}>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
      </svg>
    );
  }
  if (label === "YouTube") {
    return (
      <svg {...common}>
        <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.2 3.3z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M6.5 9H3.7v12h2.8zm.2-4.2A1.7 1.7 0 1 1 5 6.5a1.7 1.7 0 0 1 1.7-1.7zM20.3 13.4c0-2.5-1.3-3.7-3.1-3.7a2.7 2.7 0 0 0-2.4 1.3h-.1V9H12v12h2.8v-6.3c0-1.6.3-3.2 2.3-3.2s2 1.8 2 3.3V21h2.8z" />
    </svg>
  );
}

function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {site.social.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className="grid h-8 w-8 place-items-center rounded-full border border-ink/15 text-ink hover:border-gold hover:text-gold-deep"
          >
            <Icon label={item.label} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white text-ink">
        <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6">
          <p className="truncate">
            Aventura · Miami · South Florida
            <span className="mx-2 text-gold">·</span>
            ¡Hablamos Español!
          </p>
          <div className="flex items-center gap-3">
            <SocialIcons className="hidden sm:flex" />
            <a href={`tel:${site.phoneTel}`} className="whitespace-nowrap hover:text-gold-deep">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-gold/30 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="/" className="min-w-0">
            <img
              src="/logo.png"
              alt="Rewired — A Happier Way"
              width={400}
              height={400}
              className="h-14 w-auto"
            />
          </a>
          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
            {nav.map((item) =>
              item.children ? (
                <div key={item.label} className="group relative">
                  <a href={item.href} className="text-sm text-navy hover:text-gold-deep">
                    {item.label}
                  </a>
                  <div className="invisible absolute left-0 top-full z-20 min-w-56 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="rounded-xl border border-gold/30 bg-white p-2 shadow-lg">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-navy hover:bg-cream"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <a key={item.label} href={item.href} className="text-sm text-navy hover:text-gold-deep">
                  {item.label}
                </a>
              )
            )}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              className="rounded-full bg-gold px-4 py-2 text-xs font-semibold tracking-wide text-white hover:bg-gold-deep sm:inline-block"
            >
              Free consult
            </a>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-md border border-navy/15 text-navy lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span aria-hidden="true" className="text-lg leading-none">
                {open ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>
        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="border-t border-gold/20 bg-cream px-4 py-3 lg:hidden">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <div>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between py-2 text-left text-navy"
                        aria-expanded={expanded === item.label}
                        onClick={() =>
                          setExpanded((value) => (value === item.label ? null : item.label))
                        }
                      >
                        {item.label}
                        <span aria-hidden="true">{expanded === item.label ? "−" : "+"}</span>
                      </button>
                      {expanded === item.label && (
                        <ul className="mb-2 space-y-1 border-l border-gold/40 pl-3">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                className="block py-1 text-sm text-mute"
                                onClick={() => setOpen(false)}
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-2 text-navy"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="/#contact"
              className="mt-3 inline-block rounded-full bg-navy px-4 py-2 text-sm text-cream"
              onClick={() => setOpen(false)}
            >
              Free consult
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
