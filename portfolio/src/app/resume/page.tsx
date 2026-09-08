import Link from "next/link";

const experience = [
  {
    role: "Senior Technical Consultant",
    focus: "Data Platform & Analytics Engineering",
    company: "Unanet",
    dates: "April 2023 - August 2026",
    location: "Remote",
    bullets: [
      "Designed ETL pipelines and transformation processes for complex ERP migrations, conversions, integrations, and reporting solutions.",
      "Developed large-scale SQL migration and transformation logic across PostgreSQL and SQL Server with validation, reconciliation, and data-integrity controls.",
      "Reverse-engineered legacy schemas, application behavior, and business rules to design reliable target-system mappings and transformations.",
      "Served as primary architect and engineer for Nessie, an automated analytics and data-quality platform supporting financial, project-performance, operational, and compliance use cases.",
      "Built automation with SQL, Python, PowerShell, and REST APIs that saved hundreds of consultant hours annually.",
      "Acted as a technical escalation point for complex migration, integration, customization, data, and analytics issues.",
    ],
  },
  {
    role: "Business Data Analyst III",
    company: "Liberty University",
    dates: "December 2021 - March 2023",
    location: "Remote",
    bullets: [
      "Served as product owner for Centralist, a centralized marketing data application built with Oracle PL/SQL and Python on Ellucian Banner data.",
      "Developed and optimized complex SQL and PL/SQL solutions across large relational datasets.",
      "Designed data-processing and integration solutions connecting Banner with enterprise systems for reporting, marketing analytics, and business intelligence.",
      "Translated business requirements into scalable technical solutions while serving as a technical liaison and mentor.",
    ],
  },
  {
    role: "Business Data Analyst II",
    company: "Liberty University",
    dates: "November 2019 - November 2021",
    location: "Lynchburg, Virginia",
    bullets: [
      "Developed SQL-based reporting, extraction, and analytical solutions using Ellucian Banner and other enterprise data sources.",
      "Designed reusable datasets and reporting logic for complex institutional data.",
      "Performed query optimization, data validation, troubleshooting, and discrepancy analysis with technical and business stakeholders.",
    ],
  },
  {
    role: "Business Data Analyst I",
    company: "Liberty University",
    dates: "June 2018 - October 2019",
    location: "Lynchburg, Virginia",
    bullets: [
      "Developed SQL reporting and data-extraction solutions using Ellucian Banner and related enterprise systems.",
      "Performed data validation, reconciliation, troubleshooting, and technical documentation in an Oracle-based enterprise environment.",
    ],
  },
  {
    role: "Senior Admissions Counselor",
    company: "Liberty University",
    dates: "December 2015 - May 2018",
    location: "Lynchburg, Virginia",
    bullets: [
      "Worked extensively with Ellucian Banner across admissions, financial-aid, and enrollment workflows.",
      "Analyzed enrollment and performance data while serving as an informal data and systems resource for reporting and process improvement.",
    ],
  },
  {
    role: "Admissions Counselor",
    company: "Liberty University",
    dates: "September 2013 - November 2015",
    location: "Lynchburg, Virginia",
    bullets: [
      "Used Ellucian Banner extensively to support admissions and enrollment operations.",
      "Developed foundational experience with institutional data, validation, enterprise workflows, and process improvement.",
    ],
  },
];

const coreSkills = [
  "SQL",
  "PostgreSQL",
  "SQL Server / T-SQL",
  "Oracle PL/SQL",
  "Python",
  "PowerShell",
  "ETL / ELT",
  "Data Modeling",
  "REST APIs",
  "Data Migration",
  "Data Quality",
  "Query Optimization",
  "ERP Integration",
  "Power BI",
];

export default function ResumePage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Resume
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Kenneth &quot;Rick&quot; Cramer
              </h1>

              <p className="mt-3 text-xl font-medium text-slate-700">
                Data Engineer
              </p>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-600">
                Senior Technical Consultant and Data Engineer with 8+ years of
                progressive experience spanning data engineering, analytics,
                ERP development, system integration, migration, and enterprise
                data systems. Deep SQL experience across PostgreSQL, SQL Server,
                and Oracle, complemented by Python, REST APIs, data modeling,
                ETL/ELT, validation, and automation.
              </p>
            </div>

            <Link
              href="/contact"
              className="rounded-md bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <aside>
            <div className="lg:sticky lg:top-8">
              <h2 className="text-lg font-semibold text-slate-950">
                Core Skills
              </h2>

              <ul className="mt-5 flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <h2 className="text-lg font-semibold text-slate-950">
                  Education
                </h2>

                <div className="mt-4">
                  <p className="font-medium text-slate-900">
                    B.S., Humanities
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Liberty University, 2010
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/skills"
                  className="text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950"
                >
                  View full technical skills
                </Link>
              </div>
            </div>
          </aside>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Experience
            </p>

            <div className="mt-8 space-y-12">
              {experience.map((job) => (
                <article
                  key={`${job.company}-${job.role}`}
                  className="border-b border-slate-200 pb-12 last:border-0 last:pb-0"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-950">
                        {job.role}
                      </h2>

                      {"focus" in job && job.focus ? (
                        <p className="mt-1 text-sm font-medium text-slate-600">
                          {job.focus}
                        </p>
                      ) : null}

                      <p className="mt-2 font-medium text-slate-700">
                        {job.company}
                      </p>
                    </div>

                    <div className="text-sm text-slate-500 sm:text-right">
                      <p>{job.dates}</p>
                      <p className="mt-1">{job.location}</p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3 leading-7 text-slate-600">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span aria-hidden="true">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

