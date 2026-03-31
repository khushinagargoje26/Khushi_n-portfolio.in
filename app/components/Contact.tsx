"use client"; 
import { useState } from "react";
import { useReveal } from "./useReveal";
import emailjs from "emailjs-com"; // ✅ added

export default function Contact() {
  useReveal();

  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false); // optional UX

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_sm7hzfl",   // 🔴 replace
      "template_lv2uops",  // 🔴 replace
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      "86IRjQpi6jLYfU0wv"    // 🔴 replace
    )
    .then(() => {
      setSent(true);
      setLoading(false);
      setForm({ name:"", email:"", message:"" }); // reset form
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <section id="contact" style={{ background:"var(--bg)" }}>
      <div className="section-inner">
        <div className="section-label">06 — Get In Touch</div>

        <div className="contact-grid">
          {/* Left */}
          <div className="reveal">
            <h2 className="contact-headline">
              If you&apos;re building something<br />
              <em>interesting,</em><br />
              I&apos;d love to hear about it.
            </h2>
            <p className="contact-sub">
              Whether it&apos;s a full-time role, a freelance project, a collaboration, or just a conversation about AI — my inbox is open. I try to respond within a day or two.
            </p>
            <p className="contact-hint">Best for: AI / Data Engineering roles, LLM projects, consultations</p>

            <div className="contact-links">
              {[
                { icon:"✉", label:"Email",    value:"nagargojekhushi@gmail.com", href:"mailto:nagargojekhushi@gmail.com" },
                { icon:"in",label:"LinkedIn", value:"linkedin.com/in/khushinagargoje", href:"https://linkedin.com/in/khushinagargoje" },
                { icon:"⌥", label:"GitHub",   value:"github.com/khushinagargoje",     href:"https://github.com/khushinagargoje" },
              ].map(l => (
                <a key={l.label} href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} className="contact-link">
                  <div className="contact-link-icon">{l.icon}</div>
                  <div>
                    <div className="contact-link-label">{l.label}</div>
                    <div className="contact-link-value">{l.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal delay-1 contact-form-box">
            {sent ? (
              <div className="contact-sent">
                <div className="contact-sent-icon">✉️</div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I&apos;ll get back to you within a day or two.</p>
              </div>
            ) : (
              <>
                <div className="form-title">Send a message</div>
                <div className="form-hint">No spam. Just real conversations.</div>
                <form onSubmit={handleSubmit}>
                  {[
                    { label:"Your Name", key:"name",  type:"text",  ph:"What should I call you?" },
                    { label:"Email",     key:"email", type:"email", ph:"Where can I reach you?"  },
                  ].map(f => (
                    <div key={f.key} className="form-group">
                      <label className="form-label">{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.ph}
                        required
                        value={form[f.key as "name"|"email"]}
                        onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                        className="form-input"
                      />
                    </div>
                  ))}

                  <div className="form-group">
                    <label className="form-label">What&apos;s on your mind?</label>
                    <textarea
                      placeholder="Tell me about what you're building, a role you'd love, or just say hi."
                      value={form.message}
                      required
                      rows={4}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="form-submit" disabled={loading}>
                    {loading ? "Sending..." : "Let Connect →"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}