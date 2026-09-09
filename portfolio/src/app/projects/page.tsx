import Link from "next/link";

const shimStackScreenshots = [
  {
    src: "/shimstack/home.jpeg",
    alt: "ShimStack home screen",
    label: "Home",
    description: "Daily work, attention items, and upcoming activity.",
  },
  {
    src: "/shimstack/customers.jpeg",
    alt: "ShimStack customers screen",
    label: "Customers",
    description: "Customer records and the starting point for client work.",
  },
  {
    src: "/shimstack/jobs.jpeg",
    alt: "ShimStack jobs screen",
    label: "Jobs",
    description: "Active work, project status, and field-service operations.",
  },
  {
    src: "/shimstack/schedule.jpeg",
    alt: "ShimStack schedule screen",
    label: "Schedule",
    description: "Planning visits and managing upcoming workload.",
  },
];

const independentProjects = [
  {
    name: "ShimStack",
    type: "Independent Product",
    status: "In Active Development",
    description:
      "An offline-first field-service application designed for owner-operators and small service businesses. ShimStack connects estimating, jobs, visits, scheduling, materials, purchasing, expenses, payments, and business financial planning in one operational workflow.",
    demonstrates:
      "Product architecture, domain modeling, application development, offline-first design, and the ability to turn complicated real-world workflows into understandable software.",
    highlights: [
      "Designed the product architecture and interconnected field-service workflows from the ground up",
      "Built with React Native, Expo Router, TypeScript, and local SQLite storage",
      "Designed around offline-first, single-device reliability for work in the field",
      "Connected estimates, jobs, visits, work progress, materials, purchasing, and financial tracking so information can flow through the business instead of being repeatedly entered",
      "Designed cash-bucket planning for taxes, overhead, reserves, and profit",
      "Built workflows for scheduling, time tracking, mileage, photos, receipts, inventory, purchasing, and material usage",
      "Designed for eventual commercial distribution through mobile app stores",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Expo Router",
      "SQLite",
      "Domain Modeling",
      "Mobile Architecture",
      "Offline-First Design",
    ],
  },
];

const professionalProjects = [
  {
    name: "Nessie",
    type: "Professional System",
    role: "Primary Architect & Engineer",
    description:
      "An automated analytics, reporting, diagnostic, and data-quality platform built to support ERP consulting engagements across financial, project-performance, operational, compliance, configuration, and data-quality use cases.",
    demonstrates:
      "Production analytics engineering, reusable data products, automation, data quality, technical ownership, and engineering for measurable business impact.",
    highlights: [
      "Architected the platform as a reusable internal data product rather than a collection of one-off reports",
      "Automated recurring analytical, diagnostic, validation, and reconciliation work",
      "Supported investigation of complex ERP data and implementation issues across customer environments",
      "Standardized repeatable analytical logic so findings were more consistent and explainable",
      "Combined SQL, Python, PowerShell, REST APIs, and reusable engineering tooling",
      "Contributed to automation that saved hundreds of consultant hours annually",
    ],
    technologies: [
      "SQL",
      "Python",
      "PowerShell",
      "REST APIs",
      "Data Quality",
      "Analytics Engineering",
      "Automation",
    ],
  },
  {
    name: "Centralist",
    type: "Professional System",
    role: "Product Owner & Developer",
    description:
      "A centralized marketing data application built on Ellucian Banner data to generate, manage, and deliver institutional marketing audiences and reporting datasets.",
    demonstrates:
      "SQL and PL/SQL engineering, product ownership, enterprise-data expertise, production support, and translating business requirements into maintainable data-system behavior.",
    highlights: [
      "Served as both product owner and hands-on developer",
      "Built and maintained primarily with Oracle PL/SQL and Python",
      "Operated on complex Ellucian Banner relational data and institutional business rules",
      "Supported marketing analytics, audience segmentation, and list-generation workflows",
      "Improved reliability, maintainability, data quality, and performance",
      "Required SQL optimization, integration, validation, troubleshooting, and production support",
    ],
    technologies: [
      "Oracle PL/SQL",
      "Python",
      "Ellucian Banner",
      "SQL",
      "ETL",
      "Product Ownership",
    ],
  },
];

const engineeringThemes = [
  {
    title: "Data Platforms",
    project: "Northstar",
    description:
      "Cloud architecture, ingestion, transformation, orchestration, security, infrastructure, and operational data engineering.",
  },
  {
    title: "Product Engineering",
    project: "ShimStack",
    description:
      "Application architecture, domain modeling, workflow design, offline reliability, and full product development.",
  },
  {
    title: "Analytics & Automation",
    project: "Nessie",
    description:
      "Reusable analytics, diagnostics, data quality, automation, and measurable improvements to consulting workflows.",
  },
  {
    title: "Enterprise Data Systems",
    project: "Centralist",
    description:
      "SQL development, Oracle PL/SQL, enterprise data, production support, and business-to-technical translation.",
  },
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span
        aria-hidden="true"
        className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"
      />
      <span>{children}</span>
    </li>
  );
}

