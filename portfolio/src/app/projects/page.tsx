import Link from "next/link";

const independentProjects = [
  {
    name: "ShimStack",
    type: "Independent Product",
    status: "In Active Development",
    description:
      "An offline-first field-service application designed for owner-operators and small service businesses. ShimStack connects estimating, jobs, visits, scheduling, materials, purchasing, expenses, payments, and business financial planning in one operational workflow.",
    highlights: [
      "Designed the product architecture and end-to-end field-service workflows",
      "Built with React Native, Expo Router, TypeScript, and local SQLite storage",
      "Designed around offline-first, single-device reliability",
      "Connects estimates, jobs, visits, work progress, materials, purchasing, and financial tracking",
      "Includes cash-bucket planning for taxes, overhead, reserves, and profit",
      "Supports field workflows such as scheduling, time tracking, mileage, photos, receipts, inventory, and purchasing",
      "Designed for eventual commercial distribution through mobile app stores",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Expo Router",
      "SQLite",
      "Mobile Application Architecture",
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
      "An automated analytics, reporting, diagnostic, and data-quality platform built to support ERP consulting engagements across financial, project-performance, operational, and compliance use cases.",
    highlights: [
      "Automated recurring analytics and validation work",
      "Supported investigation of complex ERP data issues",
      "Combined SQL, Python, PowerShell, REST APIs, and reusable tooling",
      "Contributed to automation that saved hundreds of consultant hours annually",
    ],
    technologies: ["SQL", "Python", "PowerShell", "REST APIs", "Data Quality"],
  },
  {
    name: "Centralist",
    type: "Professional System",
    role: "Product Owner & Developer",
    description:
      "A centralized marketing data application built on Ellucian Banner data to generate, manage, and deliver institutional marketing audiences and reporting datasets.",
    highlights: [
      "Built primarily with Oracle PL/SQL and Python",
      "Operated on complex Ellucian Banner relational data",
      "Supported marketing analytics and audience-generation workflows",
      "Required SQL optimization, integration, validation, and production support",
    ],
    technologies: ["Oracle PL/SQL", "Python", "Ellucian Banner", "SQL", "ETL"],
  },
];

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
              Systems built to solve real problems.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              My project work spans data platforms, enterprise systems, and
              independent software products. Northstar provides a completely
              public view into my data-engineering approach, while ShimStack
              demonstrates product architecture and application development
              from initial concept through implementation.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-2xl bg-slate-950 text-white">
          <div className="grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-200">
                  Flagship Data Project
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
                synthetic outdoor-retail company. The project demonstrates the
                complete lifecycle of a modern data platform rather than
                isolated tutorials or disconnected service demos.
              </p>

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
                <li>Public portfolio evidence and controlled live demo access</li>
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
                        <li key={highlight} className="flex gap-3">
                          <span aria-hidden="true">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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
              Professional Work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Selected systems from my professional experience
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              These systems were developed in professional environments, so
              proprietary source code and client data are not published here.
              The descriptions focus on my role, engineering responsibilities,
              and the problems the systems addressed.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {professionalProjects.map((project) => (
              <article
                key={project.name}
                className="rounded-xl border border-slate-200 bg-slate-50 p-8"
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

                <ul className="mt-6 space-y-2 text-sm leading-6 text-slate-700">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span aria-hidden="true">•</span>
                      <span>{highlight}</span>
                    </li>
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
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
            Different systems, same engineering approach
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Whether the problem is a cloud data platform, an ERP migration,
            an analytics system, or a mobile field-service product, my approach
            is consistent: understand the domain, model the workflow, make the
            system reliable, handle edge cases deliberately, and keep the
            architecture understandable.
          </p>
        </div>
      </section>
    </main>
  );
}
