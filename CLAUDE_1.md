# Project Briefing — Story-Driven Website

## What This Project Is
A visually rich, story-driven website built in vanilla HTML, CSS, and JavaScript.
The design comes from Figma and must be recreated 1-to-1.
GSAP animations make the site feel like a narrative unfolding as the user scrolls.

---

## Stack
- **HTML:** Semantic HTML5, no frameworks
- **CSS:** Vanilla CSS, no Tailwind, no preprocessors
- **JavaScript:** Vanilla JS, no frameworks
- **Animation:** GSAP 3 + ScrollTrigger (loaded via CDN)
- **Design source:** Figma (accessed via MCP)

---

## File Structure
Maintain this structure exactly. Do not deviate:

```
project/
├── index.html
├── css/
│   ├── reset.css         ← CSS reset, touch nothing else here
│   ├── styles.css        ← all layout and visual styles
│   └── animations.css    ← animation-specific CSS (initial states)
├── js/
│   ├── main.js           ← DOM interactions, general logic
│   └── animations.js     ← all GSAP code lives here only
└── assets/
    ├── images/           ← leave empty, use placeholders in HTML
    ├── icons/            ← leave empty, use placeholders in HTML
    └── fonts/            ← custom fonts go here
```

---

## GSAP Setup
Always load via CDN in index.html, in this exact order before closing </body>:

```html
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script src="js/animations.js"></script>
<script src="js/main.js"></script>
```

Always register ScrollTrigger at the top of animations.js:

```javascript
gsap.registerPlugin(ScrollTrigger);
```

---

## Animation Philosophy
This site tells a story. Every animation must serve the narrative, not just decorate it.

### Core Principles
- The site should feel **cinematic** — like scenes in a film, not a slideshow
- Each section **reveals itself** as the user scrolls into it
- Elements enter with **weight and purpose** — nothing pops in cheaply
- The story **builds** — each section feels connected to the last
- Never animate everything at once — **stagger elements** so they land one by one

### Rules to Follow Strictly
- Text always enters **before** images in the same section
- Stagger delay between child elements: **0.15s**
- Default entrance ease: **power2.out**
- Default exit ease: **power2.in**
- Default duration: **0.9s** for hero, **0.7s** for sections, **0.5s** for small elements
- ScrollTrigger start point: **"top 80%"** unless design demands otherwise
- Never use toggleActions that replay on scroll back — use **"play none none none"**
- Keep all GSAP code in **animations.js only** — never inline in HTML

### Standard Animation Pattern
Follow this pattern for every section:

```javascript
// Section title reveal
gsap.from(".section-title", {
  scrollTrigger: {
    trigger: ".section-title",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 60,
  duration: 0.9,
  ease: "power2.out"
});

// Staggered children
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top 75%",
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 40,
  duration: 0.7,
  ease: "power2.out",
  stagger: 0.15
});
```

### Hero Section Specifically
The hero sets the tone for the entire story. It must feel bold and deliberate:
- Headline enters first: fade up from y:80, duration 1s
- Subheadline follows with 0.3s delay
- CTA button follows with 0.2s delay after subheadline
- Any hero image or visual enters last, slightly slower than text

---

## Design Implementation Rules

### Accuracy
- Recreate the Figma design **exactly** — layout, spacing, colors, typography
- Extract **exact hex values** from Figma, never approximate colors
- Match font sizes, weights, and line heights precisely
- Do not add UI elements not visible in the design
- Do not remove UI elements visible in the design
- If something is unclear, **ask before guessing**

### Asset Placeholders
Never use picsum, unsplash, or any external placeholder image service.
For every missing image or icon, leave a clearly labeled placeholder:

```html
<!-- IMAGE: hero-background.jpg | dimensions: 1440x800px -->
<div class="placeholder-image" style="width: 100%; height: 800px; background: #1a1a1a; display: flex; align-items: center; justify-content: center;">
  <span style="color: #666; font-size: 14px; font-family: monospace;">
    IMAGE NEEDED: hero-background.jpg (1440x800px)
  </span>
</div>
```

For icons:
```html
<!-- ICON: arrow-right.svg -->
<div class="placeholder-icon" style="width: 24px; height: 24px; background: #333; border-radius: 4px;"></div>
```

### CSS Approach
- Use CSS custom properties (variables) for all colors and font sizes
- Define all variables at the top of styles.css under :root
- Use flexbox and grid for layout — no floats
- Mobile-first responsive design
- Meaningful class names that describe purpose, not appearance

```css
:root {
  /* Colors — extracted from Figma */
  --color-primary: ;
  --color-background: ;
  --color-text: ;
  --color-accent: ;

  /* Typography */
  --font-heading: ;
  --font-body: ;
  --text-hero: ;
  --text-h2: ;
  --text-body: ;

  /* Spacing */
  --section-padding: 120px 0;
  --container-width: 1280px;
}
```

---

## How We Work Together

### The Review Process — Follow This Strictly
1. Read this CLAUDE.md fully before doing anything
2. Read the Figma file via MCP
3. List every section visible, top to bottom
4. Wait for me to confirm the section order before writing any code
5. Build **one section at a time only**
6. After completing each section, stop completely and output this:

```
--- SECTION [name] COMPLETE ---

What I built: [brief description]
Animation choices: [what animations and why]
Assets needed: [every placeholder left in this section]
Questions: [anything unclear before moving to next section]

Ready for review. Type "approved" to continue to [next section name].
```

7. Do not proceed until I type "approved"
8. If I give feedback, apply every change and confirm before asking for approval again

### How to Communicate With Me
- I am learning — briefly explain significant decisions as you make them
- If choosing between two approaches, say which you chose and why
- Flag anything that might render differently in browser vs Figma
- Never make large structural changes without asking first

### What "Exactly" Means
A developer looking at the Figma and the browser side by side should see no visible differences:
- Spacing feels identical
- Colors match exactly
- Typography matches
- Proportions match
- If it doesn't look right, we fix it before moving on

---

## Start Sequence
Every session must begin in this exact order:

1. Confirm you have read this CLAUDE.md
2. Access the Figma file via MCP
3. List all sections top to bottom with a one-line description of each
4. Ask me to confirm the order
5. Wait for me to say **"begin"** before writing a single line of code
