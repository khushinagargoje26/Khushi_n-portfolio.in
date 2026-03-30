"use client";
import { useState } from "react";
import { useReveal } from "./useReveal";

type TagColor = "teal"|"purple"|"warm"|"blue"|"pink";
interface Project {
  id: string; featured?: boolean; icon: string; label?: string;
  title: string; subtitle: string; description: string;
  bullets: string[]; impact: string[];
  tags: { label: string; color?: TagColor }[];
  diagram: React.ReactNode;
  links?: { label: string; href: string }[];
}

/* ── Diagram primitives ── */
function PNode({ label, color }: { label: string; color: TagColor }) {
  const s: Record<TagColor,{b:string;f:string;bg:string}> = {
    teal:  {b:"rgba(79,209,197,.4)", f:"var(--accent)", bg:"rgba(79,209,197,.08)"},
    blue:  {b:"rgba(56,189,248,.4)", f:"var(--accent2)",bg:"rgba(56,189,248,.08)"},
    purple:{b:"rgba(167,139,250,.4)",f:"var(--accent3)",bg:"rgba(167,139,250,.08)"},
    warm:  {b:"rgba(246,173,85,.4)", f:"var(--warm)",   bg:"rgba(246,173,85,.08)"},
    pink:  {b:"rgba(244,114,182,.4)",f:"var(--pink)",   bg:"rgba(244,114,182,.08)"},
  };
  return <span style={{padding:".22rem .5rem",borderRadius:6,fontFamily:"var(--font-mono)",fontSize:".56rem",border:`1px solid ${s[color].b}`,color:s[color].f,background:s[color].bg,whiteSpace:"nowrap"}}>{label}</span>;
}
const Arr = () => <span style={{color:"var(--text3)",fontSize:".65rem",flexShrink:0}}>→</span>;
const DR = ({children}:{children:React.ReactNode}) => <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:".4rem",padding:"1.2rem .8rem"}}>{children}</div>;
const Row = ({children}:{children:React.ReactNode}) => <div style={{display:"flex",alignItems:"center",gap:".28rem",flexWrap:"wrap",justifyContent:"center"}}>{children}</div>;
const Hint = ({t}:{t:string}) => <div style={{marginTop:".5rem",opacity:.4,fontFamily:"var(--font-mono)",fontSize:".58rem",color:"var(--text3)",textAlign:"center"}}>{t}</div>;

const diagrams: Record<string, React.ReactNode> = {
  prevox: <DR><Row><PNode label="Scenario Input" color="warm"/><Arr/><PNode label="AI Engine 🤖" color="purple"/></Row><span style={{color:"var(--text3)",fontSize:".62rem"}}>↓ simulate millions of paths</span><Row><PNode label="Virtual Humans" color="teal"/><Arr/><PNode label="Behavior Models" color="blue"/><Arr/><PNode label="Predictions ✓" color="warm"/></Row><Hint t="Prevox AI — Simulation Engine"/></DR>,
  pos:    <DR><Row><PNode label="POS Retail" color="warm"/><Arr/><PNode label="HEVO" color="teal"/></Row><span style={{color:"var(--text3)",fontSize:".62rem"}}>↓ AWS Glue (Spark)</span><Row><PNode label="RDS MySQL" color="blue"/><Arr/><PNode label="Redshift" color="purple"/><Arr/><PNode label="Analytics ✓" color="teal"/></Row><Hint t="POS Data Pipelines"/></DR>,
  sap:    <DR><Row><PNode label="SAP Systems" color="warm"/><Arr/><PNode label="AWS Glue" color="teal"/></Row><span style={{color:"var(--text3)",fontSize:".62rem"}}>↓ Lambda + Step Functions</span><Row><PNode label="RDS PostgreSQL" color="blue"/><Arr/><PNode label="S3" color="purple"/><Arr/><PNode label="Analytics" color="teal"/></Row><Hint t="SAP → Cloud Migration"/></DR>,
  redshift:<DR><Row><PNode label="Raw Sources" color="warm"/><Arr/><PNode label="S3 Lake" color="blue"/></Row><span style={{color:"var(--text3)",fontSize:".62rem"}}>↓ Glue + Lambda</span><Row><PNode label="Redshift DW" color="purple"/><Arr/><PNode label="CloudWatch" color="teal"/><Arr/><PNode label="Reports ✓" color="warm"/></Row><Hint t="Redshift Warehouse"/></DR>,
  telecom:<DR><Row><PNode label="Telecom DB" color="blue"/><Arr/><PNode label="SQL + DAX" color="teal"/></Row><span style={{color:"var(--text3)",fontSize:".62rem"}}>↓ Power BI Gateway</span><Row><PNode label="KPI Reports" color="purple"/><Arr/><PNode label="Dashboards ✓" color="warm"/></Row><Hint t="T-Mobile — Telecom Insights"/></DR>,
  clinical:<DR><Row><PNode label="Study Protocols" color="blue"/><Arr/><PNode label="eCRF Design" color="teal"/></Row><span style={{color:"var(--text3)",fontSize:".62rem"}}>↓ Python + SQL Validation</span><Row><PNode label="CRF Data" color="purple"/><Arr/><PNode label="RCC Reports ✓" color="warm"/></Row><Hint t="Clinical Data — RCC"/></DR>,
};

