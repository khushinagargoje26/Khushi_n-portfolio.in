"use client";

export default function Footer() {
  return (
    <footer className="footer-root">
      <div>
        <div className="footer-name">Khushi Nagargoje</div>
        <div className="footer-role">Data Engineer · AI Engineer · Builder</div>
      </div>

      <div className="footer-social">
        {[
          { href:"https://linkedin.com/in/khushinagargoje", label:"in",  title:"LinkedIn" },
          { href:"https://github.com/khushinagargoje",      label:"⌥",  title:"GitHub"   },
          { href:"mailto:your@email.com",                   label:"✉",   title:"Email"    },
        ].map(s => (
          <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined}
            title={s.title} className="footer-social-link">{s.label}</a>
        ))}
      </div>

      <div className="footer-copy">
        <span>Designed &amp; built with care ✦</span>
        © 2025 Khushi Nagargoje
      </div>
    </footer>
  );
}
