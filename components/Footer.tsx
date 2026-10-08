import { footerLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto grid max-w-page gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl">A Happier Way</p>
          <p className="mt-2 text-sm text-cream/80">
            Psychiatric care with {site.provider}, {site.role}. Serving Aventura and Miami.
          </p>
          <ul className="mt-4 flex gap-2">
            {site.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gold hover:text-cream"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gold">Visit</h2>
          <address className="mt-3 space-y-1 text-sm not-italic text-cream/85">
            <p>{site.street}</p>
            <p>
              {site.city}, {site.region} {site.postal}
            </p>
            <p>
              <a href={`tel:${site.phoneTel}`} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
            </p>
            <p>¡Hablamos Español!</p>
            <p>By appointment</p>
            <p>
              <a href={site.maps} className="text-gold hover:text-cream">
                Map and directions
              </a>
            </p>
          </address>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-gold">On this site</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-cream/85 hover:text-gold">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-page space-y-3 px-4 py-6 text-xs leading-relaxed text-cream/70 sm:px-6">
          <p>
            The information on this site is not intended or implied to be a substitute for
            professional medical advice, diagnosis, or treatment. All content is for general
            information purposes only. If you are in crisis, call or text 988, or call 911.
          </p>
          <p>
            This page is Kelsey Vivatson’s psychiatric practice site. Ketamine care, when it is
            relevant, is offered through{" "}
            <a href={site.ketamineHome} className="text-gold hover:text-cream">
              Rewired Ketamine
            </a>
            , the LegitScript-certified clinic at this Aventura office. This domain does not yet
            have its own certification seal.
          </p>
          <p>© {new Date().getFullYear()} A Happier Way · Aventura, Florida</p>
        </div>
      </div>
    </footer>
  );
}
