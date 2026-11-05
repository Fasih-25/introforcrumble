# Prompt: build the "Fasih x Crumble" one-page intro site

Paste everything below into Claude (attach your CV PDF and your photo).

---

Build me a single-page personal intro website as ONE self-contained `index.html` (HTML + CSS only, no frameworks, no build step, no JavaScript needed) that I can drop onto Vercel. It is a creative job-application pitch addressed to **Crumble** (crumblepakistan.com), a cookie brand from Islamabad whose tagline is "Spreading Happiness One Cookie at A Time". The page should feel like a warm cookie box: playful, bold, sticker-style, and every scroll moment should be cookie-related. Use my attached CV for all details (never invent facts) and my attached photo to draw a doodle portrait of me.

## Brand and look
- Palette (CSS variables): cream `#FFF4E2` (page), sand `#F7E3C3`, chocolate `#3A1E14` (text and outlines), cookie dough `#F2B84B`, dough-dark `#D98E2E`, red velvet `#B3202E` (accent), milk `#FFFDF8`. Check text contrast.
- Fonts from Google Fonts: **Fraunces** 600/800 (headings, italic for emphasis), **Caveat** 500/700 (handwritten kickers, notes, stickers), **DM Sans** (body).
- Sticker/neo-brutalist style: 3px chocolate borders, hard offset shadows (5px 5px 0 chocolate), pill buttons that lift and tilt on hover and press down on click.
- Responsive down to 390px (grids collapse, nothing overflows horizontally). Respect `prefers-reduced-motion`.

## Sections, top to bottom
1. **Nav**: logo "fasih × crumble" (the × in red velvet) and a dark pill with a pulsing green dot: "Available immediately · Islamabad".
2. **Hero** (soft dough-coloured radial glow top right, ~12 small chocolate "crumbs" continuously falling behind the content with different sizes, speeds and delays):
   - Handwritten red kicker: "Dear Crumble Family,"
   - H1: "Your cookies spread happiness. I build the *software* that delivers it." The word "software" is italic red velvet with a dough-yellow highlighter swipe under it.
   - Short intro paragraph with my name in bold, ~5 years full-stack JavaScript, bakery e-commerce site, food delivery platform, portals for 2,500+ stores.
   - Two buttons: red "Add me to cart" (links to the footer) and milk-white "Peek at the recipe" (links to section 4).
   - Right side: a big rotating cookie "plate" (radial dough gradient, thick chocolate border, hard shadow, 7 chocolate chips, spinning very slowly), with my **doodle portrait** on top (see below) bobbing up and down, three steam wisps rising from the cookie, a spinning circular text badge "FRESH OUT OF THE OVEN • ISLAMABAD •" (SVG textPath) with a red circle "hire me!" in its centre, and a tilted yellow sticky note "hi, I'm Fasih!".
   - On load, hero elements rise in one after another (staggered delays, slight overshoot easing).
