const skillGroups = [
  {
    title: "SQL & Database Engineering",
    skills: [
      "PostgreSQL",
      "SQL Server / T-SQL",
      "Oracle PL/SQL",
      "Complex SQL",
      "Stored Procedures",
      "CTEs & Temporary Tables",
      "Query Optimization",
      "Indexing",
      "Transaction Handling",
      "Schema Analysis",
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      "ETL / ELT",
      "Data Pipelines",
      "Data Transformation",
      "Data Migration & Conversion",
      "Data Mapping",
      "Relational Data Modeling",
      "Incremental Processing",
      "Idempotent Workflows",
      "Data Validation",
      "Reconciliation",
    ],
  },
  {
    title: "Python, Automation & Integration",
    skills: [
      "Python",
      "PowerShell",
      "REST APIs",
      "API Authentication",
      "JSON",
      "XML",
      "CSV",
      "Automation",
      "Error Handling",
      "Audit Logging",
    ],
  },
  {
    title: "Analytics & Data Quality",
    skills: [
      "Analytics Engineering",
      "Data Quality Controls",
      "Business Intelligence",
      "Power BI",
      "DAX",
      "Operational Analytics",
      "Financial Analytics",
      "Reporting Logic",
      "Root-Cause Analysis",
      "Production Troubleshooting",
    ],
  },
  {
    title: "Enterprise Systems & Domains",
    skills: [
      "Unanet ERP",
      "Ellucian Banner",
      "Financial Systems",
      "Project Accounting",
      "General Ledger",
      "Accounts Payable",
      "Accounts Receivable",
      "Billing",
      "CRM Data",
      "Enterprise Integrations",
    ],
  },
  {
    title: "Engineering Practices",
    skills: [
      "Git",
      "Version Control",
      "Object-Oriented Programming",
      "Debugging",
      "Performance Tuning",
      "Reusable Tooling",
      "Technical Documentation",
      "Requirements Analysis",
      "Solution Design",
      "Technical Mentoring",
    ],
  },
];

const northstarSkills = [
  "AWS",
  "S3",
  "Glue",
  "Athena",
  "Redshift",
  "PySpark",
  "Kinesis",
  "RDS",
  "DMS",
  "Lambda",
  "Docker",
  "Terraform",
  "dbt",
  "Apache Iceberg",
  "CloudWatch",
  "IAM",
  "GitHub Actions",
];

export default function SkillsPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Skills
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Technical depth built around data, systems, and problem solving.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
              My strongest areas are SQL, data transformation, enterprise data
              systems, migration, integration, validation, and troubleshooting.
              I use Python and automation to extend those capabilities and am
              building deeper cloud-platform experience through Northstar.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Professional Experience
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            Core technical capabilities
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-xl border border-slate-200 bg-white p-7"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {group.title}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Northstar
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                Cloud and platform engineering in active development
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                These technologies are being applied directly while I build the
                Northstar Data Platform. I separate them from my established
                professional experience because the goal is to demonstrate them
                through working infrastructure, code, tests, and architecture
                rather than simply list them.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
              <ul className="flex flex-wrap gap-3">
                {northstarSkills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Beyond the tools
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            The skill I rely on most is tracing a problem through the system.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Much of my work has involved understanding unfamiliar schemas,
            undocumented behavior, complex business rules, failed migrations,
            inconsistent data, and downstream discrepancies. The specific
            technology changes, but the process remains the same: understand the
            system, isolate the cause, verify the data, and build a solution that
            can be explained and safely maintained.
          </p>
        </div>
      </section>
    </main>
  );
}
