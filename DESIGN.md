---
name: The Guard Guy
description: Custom-fit mouthguards from Khai Nguyen Dental Lab, presented as the parts of a boxing ring (Góc Xanh, the blue corner).
colors:
  arena: "#0A0C0F"
  arena-lift: "#14181D"
  arena-ink: "#F2F4F5"
  arena-mute: "#A9B4BE"
  canvas: "#E3E7EA"
  canvas-deep: "#D2D8DC"
  canvas-ink: "#0D0D0D"
  canvas-mute: "#3E4852"
  ink-lift: "#2A3138"
  corner: "#1CA6DF"
  corner-hover: "#33B4E8"
  rope-red: "#D7263D"
  rope-white: "#F2F4F5"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(3.4rem, 11.5vw, 11rem)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(3rem, 8.5vw, 7.5rem)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 62"
  headline-sub:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 5rem)"
    fontWeight: 900
    lineHeight: 0.94
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 62"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 75"
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
    fontVariation: "'wdth' 100"
  body-sm:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 75"
  numeral:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 75"
rounded:
  rope: "3px"
  photo: "6px"
  pad-sm: "11px"
  pad: "14px"
  pad-lg: "18px"
spacing:
  gutter: "16px"
  gutter-md: "32px"
  container: "1400px"
  section: "96px"
  section-md: "128px"
  rope: "3px"
  touch-min: "44px"
components:
  corner-pad:
    backgroundColor: "{colors.corner}"
    textColor: "{colors.canvas-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pad}"
    padding: "14.4px 25.6px"
    height: "56px"
  corner-pad-hover:
    backgroundColor: "{colors.corner-hover}"
  corner-pad-sm:
    backgroundColor: "{colors.corner}"
    textColor: "{colors.canvas-ink}"
    rounded: "{rounded.pad-sm}"
    padding: "8.8px 17.6px"
    height: "44px"
  corner-pad-lg:
    backgroundColor: "{colors.corner}"
    textColor: "{colors.canvas-ink}"
    rounded: "{rounded.pad-lg}"
    padding: "19.2px 38.4px"
    height: "72px"
  ink-pad:
    backgroundColor: "{colors.canvas-ink}"
    textColor: "{colors.canvas}"
    typography: "{typography.label}"
    rounded: "{rounded.pad}"
    padding: "0 28px"
    height: "56px"
  ink-pad-hover:
    backgroundColor: "{colors.ink-lift}"
  arena-pad:
    backgroundColor: "{colors.arena-lift}"
    textColor: "{colors.arena-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pad}"
    height: "56px"
  rope-link:
    textColor: "{colors.arena-ink}"
    typography: "{typography.label}"
    padding: "0 0 4px 0"
  photo-frame:
    backgroundColor: "#000000"
    rounded: "{rounded.photo}"
  photo-slot-arena:
    backgroundColor: "{colors.arena-lift}"
    textColor: "{colors.arena-mute}"
    rounded: "{rounded.photo}"
    padding: "24px"
  photo-slot-canvas:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.canvas-mute}"
    rounded: "{rounded.photo}"
    padding: "24px"
  icon-button:
    backgroundColor: "{colors.arena-lift}"
    textColor: "{colors.arena-mute}"
    rounded: "{rounded.photo}"
    size: "44px"
  icon-button-hover:
    backgroundColor: "{colors.corner}"
    textColor: "{colors.canvas-ink}"
---

# Design System: The Guard Guy

## Overview

**Creative North Star: "Góc Xanh — The Blue Corner"**

The lab is the athlete's corner team, so the site is built from the boxing ring's working parts instead of from a web template. Arena black surrounds everything, and the studio photos of lettered guards on black glass sit in it like fighters under the lights. Reading happens on pale, cool ring-canvas panels. Every line on the page is a rope: one weight (3px) used for dividers, the nav underline, progress, list rules and link underlines, in white, TGG blue or rope red. The one action that matters (Nhắn Zalo) is always a tall padded TGG-blue corner pad with black type, and on a phone it sits within thumb reach at the bottom edge.