const projects: Project[] = [
  { id:"prevox", featured:true, icon:"🚀", label:"Highlight Project", title:"Prevox AI", subtitle:"AI-Powered Simulation Engine",
    description:"Built an AI-powered simulation engine that generates large-scale virtual human scenarios to model and predict future outcomes. A product, not just a project.",
    bullets:["Designed a system to simulate millions of virtual human behaviors and predict outcomes","AI-driven prediction, scenario modeling, and scalable architecture thinking","Integrated data engineering + AI + product thinking into one cohesive system","Demonstrates 0 → working AI product end-to-end"],
    impact:["Showcases next-gen AI systems thinking","Product mindset: built for real users, not demos","Positions as an AI/LLM-ready engineer for future-facing roles"],
    tags:[{label:"AI Engineering",color:"purple"},{label:"Simulation",color:"teal"},{label:"Predictive Modeling",color:"warm"},{label:"Scalable Arch.",color:"blue"},{label:"Product Thinking",color:"pink"}],
    diagram: diagrams.prevox, links:[{label:"↗ Live Demo",href:"#"},{label:"⌥ GitHub",href:"#"}] },

  { id:"pos", icon:"🏪", title:"POS Data Pipelines", subtitle:"Retail Platform — AWS",
    description:"Built and optimized scalable cloud-based pipelines to process high-volume Point of Sale retail data, enabling reliable analytics and insights.",
    bullets:["End-to-end ingestion pipelines on AWS Glue (Spark) for large-scale retail datasets","HEVO batch ingestion from RDS MySQL into Redshift via JDBC connectors","Full validation, transformation, and enrichment logic","Integrated multiple pipelines into a self-healing automated workflow"],
    impact:["Reduced manual intervention through automation","Clean, analytics-ready datasets for reporting & data science","Improved data reliability and pipeline scalability"],
    tags:[{label:"AWS Glue",color:"warm"},{label:"Spark",color:"teal"},{label:"Redshift",color:"blue"},{label:"HEVO",color:"purple"},{label:"ETL",color:"teal"}],
    diagram: diagrams.pos },

  { id:"sap", icon:"☁️", title:"RDS Data Migration", subtitle:"SAP → Cloud — AWS",
    description:"Robust cloud-based ETL system to migrate enterprise data from SAP systems into AWS infrastructure — cleanly, reliably, and at scale.",
    bullets:["Automated ETL pipelines using AWS Glue for transformation and validation","Workflow orchestration with Lambda + Step Functions","Secure storage with RDS (PostgreSQL), downstream S3 export","Cross-functional collaboration on data flow and consistency issues"],
    impact:["Seamless enterprise data migration to cloud","Improved data accuracy, reliability, and workflow automation","Significantly reduced manual operational overhead"],
    tags:[{label:"AWS Glue",color:"warm"},{label:"Step Functions",color:"purple"},{label:"Lambda",color:"teal"},{label:"PostgreSQL",color:"blue"},{label:"SAP",color:"pink"}],
    diagram: diagrams.sap },

  { id:"redshift", icon:"🗄️", title:"Redshift Data Warehousing", subtitle:"Cloud Analytics Architecture",
    description:"Architected scalable AWS data warehousing solutions for high-performance analytics and reporting, with full observability built in from day one.",
    bullets:["Amazon Redshift data warehouse architecture for large-scale querying","ETL pipelines with Glue + S3, automated with Lambda serverless processing","Python (Boto3) for AWS service integration and automation","CloudWatch monitoring & logging for full pipeline transparency"],
    impact:["Fast querying on large datasets","Production-grade scalable data infrastructure","Improved pipeline transparency and monitoring"],
    tags:[{label:"Redshift",color:"blue"},{label:"AWS Glue",color:"warm"},{label:"Lambda",color:"teal"},{label:"Boto3",color:"purple"},{label:"CloudWatch",color:"pink"}],
    diagram: diagrams.redshift },

  { id:"telecom", icon:"📡", title:"Telecom Data Insights", subtitle:"T-Mobile — Business Intelligence",
    description:"Developed BI dashboards to drive decision-making using telecom data — turning numbers into stories that non-technical teams could actually act on.",
    bullets:["Interactive Power BI dashboards with DAX and SQL","KPI-driven reports with filters, slicers, and visual insights","Power BI Gateway with scheduled refresh pipelines","Translated business requirements into data-driven visual narratives"],
    impact:["Data-driven decision making at T-Mobile","Improved reporting efficiency across teams","Actionable insights for process optimization"],
    tags:[{label:"Power BI",color:"warm"},{label:"DAX",color:"purple"},{label:"SQL",color:"teal"},{label:"T-Mobile",color:"blue"},{label:"BI",color:"pink"}],
    diagram: diagrams.telecom },

  { id:"clinical", icon:"🏥", title:"Clinical Data Systems", subtitle:"RCC Migration — Healthcare",
    description:"Clinical data systems for healthcare studies — where data accuracy and compliance aren't optional. Built validation, automation, and integration workflows.",
    bullets:["eCRF design and clinical databases per study protocols","Advanced SQL for validation, reconciliation, and migration","Automated data checks via Python (Pandas, NumPy) + Shell scripting","CRF and non-CRF data integration into unified reporting systems"],
    impact:["Improved data quality in clinical trials","Automated repetitive tasks, reducing errors","Compliant, efficient clinical data management"],
    tags:[{label:"Clinical Data",color:"blue"},{label:"SQL",color:"teal"},{label:"Python",color:"warm"},{label:"eCRF",color:"purple"},{label:"Healthcare",color:"pink"}],
    diagram: diagrams.clinical },
];

