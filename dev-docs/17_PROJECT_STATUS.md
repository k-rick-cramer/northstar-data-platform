# 17 - Project Status

**Project:** Northstar Outfitters Data Platform  
**Status:** PHASE 0 IN PROGRESS  
**Current phase:** Phase 0 - Safety and repository foundation  
**Next task:** Enable/verify MFA on `rick-admin`, verify cost guardrails, then establish the Git repository and local project skeleton.

## Fixed decisions

- Professional portfolio site includes About Me, resume, user photo, skills, project links, and contact.
- Northstar is the featured AWS data engineering project.
- Northstar data is synthetic and deterministic.
- Public users see substantial historical evidence without login.
- Live functionality requires approved, time-limited Cognito access.
- Reviewer access never exposes AWS Console credentials.
- Interactive actions are bounded and server-authorized.
- Core architecture stays coherent.
- Redundant/expensive checklist technologies are demonstrated through disposable project labs.
- Every checklist concept is tracked in the traceability matrix.
- Project is built incrementally alongside the AWS course.
- AWS remains the core ecosystem.
- Terraform is the primary IaC tool.
- Docker is a mandatory workload-packaging skill and will be deployed through ECR/ECS/Fargate.
- dbt is a mandatory Redshift analytical-engineering layer.
- Apache Iceberg is a required lakehouse/table-format demonstration.
- Databricks and Snowflake are deferred unless later job targets justify them.
- Expensive infrastructure is not left running solely for portfolio appearance.

## Current deliverables

- Dev-doc package created.
- Source job-readiness checklist preserved.
- Concept traceability matrix generated.

## Next-session startup

1. Read this file.
2. Read Phase 0 in `10_BUILD_PHASES_AND_GATES.md`.
3. Review Phase 0 rows in `09_CONCEPT_TRACEABILITY_MATRIX.md`.
4. Execute only the next smallest build increment.
5. Update this file before ending the session.

## Completion log

| Date | Phase | Work | Evidence |
|---|---|---|---|
| 2026-09-08 | Planning | Master dev-doc package created | dev-docs package |
| 2026-09-08 | Phase 0 | IAM user `rick-admin` created and successfully used for console sign-in | AWS IAM |
| 2026-09-08 | Planning revision | AWS-first model fixed; dbt, Docker, Terraform, and Iceberg made explicit project requirements | dev-docs v2 |
