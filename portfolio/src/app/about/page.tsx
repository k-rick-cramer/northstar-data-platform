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

const careerPath = [
  "Enterprise-system user",
  "Business-domain specialist",
  "Data analyst",
  "SQL / PL/SQL developer",
  "Product owner",
  "Data & analytics engineer",
  "Senior technical consultant",
];

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              About Me
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              I came to data engineering by learning how real systems actually
              work.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              My career did not begin in software engineering. I started on the
              business side of enterprise systems, learned how those systems
              supported real people and real processes, and gradually moved
              deeper into the data and technology behind them.
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              That path eventually led through analytics, SQL development,
              product ownership, data engineering, integration, automation, and
              senior technical consulting. It gave me experience on both sides
              of the problem: understanding how organizations operate and
              building technical systems that accurately represent that
              reality.
            </p>
          </div>

          <div className="mx-auto w-full max-w-xs lg:mx-0">
            <img
              src="/about/business-casual-outside.png"
              alt="Rick Cramer outdoors in business casual attire"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-sm ring-1 ring-slate-200"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Career Path
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              From business systems to engineering
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                I spent years working directly with Ellucian Banner before
                moving formally into analytics and development. That experience
                taught me that a database schema alone rarely tells the whole
                story. Business rules, operational workflows, historical
                decisions, and downstream dependencies all matter.
              </p>

              <p>
                As I moved into increasingly technical roles, I worked with SQL,
                reporting, data extraction, relational modeling, integration,
                performance tuning, ETL/ELT, migration, validation, and
                production troubleshooting. The deeper I went into the
                technology, the more useful that earlier business context
                became.
              </p>

              <p>
                At Liberty University, I eventually became product owner of
                Centralist, a PL/SQL- and Python-based marketing data
                application. At Unanet, I worked across complex ERP migrations,
                integrations, analytics, and automation, and became the primary
                architect and engineer for Nessie, an automated analytics and
                data-quality platform.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
              A career built progressively
            </h2>

            <div className="mt-8">
              {careerPath.map((step, index) => (
                <div key={step} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                      {index + 1}
                    </div>

                    {index < careerPath.length - 1 ? (
                      <div className="h-8 w-px bg-slate-200" />
                    ) : null}
                  </div>

                  <p className="pt-1 text-sm font-medium text-slate-700">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-600">
              The progression matters to how I approach engineering today. I
              tend to think about data systems as parts of larger business
              systems rather than isolated technical components.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              How I Think
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              I like understanding systems
            </h2>

            <div className="mt-6 space-y-5 leading-8 text-slate-600">
              <p>
                One of the things that draws me to data engineering is the
                systems-thinking aspect of the work. A pipeline is rarely just a
                pipeline. It sits between applications, databases, business
                processes, infrastructure, people, and decisions.
              </p>

              <p>
                I enjoy understanding how those pieces interact, finding where
                complexity is actually coming from, and designing something
                simpler and more dependable in response.
              </p>

              <p>
                That same interest extends beyond technology. I have a
                longstanding interest in economics, particularly the way
                incentives, constraints, feedback loops, and individual
                decisions combine to produce larger system-level outcomes.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
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
                  reporting instead of treating individual queries in
                  isolation.
                </dd>
              </div>

              <div>
                <dt className="font-semibold text-slate-950">
                  Technical and business translation
                </dt>

                <dd className="mt-2 leading-7 text-slate-600">
                  Years of client-facing work translating business processes,
                  requirements, and legacy-system behavior into durable
                  technical solutions.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
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
              className="rounded-xl border border-slate-200 bg-white p-7"
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
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-center">
          <div className="mx-auto w-full max-w-sm lg:mx-0">
            <img
              src="/about/casual-outdoors.png"
              alt="Rick Cramer outdoors"
              className="aspect-[3/4] w-full rounded-2xl object-cover shadow-sm ring-1 ring-slate-200"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Outside of Work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              There is life outside the terminal
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Most of my time outside work is spent with my family and larger
                community. I also try to stay active, especially through
                running, and I enjoy projects that get me away from a screen,
                whether that means working in the yard, organizing my work
                shed, growing vegetables, or taking care of our chickens.
              </p>

              <p>
                When I have some actual downtime, I am also a longtime Legend of
                Zelda fan.
              </p>
            </div>
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
