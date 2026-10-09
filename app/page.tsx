import ConsultForm from "@/components/ConsultForm";
import { site } from "@/lib/site";

const treats = [
  {
    title: "Mood concerns",
    text: "Care for people living with depression, anxiety, and other mood changes, with room to talk about what has and has not helped.",
  },
  {
    title: "ADHD",
    text: "Assessment and follow-up for attention, focus, and executive-function concerns in children, teens, and adults.",
  },
  {
    title: "Autism",
    text: "Thoughtful psychiatric support for autistic people and families, including co-occurring mood or attention concerns.",
  },
  {
    title: "Across the lifespan",
    text: "Plans for children, adolescents, and adults. Family collaboration is part of care when it is helpful and appropriate.",
  },
];

const care = [
  {
    title: "Diagnostic assessment",
    text: "A careful history, not a rushed label. The goal is a shared picture of what is getting in the way.",
  },
  {
    title: "Medication management",
    text: "Evidence-based prescribing when medication is a fit, with follow-up so the plan can change as you do.",
  },
  {
    title: "Psychotherapy",
    text: "Conversation-based care that can stand alone or sit alongside medication.",
  },
  {
    title: "Family collaboration",
    text: "Parents, partners, and caregivers can be part of the plan when that support is welcome.",
  },
];

const steps = [
  {
    title: "A free consult",
    text: "A short conversation about what you are looking for. It is not a diagnosis and there is no pressure to start care.",
  },
  {
    title: "An assessment visit",
    text: "History, goals, and context. For children and teens, family input is often part of that picture.",
  },
  {
    title: "A plan you can understand",
    text: "Medication, psychotherapy, or both. You should leave knowing what was recommended and why.",
  },
  {
    title: "Follow-up",
    text: "Visits to review how things are going. Plans are adjusted. Nothing here is promised as a cure.",
  },
];

const faqs = [
  {
    q: "Who is this practice for?",
    a: "People in Aventura, Miami, and nearby South Florida who want psychiatric assessment, medication management, psychotherapy, or a combination. Care is available across the lifespan.",
  },
  {
    q: "Is this the ketamine clinic?",
    a: "No. This site is Kelsey Vivatson’s psychiatric practice. She is also Clinical Director at Rewired Ketamine in the same Aventura office. Ketamine care is a separate conversation and lives on that clinic’s site.",
  },
  {
    q: "Do you prescribe medication?",
    a: "Yes, when it is appropriate after an assessment. Prescribing is one option, not the only one, and it is reviewed over time.",
  },
  {
    q: "Do you see children and adults?",
    a: "Yes. Kelsey works with ADHD, autism, and mood concerns across the lifespan, and collaborates with families when that is part of the plan.",
  },
  {
    q: "Do you speak Spanish?",
    a: "Yes. ¡Hablamos Español! You can note a language preference when you request a consult.",
  },
  {
    q: "Where is the office?",
    a: "2820 NE 214th St, Suite 1002, Aventura, FL 33180. The office serves patients coming from Aventura, Miami, and the surrounding area. Visits are by appointment.",
  },
  {
    q: "What if I am in crisis?",
    a: "This practice is not an emergency service. Call or text 988, or call 911, if you or someone else is in immediate danger.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Rewired Therapy",
  url: site.canonical,
  telephone: site.phoneTel,
  image: "https://ahappierway.com/kelsey-vivatson.jpg",
  medicalSpecialty: "Psychiatric",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: site.region,
    postalCode: site.postal,
    addressCountry: "US",
  },
  areaServed: ["Aventura", "Miami", "North Miami", "South Florida"],
  employee: {
    "@type": "Person",
    name: "Kelsey Vivatson",
    jobTitle: "Clinical Director, Psychiatric Mental Health Nurse Practitioner",
    hasCredential: ["PMHNP-BC", "APRN"],
    alumniOf: ["Walden University", "University of Mary"],
  },
};

