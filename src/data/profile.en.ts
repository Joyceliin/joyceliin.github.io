/**
 * English version of src/data/profile.ts. Same shape; keep both in sync.
 */

export { yearsSince } from "./profile";

export const profile = {
  name: "Joyce Nogueira",
  role: "Senior Data Architect and Data Engineer",
  headline: "I build the foundation that trust in data rests on",
  summary:
    "I started in BI and moved down into data engineering and architecture to make sure information arrives whole, end to end, and that what I deliver holds up.",
  location: "Brasília, Brazil · Remote",
  email: "joycelnog@gmail.com",
  github: "https://github.com/joycelnog",
  careerStart: "2019-01-01",
};

export const home = {
  paragraphs: [
    "I work in data architecture and engineering: structure, standardization and governance, so that information arrives whole from one end to the other and decisions, deliveries and results grow along with the business.",
  ],
};

export const stackPrimary = ["Python", "SQL", "Airflow", "Delta Lake", "Spark", "Kafka", "Trino", "dbt", "Docker"];

export const skillGroups = [
  { label: "Languages and frameworks", items: ["Python", "SQL", "Shell", "Django"] },
  {
    label: "Orchestration and processing",
    items: ["Apache Airflow", "Apache Spark", "PySpark", "dbt", "Data Factory", "Celery", "Pentaho", "SSIS"],
  },
  {
    label: "Lakehouse and query",
    items: ["Delta Lake", "Microsoft Fabric", "MinIO (S3)", "Trino", "Hive Metastore", "DuckDB"],
  },
  { label: "Streaming and integration", items: ["Apache Kafka", "Kafka Connect", "Debezium", "REST / SOAP"] },
  { label: "Databases", items: ["PostgreSQL", "Oracle", "SQL Server", "Teradata", "Sybase ASE"] },
  {
    label: "Infrastructure, security and delivery",
    items: ["Docker", "Git", "GitLab CI/CD", "Linux", "Azure", "AWS", "TLS / RBAC", "Nginx"],
  },
  {
    label: "Governance",
    items: ["LGPD (Brazil's GDPR)", "PII hashing", "OpenMetadata", "Lineage"],
  },
  { label: "Analytics", items: ["Power BI", "Tableau", "Streamlit", "QlikView"] },
];

export const about = {
  heading: "Data engineer",
  leadBefore: "I have been working with data for",
  leadAfter:
    "years. Today my focus is platforms: pipelines, integrations and the infrastructure that many projects rely on at the same time.",
  paragraphs: [
    "I started as a data analyst, working with dashboards. To deliver a better dashboard, I kept moving down: I took on the ETL and the data modeling, everything that prepares information before it shows up on screen.",
    "That is the bread and butter of working with data. But it is the surface: the information has already arrived, and the job is to translate it into a dashboard. When you go down, you find the rest. There is more information, at different levels and in different formats, coming from many places, and the complexity grows along with the projects.",
    "That is when engineering starts to matter. And whoever looks after engineering ends up looking after architecture and governance too, because the problems that show up at the surface are solved further down: the load that did not run, the number nobody can trace.",
    "With large teams and several projects at once, the questions change. How do you control it? Map it? Monitor it? Make sure nothing gets lost on the way? Those are the questions I work on today.",
    "In practice, that turned into platform work. Libraries that many pipelines use, routines that look after the lake without manual work, and one standard way to publish.",
    "Much of the data I work with is sensitive. So access control, traceability and data privacy (LGPD, Brazil's GDPR) are part of the design from the start.",
  ],
  howIWorkLead:
    "Five pillars, in the order they come into a project: from understanding the business to following up after delivery. They are also the points where I am most demanding.",
  howIWork: [
    {
      title: "Understand the business.",
      text: "I do not apply the same formula to every project. I have a minimum standard and adjust the rest to each project's complexity, without making it more complicated than it needs to be. What does not change is quality and monitoring.",
    },
    {
      title: "Define quality.",
      text: "Quality starts with defining what the data has to meet, such as valid dates and names that follow the standard. That becomes a quality contract, and it is what shows when an indicator is compromised by a problem at the source, and why.",
    },
    {
      title: "Trace the information.",
      text: "This is governance and lineage. Working in layers, I keep the history of the information: where it came from, which transformations it went through and the standard it has to leave in.",
    },
    {
      title: "Standardize the process.",
      text: "Standardizing means agreeing on how the team works, not only on how code is written. Each person keeps their own style, but everyone follows the same core: data types, naming, how information is pulled and cataloged. It involves management too. The gain is collaboration and continuity: work flows from one person to the next, and whoever joins midway gets up to speed faster.",
    },
    {
      title: "Monitor the delivery.",
      text: "A delivered project keeps being looked after. Controls in the pipeline show where something failed before the information goes missing at the far end, and the team stays on it, providing support.",
    },
  ],
  howIWorkClosing: [
    "This comes from maturing. I used to worry about building something elaborate and, in the end, created more distrust than trust. Today I know that sometimes a project asks for less, and I follow the same pillars all the same.",
    "I keep learning from each experience, asking for feedback and going deeper into other subjects. The goal is to deliver something of value that lasts, not something disposable. The worst outcome, for me, is failing to build trust.",
  ],
  focusNow: [
    "Databricks and hands-on cloud / IaC",
    "Completing Data Governance Foundations",
    "Data platform architecture and governance",
  ],
};

export const education = {
  degree: "Bachelor's degree in Computer Engineering",
  school: "University Center of Brasília (UniCEUB)",
  year: "2021",
  language: "English (B2) · Portuguese (native)",
};

export const certifications = [
  { name: "CSM, Certified Scrum Master", year: "2025" },
  { name: "Big Data Ecosystem, FIAP", year: "2023" },
  { name: "Microsoft Power BI for Data Science, Data Science Academy", year: "2021" },
  { name: "DevOps & Agile Culture, FIAP", year: "2021" },
  { name: "Business Intelligence Nano Course, FIAP", year: "2021" },
];

export const inProgress = [{ name: "Data Governance Foundations", year: "expected 2026" }];