Headings are set like the lettering printed on a ring apron: Archivo pushed to 62% width at weight 900, uppercase, large enough to run nearly edge to edge. Everything else is the same family. Short labels are 75% width at weight 800 (the placard voice), and body text runs at 100% width. The density is generous and sectional: a full-bleed black ground or a full-bleed canvas ground per section, with a rope marking each change of ground.

Real photography is the proof. A named guard (its printed lettering, never the customer's or club's name) appears before any explanation. Where a photo does not exist yet, a labelled photo slot holds its place and is never filled with stock or renders. Motion is physical (ropes drawing taut, arena lights coming up, a floor flooding with colour), and every motion has a static still under `prefers-reduced-motion`.

**Key Characteristics:**
- Two grounds only: arena black for photography and atmosphere, ring canvas for reading.
- One rope weight (3px) for every rule, divider, underline and progress line.
- One primary action shape: the TGG-blue corner pad with black type.
- One type family (Archivo) at three widths: 62% apron, 75% placard, 100% body.
- Real studio photos on black, 3:2, with the printed lettering as the caption.
- Motion that comes from the ring, always with a reduced-motion still.

## Colors

A near-neutral, cool ring palette: black arena, pale grey canvas, and three rope colours, with TGG Blue doing the work of the blue corner.

### Primary
- **Corner Blue** (TGG Blue, `corner`): the blue corner pad (primary action fill), the active nav rope, progress ropes, the second line of hero and closing headlines on black, the promise bullets, focus rings, text selection and the caret. It is the brand guide's fixed TGG Blue and must not shift.
- **Corner Blue, Lit** (`corner-hover`): the corner pad's hover fill only.

### Secondary
- **Rope Red** (`rope-red`): the red rope that opens the Products and closing sections and the round numerals ("Hiệp 1…5") on black. As text it measures about 3.9:1, so it appears only at display sizes (48px and up).

### Neutral
- **Arena** (`arena`): the page ground, the `html`/`body` background, photo sections, the nav bar once scrolled (at 95% with a light blur), the footer.
- **Arena Lift** (`arena-lift`): the raised dark surface. Photo slots on black, the secondary pad in the mobile bar, social icon buttons.
- **Arena Ink** (`arena-ink`): primary text on black.
- **Arena Mute** (`arena-mute`): secondary text, captions and inactive nav on black (about 9.3:1).
- **Ring Canvas** (`canvas`): the reading ground for product comparison, pricing, athletes, parents and FAQ.
- **Canvas Fold** (`canvas-deep`): row rules inside canvas tables and lists, accordion dividers, photo slots on canvas.
- **Canvas Ink** (`canvas-ink`): text on canvas, the type colour on the corner pad, the ink rope, the ink pad fill.
- **Canvas Mute** (`canvas-mute`): secondary text on canvas (about 7.5:1).
- **Ink Lift** (`ink-lift`): the ink pad's hover fill.
- **Rope White** (`rope-white`): the white rope. The same value as Arena Ink, kept as its own role so ropes and type can be adjusted separately.

### Named Rules
**The Two Grounds Rule.** Each section is either arena or canvas, full-bleed. Photography and atmosphere go on arena; comparison, pricing, lists and long reading go on canvas. Canvas sections carry the `on-canvas` class so focus rings switch to ink. The one exception is the colour floor, where the visitor's chosen EVA colour becomes the ground and the text flips to whichever of Canvas Ink or Rope White contrasts more.

