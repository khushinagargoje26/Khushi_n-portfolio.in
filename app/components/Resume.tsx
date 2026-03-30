"use client";
import { useReveal } from "./useReveal";

export default function Resume() {
  useReveal();
  return (
    <section id="resume" style={{ background:"var(--bg2)" }}>
      <div className="resume-center">
        <span className="resume-icon float-anim reveal">📄</span>
        <h2 className="reveal">Want the full picture?</h2>
        <p className="reveal delay-1">
          My resume has all the details — past roles, projects, education, and the tools I&apos;ve worked with. One page, because I respect your time.
        </p>
        <div className="resume-actions reveal delay-2">
          <a href="/resume.pdf" download className="btn btn-primary">⬇ Download Resume</a>
          <a href="/resume.pdf" target="_blank" className="btn btn-secondary">👁 View Online</a>
        </div>
      </div>
    </section>
  );
}
