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
              I am interested in data engineering, analytics engineering, and
              data-platform roles where I can work on meaningful systems,
              difficult data problems, and reliable production pipelines.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
              Email
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
              The best way to reach me
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              For professional opportunities, project discussions, or questions
              about my work, email is the most direct way to contact me.
            </p>

            <a
              href="mailto:k.rick.cramer@gmail.com"
              className="mt-7 inline-block rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              k.rick.cramer@gmail.com
            </a>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
              GitHub
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
              See what I am building
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              My GitHub includes the Northstar Data Platform and will contain
              the code, infrastructure, tests, documentation, and engineering
              history behind the project.
            </p>

            <a
              href="https://github.com/k-rick-cramer"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-block rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              github.com/k-rick-cramer
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Current Focus
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Building the Northstar Data Platform
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Northstar is an end-to-end AWS data engineering platform designed
              to demonstrate practical architecture, ingestion, transformation,
              data quality, warehousing, orchestration, observability, security,
              and infrastructure as code.
            </p>

            <a
              href="/northstar"
              className="mt-6 inline-block text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950"
            >
              Explore Northstar
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
