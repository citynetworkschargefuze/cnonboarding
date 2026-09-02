# FUZE Design System — chargeFUZE + adFUZE

> Empowering Progress, Fueling Innovation. — Seamless technology for a connected world.

This design system covers **the two product brands**: **chargeFUZE** (smart on‑the‑go charging network) and **adFUZE** (DOOH + CTV advertising on FUZE screens). The parent FUZE Technology identity — horizontal logo, generic bolt, shared marketing surfaces — is intentionally out of scope. Everything here is either shared foundation (type, neutrals, gradient plates, shape rules) or product‑specific (logos, product color families, UI kits).

---

## The two products

- **chargeFUZE** — a nationwide network of self‑serve kiosks that rent portable power banks with 3 built‑in cords. Deployed across restaurants & nightlife, shopping centers, universities, healthcare, festivals, stadiums, and gaming venues. Signature hardware: the **F25** charging station. Color family: **Charge Blue** `#009EFA` + **Spark Blue** `#43F4FE`.
- **adFUZE** — a digital‑out‑of‑home (DOOH) and Connected TV (CTV) platform that turns FUZE kiosk screens and partner surfaces into Geopath‑audited ad inventory with first‑party engagement data. Color family: **Pulse Purple** `#4A1099` + **Pixel Purple** `#941BFF`.

**Primary tagline:** "Seamless Technology for a Connected World."

---

## Source materials

| File | Status | Notes |
|---|---|---|
| `uploads/FUZE Brand Book 2025.pdf` | ✅ read | 39 pages. Mission/values/tone, color system, type system, shapes, iconography direction. |
| `uploads/2025 FUZE Style Guide Sheet.pdf` | ✅ read | One‑page cheat sheet of hex values + type specimens. |
| `uploads/FUZE Design Process.pdf` | ✅ read | Internal design request/approval workflow. Context, not brand input. |
| `fonts/Poppins-*.ttf` | ✅ licensed | Regular, Medium, SemiBold, Thin (+ italics). Self‑hosted via `@font-face`. |
| Inter | ⚠️ Google Fonts CDN stand‑in | Licensed files did not upload. |
| Official logo files | ⚠️ Used uploaded PNGs | Raster versions for chargeFUZE + adFUZE are in `assets/logos/`. SVG lockups reconstructed from the Brand Book spec. |

---

## Index

```
colors_and_type.css        CSS variables — colors, type, spacing, radii, shadows, motion
README.md                  This file
SKILL.md                   Agent‑Skill‑compatible entry point

assets/
  logos/                   chargeFUZE + adFUZE wordmarks, bolts, mono variants
  graphics/                16 ripple/gradient plates — blue-forward (charge) and purple-forward (ad)

fonts/                     Licensed Poppins TTFs

preview/                   Design System tab cards — tokens + components

ui_kits/
  chargefuze-app/          Consumer mobile app (find kiosk → rent → track rental)
  adfuze-dashboard/        Advertiser dashboard (campaigns, screens, audience data)

content/                   Real FUZE source copy — testimonials, press release, long-form blog.
                           Mine for headlines, voice, social proof.
```

Each UI kit has its own `README.md` and a runnable `index.html`.

---

## Content fundamentals

FUZE's voice is **clear, confident, and practical** — three tone principles (from Brand Book §2):

1. **Effortlessly concise** — casual, direct, brevity‑first.
2. **Boldly empowering** — a spark of wit; confident, never overpromising.
3. **Inspiringly innovative** — links cutting‑edge tech back to tangible, everyday benefits.

### How FUZE writes

- **Person:** Second person ("you", "your") for consumer surfaces. Inclusive first‑person plural ("we", "our") for B2B positioning. Avoid "I".
- **Casing:** Title Case on buttons, headers, and taglines. Sentence case for body copy. **ALL CAPS** reserved for small LABELS and eyebrows (tracked +8–10%).
- **Product names:** Always lowercase‑prefix, Caps‑brand: `chargeFUZE`, `adFUZE`. Never `ChargeFUZE`, `Charge FUZE`, or `chargefuze`.
- **Contractions:** Yes — "you're", "we're", "it's".
- **Oxford comma:** Yes.
- **Numerals:** Digits for counts and metrics (`3 cords`, `24/7`, `200+ venues`). Spell out only at sentence start.
- **Emoji:** **Not used in brand surfaces.**
- **Avoid:** "synergy", "disruptive", "revolutionary", "next‑gen".
- **Do use:** "seamless", "effortless", "connected", "powered", "nationwide", "real‑world", "on‑the‑go".

### Voice examples

Short declarative beats, rhetorical pairing, named-venue specificity:

> **"You Can't Buy Back Time. But You Can Buy a Charge."**
> **"Rent anywhere. Return anywhere."**
> **"Your phone stays alive. Your brand stays visible."**
> **"Power follows people the way life moves — forward, without stopping."**

| ✅ On‑brand | ❌ Off‑brand |
|---|---|
| "Rent anywhere. Return anywhere." | "Unlock next‑gen power delivery with our revolutionary IoT ecosystem." |
| "Power, simply there when you need it." | "Leverage our synergistic charging network." |
| "Find a kiosk nearby." | "Locate proximate charging infrastructure." |

