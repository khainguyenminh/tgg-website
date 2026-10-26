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
  alert: "#9E1B2F"
  alert-dark: "#FF7085"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 6rem)"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "0"
    fontVariation: "'wdth' 62"
  display-page:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.5rem, 5.2vw, 5rem)"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "0"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 4.25rem)"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "0"
    fontVariation: "'wdth' 62"
  headline-sub:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(1.875rem, 3.2vw, 3rem)"
    fontWeight: 900
    lineHeight: 1.15
    letterSpacing: "0"
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
    padding: "0 28px"
    height: "56px"
  arena-pad-hover:
    backgroundColor: "#1F252C"
  seg:
    textColor: "{colors.arena-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pad-sm}"
    padding: "5.6px 16px"
    height: "44px"
  seg-on:
    backgroundColor: "{colors.arena-ink}"
    textColor: "{colors.arena}"
  seg-canvas:
    textColor: "{colors.canvas-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pad-sm}"
    padding: "5.6px 16px"
    height: "44px"
  seg-canvas-on:
    backgroundColor: "{colors.canvas-ink}"
    textColor: "{colors.canvas}"
  field:
    backgroundColor: "#F4F6F7"
    textColor: "{colors.canvas-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pad-sm}"
    padding: "11.2px 14.4px"
    height: "48px"
  field-dark:
    backgroundColor: "{colors.arena}"
    textColor: "{colors.arena-ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pad-sm}"
    padding: "8.8px 12.8px"
    height: "44px"
  field-label:
    typography: "{typography.label}"
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
- **Corner Blue** (TGG Blue, `corner`): the blue corner pad (primary action fill), the active nav rope, progress ropes, the second line of hero and closing headlines on black, the promise bullets, focus rings on black, the focused designer field, trailing tags after titles on black, text selection and the caret. It is the brand guide's fixed TGG Blue and must not shift.
- **Corner Blue, Lit** (`corner-hover`): the corner pad's hover fill only.

