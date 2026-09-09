import Link from "next/link";

const capabilities = [
  {
    title: "Data Engineering",
    description:
      "ETL/ELT pipelines, data transformation, migration, validation, reconciliation, relational modeling, and production troubleshooting.",
  },
  {
    title: "SQL & Databases",
    description:
      "Deep SQL experience across PostgreSQL, SQL Server/T-SQL, and Oracle PL/SQL, including complex transformations and performance tuning.",
  },
  {
    title: "Python & Integration",
    description:
      "Python and PowerShell automation, REST APIs, JSON/XML/CSV processing, authentication, validation, and reusable engineering tooling.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Data Engineer
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              I build reliable data systems from complex, real-world data.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
              I have 8+ years of progressive experience across data engineering,
              analytics engineering, enterprise systems, data migration, and
              integration. My work centers on SQL, Python, data pipelines, data
              quality, and turning complicated business systems into dependable
              technical solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/northstar"
                className="rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore Northstar
              </Link>

              <Link
                href="/projects"
                className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                View Projects
              </Link>

              <Link
                href="/resume"
                className="px-3 py-3 text-sm font-semibold text-slate-700 transition hover:text-slate-950"
              >
                View Resume
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <img
              src="/rick-cramer.jpg"
              alt="Rick Cramer"
              className="aspect-square w-full rounded-2xl object-cover shadow-sm ring-1 ring-slate-200"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="rounded-xl border border-slate-200 bg-white p-7"
            >
              <h2 className="text-lg font-semibold text-slate-950">
                {capability.title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Featured Project
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Northstar Data Platform
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-600">
              A production-style AWS data engineering platform built around a
              synthetic e-commerce company. Northstar demonstrates batch,
              database, API, and streaming ingestion; data lake and warehouse
              architecture; transformation; data quality; orchestration;
              observability; security; and infrastructure as code.
            </p>

            <Link
              href="/northstar"
              className="mt-6 inline-block text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950"
            >
              See how Northstar is being built
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-3xl font-semibold tracking-tight text-slate-950">
              8+
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Years of progressive data and engineering experience
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold tracking-tight text-slate-950">
              3
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Major SQL database platforms: PostgreSQL, SQL Server, and Oracle
            </p>
          </div>

          <div>
            <p className="text-3xl font-semibold tracking-tight text-slate-950">
              100s
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Of consultant hours saved annually through engineering automation
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
