"use client";
import { useReveal } from "./useReveal";

type Color = "teal"|"purple"|"blue"|"warm";
const items: { icon:string; title:string; desc:string; color:Color }[] = [
  { icon:"🔍", color:"teal",   title:"RAG Systems",
    desc:"Going deep on retrieval-augmented generation — chunking strategies, embedding models, re-ranking, and making retrieval reliable in production." },
  { icon:"🤖", color:"purple", title:"LLM Applications",
    desc:"Building real products on top of LLMs — not just prompt wrappers, but systems with memory, context management, and meaningful output validation." },
  { icon:"🕸️", color:"blue",   title:"AI Agents",
    desc:"Multi-step, tool-using agents that reason, plan, and act. The interesting challenge: knowing when to stop and ask a human." },
  { icon:"⚡", color:"warm",   title:"Scalable AI Pipelines",
    desc:"Designing data infrastructure that feeds AI systems cleanly — from ingestion to vector stores to inference pipelines at production scale." },
];

const colorMap: Record<Color,{border:string;bg:string;glow:string;fg:string}> = {
  teal:  {border:"rgba(79,209,197,.2)", bg:"rgba(79,209,197,.06)", glow:"rgba(79,209,197,.08)", fg:"var(--accent)"},
  purple:{border:"rgba(167,139,250,.2)",bg:"rgba(167,139,250,.06)",glow:"rgba(167,139,250,.08)",fg:"var(--accent3)"},
  blue:  {border:"rgba(56,189,248,.2)", bg:"rgba(56,189,248,.06)", glow:"rgba(56,189,248,.08)", fg:"var(--accent2)"},
  warm:  {border:"rgba(246,173,85,.2)", bg:"rgba(246,173,85,.06)", glow:"rgba(246,173,85,.08)", fg:"var(--warm)"},
};

export default function CurrentlyExploring() {
  useReveal();
  return (
    <section id="exploring" style={{ background:"var(--bg)", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(167,139,250,.06), transparent 70%)", filter:"blur(80px)", top:"50%", left:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none" }} />

      <div className="section-inner" style={{ position:"relative", zIndex:1 }}>
        <div className="section-label">05 — Currently Exploring</div>

        <div className="exploring-grid">
          {/* Left text */}
          <div>
            <h2 className="section-title reveal">
              What I&apos;m learning <em>right now</em>
            </h2>
            <p className="reveal delay-1" style={{ color:"var(--text2)", lineHeight:1.8, fontSize:".95rem", marginBottom:"1.4rem" }}>
              I believe the best engineers are always students of something. Here&apos;s what&apos;s living in my browser tabs, notebooks, and side projects right now.
            </p>
            <div className="reveal delay-2" style={{ display:"inline-flex", alignItems:"center", gap:".5rem", fontFamily:"var(--font-mono)", fontSize:".7rem", color:"var(--accent)", letterSpacing:".06em", background:"rgba(79,209,197,.08)", border:"1px solid rgba(79,209,197,.2)", padding:".45rem .95rem", borderRadius:"100px" }}>
              <span className="pulse-dot" style={{ width:6, height:6, background:"var(--accent)", borderRadius:"50%", display:"inline-block", flexShrink:0 }} />
              Actively building — not just reading
            </div>
          </div>

          {/* Cards */}
          <div className="exploring-cards">
            {items.map((item, i) => {
              const c = colorMap[item.color];
              return (
                <div key={item.title} className={`explore-card reveal delay-${i + 1}`}
                  style={{ background:`linear-gradient(145deg, var(--surface), ${c.bg})`, borderColor:c.border }}
                  onMouseEnter={e => { const el=e.currentTarget as HTMLElement; el.style.boxShadow=`0 16px 36px ${c.glow}`; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow="none"; }}
                >
                  <div className="explore-icon">{item.icon}</div>
                  <h3 className="explore-title" style={{ color:c.fg }}>{item.title}</h3>
                  <p className="explore-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