### Secondary
- **Rope Red** (`rope-red`): the red rope that opens the Products and closing sections (including every inner page's Zalo close) and the designer's step numbers on black. As text it measures about 3.9:1, so it appears only at display sizes (48px and up). It is never an error colour.

### Neutral
- **Arena** (`arena`): the page ground, the `html`/`body` background, photo sections, the nav bar once scrolled (at 95% with a light blur), the footer, the designer's dark field fill.
- **Arena Lift** (`arena-lift`): the raised dark surface. Photo slots on black, the arena pad, social icon buttons, the designer's preview stage, loading tiles in the gallery.
- **Arena Ink** (`arena-ink`): primary text on black, and the fill of a selected segmented control on black.
- **Arena Mute** (`arena-mute`): secondary text, captions and inactive nav on black (about 9.3:1).
- **Ring Canvas** (`canvas`): the reading ground for product comparison, pricing, athletes, parents, FAQ and the order form.
- **Canvas Fold** (`canvas-deep`): row rules inside canvas tables and lists, accordion dividers, photo slots on canvas, the resting border of fields and segmented controls on canvas.
- **Canvas Ink** (`canvas-ink`): text on canvas, the type colour on the corner pad, the ink rope, the ink pad fill, a focused field's border, a selected segmented control on canvas.
- **Canvas Mute** (`canvas-mute`): secondary text on canvas (about 7.5:1).
- **Ink Lift** (`ink-lift`): the ink pad's hover fill, and the tooth in the arena-tone cross-section diagram.
- **Rope White** (`rope-white`): the white rope. The same value as Arena Ink, kept as its own role so ropes and type can be adjusted separately.

### Feedback
- **Alert** (`alert`): error text and the invalid-field border on canvas (about 6.6:1). Used for form validation and failed actions on /order.
- **Alert, Dark** (`alert-dark`): error text on arena (about 7:1), and the destructive "remove" control in the designer (its border at 50%).

### Literal values still outside the token set
Ink Lift is a token (`--color-ink-lift`). Corner Blue, Lit is still written as a literal (#33B4E8) in the corner pad's hover rule, the arena pad's hover fill is a literal (`#1F252C`), and the canvas field uses literal values for its fill (`#F4F6F7`) and placeholders (`#66717B` on canvas, `#7D8892` on arena). Treat those as the system's values; promote them to tokens rather than inventing near neighbours.

The pre-Góc Xanh navy tokens and `corner-deep` have been removed from `globals.css`; nothing referenced them. The unmigrated admin pages (/admin/*) use their own hard-coded slate values and are outside this system. Never bring navy or slate values onto public pages.

### Named Rules
**The Two Grounds Rule.** Each section is either arena or canvas, full-bleed. Photography and atmosphere go on arena; comparison, pricing, lists and long reading go on canvas. Canvas sections carry the `on-canvas` class so focus rings switch to ink. The one exception is the colour floor, where the visitor's chosen EVA colour becomes the ground and the text flips to whichever of Canvas Ink or Rope White contrasts more.

**The Corner Blue Is Not Canvas Ink Rule.** Corner Blue on canvas measures 2.2:1, so it is never used as text or as a thin line on canvas. On canvas, emphasis is ink and the action is the ink pad or the corner pad. (The brand guide's "blue on white ✅" predates the canvas ground and does not apply to it.)

**The Black-Type Pad Rule.** Anything filled with Corner Blue carries Canvas Ink type (7:1), never white (2.8:1).

**The Alert Is Not A Rope Rule.** Errors use Alert on canvas and Alert, Dark on arena. Rope Red is for ropes and display numerals only and fails as small text.

## Typography

**Display Font:** Archivo (variable `wdth` axis, via `next/font`, latin + vietnamese subsets), with sans-serif fallback
**Body Font:** Archivo at 100% width
**Label/Mono Font:** Archivo at 75% width; tabular numerals for prices and round counters

**Character:** One family stretched across three widths. The extra-condensed apron caps read like ring lettering and fight-poster type. The 75% placard caps carry labels and short titles with a sign-painted firmness. The 100% body stays plain and easy to read in Vietnamese.

The site uses Archivo instead of the brand guide's Montserrat / Inter / Oswald. The user approved this change, so the typography section of `content/brand-kit/brand-guidelines.md` is out of date for the website. The guide's logo and TGG Blue commitments still bind.

### Hierarchy
Every apron size is a class in `globals.css` (`.t-display`, `.t-page`, `.t-headline`, `.t-sub`); use the class, never a one-off clamp. Nothing on the site runs above 6rem.
- **Display / Apron** (`.t-display`, 900, 62% width, uppercase, `clamp(2.75rem, 6vw, 6rem)`, line-height 1.15): the homepage h1 only, left-aligned beside the hero photo. The second line often switches to Corner Blue on black or to Arena Mute.
- **Page title / Apron** (`.t-page`, `clamp(2.5rem, 5.2vw, 5rem)`, max 14ch): the h1 of every inner page (Products, FAQ, Gallery, Order, the designer), set by the page head, and the colour name on the colour floor.
- **Headline / Apron** (`.t-headline`, `clamp(2.25rem, 4.4vw, 4.25rem)`): section h2s, including the closing section. Product line names (LIGHT, PRO) go larger at `clamp(3.25rem, 6vw, 5.5rem)` on the homepage and the plain `.t-headline` on /products, so no line name outranks the page h1.
- **Headline-sub / Apron** (`.t-sub`, `clamp(1.875rem, 3.2vw, 3rem)`): secondary h2/h3 inside a section (parents strip, FAQ), FAQ category headings, the inner-page Zalo close, the order form heading and the gallery empty/error states. The mobile menu links use apron at 2.75rem. Step numerals are apron at 3rem in Corner Blue.
- **Title / Placard** (800, 75%, uppercase, 1.5–1.875rem, line-height 1): round titles, layer notes, the price-table caption, order step and option titles.
- **Body** (400, 100%, 1.125rem, line-height 1.625): ledes and descriptions, capped at 28–40rem (about 60–75ch). Page-head ledes step up to 1.25rem from `md`. Use 1rem for supporting copy and field input text, and 1.25rem for short parent facts.
- **Label / Placard** (800, 75%, uppercase, 0.95–1.125rem, +0.02em): nav links, promises on the rope, rope-links, button text, segmented controls and field labels (0.95rem), figure captions (0.875rem), table headers, trailing tags.
- **Numeral** (placard with tabular figures, `normal-case`): prices (1.25rem in tables, 1.875–2.25rem for "từ" prices), the round counter and the lightbox "n / total" count.

### Named Rules
**The Apron Leading Rule.** Apron type keeps line-height 1.15 and 0.04em top padding. At 62% width Archivo's caps are 0.69em tall, stacked marks (Ầ, Ấ) reach 1.05em and the dot below (Ạ) drops 0.19em, so a dot-below over a circumflex (BẠN over TÊN) needs at least 1.08 to stay apart. Never tighten it below 1.15.

**The Three Widths Rule.** Use 62% only for headings, 75% only for labels, titles and buttons, and 100% for anything a person reads as a sentence. Never set a paragraph in apron or placard. Questions in the FAQ are placard with `normal-case` at 1.35rem (a recorded detector exception).

**The No Second Family Rule.** The 14 1FTV / SVN / UTM display faces declared in `globals.css` are lettering fonts for the guard designer (/customize), offered only as choices for text printed on the guard. They are not site typography, and each is recorded as a detector exception in `.impeccable/config.json` for that reason.

## Layout

- **Container:** max-width 1400px, centred, with gutters of 16px on mobile and 32px from `md` up. Photo marquees and ropes break out to full bleed. The marquee's left edge still aligns to the container through a computed `--edge` padding.
- **Section rhythm:** 96px vertical padding, or 128px from `md` up. Within a section: the heading, then the lede at 24px, then the content block at 48–56px, then secondary blocks at 80–96px.
- **Inner pages:** every inner page opens with the page head on arena and ends with the Zalo close on arena; the body between them follows the Two Grounds Rule.
- **Grids:** asymmetric two-column splits on desktop (`1fr 1.15fr`, `0.9fr 1.1fr`, `0.8fr 1.2fr`, `0.7fr 1.3fr`, `1.15fr 1fr`). Never use three equal cards. Product comparison and the order options use `1fr 3px 1fr`, with a vertical rope as the centre column. Photo grids use a 16px gap. Placeholder grids are three-up from `sm`.
- **Breakpoints:** Tailwind defaults (`sm` 640px, `md` 768px, `lg` 1024px). The `lg` breakpoint is the desktop switch for the inline nav, the hero's two-column split, page-head photo anchoring, the five-column steps, the FAQ index, the designer's two-column layout and hiding the mobile corner bar.
- **Sticky devices:** the FAQ index pins at `top: 7rem` on desktop. Directly under the nav (`top` 64px, or 72px from `md`) pin: the gallery filter bar, the FAQ mobile chip row and the designer's preview stage below `lg`. Anchored sections set `scroll-margin-top` to clear whichever bar is pinned.
- **Designer layout:** tools in a 320px column on the left, the preview stage on the right (`320px minmax(0, 1fr)`, rows `auto 1fr`). The stage sits in row 1 so the download and reset actions land directly under it while the taller tool column spills into row 2. Below `lg` the stage comes first and pins under the nav while the tools scroll beneath it.
- **Mobile action:** below `lg`, a fixed bottom bar (blue rope on top, arena at 95%, safe-area padding) holds the corner pad (flex 1.4) and an arena pad (flex 1). The footer adds 112px of bottom padding below `lg` so the bar never covers content.
- **Nav height:** 64px, or 72px from `md` up. Pages offset their first section by the same amount.

### Named Rules
**The 44px Rule.** Every interactive target is at least 44×44px. This covers the corner-pad-sm (44px), icon buttons (44px), segmented controls (44px), designer fields (44px), canvas fields (48px), colour swatches (`min-height` 44px), gallery tile links and thumbnails (44px), the lightbox close (44px) and FAQ rows (64px). The main pads are 56px and the large pad is 72px.

**The Nearest Corner Rule.** On a phone, the primary Zalo action is always the nearest thing to the thumb. Desktop corner pads that duplicate the fixed bar are hidden below `lg`.

## Elevation & Depth

The system is flat and lit. Depth comes from the arena's darkness, stage light and photography, not from stacked cards. A soft radial "arena light" (`radial-gradient(60% 50% at 70% 8%, rgb(242 244 245 / 0.07), transparent 70%)`) falls from the top of the hero. Hero and page-head photos fade into the black through a left and top mask (18% from the left and 12% at top and bottom on the hero, 30% and 18% on the page head), so the photo reads as full-bleed. On desktop the hero is an even two-column split, vertically centred, at least `min(100svh, 50rem)` tall: headline, lede and corner pad on the left, the 3:2 photo on the right inside the container. The four promises sit on the rope below in a four-column grid (two columns on phones), placard at 1.25rem from `md`, each centred in its column from `lg`. Blurred 95% bars (the nav once scrolled, the mobile bar, the gallery filter bar on arena and the FAQ chip row on canvas) are the only translucent layers. The gallery lightbox is arena at 97%.

### Shadow Vocabulary
- **Pad padding** (`box-shadow: inset 0 -5px 0 rgb(0 0 0 / 0.18), 0 10px 24px -12px rgb(28 166 223 / 0.55)`): the corner pad only. The inset bottom reads as foam thickness, and the faint blue spill sits under it.
- **Pad pressed** (`box-shadow: inset 0 -2px 0 rgb(0 0 0 / 0.2)` with `transform: scaleY(0.95)`): the corner pad's `:active` state, like padding compressing.
- **Selection ring** (`box-shadow: 0 0 0 3px <floor>, 0 0 0 6px <ink>`): the chosen colour swatch on the colour floor. It is a 3px ring separated by a 3px gap, consistent with the rope weight.

### Named Rules
**The Only The Pad Is Padded Rule.** The corner pad is the only element with a shadow. Photos, slots, tables and sections stay flat. Never add hard offset shadows or glow blobs.

## Shapes

- **Ropes:** 3px tall, with 3px radius at short lengths. Section-spanning ropes square off (`rounded-none`). A faint 115° diagonal stripe (`rgb(0 0 0 / 0.14)`, 2px of every 7px) reads as the rope's fabric wrap. Ropes come in blue, red, white and ink. Inside arena content, rows are divided by 3px borders in white at 10%.
- **Rope stacks:** the footer opens with three ropes (blue, white at 70%, red) stacked with 8px gaps, like the ring's three ropes. Single ropes mark every change of ground. The Products and closing sections open with red, How It Works opens with white at 80%, and the hero and every page head close with white (the hero adds blue). The gallery filter bar sits between a white rope above and a blue rope below.
- **Pads:** softly rounded like foam (11px for small, 14px for regular, 18px for large), with two 1px seam lines inset 10px from the sides on the corner pad.
- **Controls and fields:** 11px radius (the small-pad radius) with a 3px border, so a field or toggle reads as a rope drawn into a pad shape.
- **Photos and slots:** 6px radius on a black ground, in 3:2 everywhere. Lab equipment slots use 4:3. Gallery tiles are the one 4:3 photo crop (the uploaded sources are portrait with the guard in a landscape band); the lightbox always shows the full image.
- **Focus:** a 3px outline (Corner Blue on arena, Canvas Ink on canvas) with a 3px offset and 2px radius. Fields replace the outline with a border shift: Canvas Ink on canvas, Corner Blue on arena.
- **List rules:** short 16×3px ink bars stand in for bullets on canvas. Promises on the rope use 8px Corner Blue dots.
- **Icons:** one hand-drawn stroke set, 24×24 viewBox, 2px stroke with round caps and joins, `currentColor`. No icon fonts, no emoji, no glyph icons.

## Components

### Buttons
Padded and tactile: a primary action looks like part of the ring's corner pad.
- **Corner pad (primary):** Corner Blue fill with a top sheen (`linear-gradient(180deg, rgb(255 255 255 / 0.18), transparent 38%)`), Canvas Ink placard type at 1.125rem, 56px minimum height, 14px radius, two seam lines, padded shadow. Use it for Zalo and other primary conversions (the order submit, the designer's download), with the Zalo stroke icon leading where it opens Zalo. Sizes: `sm` (44px, 0.95rem, nav), regular (56px, in sections), `lg` (72px, 1.5rem, the hero, closing bell, page closes and mobile menu). There is one corner pad per viewport region.
- **Hover / Active:** the fill lifts to Corner Blue, Lit. Pressing compresses it vertically (`scaleY(0.95)`, 160ms on the expo ease).
- **On a coloured floor:** add a 3px outline in the floor's ink colour at 0 offset so the pad holds its edge against any EVA colour.
- **Ink pad (secondary on canvas):** Canvas Ink fill, canvas-coloured placard type at 1.125rem, 56px tall, 14px radius, 28px horizontal padding, with a trailing arrow icon. On hover the fill changes to Ink Lift. Use it for per-product "Đặt LIGHT / Đặt PRO". It has no seams or sheen. The corner pad alone is padded.
- **Arena pad (secondary on black):** the same shape as the ink pad with an Arena Lift fill and Arena Ink type; hover deepens the lift. It appears in the mobile corner bar next to the corner pad and as the designer's reset.
- **Disabled:** ink and arena pads and segmented controls drop to 40% opacity with a not-allowed cursor.

### Segmented Control
The one shape for every toggle, filter, chip and choice: product line, package, gallery filters, FAQ jump chips, designer tool options and secondary contact routes. Placard at 0.95rem, 44px minimum height, 11px radius, a 3px border. On arena the border is white at 16% and the type Arena Ink; under `on-canvas` the border is Canvas Fold and the type Canvas Ink. Hover darkens the border to the type colour. When `aria-pressed` or `aria-checked` is true it fills solid with the type colour and the type flips to the ground colour. Callers may make it taller (48–64px) or stack a title and price inside it, but never change its border weight or radius.

### Inputs / Fields
- **Canvas field:** a fill slightly lighter than the canvas (#F4F6F7), Canvas Ink text at 1rem, 48px minimum height, 11px radius, 3px Canvas Fold border.
- **Focus:** the border turns Canvas Ink; there is no outline or glow.
- **Error:** `aria-invalid` turns the border Alert, and the message sits under the field in Alert, linked by `aria-describedby`.
- **Designer field (on arena):** Arena fill, Arena Ink text, 44px, 11px radius, 3px white-at-16% border; focus turns the border Corner Blue.
- **Label:** placard at 0.95rem, 8px above the field. Fieldsets use the same label as their legend.

### Rope Link
The tertiary action and "see more" link. Placard type with a 3px currentColor underline, 4px below the text. On hover the rope pulls in to 35% width over 400ms on the expo ease. It usually carries a trailing arrow. Use Arena Ink on black and Canvas Ink on canvas. Social links can start in Arena Mute and brighten on hover.

### Navigation
- **Bar:** fixed, 64/72px. It is transparent over the hero and becomes 95% arena with a blur after 24px of scroll. A full-width blue rope runs along its bottom edge and draws in on load.
- **Logo lockup:** the shield icon (`/brand/logo-icon.png`) beside the name in placard type, with "Guard" in Corner Blue.
- **Links (lg+):** placard at 0.95rem with a 28px gap. Arena Mute is the default and Arena Ink the hover. The active page gets Arena Ink plus a short blue rope under it, and `aria-current="page"`.
- **Right side:** a small corner pad "Nhắn Zalo" from `sm` up, and a 44px menu button below `lg` whose three bars are ropes (white, blue, red) that cross into an X.
- **Mobile menu:** a full-screen arena sheet under the bar. Links are apron at 3.25rem, separated by 3px white-at-10% rules, with the current page in Corner Blue. A large full-width corner pad closes the sheet. Scroll is locked while open, and Esc closes it.

### Page Head
The opening of every inner page, on arena. The page-title apron h1 (max 14ch), an optional lede in Arena Mute, then an optional studio photo. From `lg` the photo fills the right 58% of the head behind the text at 80% opacity, masked into the black from the left and top, and comes up with the arena-lights motion. Below `lg` the same photo sits in flow under the lede, full-bleed at 3:2, with the lettering caption right-aligned under it. A squared white rope at 80% closes the head. Extra content (filters, promises) may follow the lede inside the head.

### Zalo Close
The close of every inner page, on arena. A squared red rope across the top, then a `1.15fr 1fr` split from `lg`: a headline-sub apron question on the left, and on the right a left-aligned lede (max 30rem), a large corner pad, and an optional row of rope-links (24px gap) for the next step. The split is vertically centred. Below `lg` the large corner pad is hidden, because the fixed mobile bar already holds Zalo (The Nearest Corner Rule); the lede and rope-links (44px tall) remain.

### Photo Frame
A studio photo on black glass: 3:2, 6px radius, black backing, `object-cover`, and a blur placeholder from the pipeline. The caption below is placard type and shows the guard's printed lettering (Arena Ink or Canvas Ink) with the EVA colour name in mute. Fall back to "Fully Design" when there is no lettering. Never caption with customer or club names.

### Gallery Tile
A 4:3 crop of a customer photo group on black, 6px radius. When a group has several images, a strip of 44px square thumbnails scrolls horizontally inside the tile; inactive thumbnails sit at 50% opacity and the active one carries a 3px Corner Blue outline. The caption is the package and colour only; tiles carry no per-tile action. Opening a tile shows the full, uncropped image in an arena lightbox whose header holds a placard "n / total" counter, the one Corner Blue "Làm một chiếc như này" link to /customize, a 44px close button and a blue rope under it. Loading tiles are Arena Lift at the same ratio and pulse only when motion is allowed.

### Filter Bar (Gallery)
A sticky bar under the nav: arena at 95% with a blur, a white rope above and a blue rope below, holding two horizontally scrolling rows of segmented controls (style and EVA colour), each with an "all" option first. A polite live region under it states the result count, with a rope-link to clear filters.

### Photo Slot
A placeholder that is clearly not a broken image. It uses Arena Lift (on black) or Canvas Fold (on canvas), with a faint 135° stripe, a 3px dashed inset border at 10% contrast, a camera stroke icon, a placard "Ảnh sắp có" line and a plain description of the photo to come. It takes the same aspect ratio as the photo it replaces. Use it for athlete, lab-staff and equipment photos until real ones exist.

### Lists, Tables, Accordions (on canvas)
- **Price table:** a 3px Canvas Ink rule under the header, 1px Canvas Fold rules between rows, placard headers in Canvas Mute, and right-aligned tabular placard prices. Below `sm` it becomes a stacked list with a 3px top rule and side-by-side LIGHT and PRO prices.
- **Accordion (FAQ):** one shared component for the homepage FAQ preview and /faq. A 3px ink top rule and 3px Canvas Fold dividers between rows. Questions are placard at 1.35rem with `normal-case`, inside an h3, in rows at least 64px tall. A plus icon rotates 45° to open. One answer is open at a time (none by default unless a caller opens one). The answer reveals through a grid-rows transition (400ms, expo ease, none under reduced motion), and closed answers are `inert`.
- **FAQ index:** from `lg`, a sticky ordered list of categories in placard at 1.25rem, between a 3px ink top rule and 3px Canvas Fold dividers, beside the questions (`0.7fr 1.3fr`); hover draws a 3px underline. Below `lg` the same categories become a sticky, horizontally scrolling row of segmented controls under the nav on canvas at 95%, closed by a 3px Canvas Fold rule.
- **Fact lists:** 3px Canvas Fold dividers, or ink bar bullets.

### Trailing Tag
A short status or qualifier ("Miễn phí", "Khuyến nghị", "2–3 ngày") set in placard at a smaller size directly after a title on the same line, in Corner Blue on black. It always follows the title, never sits above it.

### Cross-Section Diagram
A drawn cross-section of the EVA layers around a tooth (two layers for LIGHT, three for PRO, the outer PRO layer in Corner Blue), labelled in plain text with 1.5px leader lines. It has a canvas tone (ink labels, pale tooth) and an arena tone (Rope White labels, Ink Lift tooth) so it can sit on either ground. It never draws force or impact numbers.

### Guard Designer (signature)
The /customize tool on arena. The PRO / LIGHT choice is a pair of segmented controls above the layout. The tool column is a stack of sections divided by 3px white-at-10% rules, each headed in placard with the English name in Arena Mute after a slash. Inputs are designer fields, choices are segmented controls, and remove buttons are 44px targets carrying a small Arena Ink disc with a close stroke icon. The preview stage is an Arena Lift panel with a 6px radius; the corner pad (download) and arena pad (reset) sit under it. A collapsible three-step guide uses Rope Red apron numerals.

### Colour Floor (signature)
The section ground floods with the selected PRO EVA colour (700ms background transition), and the text switches to the higher-contrast ink. Above the picker sits the colour name in apron, announced through `aria-live`. The 16 swatches form a radiogroup in 8 columns with roving tabindex and arrow-key movement. Each swatch is 6px rounded and at least 44px, and the selected swatch shows the selection ring. Matching studio photos appear beside it. When none exist, it shows the real EVA-sheets photo with an honest caption.

### Five Steps (How It Works)
The process as five plain steps read left to right, with no ring metaphor. Each step opens with an apron numeral (3rem, Corner Blue) followed by a 3px rope running to the next step (white at 25%, the last one blue), then a 3:2 photo or photo slot, a placard title and a 1rem body description. Five columns from `lg`, two from `sm`, one on phones. The section heading sits in a `1fr auto` split with the corner pad on the right from `lg`. The detailed version lives on /quy-trinh (see Process Page); the homepage section links to it.

### Carousel
The one way to browse a set of photos on the homepage (`components/ring/Carousel.tsx`). Items of equal size sit in a horizontal scroll-snap track (four per view from `lg`, two from `sm`, about 1.25 on phones, 16px gaps), so swiping works on touch. Under the track a 3px progress rope shows which part is on screen (Corner Blue on white-at-15% on arena, ink on Canvas Fold on canvas), and two 48px arrow buttons (6px radius; Arena Lift turning Corner Blue on hover on arena, Canvas Ink on canvas) move one full view at a time. It loops: "next" on the last view returns to the start and "previous" on the first view jumps to the end. Scrolling is smooth only when motion is allowed.

### Lineup (homepage gallery)
A carousel of sixteen studio photos at 3:2, one per EVA base colour where possible, ordered so two of the same colour never sit side by side. Each caption is only the base colour (placard, 1.125rem, Arena Ink) after a 14px swatch dot in that colour. No lettering, order or customer names appear in the caption. The section has exactly two actions, both rope-links: "Mở toàn bộ gallery" and "Thiết kế chiếc của bạn" (Corner Blue, to /customize).

### Customer Wall
"Khách hàng đeo guard TGG.": a canvas-tone carousel of 4:5 portrait photos of customers wearing their guards. Until real photos exist each item is a canvas Photo Slot naming the shot to come; real photos replace slots one for one.

### Products Page (/products)
Follows the logic of the original products page: one line at a time behind a PRO / LIGHT tab switch (`components/products/ProductTabs.tsx`). The page head carries the four promises. The tab bar pins under the nav (arena at 95% with a blur, a white-at-20% rope under it); each tab shows the line name in apron, its "for whom" placard and, from `sm`, the "từ" price, and a Corner Blue rope slides under the selected tab (500ms, expo ease). PRO opens by default; `#pro` / `#light` in the URL opens that tab, and arrow keys move between tabs (role `tablist`, roving tabindex). Switching tabs replays the panel entrance (`.anim-panel`: 14px rise and fade, 450ms, only when motion is allowed). Each panel has an arena part (line name, Corner Blue "for whom", lede, sports, four strengths divided by ropes, one large and two small 3:2 photos, the cross-section with a one-line caption) and a canvas part ("Chọn gói PRO." / "Chọn gói LIGHT.": three tiers divided by vertical ropes, Custom Text marked "Khuyên dùng" with a small ink tag and an ink pad, the others rope-links; then a "Muốn xem guard của bạn trước khi đặt?" strip with an ink pad "Tự thiết kế" to /customize). In PRO the "16 màu EVA" strength holds the EVA palette (`EvaPalette`): 16 real swatches (8 per row from `sm`, 4 below, each at least 44px) whose name and English name show above the grid on hover, focus or tap, with the selection ring, plus a rope-link "Thử màu này trên guard". After the tabs, "PRO hay LIGHT?" compares only the rows that differ (PRO column first, matching the tabs) and states once what both lines share. Tier names and prices come only from `lib/packages.ts`.

### Process Page (/quy-trinh)
The full five steps, linked from the nav, the footer, the homepage steps section ("Xem chi tiết quy trình") and /order. Page head "Quy trình 5 bước." with four placard figures (10–15 phút scan, 24 giờ bản thiết kế, 2–3 ngày sản xuất, ship miễn phí). A step bar (`components/process/StepNav.tsx`) pins under the nav and highlights the step in view (Corner Blue numeral, a blue rope that draws in under it). Each step is a full-width arena block divided by white-at-10% ropes, photo and text alternating sides from `lg`: a Corner Blue apron numeral with its trailing tag (duration or cost), a `.t-sub` title, the description, then two rope-topped columns "Bạn làm gì" / "TGG làm gì". Step 2 adds the two scan options side by side; step 1 links Zalo, Instagram and Facebook; step 3 links /customize; step 5 links the FAQ care section. A canvas "Lưu ý." list and the Zalo close end the page. /order no longer repeats the steps: its head shows a one-line numbered summary and links to /quy-trinh.

### Motion vocabulary
These belong to the world, not to a component. The ease is `cubic-bezier(0.16, 1, 0.3, 1)`. Ropes draw in from the left over 900ms (staggered 120ms). Arena lights come up on hero and page-head photos over 1400ms (from `brightness(0.35) saturate(0.6)`). The floor floods over 700ms and rope-links pull over 400ms. Controls and fields change colour over 200ms. All of these run only under `prefers-reduced-motion: no-preference`, and smooth scrolling follows the same condition.

### Photography pipeline
Shipping photos come only from `data/photo-manifest.json` (source path, lettering, EVA colour, alt). `scripts/export-photos.mjs` exports them to `public/photos/<id>.jpg` (width 1800, or 2400 for hero photos; mozjpeg q82; provenance written to EXIF ImageDescription) and generates `data/photos.ts` with dimensions and blur placeholders. Components read photos through `photo(id)`. Do not hand-place rasters or edit `data/photos.ts`. Gallery tiles are the exception: they come from the customer gallery feed and are cropped by the tile, not by the pipeline.

## Do's and Don'ts

### Do:
- **Do** give every section one ground, arena or canvas, and mark each change of ground with a full-width 3px rope (`rounded-none`).
- **Do** use a 3px rope (or a 3px border in a rope colour) for every divider, underline, progress bar and table rule. The only lighter rule is the 1px Canvas Fold between table rows.
- **Do** put the primary action in a Corner Blue corner pad with Canvas Ink type, and keep the Zalo pad nearest to the thumb on mobile.
- **Do** set headings in apron (Archivo 62% / 900 / uppercase / 1.15 leading, sizes from the `.t-*` scale), labels and buttons in placard (75% / 800), and sentences at 100%.
- **Do** show real studio photos at 3:2 on black with 6px corners, captioned with the printed lettering (the homepage gallery carousel shows only the base colour), and use a labelled Photo Slot where a photo is still missing.
- **Do** keep every interactive target at 44×44px or larger.
- **Do** give every animation a reduced-motion still, and pause anything that moves on hover and focus.
- **Do** add `on-canvas` to canvas sections so focus rings, segmented controls and fields turn ink.
- **Do** use the shared stroke icon set (24px grid, 2px round stroke, `currentColor`) for every icon.
- **Do** open every inner page with the page head and close it with the Zalo close.
- **Do** use the segmented control for every toggle, filter and choice, and the field classes for every input, so state is shown by fill and border, not by new colours.
- **Do** put a status tag after the title it qualifies, on the same line.

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
- **Don't** use Rope Red for error text, or the old navy and admin slate values on public pages.
