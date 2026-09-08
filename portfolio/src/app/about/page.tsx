import Link from "next/link";

const principles = [
  {
    title: "Understand the business first",
    description:
      "Reliable data engineering starts with understanding what the data represents, how the source system behaves, and what downstream users actually need.",
  },
  {
    title: "Build for messy reality",
    description:
      "Real systems contain incomplete documentation, inconsistent data, edge cases, historical decisions, and competing requirements. I design with those conditions in mind.",
  },
  {
    title: "Make systems explainable",
    description:
      "Good engineering should be understandable by the people who operate, maintain, troubleshoot, and depend on it. Clear logic and documentation are part of the solution.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              About Me
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              I came to data engineering by learning how real systems actually work.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              My career has progressed from enterprise-system user and domain
              specialist to data analyst, SQL developer, product owner,
              data and analytics engineer, and senior technical consultant.
              That path gave me experience on both sides of the problem:
              understanding how organizations operate and building the technical
              systems that support them.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            From business systems to engineering
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-600">
            <p>
              I spent years working directly with Ellucian Banner before moving
              formally into analytics and development. That experience taught me
              that a database schema alone rarely tells the whole story. Business
              rules, operational workflows, historical decisions, and downstream
              dependencies all matter.
            </p>

            <p>
              I later moved through increasingly technical roles involving SQL,
              reporting, data extraction, relational modeling, integration,
              performance tuning, ETL/ELT, migration, validation, and production
              troubleshooting.
            </p>

            <p>
              At Liberty University, I eventually became product owner of
              Centralist, a PL/SQL- and Python-based marketing data application.
              At Unanet, I worked across complex ERP migrations and integrations
              and served as the primary architect and engineer for Nessie, an
              automated analytics and data-quality platform.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            What I bring to engineering
          </h2>

          <dl className="mt-8 space-y-7">
            <div>
              <dt className="font-semibold text-slate-950">
                Deep SQL experience
              </dt>
              <dd className="mt-2 leading-7 text-slate-600">
                PostgreSQL, SQL Server/T-SQL, and Oracle PL/SQL across
                transformation, migration, analytics, troubleshooting, and
                performance work.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-slate-950">
                Systems thinking
              </dt>
              <dd className="mt-2 leading-7 text-slate-600">
                Experience tracing data through source applications,
                transformations, integrations, business rules, and downstream
                reporting rather than treating individual queries in isolation.
              </dd>
            </div>

            <div>
              <dt className="font-semibold text-slate-950">
                Technical and business translation
              </dt>
              <dd className="mt-2 leading-7 text-slate-600">
                Years of client-facing work translating business processes,
                requirements, and legacy-system behavior into durable technical
                solutions.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              How I Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Engineering principles shaped by production work
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="font-semibold text-slate-950">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col justify-between gap-8 rounded-xl bg-slate-950 p-8 text-white sm:p-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              See the engineering work
            </h2>
            <p className="mt-3 leading-7 text-slate-300">
              Northstar is where I am applying these principles to a
              production-style AWS data platform from the ground up.
            </p>
          </div>

          <Link
            href="/northstar"
            className="shrink-0 rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Explore Northstar
          </Link>
        </div>
      </section>
    </main>
  );
}