export default function ProjectsPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Projects
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Different systems, built around the same engineering principles.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              My engineering work spans cloud data platforms, enterprise data
              systems, analytics automation, and independent software products.
              Together, these projects show different parts of the same
              approach: understand the domain, model the problem carefully,
              automate what should be repeatable, and build systems that remain
              understandable when the real world gets complicated.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {engineeringThemes.map((theme) => (
            <article
              key={theme.project}
              className="rounded-xl border border-slate-200 bg-white p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                {theme.title}
              </p>

              <h2 className="mt-3 text-lg font-semibold text-slate-950">
                {theme.project}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {theme.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="overflow-hidden rounded-2xl bg-slate-950 text-white">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-200">
                  Flagship Data Engineering Project
                </span>

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-200">
                  In Active Development
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                Northstar Data Platform
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                A production-style AWS data engineering platform built around a
                synthetic outdoor-retail company. Northstar demonstrates the
                lifecycle of a modern data platform rather than isolated
                tutorials or disconnected service demos.
              </p>

              <div className="mt-7 rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  What this demonstrates
                </p>

                <p className="mt-3 leading-7 text-slate-200">
                  End-to-end data-platform architecture, AWS engineering,
                  infrastructure as code, pipeline design, data quality,
                  observability, security, and the ability to explain and
                  defend technical decisions.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/northstar"
                  className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Explore Northstar
                </Link>

                <a
                  href="https://github.com/k-rick-cramer/northstar-data-platform"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View GitHub Repository
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">
                Platform Scope
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
                <li>Batch, API, database CDC, and streaming ingestion</li>
                <li>S3 raw, quarantine, and curated data layers</li>
                <li>Glue, PySpark, Athena, Redshift, and dbt</li>
                <li>Apache Iceberg lakehouse implementation</li>
                <li>Orchestration, data quality, and observability</li>
                <li>Terraform, Docker, CI/CD, IAM, and security</li>
                <li>
                  Public portfolio evidence and controlled live-demo access
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Independent Software
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Product engineering beyond the data platform
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Independent product work introduces a different engineering
              constraint: instead of solving only the technical problem, I also
              have to decide what the product should do, how users should
              understand it, how the domain should be modeled, and which
              complexity should never reach the user.
            </p>
          </div>

          <div className="mt-10">
            {independentProjects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:p-10"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    {project.type}
                  </span>

                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-medium text-slate-700">
                    {project.status}
                  </span>
                </div>

                <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <h3 className="text-3xl font-semibold tracking-tight text-slate-950">
                      {project.name}
                    </h3>

                    <p className="mt-5 text-lg leading-8 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-7 rounded-xl border border-slate-200 bg-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                        What this demonstrates
                      </p>

                      <p className="mt-3 leading-7 text-slate-700">
                        {project.demonstrates}
                      </p>
                    </div>

                    <ul className="mt-7 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Engineering Highlights
                    </p>

                    <ul className="mt-5 space-y-3 leading-7 text-slate-700">
                      {project.highlights.map((highlight) => (
                        <Bullet key={highlight}>{highlight}</Bullet>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 border-t border-slate-200 pt-10">
                  <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                      Product Screens
                    </p>

                    <h4 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                      ShimStack in practice
                    </h4>

                    <p className="mt-4 leading-7 text-slate-600">
                      These screens show several of the core operational areas
                      of the application as they currently exist during active
                      product development.
                    </p>
                  </div>

                  <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                    {shimStackScreenshots.map((screenshot) => (
                      <figure key={screenshot.src}>
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                          <img
                            src={screenshot.src}
                            alt={screenshot.alt}
                            className="h-auto w-full rounded-xl"
                            loading="lazy"
                          />
                        </div>

                        <figcaption className="mt-4">
                          <p className="font-semibold text-slate-950">
                            {screenshot.label}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {screenshot.description}
                          </p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Professional Engineering
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Systems built in production environments
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              These systems were developed as part of my professional work.
              Proprietary source code, customer information, and internal data
              are not published here. The descriptions instead focus on my
              engineering role, technical responsibilities, architecture, and
              the problems each system addressed.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {professionalProjects.map((project) => (
              <article
                key={project.name}
                className="flex flex-col rounded-xl border border-slate-200 bg-slate-50 p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    {project.type}
                  </span>

                  <span className="text-sm font-medium text-slate-600">
                    {project.role}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-slate-950">
                  {project.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                    What this demonstrates
                  </p>

                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {project.demonstrates}
                  </p>
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                  Engineering Highlights
                </p>

                <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                  {project.highlights.map((highlight) => (
                    <Bullet key={highlight}>{highlight}</Bullet>
                  ))}
                </ul>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              The Common Thread
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              The technology changes. The engineering approach does not.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Northstar, ShimStack, Nessie, and Centralist solve very different
              problems, but they reflect the same way I tend to approach
              engineering: understand the domain before designing the system,
              identify where the real complexity lives, and make that
              complexity manageable through clear models and repeatable
              processes.
            </p>

            <p>
              I care about correctness, traceability, maintainability, and
              explainability because most difficult technical problems do not
              stay confined to one query, service, application, or team.
            </p>

            <p>
              That perspective comes from working across both sides of
              enterprise technology: years of understanding business processes
              and users, followed by progressively deeper work with the data,
              software, integrations, and infrastructure behind them.
            </p>

            <div className="pt-3">
              <Link
                href="/about"
                className="text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950"
              >
                Read more about my engineering background
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
