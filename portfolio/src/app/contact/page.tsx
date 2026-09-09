import Link from "next/link";

const contactDetails = [
  {
    label: "Location",
    value: "Amherst, Virginia",
  },
  {
    label: "Primary Focus",
    value: "Data Engineering",
  },
  {
    label: "Work Preference",
    value: "Remote",
  },
];

export default function ContactPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Interested in working together?
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              I am currently focused on data engineering opportunities where I
              can work on reliable data platforms, pipelines, integration,
              transformation, data quality, and difficult real-world data
              problems.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-slate-600">
              My background also spans analytics engineering, enterprise data
              integration, ERP systems, migration, automation, and
              client-facing technical consulting.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-3">
          {contactDetails.map((detail) => (
            <div
              key={detail.label}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                {detail.label}
              </p>

              <p className="mt-3 font-medium text-slate-950">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                Email
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                The best way to reach me
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                For professional opportunities, project discussions, or
                questions about my work, email is the most direct way to
                contact me.
              </p>

              <a
                href="mailto:k.rick.cramer@gmail.com"
                className="mt-7 inline-block rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                k.rick.cramer@gmail.com
              </a>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                GitHub
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                See what I am building
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                My GitHub contains the Northstar Data Platform, including its
                application code, infrastructure, tests, documentation, and
                engineering history.
              </p>

              <a
                href="https://github.com/k-rick-cramer"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-block rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                github.com/k-rick-cramer
              </a>
            </article>

            <article className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                LinkedIn
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                Professional profile
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Connect with me on LinkedIn for my professional background,
                experience, projects, and current career focus.
              </p>

              <a
                href="https://www.linkedin.com/in/kenneth-%E2%80%9Crick%E2%80%9D-cramer-111b97254/"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-block rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                View LinkedIn
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Current Focus
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Building the Northstar Data Platform
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              Northstar is an end-to-end AWS data engineering platform designed
              to demonstrate practical architecture, ingestion, transformation,
              data quality, warehousing, orchestration, observability, security,
              and infrastructure as code.
            </p>

            <div className="mt-6 flex flex-wrap gap-5">
              <Link
                href="/northstar"
                className="text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950"
              >
                Explore Northstar
              </Link>

              <Link
                href="/resume"
                className="text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950"
              >
                View resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
