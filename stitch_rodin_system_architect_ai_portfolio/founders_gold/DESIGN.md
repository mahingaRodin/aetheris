---
name: Founders Gold
colors:
  surface: '#16130b'
  surface-dim: '#16130b'
  surface-bright: '#3d392f'
  surface-container-lowest: '#110e07'
  surface-container-low: '#1f1b13'
  surface-container: '#231f17'
  surface-container-high: '#2d2a21'
  surface-container-highest: '#38342b'
  on-surface: '#eae1d4'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#eae1d4'
  inverse-on-surface: '#343027'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#e4c451'
  on-secondary: '#3b2f00'
  secondary-container: '#aa8e1d'
  on-secondary-container: '#332900'
  tertiary: '#bfcdff'
  on-tertiary: '#082b72'
  tertiary-container: '#97b0ff'
  on-tertiary-container: '#254188'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffe17a'
  secondary-fixed-dim: '#e4c451'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#554500'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#27438a'
  background: '#16130b'
  on-background: '#eae1d4'
  surface-variant: '#38342b'
typography:
  display-lg:
    fontFamily: Poppins
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Poppins
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style
The design system embodies a "Minimalist Luxury" aesthetic, merging the meticulous precision of automotive engineering with the airy, functional elegance of high-end consumer technology. It is designed for elite enterprise environments where confidence is conveyed through restraint rather than excess.

The visual language relies on **high-contrast minimalism**. It utilizes expansive whitespace (or "dark space") to create a sense of exclusivity and focus. Surfaces are treated with a hierarchy of deep obsidian tones, punctuated by rare, surgical applications of metallic gold to denote importance and premium value. The emotional response should be one of quiet authority, stability, and uncompromising quality.

## Colors
The palette is rooted in a "Triple Black" foundation to provide maximum depth and contrast for the metallic accents. 

- **Primary Gold (#D4AF37):** Reserved for primary actions, critical states, and brand-defining moments. It should never exceed 5% of the total screen real estate.
- **Secondary Gold (#F4D35E):** Used for hover states of gold elements or subtle highlights in data visualization.
- **Surface Hierarchy:** Depth is created through value-shifting. The base layer is the darkest (#0A0A0A), with nested elements (sections and cards) stepping up in brightness to simulate physical proximity to the user.
- **Borders:** Used to define structure without adding visual noise. Borders should remain at 1px width to maintain the precision-engineered feel.

## Typography
The typographic scale emphasizes a clear distinction between editorial impact and functional utility.

- **Headlines:** Use Poppins with ExtraBold weights to create a "locked-in" architectural feel. Track these tightly (-0.01em to -0.02em) to ensure they feel solid.
- **Body:** Inter provides a neutral, highly legible contrast to the expressive headlines. It ensures that long-form data and enterprise content remain effortless to scan.
- **Technical/Data:** JetBrains Mono is utilized for labels, metadata, and status indicators. This adds a layer of "instrument-panel" precision, reinforcing the enterprise/finance nature of this design system.

## Layout & Spacing
This design system utilizes a **12-column fixed grid** for desktop and a **4-column fluid grid** for mobile. 

- **The 8px Rule:** All spacing between elements must be multiples of 8px. 
- **Breathe:** Use generous margins (64px+) between major sections to maintain the luxury aesthetic. High-end design is defined by the space you *don't* use.
- **Alignment:** Align text-heavy components to the left to maintain a clean vertical "spine." Use centered layouts only for high-impact hero sections or empty states.

## Elevation & Depth
Depth is communicated through a combination of **Tonal Layering** and **Soft Ambient Shadows**.

- **Surface Tiers:** Background (#0A) > Section (#17) > Card (#1F).
- **Shadows:** Use large-radius, low-opacity shadows (e.g., `box-shadow: 0 20px 40px rgba(0,0,0,0.4)`). Shadows should not have a visible "glow" but rather a subtle lift that separates the card from the section.
- **Glassmorphism:** For top navigation and floating menus, use a 12px backdrop blur with a 10% opacity white fill. Apply a 1px border (#2E2E2E) to these elements to define their edges against the dark background.

## Shapes
The shape language is refined and consistent, using 16px (1rem) as the standard corner radius for all major UI components.

- **Cards & Modals:** Always 16px.
- **Input Fields:** 8px (Soft) to provide a slightly more technical, disciplined look compared to the larger containers.
- **Buttons:** 16px or fully pill-shaped depending on the context. Pill-shapes should be used exclusively for primary CTAs to make them stand out from the rectangular grid.

## Components
- **Buttons:** Primary buttons use a solid Gold (#D4AF37) fill with black text. Secondary buttons use a transparent background with a 1px Gold border.
- **Cards:** Use the #1F1F1F background. On hover, the border color should transition from #2E2E2E to #D4AF37 (Gold) to indicate interactivity.
- **Input Fields:** Dark backgrounds (#0A0A0A) with #2E2E2E borders. Focused states should use a 1px Gold border with a subtle outer glow.
- **Dividers:** Use 1px thin lines. For luxury accents, a horizontal divider may transition from transparent to #D4AF37 in the center and back to transparent.
- **Chips/Tags:** Use JetBrains Mono for the label. Backgrounds should be dark (#171717) with subtle borders. 
- **Navigation:** Top-fixed bar with backdrop-filter: blur(12px). Active states are indicated by a 2px Gold underline or a Gold text color shift.