**The Corner Blue Is Not Canvas Ink Rule.** Corner Blue on canvas measures 2.2:1, so it is never used as text or as a thin line on canvas. On canvas, emphasis is ink and the action is the ink pad or the corner pad. (The brand guide's "blue on white ✅" predates the canvas ground and does not apply to it.)

**The Black-Type Pad Rule.** Anything filled with Corner Blue carries Canvas Ink type (7:1), never white (2.8:1).

## Typography

**Display Font:** Archivo (variable `wdth` axis, via `next/font`, latin + vietnamese subsets), with sans-serif fallback
**Body Font:** Archivo at 100% width
**Label/Mono Font:** Archivo at 75% width; tabular numerals for prices and round counters

**Character:** One family stretched across three widths. The extra-condensed apron caps read like ring lettering and fight-poster type. The 75% placard caps carry labels and short titles with a sign-painted firmness. The 100% body stays plain and easy to read in Vietnamese.

The site uses Archivo instead of the brand guide's Montserrat / Inter / Oswald. The user approved this change, so the typography section of `content/brand-kit/brand-guidelines.md` is out of date for the website. The guide's logo and TGG Blue commitments still bind.

### Hierarchy
- **Display / Apron** (900, 62% width, uppercase, `clamp(3.4rem, 11.5vw, 11rem)` for the hero h1 and `clamp(3.4rem, 11vw, 10rem)` for the closing bell, line-height 0.94): one per page, left-aligned, may run nearly edge to edge. The second line often switches to Corner Blue on black or to Arena Mute.
- **Headline / Apron** (900, 62%, `clamp(3rem, 8–8.5vw, 7–7.5rem)`, 0.94): section h2s. Product line names (LIGHT, PRO) go larger at `clamp(4.5rem, 9vw, 8rem)`.
- **Headline-sub / Apron** (900, 62%, `clamp(2.75rem, 6vw, 5rem)`): secondary h2/h3 inside a section (parents strip, FAQ). The mobile menu links use apron at 3.25rem.
- **Title / Placard** (800, 75%, uppercase, 1.5–1.875rem, line-height 1): round titles, layer notes, the price-table caption.
- **Body** (400, 100%, 1.125rem, line-height 1.625): ledes and descriptions, capped at 28–40rem (about 60–75ch). Use 1rem for supporting copy and 1.25rem for short parent facts.
- **Label / Placard** (800, 75%, uppercase, 0.95–1.125rem, +0.02em): nav links, promises on the rope, rope-links, button text, figure captions (0.875rem), table headers.
- **Numeral** (placard with tabular figures, `normal-case`): prices (1.25rem in tables, 1.875–2.25rem for "từ" prices) and the round counter.

### Named Rules
**The Apron Leading Rule.** Apron type keeps line-height 0.94 and 0.06em top padding so stacked Vietnamese diacritics (Ầ, Ặ, Ữ) clear the line above. Never tighten it further.

**The Three Widths Rule.** Use 62% only for headings, 75% only for labels, titles and buttons, and 100% for anything a person reads as a sentence. Never set a paragraph in apron or placard. Questions in the FAQ are placard with `normal-case`.

**The No Second Family Rule.** The 1FTV / UTM display faces declared in `globals.css` are lettering fonts for the guard designer (/customize). They are not site typography.

## Layout

- **Container:** max-width 1400px, centred, with gutters of 16px on mobile and 32px from `md` up. Photo marquees and ropes break out to full bleed. The marquee's left edge still aligns to the container through a computed `--edge` padding.
- **Section rhythm:** 96px vertical padding, or 128px from `md` up. The Lineup section's top is tighter (80px, or 112px from `md` up). Within a section: the heading, then the lede at 24px, then the content block at 48–56px, then secondary blocks at 80–96px.
- **Grids:** asymmetric two-column splits on desktop (`1fr 1.15fr`, `0.9fr 1.1fr`, `0.8fr 1.2fr`, `1.15fr 1fr`). Never use three equal cards. Product comparison is `1fr 3px 1fr`, with a vertical ink rope as the centre column. Photo grids use a 16px gap. Placeholder grids are three-up from `sm`.
- **Breakpoints:** Tailwind defaults (`sm` 640px, `md` 768px, `lg` 1024px). The `lg` breakpoint is the desktop switch for the inline nav, the hero photo's anchoring, the sticky round clock and hiding the mobile corner bar.
- **Sticky devices:** the How It Works heading and round clock pin at `top: 7rem` on desktop. On mobile, a compact round clock pins under the 64px nav.
- **Mobile action:** below `lg`, a fixed bottom bar (blue rope on top, arena at 95%, safe-area padding) holds the corner pad (flex 1.4) and an arena pad (flex 1). The footer adds 112px of bottom padding below `lg` so the bar never covers content.
- **Nav height:** 64px, or 72px from `md` up. Pages offset their first section by the same amount.

### Named Rules
**The 44px Rule.** Every interactive target is at least 44×44px. This covers the corner-pad-sm (44px), icon buttons (44px), colour swatches (`min-height` 44px), gallery tile links (`min-height` 44px) and FAQ rows (64px). The main pads are 56px and the large pad is 72px.

**The Nearest Corner Rule.** On a phone, the primary Zalo action is always the nearest thing to the thumb. Desktop corner pads that duplicate the fixed bar are hidden below `lg`.

## Elevation & Depth

The system is flat and lit. Depth comes from the arena's darkness, stage light and photography, not from stacked cards. A soft radial "arena light" (`radial-gradient(60% 50% at 70% 8%, rgb(242 244 245 / 0.07), transparent 70%)`) falls from the top of the hero. Hero photos fade into the black through a left and top mask (transparent to opaque over 14–16%), so the photo reads as full-bleed. Blurred 95% arena bars (the nav once scrolled, the mobile bar, the mobile round clock) are the only translucent layers.

### Shadow Vocabulary
- **Pad padding** (`box-shadow: inset 0 -5px 0 rgb(0 0 0 / 0.18), 0 10px 24px -12px rgb(28 166 223 / 0.55)`): the corner pad only. The inset bottom reads as foam thickness, and the faint blue spill sits under it.
- **Pad pressed** (`box-shadow: inset 0 -2px 0 rgb(0 0 0 / 0.2)` with `transform: scaleY(0.95)`): the corner pad's `:active` state, like padding compressing.
- **Selection ring** (`box-shadow: 0 0 0 3px <floor>, 0 0 0 6px <ink>`): the chosen colour swatch on the colour floor. It is a 3px ring separated by a 3px gap, consistent with the rope weight.

### Named Rules
**The Only The Pad Is Padded Rule.** The corner pad is the only element with a shadow. Photos, slots, tables and sections stay flat. Never add hard offset shadows or glow blobs.

## Shapes

- **Ropes:** 3px tall, with 3px radius at short lengths. Section-spanning ropes square off (`rounded-none`). A faint 115° diagonal stripe (`rgb(0 0 0 / 0.14)`, 2px of every 7px) reads as the rope's fabric wrap. Ropes come in blue, red, white and ink.
- **Rope stacks:** the footer opens with three ropes (blue, white at 70%, red) stacked with 8px gaps, like the ring's three ropes. Single ropes mark every change of ground. The Products and closing sections open with red, How It Works opens with white at 80%, and the hero closes with white over blue.
- **Pads:** softly rounded like foam (11px for small, 14px for regular, 18px for large), with two 1px seam lines inset 10px from the sides.
- **Photos and slots:** 6px radius on a black ground, in 3:2 everywhere. Lab equipment slots use 4:3.
- **Focus:** a 3px outline (Corner Blue on arena, Canvas Ink on canvas) with a 3px offset and 2px radius.
- **List rules:** short 16×3px ink bars stand in for bullets on canvas. Promises on the rope use 8px Corner Blue dots.
- **Icons:** one hand-drawn stroke set, 24×24 viewBox, 2px stroke with round caps and joins, `currentColor`. No icon fonts, no emoji, no glyph icons.

## Components

### Buttons
Padded and tactile: a primary action looks like part of the ring's corner pad.
- **Corner pad (primary):** Corner Blue fill with a top sheen (`linear-gradient(180deg, rgb(255 255 255 / 0.18), transparent 38%)`), Canvas Ink placard type at 1.125rem, 56px minimum height, 14px radius, two seam lines, padded shadow. Use it for Zalo and other primary conversions, with the Zalo stroke icon leading. Sizes: `sm` (44px, 0.95rem, nav), regular (56px, in sections), `lg` (72px, 1.5rem, the hero, closing bell and mobile menu). There is one corner pad per viewport region.
- **Hover / Active:** the fill lifts to Corner Blue, Lit. Pressing compresses it vertically (`scaleY(0.95)`, 160ms on the expo ease).
- **On a coloured floor:** add a 3px outline in the floor's ink colour at 0 offset so the pad holds its edge against any EVA colour.
- **Ink pad (secondary on canvas):** Canvas Ink fill, canvas-coloured placard type at 1.125rem, 56px tall, 14px radius, 28px horizontal padding, with a trailing arrow icon. On hover the fill changes to Ink Lift. Use it for per-product "Đặt LIGHT / Đặt PRO". It has no seams or sheen. The corner pad alone is padded.
- **Arena pad (secondary on black):** Arena Lift fill, Arena Ink placard type, 56px tall, 14px radius. It appears in the mobile corner bar next to the corner pad.

### Rope Link
The tertiary action and "see more" link. Placard type with a 3px currentColor underline, 4px below the text. On hover the rope pulls in to 35% width over 400ms on the expo ease. It usually carries a trailing arrow. Use Arena Ink on black and Canvas Ink on canvas. Social links can start in Arena Mute and brighten on hover.

### Navigation
- **Bar:** fixed, 64/72px. It is transparent over the hero and becomes 95% arena with a blur after 24px of scroll. A full-width blue rope runs along its bottom edge and draws in on load.
- **Logo lockup:** the shield icon (`/brand/logo-icon.png`) beside the name in placard type, with "Guard" in Corner Blue.
- **Links (lg+):** placard at 0.95rem with a 28px gap. Arena Mute is the default and Arena Ink the hover. The active page gets Arena Ink plus a short blue rope under it, and `aria-current="page"`.
- **Right side:** a small corner pad "Nhắn Zalo" from `sm` up, and a 44px menu button below `lg` whose three bars are ropes (white, blue, red) that cross into an X.
- **Mobile menu:** a full-screen arena sheet under the bar. Links are apron at 3.25rem, separated by 3px white-at-10% rules, with the current page in Corner Blue. A large full-width corner pad closes the sheet. Scroll is locked while open, and Esc closes it.

### Photo Frame
A studio photo on black glass: 3:2, 6px radius, black backing, `object-cover`, and a blur placeholder from the pipeline. The caption below is placard type and shows the guard's printed lettering (Arena Ink or Canvas Ink) with the EVA colour name in mute. Fall back to "Fully Design" when there is no lettering. Never caption with customer or club names. Gallery-style tiles add a 44px "Làm một chiếc như này →" link to /customize in Corner Blue (on black only).

### Photo Slot
A placeholder that is clearly not a broken image. It uses Arena Lift (on black) or Canvas Fold (on canvas), with a faint 135° stripe, a 3px dashed inset border at 10% contrast, a camera stroke icon, a placard "Ảnh sắp có" line and a plain description of the photo to come. It takes the same aspect ratio as the photo it replaces. Use it for athlete, lab-staff and equipment photos until real ones exist.

### Lists, Tables, Accordions (on canvas)
- **Price table:** a 3px Canvas Ink rule under the header, 1px Canvas Fold rules between rows, placard headers in Canvas Mute, and right-aligned tabular placard prices. Below `sm` it becomes a stacked list with a 3px top rule and side-by-side LIGHT and PRO prices.
- **Accordion (FAQ):** a 3px ink top rule and 3px Canvas Fold dividers between rows. Questions are placard at 1.35rem with `normal-case`, in rows at least 64px tall. A plus icon rotates 45° to open. The answer reveals through a grid-rows transition (400ms, expo ease, none under reduced motion), and closed answers are `inert`.
- **Fact lists:** 3px Canvas Fold dividers, or ink bar bullets.

### Colour Floor (signature)
The section ground floods with the selected PRO EVA colour (700ms background transition), and the text switches to the higher-contrast ink. Above the picker sits the colour name in apron, announced through `aria-live`. The 16 swatches form a radiogroup in 8 columns with roving tabindex and arrow-key movement. Each swatch is 6px rounded and at least 44px, and the selected swatch shows the selection ring. Matching studio photos appear beside it. When none exist, it shows the real EVA-sheets photo with an honest caption.

### Round Clock (signature)
A process shown as boxing rounds. "Hiệp N / 5" is set in apron with tabular placard, above five 3px progress ropes (blue once reached, white at 25% otherwise). It is sticky on desktop and compact under the nav on mobile. Each step has a photo or photo slot, a Rope Red apron "Hiệp N" at 3rem, a placard title and a body description.

### Marquee (Lineup)
Two rows of photo tiles (17rem, or 22rem from `md` up) drift in opposite directions (70–80s, linear). They pause on hover and on focus-within. Duplicate tiles are `aria-hidden` and taken out of the tab order. Under reduced motion each row becomes a horizontal scroll-snap strip and the duplicates are removed.

### Motion vocabulary
These belong to the world, not to a component. The ease is `cubic-bezier(0.16, 1, 0.3, 1)`. Ropes draw in from the left over 900ms (staggered 120ms). Arena lights come up on hero photos over 1400ms (from `brightness(0.35) saturate(0.6)`). The floor floods over 700ms and rope-links pull over 400ms. All of these run only under `prefers-reduced-motion: no-preference`, and smooth scrolling follows the same condition.

### Photography pipeline
Shipping photos come only from `data/photo-manifest.json` (source path, lettering, EVA colour, alt). `scripts/export-photos.mjs` exports them to `public/photos/<id>.jpg` (width 1800, or 2400 for hero photos; mozjpeg q82; provenance written to EXIF ImageDescription) and generates `data/photos.ts` with dimensions and blur placeholders. Components read photos through `photo(id)`. Do not hand-place rasters or edit `data/photos.ts`.

## Do's and Don'ts

### Do:
- **Do** give every section one ground, arena or canvas, and mark each change of ground with a full-width 3px rope (`rounded-none`).
- **Do** use a 3px rope (or a 3px border in a rope colour) for every divider, underline, progress bar and table rule. The only lighter rule is the 1px Canvas Fold between table rows.
- **Do** put the primary action in a Corner Blue corner pad with Canvas Ink type, and keep the Zalo pad nearest to the thumb on mobile.
- **Do** set headings in apron (Archivo 62% / 900 / uppercase / 0.94 leading), labels and buttons in placard (75% / 800), and sentences at 100%.
- **Do** show real studio photos at 3:2 on black with 6px corners, captioned with the printed lettering, and use a labelled Photo Slot where a photo is still missing.
- **Do** keep every interactive target at 44×44px or larger.
- **Do** give every animation a reduced-motion still, and pause anything that moves on hover and focus.
- **Do** add `on-canvas` to canvas sections so focus rings turn ink.
- **Do** use the shared stroke icon set (24px grid, 2px round stroke, `currentColor`) for every icon.

### Don't:
- **Don't** use Corner Blue as text or as a thin line on canvas (2.2:1). On canvas, use ink.
- **Don't** put white type on Corner Blue. Pad type is Canvas Ink.
- **Don't** add a second rope weight, hairline borders around photos, or card boxes around content. Ropes and grounds do the separating.
- **Don't** add shadows outside the corner pad, and never hard offset shadows, glow blobs or a navy SaaS gradient.
- **Don't** lay out sections as an eyebrow, a centred heading and a row of identical cards. Use asymmetric splits and full-bleed photography.
- **Don't** put kicker or eyebrow labels above headings. The apron heading stands alone.
- **Don't** use stock images, 3D renders or AI imagery in place of a studio photo or a Photo Slot.
- **Don't** caption photos with customer or club names. Only the lettering printed on the guard.
- **Don't** reintroduce Montserrat, Inter, Oswald, or the designer's novelty display faces into site typography.
- **Don't** recolour, stretch, or add effects to the TGG logo or shift TGG Blue (#1CA6DF).
- **Don't** use emoji or text-glyph icons.