---

## Visual foundations

Both brands share one foundation — **Poppins SemiBold + Inter**, the neutral palette, the gradient plates, the shape language — and diverge only on product color.

### Color

Full token map lives in `colors_and_type.css`.

- **Shared neutral:** Obsidian Blue `#001B32` — text, deep UI chrome, dark surface base.
- **chargeFUZE:** Charge Blue `#009EFA` (primary) + Spark Blue `#43F4FE` (accent/glow).
- **adFUZE:** Pulse Purple `#4A1099` (primary) + Pixel Purple `#941BFF` (accent).
- **Bridge:** Connect Blue `#0047CF` — crosses between the two families.
- **Secondary spark:** Electric Yellow `#F4FF28` — sparingly, for callouts.
- **Neutrals:** Obsidian at opacity steps (`--ink-75/50/25/12`) plus off‑whites.

**Fusion Gradient plates — the signature surface.** Instead of flat Obsidian, FUZE dark surfaces use a library of **photographic gradient plates** with ripples and spotlight glows. 16 plates ship in `/assets/graphics/`.

| Token | Use when | Plate |
| --- | --- | --- |
| `--surface-hero` | Flagship hero, cover surfaces | plate 03 (central ripple, blue spotlight) |
| `--surface-spotlight` | Dramatic closers / heros | plate 03 variant |
| `--surface-spectrum` | Airy violet→white editorial surface | plate 16 |
| `--surface-ad` | adFUZE panels, dividers | plate 06 (deep purple) |
| `--surface-charge` | chargeFUZE panels, scale stats | plate 12 (blue‑forward) |
| `--surface-fade` | Text‑on‑image, testimonials | plate 04 (purple→light) |

**Rules.** Pair with a matching `background-color` fallback. `background-size: cover`. Text on the darker side. Don't add extra SVG ripples on top — plates already have them.

### Typography — brand standard

- **Titles — Poppins SemiBold (600)**. Brand Book §32: *"We primarily use Regular and Semi‑Bold."* SemiBold carries every heading; Regular handles larger display paragraphs.
- **Paragraph / UI — Inter** at 400/500. All body copy, labels, captions, help text, chrome.
- **Numeric — Inter Tight** at 700–800 for oversized stats (tabular figures on by default).
- **Mono — ui‑monospace stack** for receipts, specs, diagnostic surfaces.
- **Scale** — clamp‑based:
  - Hero `clamp(56,8vw,140)` / 0.92 · Display `clamp(44,5.5vw,88)` / 0.95 · Super `clamp(32,4vw,56)` / 1.02 · Title `clamp(24,2.8vw,36)` / 1.1 · Subtitle 20 · Body 15 · Detail 12 · Label 11.
- **Tracking:** hero/display `-0.015em`, body `-0.005em`, LABELS `+0.08–0.10em` uppercase.

### Shape language

1. **Rounded rectangles** — the default container. Never hard 90° corners.
2. **Connectivity ripples** — concentric arcs from a point. Baked into gradient plates; don't overlay additional ones.
3. **Pills** — reserved for chips, status tags, small CTAs.
4. **Circles** — iconography bases and avatar frames.

Radius scale: `2 / 4 / 8 / 12 / 16 / 24 / ∞`. **Default UI is 8–12px**; `16–24px` for hero panels; pills for tags/status.

### Motion

- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (ease‑out).
- **Durations:** `120ms` micro · `200ms` base · `360ms` slow.
- **Vibe:** Confident fades and short translates. No bouncy spring.

### States

- **Hover:** slight darken on filled buttons; a brand‑colored glow on hero CTAs.
- **Press:** scale `0.98`.
- **Focus:** 2px outline in the surface's product color, 2px offset.
- **Disabled:** 40% opacity.

### Layout

- 12‑column grid, 24px gutter desktop; 4‑col / 16px mobile.
- Container max 1200px. Page padding `clamp(16px, 3vw, 40px)`.
- Spacing rhythm on 4pt base — padding at 16/24/32, sectioning at 64/96.

### Card recipe

Border‑first, not shadow‑first.

```css
background: var(--surface);      /* white */
border: 1px solid var(--border); /* #E1E7ED hairline */
border-radius: var(--radius-lg); /* 12px */
padding: var(--sp-6);            /* 24px */
```

On tinted or dark surfaces, drop the border and rely on tonal separation or `--shadow-sm`.

---

## Iconography

- **System:** [**Lucide**](https://lucide.dev) — stroke‑based, 24×24, 1.75–2px stroke. CDN in UI kits; local subset at `assets/icons/`.
- **Fill vs stroke:** Stroke by default. Fills for active‑state indicators.
- **Color:** Icons inherit `currentColor`. Charge Blue for chargeFUZE contexts, Pulse Purple for adFUZE.
- **Unicode / emoji:** Not used.

---

## Caveats

- Inter and official vector logos didn't upload — using Google Fonts Inter and raster PNGs (chargeFUZE + adFUZE only).
- No Figma link or live codebase, so UI kits are informed by brand‑guide rules rather than mirroring shipped product UI.
- Iconography defaulted to Lucide pending FUZE's own set.