3. **Marquee band**: red velvet strip tilted -1.2deg with chocolate borders, scrolling infinitely and pausing on hover, alternating cream and dough text mixing Crumble flavours and my tech: Classic Chocolate Chip, Next.js, S'Mores, Node.js, Red Velvet, MySQL, Oreo Cheesecake Overload, TypeScript, Lotus Lava, AWS, Kunafa Double Chocolate, React, Hazelnut, MedusaJS (duplicate the list for a seamless loop).
4. **"The recipe"** (id `recipe`): left, a giant cookie that **gets bitten as you scroll**: cream circles positioned on the cookie edge scale from 0 to 1 using a scroll-driven animation. Right, a recipe card (milk background, red-and-white striped top edge) titled "Serves 1 growing team" with an ingredients list using dotted leaders: ~5 yrs of JavaScript; 13 enterprise portals; 2,500+ stores per client on one E-Contract platform; ~6,500 active users across production; 1 bakery e-commerce site shipped (Shimla Bakers); 3.86 CGPA with Silver Medal (University of Sindh). Handwritten line under it: "Method: listen first, ship clean, unit-test it, serve warm."
5. **"Why Crumble?"** on a chocolate background: 2x2 dough-bordered cards with big dough numbers 01-04 (hover: tilt and lift): Shimla Bakers bakery site (Next.js, MySQL, AI-assisted workflow); headless commerce with MedusaJS, REST, caching; the E-Contract platform for Unilever, L'Oreal, Reckitt, Engro on AWS; Munchly food delivery (React Native, Firebase, live orders).
6. **Baking timeline**: a vertical rail that **fills red as you scroll**, with a small cookie marker per entry that spins on hover: CEE Solutions (Software Engineer, Jan 2025-2026), REGEX.GLOBAL (Senior Front End Developer, 2022-2024), XauZit (PHP Developer, 2022), University of Sindh (BS IT, 2018-2022). Use the real bullets from my CV.
7. **"The menu: pick your box"** on a dough background with chocolate top/bottom borders: four gift-box cards with red "lids" (The Frontend Box, Backend Box, Data Box, Cloud & Craft Box) containing my skills as small pills, each with a handwritten flavour note ("Warm & crunchy", "Rich & reliable", "Gooey centre", "Ships on time"). Hover: lift and tilt.
8. **"A few cookies I've baked"**: five round cookie cards (Shimla Bakers, Munchly, Edital, Optilingo, Easy SCORM) with a one-line description and stack; hover makes the cookie wiggle.
9. **"Ideas I'd love to bake for Crumble"** on sand: three dashed-border cards (corporate gift-box builder with logo and postcard preview; "Monthly Drop" countdown, waitlist and sold-out states; order-tracking page for nationwide courier delivery) plus the handwritten note "Just ideas from a fan. I'd love to hear what you actually need."
10. **Footer / order section** (id `order`) on chocolate: kicker "ready to order?", H2 "Let's spread happiness, *one commit* at a time." (italic dough), then a **cookie that dunks into a glass of milk** as you scroll (the milk surface has a gently waving scalloped edge), a dough "Email me" button (mailto with a prefilled subject), outlined pill links for WhatsApp, LinkedIn, GitHub and Portfolio, a handwritten "Warmly, Fasih" sign-off (mirrors Crumble's "Warmly, Crumble Family"), and a small line with my name, location and availability.

## Cookie-themed scroll effects (CSS scroll-driven animations)
Wrap each in `@supports (animation-timeline: view())` so that browsers without support simply show everything normally:
- Reveal: every card and heading fades up, scales from .94 and slides 60px as it enters (`animation-timeline: view()`, `animation-range: entry 0% cover 30%`).
- A small cookie fixed to the bottom of the viewport **rolls left to right while rotating** over the whole page (`animation-timeline: scroll(root)`).
- A fixed **milk glass** progress meter on the right edge fills from the bottom with page scroll (hide it on mobile).
- The giant cookie's bites (section 4), the timeline rail fill (section 6) and the dunking cookie (section 10) are all scroll-driven.

## My doodle portrait (inline SVG, viewBox 420x460)
Hand-drawn look: thick dark-brown outlines (stroke ~5, round caps/joins) and an SVG filter (`feTurbulence` + `feDisplacementMap`, scale ~5) so lines wobble like a marker. Draw from my photo: medium-brown skin, full dark beard and moustache, clear rectangular glasses with small white highlights, a black baseball cap with a small white zigzag scribble on the front (no real logos), a small hair tuft/bun on the right side, an olive-brown jacket over a grey tee with collar flaps, and a smile. I'm holding up a cookie with three bite marks (use an SVG `mask`), a hand and thumb in front of it. Add a few red velvet "+" sparkles around. The eyes **blink every ~5 seconds** (scaleY animation). Give the SVG `role="img"` and a descriptive `aria-label`.

## Details and content rules
- Use only facts from my CV. Contact details: email fasihrana98@gmail.com, WhatsApp 0302 3454259 (link `https://wa.me/923023454259`), LinkedIn linkedin.com/in/fasih-rana-2108a6227, GitHub github.com/Fasih-25, portfolio fasih-ranaportfolio.netlify.app, Islamabad, available immediately.
- No emojis, no lorem ipsum, no stock photos, no external JS or images. Everything inline except the Google Fonts link.
- Add `<meta name="viewport">`, a description and a `theme-color`.
- All interactive elements must be real `<a>` or `<button>` elements with 44px+ touch targets.

When you are done, tell me how to deploy it to Vercel (drag the folder into the dashboard, or run `vercel`).
