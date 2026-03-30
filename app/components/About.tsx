"use client"; 
import { useReveal } from "./useReveal";

const journey   = ["Data Analyst", "Biz Analyst", "Data Scientist", "Data Engineer", "AI Engineer ✦"];
const interests = ["📚 Reading about systems","🧩 Problem decomposition","🎙️ Talking about AI","🌱 Continuous learner","☕ Fueled by chai","🔭 Future thinker"];

export default function About() {
  useReveal();

  return (
    <section id="about" style={{ background: "var(--bg2)" }}>
      <div className="section-inner">
        <div className="section-label">01 — Who I Am</div>

        <div className="about-grid" style={{ gridTemplateColumns: "1fr" }}>

          {/* Story col */}
          <div className="reveal delay-1 about-story">
            <h2>
              I design and build data systems that power intelligent applications.{" "}
              <em style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, color: "var(--text2)" }}>
                Focused on scalability, reliability, and real-world impact.
              </em>
            </h2>

            <p>
              I started in data analysis, working with structured datasets to improve data quality and generate actionable insights. This expanded into business analysis, where I translated ambiguous requirements into measurable, data-driven outcomes.
            </p>

            <p>
              Moving into data science, I worked on predictive modeling and large datasets. Over time, my focus shifted toward engineering — building systems that ensure data pipelines, transformations, and workflows operate reliably in production environments.
            </p>

            <blockquote className="about-quote">
              &ldquo;My focus is on building systems where data and intelligence can operate reliably at scale.&rdquo;
            </blockquote>

            <p>
              Currently, I work at the intersection of data engineering and generative AI. I design pipelines for LLM-based applications, implement retrieval-augmented generation (RAG) systems for accurate context delivery, and prototype AI systems that integrate with real-world workflows.
            </p>

            <p>
              I approach problems from a systems perspective — optimizing for performance, maintainability, and long-term scalability.
            </p>

            <div className="about-interests-title">Beyond the Terminal</div>
            <div className="interests-row">
              {interests.map(i => <span key={i} className="interest-tag">{i}</span>)}
            </div>

            <div className="about-journey" style={{ marginTop: "2rem" }}>
              {journey.reduce((acc: React.ReactNode[], chip, i, arr) => {
                acc.push(
                  <span key={chip} className={`journey-chip${i === arr.length - 1 ? " active" : ""}`}>{chip}</span>
                );
                if (i < arr.length - 1) acc.push(<span key={`a${i}`} className="journey-arrow">→</span>);
                return acc;
              }, [])}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}