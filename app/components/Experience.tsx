"use client";
import { useReveal } from "./useReveal";

const timeline = [
  {
    date: "2025 — Present", type: "Current Role", active: true,
    title: "Data Engineer",
    company: "Building scalable data systems & cloud infrastructure",
    bullets: [
      "Designing and optimizing end-to-end ETL pipelines on AWS (Glue + Spark) for high-volume retail and enterprise datasets",
      "Architecting data warehouse solutions on Amazon Redshift with automated Lambda workflows and CloudWatch observability",
      "Migrating enterprise data from SAP systems into AWS cloud infrastructure using Step Functions and RDS (PostgreSQL)",
      "Building and automating data ingestion workflows using HEVO from AWS RDS (MySQL) into Redshift via JDBC connectors",
    ],
    tech: ["AWS Glue","Spark","Redshift","Lambda","Step Functions","HEVO","Python","Boto3","S3"],
  },
  {
    date: "2024 — 2025", type: "Data Analytics", active: false,
    title: "Data Analyst",
    company: "Turning raw data into decisions that actually matter",
    bullets: [
      "Built interactive Power BI dashboards for T-Mobile telecom data — KPI reports, DAX, slicers, Gateway scheduled refresh",
      "Worked on clinical data systems: designed eCRFs, wrote advanced SQL for validation and reconciliation, automated checks with Python",
      "Translated complex business requirements into clear visual narratives for non-technical stakeholders",
      "Delivered analytics-ready datasets applying validation, transformation, and enrichment logic",
    ],
    tech: ["Power BI","DAX","SQL","Python","Pandas","NumPy","Tableau","Shell Scripting"],
  },
];

export default function Experience() {
  useReveal();
  return (
    <section id="experience" style={{ background: "var(--bg)" }}>
      <div className="section-inner">
        <div className="section-label">04 — Where I&apos;ve Been</div>
        <h2 className="section-title reveal">A career that <em>keeps evolving</em></h2>
        <p className="reveal delay-1" style={{ color:"var(--text2)", maxWidth:500, lineHeight:1.75, marginBottom:".5rem", fontSize:".95rem" }}>
          Started in analytics — learning to ask the right questions. Moved into engineering — building the answers at scale.
        </p>

        <div className="timeline">
          {timeline.map((item, i) => (
            <div key={item.title} className="timeline-item timeline-entry" style={{ transitionDelay: `${i * 0.15}s` }}>
              <div className={`timeline-dot${item.active ? " active" : ""}`} />

              <div className="timeline-meta">
                <span className="timeline-date">{item.date}</span>
                <span className={`timeline-type-badge${item.active ? " active" : ""}`}>{item.type}</span>
              </div>

              <div className="timeline-title">{item.title}</div>
              <div className="timeline-company">{item.company}</div>

              <div className="timeline-body">
                <ul className="timeline-list">
                  {item.bullets.map(b => <li key={b}>{b}</li>)}
                </ul>
                <div className="timeline-tech">
                  {item.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
