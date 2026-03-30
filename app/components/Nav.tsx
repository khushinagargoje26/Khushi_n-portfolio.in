"use client";
import { useEffect, useState } from "react";

const links = [
  { href: "#hero",       label: "Home"       },
  { href: "#about",      label: "About"      },
  { href: "#skills",     label: "Skills"     },
  { href: "#projects",   label: "Projects"   },
  { href: "#experience", label: "Experience" },
  { href: "#exploring",  label: "Exploring"  },
  { href: "#contact",    label: "Contact"    },
];

export default function Nav() {
  const [active,   setActive]   = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = document.querySelectorAll("section[id]");
      let cur = "";
      sections.forEach(s => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 140) cur = s.id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
        {/* Logo */}
        <a href="#hero" className="nav-logo" onClick={close}>kn.dev</a>

        {/* Desktop links */}
        <ul className="nav-links-desktop">
          {links.slice(1).map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href.slice(1) ? "active" : ""}
              >{l.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="nav-cta">Let&apos;s Connect</a>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${open ? " open" : ""}`}
          onClick={() => setOpen(p => !p)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-mobile-menu${open ? " open" : ""}`} aria-hidden={!open}>
        <ul className="nav-mobile-links">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href.slice(1) ? "active" : ""}
                onClick={close}
              >{l.label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="nav-mobile-cta" onClick={close}>
          Let&apos;s Connect →
        </a>
      </div>
    </>
  );
}