function tagColorClass(c?: TagColor) {
  const m: Record<TagColor,string> = { teal:"proj-tag proj-tag-teal", purple:"proj-tag proj-tag-purple", warm:"proj-tag proj-tag-warm", blue:"proj-tag proj-tag-blue", pink:"proj-tag proj-tag-pink" };
  return m[c ?? "teal"];
}

function Card({ project, delay=0 }: { project: Project; delay?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`project-card${project.featured ? " featured" : ""} reveal${delay ? ` delay-${delay}` : ""}`}>
      {/* Visual */}
      <div className="project-visual">
        {project.featured && <div className="proj-featured-label">⭐ {project.label}</div>}
        {project.diagram}
      </div>

      {/* Body */}
      <div className="project-body">
        <div className="project-header">
          <span className="project-icon">{project.icon}</span>
          <div>
            <div className="project-title">{project.title}</div>
            <div className="project-subtitle">{project.subtitle}</div>
          </div>
        </div>

        <div className="proj-tags">
          {project.tags.map(t => <span key={t.label} className={tagColorClass(t.color)}>{t.label}</span>)}
        </div>

        <p className="project-desc">{project.description}</p>

        {open && (
          <div className="project-expand">
            <div className="expand-heading">What I built</div>
            <ul className="expand-list">
              {project.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
            <div className="project-impact">
              <div className="impact-heading">⚡ Impact</div>
              {project.impact.map(i => <div key={i} className="impact-item">• {i}</div>)}
            </div>
          </div>
        )}

        <div className="project-footer">
          <button
            onClick={() => setOpen(p => !p)}
            className="proj-toggle"
            style={{ color: open ? "var(--text3)" : "var(--accent)" }}
          >
            {open ? "↑ Show less" : "↓ View details"}
          </button>
          {project.links?.map(l => (
            <a key={l.label} href={l.href} className="proj-link">{l.label}</a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  useReveal();
  return (
    <section id="projects" style={{ background: "var(--bg2)" }}>
      <div className="section-inner">
        <div className="section-label">03 — Things I&apos;ve Built</div>
        <h2 className="section-title reveal">Real projects. <em>Real impact.</em></h2>
        <p className="reveal delay-1" style={{ color:"var(--text2)", maxWidth:540, lineHeight:1.75, marginBottom:"2rem", fontSize:".93rem" }}>
          From retail pipelines to clinical systems to AI engines. Click <strong style={{color:"var(--text)"}}>View details</strong> on any card to see what went into it.
        </p>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <Card key={p.id} project={p} delay={p.featured ? 0 : (i % 2) + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
