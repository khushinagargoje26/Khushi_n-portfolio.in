# Khushi Nagargoje — Portfolio (Next.js)

A modern, dark-mode personal portfolio built with Next.js 16 (App Router) + TypeScript.  
No UI library dependencies. All styling via CSS custom properties + inline styles.

---

## Quick Start

```bash
# 1. Extract the archive
tar -xzf khushi-portfolio.tar.gz
cd khushi-portfolio

# 2. Install dependencies
npm install

# 3. Run dev server
npm run dev
# → Open http://localhost:3000
```

---

## Project Structure

```
app/
├── page.tsx              ← Root page (assembles all sections)
├── layout.tsx            ← Root layout + metadata
├── globals.css           ← Design tokens, animations, global styles
└── components/
    ├── Cursor.tsx        ← Custom magnetic cursor
    ├── Nav.tsx           ← Fixed nav with scroll-aware active states
    ├── Hero.tsx          ← Hero section with parallax orbs
    ├── About.tsx         ← Story + photo + journey chips
    ├── Skills.tsx        ← 6-card skills grid
    ├── Projects.tsx      ← Featured + 2 project cards with diagrams
    ├── Experience.tsx    ← Animated timeline
    ├── Resume.tsx        ← Download/view CTA
    ├── Contact.tsx       ← Contact form + links
    ├── Footer.tsx        ← Footer with social links
    └── useReveal.ts      ← IntersectionObserver scroll-reveal hook
public/
├── images/               ← Add your photos here
│   ├── profile.jpg       ← Hero section photo
│   └── candid.jpg        ← About section photo
└── resume.pdf            ← Add your resume PDF here
```

---

## Adding Your Photos

**Hero photo** — in `components/Hero.tsx`, find the comment:
```tsx
{/* 📸 Replace this div with: */}
<Image src="/images/profile.jpg" alt="Khushi Nagargoje" fill style={{objectFit:'cover',objectPosition:'top'}} />
```
Replace the `<div class="photo-placeholder">` block with the `<Image>` tag above.  
Add `import Image from "next/image"` at the top of the file.

**About photo** — same pattern in `components/About.tsx`.

**Project visuals** — replace the `<PipelineDiagram />`, `<RAGDiagram />`, `<AgentDiagram />` components with:
```tsx
<Image src="/images/proj-rag.png" alt="RAG System" fill style={{objectFit:'cover'}} />
```

---

## Personalising

| What | Where |
|------|-------|
| Name, title, bio copy | `Hero.tsx`, `About.tsx` |
| Skills list | `Skills.tsx` → `cards` array |
| Projects | `Projects.tsx` → card JSX |
| Work experience | `Experience.tsx` → `timeline` array |
| Contact links & email | `Contact.tsx` |
| SEO metadata | `layout.tsx` → `metadata` object |
| Resume PDF | Drop `resume.pdf` into `/public/` |
| Social links | `Footer.tsx` + `Contact.tsx` |

---

## Contact Form

The form is wired up with local state. To make it actually send emails, connect it to one of:
- **[Resend](https://resend.com)** — recommended, free tier, works great with Next.js
- **[Formspree](https://formspree.io)** — no backend needed
- **[EmailJS](https://emailjs.com)** — client-side, no server needed

In `Contact.tsx`, replace the `handleSubmit` function body with your preferred service call.

---

## Deployment

### Vercel (recommended — one click)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the `.next` folder via Netlify dashboard, or use netlify-cli
```

### GitHub Pages (static export)
Add to `next.config.ts`:
```ts
output: 'export'
```
Then `npm run build` and deploy the `out/` folder.

---

## Design Tokens

All colours and fonts live in `globals.css` as CSS custom properties:

```css
--accent: #4fd1c5;    /* Teal — primary accent */
--accent2: #38bdf8;   /* Sky blue */
--accent3: #a78bfa;   /* Purple */
--warm: #f6ad55;      /* Amber */
--bg: #080c10;        /* Darkest background */
--surface: #141c26;   /* Card backgrounds */
```

Change `--accent` to instantly re-theme the entire site.

---

Built with ♥ for Khushi Nagargoje
