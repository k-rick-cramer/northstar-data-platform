import Link from "next/link";

const goals = [
  {
    title: "Multiple ingestion patterns",
    description:
      "Batch files, PostgreSQL CDC, REST APIs, and streaming events all feed the platform through patterns appropriate to each source.",
  },
  {
    title: "Production-style transformations",
    description:
      "SQL, Python, Glue, and PySpark handle validation, standardization, deduplication, enrichment, quarantine, and curated data output.",
  },
  {
    title: "Lakehouse and warehouse",
    description:
      "S3, Parquet, Apache Iceberg, Athena, Redshift, and dbt demonstrate both lake-oriented and warehouse-oriented analytical architecture.",
  },
  {
    title: "Operational reliability",
    description:
      "Orchestration, idempotency, monitoring, alerting, testing, data quality, failure recovery, and cost controls are treated as core engineering requirements.",
  },
  {
    title: "Security by design",
    description:
      "IAM, encryption, secrets management, controlled APIs, temporary reviewer access, and infrastructure as code are built into the platform rather than added afterward.",
  },
  {
    title: "Inspectable engineering",
    description:
      "Architecture decisions, source code, tests, lineage, pipeline history, data-quality evidence, and engineering tradeoffs will be visible through the portfolio.",
  },
];

const plannedViews = [
  "Business Analytics",
  "Pipeline",
  "Infrastructure",
  "Data Quality",
  "Lineage",
  "Costs",
  "Architecture Decisions",
  "Live Demo Access",
];

const buildStages = [
  "Synthetic company and historical dataset",
  "Dockerized simulator",
  "S3 data lake",
  "Glue Catalog and Athena",
  "API ingestion",
  "PostgreSQL and CDC",
  "Glue and PySpark transformations",
  "Data quality and quarantine",
  "Dimensional modeling",
  "Redshift warehouse",
  "dbt analytical layer",
  "Orchestration",
  "Streaming",
  "Observability",
  "Security hardening",
  "Terraform and CI/CD",
  "Reviewer authentication",
  "Live demo experience",
];

export default function NorthstarPage() {
  return (
    <main>
      <section className="border-b border-slate-200 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-200">
                Flagship Data Engineering Project
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-200">
                In Active Development
              </span>
            </div>

            <h1 className="mt-7 text-5xl font-semibold tracking-tight sm:text-6xl">
              Northstar Data Platform
            </h1>

            <p className="mt-7 max-w-3xl text-xl leading-9 text-slate-300">
              A production-style AWS data engineering platform built to
              demonstrate how I design, build, test, operate, troubleshoot, and
              explain a modern data system from source to analytics.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/k-rick-cramer/northstar-data-platform"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                View GitHub Repository
              </a>

              <Link
                href="/projects"
                className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                All Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              The Problem
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              A portfolio project should prove engineering ability, not just list
              technologies.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Northstar exists to demonstrate an entire data platform rather
              than a collection of isolated AWS exercises. Every major
              technology must have a reason to exist in the architecture and
              must produce evidence that can be inspected.
            </p>

            <p>
              The project covers operational data modeling, batch and streaming
              ingestion, incremental processing, transformation, data quality,
              lakehouse architecture, warehousing, orchestration,
              observability, security, deployment, and cost management.
            </p>

            <p>
              The goal is not simply to show that a service was configured. The
              goal is to show that I can explain why it was chosen, verify that
              it works, diagnose failures, and defend the tradeoffs involved.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Synthetic Business
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Northstar Outfitters
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The platform operates on a deterministic synthetic e-commerce
              company selling outdoor products. The simulator will generate
              customers, products, warehouses, orders, order lines, web events,
              payments, refunds, inventory, shipments, marketing activity, and
              support data.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              The data is intentionally imperfect. Late records, duplicates,
              invalid relationships, malformed values, schema changes,
              stockouts, refunds, shipment delays, seasonal demand, and other
              realistic conditions create problems the pipelines must detect
              and handle.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Architecture
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
            Source systems to governed analytical data
          </h2>
        </div>

        <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200 bg-slate-950 p-6 sm:p-8">
          <pre className="min-w-[720px] text-sm leading-7 text-slate-300">
{` PostgreSQL / RDS        REST APIs         Event Simulator
        |                    |                    |
    DMS / CDC          Lambda / Python          Kinesis
        |                    |                    |
        +--------------------+--------------------+
                             |
                             v
                         S3 RAW
                             |
                       Glue Catalog
                             |
                     Glue / PySpark
                             |
                  +----------+----------+
                  |                     |
             Quarantine            S3 Curated
                                        |
                              Parquet / Iceberg
                                        |
                           +------------+------------+
                           |                         |
                        Athena                   Redshift
                                                     |
                                                    dbt
                                                     |
                                            Analytical Models
                                                     |
                                             Portfolio Data`}
          </pre>
        </div>

        <p className="mt-6 max-w-4xl leading-7 text-slate-600">
          IAM, KMS, Secrets Manager, CloudWatch, messaging, orchestration,
          Terraform, Docker, CI/CD, Cognito, API Gateway, and Lambda surround the
          core data flow to provide security, deployment, observability, and
          controlled access.
        </p>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Engineering Scope
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              What Northstar is designed to prove
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {goals.map((goal) => (
              <article
                key={goal.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-7"
              >
                <h3 className="text-lg font-semibold text-slate-950">
                  {goal.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {goal.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Build Status
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
              Built incrementally, with evidence at every stage
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              The repository and development environment are established, and
              the public portfolio shell is now being built. Infrastructure and
              data-platform components are added only after they can be
              implemented, tested, observed, and explained.
            </p>
          </div>

          <ol className="grid gap-3 sm:grid-cols-2">
            {buildStages.map((stage, index) => (
              <li
                key={stage}
                className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4"
              >
                <span className="font-mono text-sm text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-medium text-slate-700">
                  {stage}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Portfolio Evidence
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                The finished project will be inspectable from multiple angles
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {plannedViews.map((view) => (
                <div
                  key={view}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-4 font-medium text-slate-700"
                >
                  {view}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl bg-slate-950 p-8 text-white sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-tight">
                Follow the implementation
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                The repository contains the infrastructure, application code,
                engineering documentation, tests, and Git history as Northstar
                develops from an empty AWS account into a complete data
                platform.
              </p>
            </div>

            <a
              href="https://github.com/k-rick-cramer/northstar-data-platform"
              target="_blank"
              rel="noreferrer"
              className="rounded-md bg-white px-5 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Open Repository
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
