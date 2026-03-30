"use client";
import { useReveal } from "./useReveal";

type TagVariant = "highlight" | "warm" | "default";
type SkillCard  = { icon: string; cat: string; title: string; featured?: boolean; tags: { label: string; variant?: TagVariant }[] };

const cards: SkillCard[] = [
  {
    icon: "🧠", cat: "Generative AI", title: "The part I'm most excited about", featured: true,
    tags: [
      { label: "LLMs", variant: "highlight" }, { label: "RAG Systems", variant: "highlight" },
      { label: "Prompt Engineering", variant: "highlight" }, { label: "AI Agents", variant: "highlight" },
      { label: "Vector Databases", variant: "highlight" }, { label: "Embeddings", variant: "highlight" },
      { label: "LangChain" }, { label: "LlamaIndex" }, { label: "OpenAI API" }, { label: "Hugging Face" },
    ],
  },
  {
    icon: "⚙️", cat: "Data Engineering", title: "Where reliability meets scale",
    tags: [
      { label: "ETL / ELT Pipelines" }, { label: "Data Warehousing" }, { label: "Real-time Processing" },
      { label: "Data Modeling" }, { label: "Apache Spark" }, { label: "Airflow" }, { label: "dbt" }, { label: "SQL" },
    ],
  },
  {
    icon: "📊", cat: "ML / AI Fundamentals", title: "Building brains, not black boxes",
    tags: [
      { label: "Model Training" }, { label: "Model Evaluation" }, { label: "Feature Engineering" },
      { label: "Fine-tuning" }, { label: "Python" }, { label: "Scikit-learn" }, { label: "TensorFlow" }, { label: "PyTorch" },
    ],
  },
  {
    icon: "☁️", cat: "Cloud & Systems", title: "Scalable by design",
    tags: [
      { label: "AWS" }, { label: "GCP" }, { label: "Azure" }, { label: "REST APIs" },
      { label: "Docker" }, { label: "Kubernetes" }, { label: "System Design" }, { label: "Scalable Arch." },
    ],
  },
  {
    icon: "💡", cat: "Product Thinking", title: "Building for people, not for demos",
    tags: [
      { label: "User-first Mindset", variant: "warm" }, { label: "Problem Decomposition", variant: "warm" },
      { label: "System Design", variant: "warm" }, { label: "Root Cause Analysis", variant: "warm" },
      { label: "Stakeholder Comms", variant: "warm" },
    ],
  },
  {
    icon: "🤝", cat: "The Soft Stuff", title: "Which turns out to be pretty hard",
    tags: [
      { label: "Curiosity" }, { label: "Ownership" }, { label: "Collaboration" },
      { label: "Clear Communication" }, { label: "Fast Learning" }, { label: "Adaptability" },
    ],
  },
];

function tagClass(v?: TagVariant) {
  if (v === "highlight") return "skill-tag highlight";
  if (v === "warm")      return "skill-tag warm";
  return "skill-tag";
}

export default function Skills() {
  useReveal();

  return (
    <section id="skills" style={{ background: "var(--bg)" }}>
      <div className="section-inner">
        <div className="section-label">02 — What I Work With</div>
        <h2 className="section-title reveal">Skills that <em>actually ship things</em></h2>
        <p className="reveal delay-1" style={{ color: "var(--text2)", maxWidth: 520, lineHeight: 1.75, marginBottom: ".5rem", fontSize: ".95rem" }}>
          Not just buzzwords — things I&apos;ve used to build, break, and fix real systems.
        </p>

        <div className="skills-grid">
          {cards.map((card, i) => (
            <div key={card.cat} className={`skill-card reveal delay-${(i % 3) + 1}${card.featured ? " featured" : ""}`}>
              {card.featured && <span className="skill-card-badge">Core Focus</span>}
              <div className="skill-icon">{card.icon}</div>
              <div className="skill-cat">{card.cat}</div>
              <h3>{card.title}</h3>
              <div className="skill-tags">
                {card.tags.map(t => (
                  <span key={t.label} className={tagClass(t.variant)}>{t.label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