export default function HomePage() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-[#ececec]">
        <div className="mx-auto grid max-w-page items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-deep">
              Welcome to Rewired Therapy
            </p>
            <h1 className="mt-3 max-w-xl font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl">
              A happier way to psychiatric care starts here.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-mute">
              Kelsey Vivatson, PMHNP-BC, APRN, is clinical director of Rewired Therapy in
              Aventura. She offers assessment, medication management, and psychotherapy for
              ADHD, autism, and mood concerns across the lifespan.
            </p>
            <p className="mt-5 max-w-xl text-sm text-ink">
              Accepted insurance: Cigna, Aetna, UnitedHealthcare, and select BCBS. Coverage
              depends on the plan. Call to confirm before a visit.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-sm bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-gold-deep"
              >
                Book your free consultation
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className="rounded-sm border border-ink/15 px-5 py-3 text-sm font-semibold text-ink hover:border-gold"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
          <figure className="overflow-hidden bg-white">
            <img
              src="/kelsey-vivatson.jpg"
              alt="Kelsey Vivatson, PMHNP-BC, APRN, clinical director of Rewired Therapy, in a white coat"
              width={800}
              height={1000}
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <figcaption className="px-4 py-3 text-sm text-mute">
              Kelsey Vivatson, PMHNP-BC, APRN · Aventura
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="treats" className="mx-auto max-w-page px-4 py-16 sm:px-6">
        <p className="text-sm uppercase tracking-[0.16em] text-gold-deep">What she treats</p>
        <h2 className="mt-2 max-w-2xl font-serif text-4xl text-navy">
          Psychiatric care for Aventura and Miami, without a one-size plan
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {treats.map((item) => (
            <article key={item.title} className="rounded-2xl border border-gold/25 bg-white p-6">
              <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-mute">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="care" className="bg-cream-deep">
        <div className="mx-auto max-w-page px-4 py-16 sm:px-6">
          <h2 className="font-serif text-4xl text-navy">How care is put together</h2>
          <p className="mt-3 max-w-2xl text-mute">
            Medication management, psychotherapy, and family collaboration can be used together.
            The mix depends on the person, not a preset program.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {care.map((item) => (
              <article key={item.title}>
                <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-page px-4 py-16 sm:px-6">
        <h2 className="font-serif text-4xl text-navy">How a visit works</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-2">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-navy/10 bg-white p-6">
              <p className="text-sm text-gold-deep">0{index + 1}</p>
              <h3 className="mt-1 font-serif text-2xl text-navy">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-mute">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="about" className="bg-navy text-cream">
        <div className="mx-auto grid max-w-page gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-gold">About</p>
            <h2 className="mt-2 font-serif text-4xl">A short bio</h2>
          </div>
          <div className="space-y-4 leading-relaxed text-cream/85">
            <p>
              {site.provider} is a board-certified psychiatric mental health nurse practitioner
              licensed in Florida and North Dakota. She is Clinical Director of her psychiatric
              practice and also works with Rewired Ketamine in Aventura.
            </p>
            <p>
              Her training is an MSN in Psychiatric Mental Health from Walden University and a BSN
              from the University of Mary. She is ANCC board-certified as a PMHNP-BC.
            </p>
            <p>
              She integrates medication management, psychotherapy, and family collaboration.
              Diagnostic assessment, evidence-based prescribing, and treatment planning are used
              for ADHD, autism, and mood concerns across the lifespan.
            </p>
            <p>
              If ketamine care is the question, that is a separate service. Provider details are
              on{" "}
              <a href={site.ketamineProviders} className="text-gold hover:text-cream">
                Rewired Ketamine’s providers page
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-page px-4 py-16 sm:px-6">
        <h2 className="font-serif text-4xl text-navy">Frequently asked questions</h2>
        <div className="mt-6 divide-y divide-gold/30 border-y border-gold/30">
          {faqs.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="cursor-pointer list-none font-medium text-navy">
                <span className="mr-2 text-gold" aria-hidden="true">
                  +
                </span>
                {item.q}
              </summary>
              <p className="mt-2 max-w-3xl leading-relaxed text-mute">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="location" className="bg-cream-deep">
        <div className="mx-auto grid max-w-page gap-8 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl text-navy">Aventura office, Miami access</h2>
            <p className="mt-3 leading-relaxed text-mute">
              The practice is at {site.street}, {site.city}, {site.region} {site.postal}. It is a
              North Miami-Dade address used by patients from Aventura, Miami, and nearby
              communities. Call or text before you come. Visits are by appointment.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6">
            <p className="font-serif text-2xl text-navy">{site.phoneDisplay}</p>
            <p className="mt-2 text-mute">¡Hablamos Español!</p>
            <a href={site.maps} className="mt-4 inline-block text-gold-deep hover:text-navy">
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-page gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-gold-deep">Free consult</p>
          <h2 className="mt-2 font-serif text-4xl text-navy">Start with a conversation</h2>
          <p className="mt-3 leading-relaxed text-mute">
            No pressure, and no promise of a particular result. Call or text {site.phoneDisplay},
            or send a short note. We will reply about next steps for psychiatric care in Aventura.
          </p>
        </div>
        <ConsultForm />
      </section>
    </main>
  );
}
