"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const orb1 = useRef<HTMLDivElement>(null);
  const orb2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (orb1.current) orb1.current.style.transform = `translateY(${y * 0.15}px)`;
      if (orb2.current) orb2.current.style.transform = `translateY(${-y * 0.08}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="bg-dots" />
      <div ref={orb1} className="hero-orb hero-orb-1" />
      <div ref={orb2} className="hero-orb hero-orb-2" />

      {/* ── LEFT ── */}
      <div className="hero-left">
        <div className="hero-tag">
          <span className="pulse-dot" style={{ width: 6, height: 6, background: "var(--accent)", borderRadius: "50%", display: "inline-block", flexShrink: 0 }} />
          Open to new opportunities
        </div>

        <h1 className="hero-name">
          <span className="hero-name-line">Khushi</span>
          <span className="hero-name-line">Nagargoje</span>
        </h1>

        <p className="hero-subtitle">Data Engineer &amp; AI Engineer</p>

        <p className="hero-desc">
          I enjoy turning <strong>messy data into something actually useful</strong> — and lately, making AI do the heavy lifting. From pipelines to LLMs, I build things that are both technically solid and genuinely practical.
        </p>

        <div className="hero-actions">
          <a href="#projects"    className="btn btn-primary">See My Work ↓</a>
          <a href="/resume.pdf"  className="btn btn-secondary" download>Download Resume</a>
          <a href="#contact"     className="btn btn-ghost">Let&apos;s Talk</a>
        </div>
      </div>

      {/* ── RIGHT ── */}
      <div className="hero-right">
        <div className="hero-photo-wrap">
          <div className="hero-photo-frame">
            <Image
              src="/images/profile.jpg"
              alt="Khushi Nagargoje"
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
            />
            <div className="photo-placeholder">
              
            </div>
          </div>

          <div className="hero-badge">
            <span style={{ fontSize: "1.2rem" }}>🤖</span>
            <div style={{ fontFamily: "var(--font-display)", fontSize: ".68rem", color: "var(--text2)", lineHeight: 1.4 }}>
              <strong style={{ display: "block", color: "var(--text)", fontSize: ".8rem" }}>AI + Data</strong>
              Building what&apos;s next
            </div>
          </div>
        </div>

        <div className="hero-stats">
          {[["2+", "Years in Data"], ["5", "Role Evolution"], ["∞", "Curiosity"]].map(([num, label]) => (
            <div key={label} className="stat-card">
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "var(--accent)", lineHeight: 1 }}>{num}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: ".58rem", color: "var(--text3)", marginTop: ".25rem", letterSpacing: ".05em", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <div className="scroll-line-anim" style={{ width: 1, height: 36, background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
        <span>scroll to explore</span>
      </div>
    </section>
  );
}
