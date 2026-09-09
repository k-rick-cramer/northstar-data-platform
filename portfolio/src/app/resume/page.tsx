import Link from "next/link";

type ExperienceSection = {
  title?: string;
  bullets: string[];
};

type ExperienceJob = {
  role: string;
  focus?: string;
  company: string;
  dates: string;
  location: string;
  sections: ExperienceSection[];
};

type EarlierExperience = {
  role: string;
  company: string;
  focus?: string;
  dates: string;
  description?: string;
};

type EngineeringProject = {
  name: string;
  type: string;
  description: string;
  href?: string;
};

const careerHighlights = [
  {
    value: "8+",
    label: "Years of progressive data, analytics, and engineering experience",
  },
  {
    value: "10+",
    label: "Years working with Ellucian Banner and enterprise data systems",
  },
  {
    value: "3",
    label: "Major SQL platforms: PostgreSQL, SQL Server, and Oracle",
  },
  {
    value: "100s",
    label: "Consultant hours saved annually through engineering automation",
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
  "DAX",
  "JSON / XML / CSV",
  "Git",
  "AWS",
];

const experience: ExperienceJob[] = [
  {
    role: "Senior Technical Consultant",
    focus: "Data Platform & Analytics Engineering",
    company: "Unanet",
    dates: "April 2023 - August 2026",
    location: "Remote",
    sections: [
      {
        title: "Data Engineering & Migration",
        bullets: [
          "Designed and maintained ETL pipelines and transformation processes supporting ERP migrations, data conversions, integrations, customizations, and reporting solutions across multiple client environments.",
          "Developed complex SQL transformation and migration logic across PostgreSQL and SQL Server to normalize, map, validate, reconcile, and curate legacy data for target ERP environments.",
          "Reverse-engineered undocumented legacy schemas, relationships, application behavior, and business rules to determine reliable target-system mappings and transformation strategies.",
          "Designed idempotent conversion and remediation processes that could be safely rerun while preserving data integrity and avoiding duplicate or unintended changes.",
          "Developed reusable migration and validation patterns to improve consistency and reduce implementation effort across customer engagements.",
        ],
      },
      {
        title: "SQL, Analytics & Data Quality",
        bullets: [
          "Designed scalable relational data models and analytics-ready datasets supporting financial reporting, project performance, compliance, operations, and business analysis.",
          "Built and optimized large-scale SQL transformation and analytical logic, including solutions exceeding 7,500 lines of SQL.",
          "Implemented validation, reconciliation, and data-integrity controls to identify mapping errors, transformation discrepancies, and production data issues.",
          "Performed query optimization, indexing analysis, schema investigation, metadata analysis, and production database troubleshooting.",
          "Developed reusable analytical logic and standardized data structures to reduce duplicated business logic across reporting and consulting workflows.",
        ],
      },
      {
        title: "Integration & Automation",
        bullets: [
          "Developed Python-based REST API integrations incorporating authentication, dynamic payload generation, JSON processing, response validation, error handling, and auditable logging.",
          "Built internal tooling and automation using SQL, Python, PowerShell, REST APIs, and platform-specific technologies.",
          "Processed and transformed JSON, XML, CSV, financial, purchasing, project, employee, vendor, billing, and operational data across enterprise systems.",
          "Created reusable diagnostic and automation workflows designed for repeatability and maintainability rather than one-time manual fixes.",
        ],
      },
      {
        title: "Nessie Platform & Technical Leadership",
        bullets: [
          "Served as primary architect and engineer for Nessie, an internal automated analytics, reporting, diagnostic, and data-quality platform.",
          "Designed Nessie as a reusable internal data product for recurring financial, project-performance, operational, compliance, configuration, and data-quality analysis.",
          "Built automation and reusable analytical tooling that saved hundreds of consultant hours annually.",
          "Acted as a technical escalation point for complex migration, integration, customization, reporting, data, and analytics issues.",
          "Partnered directly with clients, consultants, developers, and business stakeholders to translate complex requirements and legacy-system behavior into maintainable technical solutions.",
        ],
      },
    ],
  },
  {
    role: "Business Data Analyst III",
    company: "Liberty University",
    dates: "December 2021 - March 2023",
    location: "Remote",
    sections: [
      {
        title: "Centralist & Data Engineering",
        bullets: [
          "Served as product owner and process owner for Centralist, Liberty University's centralized marketing list-generation application built primarily with Oracle PL/SQL and Python on Ellucian Banner data.",
          "Developed, optimized, debugged, and maintained complex SQL and PL/SQL supporting marketing audience segmentation and enterprise data processing.",
          "Analyzed Centralist's architecture and business logic to identify reliability, maintainability, performance, and data-quality improvements.",
          "Designed data-processing and integration solutions connecting Banner with other institutional systems and reporting processes.",
        ],
      },
      {
        title: "Analytics & Technical Leadership",
        bullets: [
          "Designed reusable analytical and reporting logic supporting marketing analytics, business intelligence, audience segmentation, and institutional reporting.",
          "Worked extensively with Oracle, Ellucian Banner, Python, Power BI, and DAX.",
          "Served as a technical liaison between business stakeholders, analysts, developers, and other technical teams.",
          "Contributed to shared development practices, technical documentation, reusable libraries, and mentorship of junior analysts and developers.",
        ],
      },
    ],
  },
  {
    role: "Business Data Analyst II",
    company: "Liberty University",
    dates: "November 2019 - November 2021",
    location: "Lynchburg, Virginia",
    sections: [
      {
        bullets: [
          "Developed SQL-based reporting, extraction, and analytical solutions using Ellucian Banner and other enterprise data sources.",
          "Designed analytics-ready datasets and reusable reporting logic supporting operational and leadership decision-making.",
          "Standardized business metrics and shared logic to improve consistency across departmental reporting.",
          "Performed query optimization, data validation, reconciliation, discrepancy analysis, and performance troubleshooting.",
          "Worked with enterprise data integration and virtualization technologies including DataVirtuality and Teiid.",
        ],
      },
    ],
  },
  {
    role: "Business Data Analyst I",
    company: "Liberty University",
    dates: "June 2018 - October 2019",
    location: "Lynchburg, Virginia",
    sections: [
      {
        bullets: [
          "Developed SQL-based reporting and data-extraction solutions using Ellucian Banner and related enterprise systems.",
          "Supported business intelligence, data analysis, and institutional reporting initiatives.",
          "Performed data validation, reconciliation, troubleshooting, and technical documentation in an Oracle-based enterprise environment.",
          "Built the technical foundation in SQL, relational databases, enterprise data, and analytics that led to progressively more advanced engineering responsibilities.",
        ],
      },
    ],
  },
  {
    role: "Senior Admissions Counselor",
    company: "Liberty University",
    dates: "December 2015 - May 2018",
    location: "Lynchburg, Virginia",
    sections: [
      {
        bullets: [
          "Worked extensively with Ellucian Banner across admissions, enrollment, financial-aid, and student-related business processes.",
          "Used advanced Excel techniques to clean, aggregate, analyze, and prepare enrollment and performance data for leadership reporting.",
          "Partnered with marketing analytics to analyze web traffic, conversion, and enrollment data.",
          "Served as an informal data and systems resource for coworkers while developing the enterprise-system expertise that later supported a transition into technical data roles.",
        ],
      },
    ],
  },
  {
    role: "Admissions Counselor",
    company: "Liberty University",
    dates: "September 2013 - November 2015",
    location: "Lynchburg, Virginia",
    sections: [
      {
        bullets: [
          "Used Ellucian Banner extensively to support prospective students through admissions and enrollment processes.",
          "Developed foundational expertise in institutional data, enterprise workflows, data validation, and process improvement.",
          "Maintained accurate student and enrollment information across enterprise systems and helped identify data discrepancies.",
          "Contributed to university website maintenance using HTML, CSS, and content-management tools.",
        ],
      },
    ],
  },
];

const earlierExperience: EarlierExperience[] = [
  {
    role: "Customer Service Representative",
    company: "Genworth Financial",
    focus: "Life Insurance",
    dates: "2012",
    description:
      "Supported customers with life-insurance-related questions and service needs in a financial-services environment.",
  },
  {
    role: "Server",
    company: "Red Lobster",
    dates: "2011",
  },
  {
    role: "Camp Counselor",
    company: "Camp Merriwood",
    dates: "Summers 2009 & 2010",
  },
  {
    role: "Food Service Worker",
    company: "Reber-Thomas Dining Hall",
    dates: "2007 - 2009",
  },
];

const engineeringWork: EngineeringProject[] = [
  {
    name: "Northstar Data Platform",
    type: "Independent Engineering",
    description:
      "A production-style AWS data engineering platform demonstrating batch, database, API, and streaming ingestion; transformation; data quality; orchestration; observability; security; infrastructure as code; and modern data-platform architecture.",
    href: "/northstar",
  },
  {
    name: "ShimStack",
    type: "Independent Product Development",
    description:
      "An offline-first field-service application built with React Native, Expo Router, TypeScript, and SQLite, with interconnected workflows for customers, jobs, visits, scheduling, purchasing, materials, expenses, and financial operations.",
    href: "/projects",
  },
  {
    name: "Nessie",
    type: "Professional Engineering",
    description:
      "An internal automated analytics, reporting, diagnostic, and data-quality platform designed to turn complex ERP analysis into repeatable, scalable consulting workflows.",
  },
  {
    name: "Centralist",
    type: "Professional Engineering",
    description:
      "A centralized marketing data application built primarily with Oracle PL/SQL and Python on Ellucian Banner data, supporting audience segmentation and institutional marketing workflows.",
  },
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
                Senior Technical Consultant, Data Engineer, and Analytics
                Engineer with 10+ years of experience working with enterprise
                systems and 8+ years of progressive experience spanning data
                engineering, analytics engineering, ERP development, system
                integration, data migration, business intelligence, and
                enterprise application support.
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                My career progressed from front-line enterprise-system use and
                business-domain expertise into SQL development, analytics,
                product ownership, data engineering, integration, automation,
                and senior technical consulting.
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

      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Career Highlights
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {careerHighlights.map((highlight) => (
              <div key={highlight.label}>
                <p className="text-3xl font-semibold tracking-tight text-slate-950">
                  {highlight.value}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Downloadable Resumes
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
              Tailored for the role
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              This page contains my comprehensive professional history. I also
              maintain focused PDF resumes that emphasize the experience most
              relevant to different types of roles.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-6">
              <p className="font-semibold text-slate-950">
                Data Engineering
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Senior Data Engineer, Data Engineer, and cloud data-platform
                roles.
              </p>

              <a
                href="/resumes/Rick_Cramer_Data_Engineer.pdf"
                download
                className="mt-4 inline-block text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950"
              >
                Download PDF
              </a>
            </div>

            <div className="rounded-xl border border-slate-200 p-6">
              <p className="font-semibold text-slate-950">
                Analytics Engineering
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Analytics Engineer and data-focused business intelligence
                roles.
              </p>

              <a
                href="/resumes/Rick_Cramer_Analytics_Engineer.pdf"
                download
                className="mt-4 inline-block text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950"
              >
                Download PDF
              </a>
            </div>

            <div className="rounded-xl border border-slate-200 p-6">
              <p className="font-semibold text-slate-950">
                Data Integration &amp; Consulting
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Integration, migration, ERP data, and technical consulting
                roles.
              </p>

              <a
                href="/resumes/Rick_Cramer_Data_Integration_Consulting.pdf"
                download
                className="mt-4 inline-block text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
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
              Professional Experience
            </p>

            <div className="mt-8 space-y-14">
              {experience.map((job) => (
                <article
                  key={`${job.company}-${job.role}`}
                  className="border-b border-slate-200 pb-14 last:border-0 last:pb-0"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-950">
                        {job.role}
                      </h2>

                      {job.focus ? (
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

                  <div className="mt-7 space-y-8">
                    {job.sections.map((section, sectionIndex) => (
                      <div key={section.title ?? sectionIndex}>
                        {section.title ? (
                          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-700">
                            {section.title}
                          </h3>
                        ) : null}

                        <ul
                          className={`space-y-3 leading-7 text-slate-600 ${
                            section.title ? "mt-4" : ""
                          }`}
                        >
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3">
                              <span
                                aria-hidden="true"
                                className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"
                              />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Selected Engineering Work
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Platforms and products
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {engineeringWork.map((project) => (
              <article
                key={project.name}
                className="rounded-xl border border-slate-200 p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                  {project.type}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-slate-950">
                  {project.name}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>

                {project.href ? (
                  <Link
                    href={project.href}
                    className="mt-5 inline-block text-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950"
                  >
                    Explore project
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Earlier Experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Before my technical career
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-600">
              Earlier customer-service and service-industry roles helped build
              the communication, problem-solving, and customer-facing skills
              that later became important in technical consulting.
            </p>
          </div>

          <div className="space-y-8">
            {earlierExperience.map((job) => (
              <article
                key={`${job.company}-${job.role}`}
                className="border-b border-slate-200 pb-8 last:border-0 last:pb-0"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-950">
                      {job.role}
                    </h3>

                    <p className="mt-1 text-slate-700">
                      {job.company}
                      {job.focus ? ` - ${job.focus}` : ""}
                    </p>
                  </div>

                  <p className="text-sm text-slate-500">
                    {job.dates}
                  </p>
                </div>

                {job.description ? (
                  <p className="mt-3 leading-7 text-slate-600">
                    {job.description}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
