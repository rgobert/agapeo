# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional landing page for **Agathe Vraïmakis**, founder of **Agapèo** - an ICF-certified career coach specializing in professional transitions and posture clarification.

This is a vanilla JavaScript static website with no build system - pure HTML5, CSS3, and ES6+ JavaScript.

### About Agapèo

**Agapèo** is a professional coaching practice created in 2017 (EURL registered December 2017, operations started January 2018).

**Core offering**: Premium 1:1 professional coaching over 6 months (10 sessions of 90 minutes each) focused on helping experienced managers and professionals clarify their professional posture and make aligned decisions during career transitions.

**Target clients**:
- Primary: Experienced managers (35-50 years) in professional transition
- Secondary: Independent professionals in pivot phase
- B2B: Companies for training and collective coaching

**Business model**: Premium positioning with ~20 individual clients per year, €69,000 annual revenue target (85% B2C, 15% B2B).

**Communication channels**: LinkedIn (main channel - 6,758 subscribers as of Dec 2025), professional network, recommendations. No active commercial prospecting.

### Agathe's Background

- 10 years at Bouygues Immobilier in various roles
- 4+ years as regional disability referent (Grand Est, Auvergne-Rhône-Alpes, Pays de Savoie)
- Master 2 in Adult Training (2015-2016)
- Professional coaching certification (2016)
- Ongoing training in NVC, transactional analysis, team coaching

## Development Setup

This is a static site with **no build process**. To develop:

```bash
# Open directly in browser
open index.html

# OR use Python's built-in server
python3 -m http.server 8000

# OR use PHP's built-in server
php -S localhost:8000
```

**No tests, linters, or build commands** - the site runs directly in the browser.

## Code Architecture

### Modular JavaScript Structure (`script.js`)

The codebase uses a **module pattern without bundlers**. All JavaScript is in a single `script.js` file organized into self-contained modules:

```javascript
CONFIG                  // Global configuration constants
Utils                   // Utility functions (validation, sanitization, debounce)
ThemeModule            // Dark/light mode with localStorage persistence
NavigationModule        // Mobile menu hamburger + smooth scroll
FormModule             // Contact form validation + submission
AnimationModule        // Scroll animations + counter animation
FAQModule              // Accordion interactions
FooterModule           // Auto-updates copyright year
```

**Initialization order matters**: `ThemeModule.init()` must run first to prevent theme flash, followed by other modules in `DOMContentLoaded` event.

### CSS Variable System (`styles.css`)

The entire design uses **CSS variables for theming**. Two complete color palettes defined in `:root`:

- **Light mode (default)**: Variables in `:root`
- **Dark mode**: `[data-theme="dark"]` overrides + `@media (prefers-color-scheme: dark)` fallback

**Design System Variables (v1.3.1+)**:

The site uses a comprehensive design token system for consistency:

```css
/* Spacing Scale (8px base) */
--space-xs: 0.5rem;      /* 8px */
--space-sm: 1rem;        /* 16px */
--space-md: 1.5rem;      /* 24px */
--space-lg: 2rem;        /* 32px */
--space-xl: 3rem;        /* 48px */
--space-2xl: 4rem;       /* 64px */
--space-3xl: 6rem;       /* 96px */
--space-4xl: 8rem;       /* 128px */

/* Border Radius System */
--radius-sm: 8px;        /* Inputs, small buttons */
--radius-md: 12px;       /* Cards, main buttons */
--radius-lg: 16px;       /* Featured cards, hero elements */

/* Fluid Typography */
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--text-base: clamp(1rem, 0.95rem + 0.25vw, 1.0625rem);
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
--text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
--text-3xl: clamp(2rem, 1.6rem + 2vw, 2.75rem);
--text-4xl: clamp(2.5rem, 2rem + 2.5vw, 3.5rem);
```

**When adding new styled elements**, always use CSS variables:
```css
.new-element {
    background: var(--bg-primary);
    color: var(--text-primary);
    border-color: var(--border-color);
    padding: var(--space-lg);
    border-radius: var(--radius-md);
    font-size: var(--text-base);
}
```

### Theme System

Theme controlled by:
1. `data-theme` attribute on `<html>` element (`"light"` or `"dark"`)
2. Persisted in `localStorage` as key `theme`
3. Auto-detects system preference via `prefers-color-scheme`

### Form Handling

Contact form uses **client-side validation only**:
- XSS protection via `Utils.sanitizeString()`
- Email regex validation
- No backend - form submission shows success message only

### Image Optimization

Images in `/images/` directory:
- Hero images: `agathe-hero.jpg` and `agathe-hero.webp`
- About section: `agathe-about.jpg` and `agathe-about.webp`
- Logo: `agapeo-logo.png`

**Best practices**:
- Use WebP format when possible (fallbacks exist)
- Hero images use `loading="eager"`
- Below-fold images use `loading="lazy"`
- Always include `width` and `height` attributes to prevent CLS (Core Web Vitals)

## Brand & Content Guidelines

### Brand Identity (Agapèo)

**Premium Color Palette (v1.3.0 - January 2026)**:

**Mode Clair (Light)** :
- **Blanc poudré** `#FFF2F2` : Fond principal (30% poids visuel) - Douceur, accueil, premium soft
- **Bleu** `#2438B9` : Couleur primaire dominante (40% poids visuel) - Structure, autorité, confiance professionnelle
- **Doré** `#C0A27B` : Accents premium (20% poids visuel) - CTAs, luxe, certifications, moments clés
- **Neutres** : `#1A1A1A` (quasi-noir), `#4A4A4A` (gris foncé), `#6A6A6A` (gris moyen) - Texte et hiérarchie

**Mode Sombre (Dark)** :
- **Noir bleuté** `#0F1419` : Fond sophistiqué
- **Bleu lumineux** `#5B72E6` : Adapté pour contraste optimal
- **Doré chaud** `#D4B68F` : Plus visible et chaleureux sur fond sombre
- **Neutres adaptés** : `#F5F5F5`, `#D0D0D0`, `#A0A0A0`

**Color Usage Strategy** :
- **Bleu dominant** : Navigation (background), tous les H2/H3, footer (background), liens, featured card borders
- **Doré premium** : Boutons CTA primaires, certifications, counter "7 ans", service details borders, hover states premium
- **Blanc poudré** : Sections principales (Hero, Piliers, Services, FAQ, Contact), ambiance douce et accueillante
- **Contraste WCAG** : Tous les ratios respectent AA/AAA (14.8:1 pour texte sur blanc poudré)

**Typography**: Inter font family from Google Fonts
- Font-weight 700 sur boutons dorés pour lisibilité optimale
- Font-weight 600 sur navigation pour clarté sur fond bleu

**Design philosophy**: Premium, professionnel, autorité bienveillante, clarté structurelle

### Core Value Proposition

"J'accompagne des professionnels et des organisations à retrouver une posture juste dans le monde professionnel, à travers une clarification de posture et de repères permettant des décisions plus claires, des responsabilités assumées et des relations professionnelles plus saines et durables."

**Key differentiators**:
- Focus on **posture clarification** rather than motivation
- **Long-term approach** (6 months) vs quick fixes
- **Discernment** vs prescription
- **Autonomy** vs dependency
- **Premium positioning** with selective client intake

### Content Tone

- Professional but approachable
- Focus on clarity, discernment, and alignment
- Avoid motivational/inspirational clichés
- Emphasize responsibility and autonomy
- No "quick fix" or "transformation" language

## Important Implementation Patterns

### Adding New Sections

1. Follow existing HTML5 semantic structure (`<section id="...">`)
2. Use CSS variables for all colors
3. Add smooth scroll link in navigation if needed
4. Use IntersectionObserver for scroll animations (see `AnimationModule`)

### Security Practices

- Always sanitize user input with `Utils.sanitizeString()`
- Never use `innerHTML` with user data
- Form uses `novalidate` for custom JavaScript validation
- Strict mode enabled (`'use strict'`)

### Accessibility (WCAG 2.1)

- All images have descriptive `alt` text
- Form inputs have associated labels (some use `.sr-only` for screen readers)
- `aria-required`, `aria-label`, `aria-describedby` attributes used appropriately
- Focus states use `:focus-visible` for keyboard navigation
- Theme toggle has dynamic `aria-label`

### Performance

- **No external dependencies or frameworks**
- CSS animations use GPU-accelerated properties (`transform`, `opacity`)
- Scroll animations use `IntersectionObserver` (efficient, no scroll listeners)
- Counter animations use `requestAnimationFrame`
- Debouncing available via `Utils.debounce()`

## File Structure

```
/
├── index.html                      # Single-page application
├── styles.css                      # All styles with CSS variables
├── script.js                       # All JavaScript modules
├── images/                         # Image assets
│   ├── agathe-hero.jpg/webp       # Hero section (320x320px)
│   ├── agathe-about.jpg/webp      # About section (420x420px)
│   └── agapeo-logo.png            # Agapèo logo
├── CODE-DOCUMENTATION.md          # Technical implementation details
├── THEME-GUIDE.md                 # Dark/light mode documentation
├── IMAGES-GUIDE.md                # Image optimization guide
├── SEO-GUIDE.md                   # SEO best practices
├── LOGO-INTEGRATION-GUIDE.md      # Logo usage guide
├── CHANGELOG.md                   # Project history
└── ConduireUnProjetDeCréationDEntreprise_DossierDeCertification_AgatheVRAIMAKIS.pdf  # Business plan
```

## Common Modifications

### Updating Content

All content is in `index.html`. Key sections:
- **Hero**: Main landing section with CTA
- **Services**: Coaching offerings (1:1 premium, B2B training)
- **About**: Agathe's background and expertise
- **Testimonials**: Client testimonials
- **Contact**: Contact form and info

### Changing Colors

Edit CSS variables in `:root` (light mode) and `[data-theme="dark"]` (dark mode) sections of `styles.css`.

### Adding Animations

Use existing `IntersectionObserver` setup in `AnimationModule.observeElements()`. Add `.fade-in`, `.slide-in`, or `.scale-in` classes to HTML elements.

### Updating Contact Info

Contact information is hardcoded in `index.html` - search for phone, email, or address strings.

## Schema.org Structured Data

The site includes JSON-LD structured data for:
- **Organization/LocalBusiness**: Agapèo company info
- **Person**: Agathe Vraïmakis profile
- **FAQPage**: FAQ section

**Update these** in `<script type="application/ld+json">` tags when content changes for proper SEO.

## Business Context (for content changes)

### Target Audience

**Primary (B2C)**: Experienced managers (35-50 years) in "silent transition" - competent and still successful externally but experiencing growing internal misalignment. They don't see themselves as "in crisis" but know a cycle is closing.

**Secondary (B2C)**: Independent professionals in pivot phase with similar posture/identity questions.

**B2B**: Companies wanting aligned and sustainable leadership development through training and collective coaching.

### Service Offering

**Core offer**: Premium 1:1 coaching (6 months, 10 sessions of 90 min, €3,000)
- Not motivational coaching
- Not therapy
- Not a standardized method
- Focus: clarify posture → make aligned decisions → sustainable autonomy

**Complementary**: B2B training/workshops on managerial posture, leadership, professional transitions.

### Communication Strategy

- **LinkedIn**: Main channel (6,758+ followers) with recurring content formats: "Déclic du lundi", "Dissection des mots"
- **Professional network**: Recommendations and referrals
- **No active prospecting**: Relational and selective acquisition
- Long decision cycle (several weeks to months) - integrated into strategy

## Git Workflow

Recent commits show conventional commits pattern:
- `feat:` for features
- `fix:` for bug fixes
- `refactor:` for refactoring
- `docs:` for documentation

**Commit messages are in French** in this project.

## SEO Implementation

### Meta Tags & Keywords
- **Title**: "Agathe Vraïmakis - Coach Carrière Lyon | Reconversion & Bilan de Compétences"
- **Target keywords**: reconversion carrière Lyon, bilan de compétences Lyon, évolution de carrière, coaching exécutif Lyon, transition professionnelle, coach carrière certifiée ICF
- **Geolocation**: GPS coordinates for Lyon included for local SEO

### SEO Structure
- **H1**: Contains primary keywords with location
- **H2/H3**: Optimized with geo-targeted keywords
- **Schema.org**: ProfessionalService type with full contact info and certifications

### Technical SEO Files
- `sitemap.xml`: For search engine indexation
- `robots.txt`: Guides crawlers

### Recommended SEO Actions
1. **Google My Business**: Essential for local visibility
2. **Content marketing**: Regular blog posts (1/month minimum)
3. **Local citations**: Yellow Pages, professional directories
4. **Backlinks**: Partnerships with business schools, HR associations

### Target KPIs
- Position tracking on "reconversion carrière Lyon"
- Organic local traffic
- Contact form conversion rate
- Google My Business reviews

## Logo & Brand Assets

### Agapèo Logo (`agapeo-logo.png`)
- **Original Color**: Red/Pink (#E11D48) - logo brand identity
- **Style**: Modern with stylized infinity symbol
- **Typography**: "AGAPÈO" in white letters
- **Format**: Square with red background

### Logo Usage
- **Header Navigation**: 50px height (40px on mobile) - Original red logo displayed
- **Footer**: 40px height with **white filter applied** (`filter: brightness(0) invert(1)`)
  - Why white? Footer has blue background (#2438B9), white logo ensures cohesion
  - Alternative: Can display original red logo on footer if preferred (remove filter)
- **Format**: PNG with transparency recommended (200x200px minimum)
- **Optimization**: Keep under 10KB

### Visual Consistency (v1.3.0)
- **Logo physique** : Conserve son rouge d'origine (identité Agapèo historique)
- **Palette site** : Indépendante du logo - Bleu/Doré/Blanc poudré
- **Cohérence** : Filtre blanc sur footer pour harmonie avec navigation bleue
- **Style** : Premium, professionnel, autorité bienveillante

## Image Management

### Current Images

**`agathe-hero.jpg/webp`** (65KB)
- Usage: Hero section (first impression)
- Dimensions: 320x320px display
- Alt text: "Agathe Vraïmakis, coach carrière certifiée ICF à Lyon, spécialisée en reconversion professionnelle"
- Loading: `eager` (visible immediately)
- Description: Professional portrait with red/coral top

**`agathe-about.jpg/webp`** (62KB)
- Usage: About section
- Dimensions: 420x420px display
- Alt text: "Portrait d'Agathe Vraïmakis, coach professionnelle Agapèo, sourire bienveillant"
- Loading: `lazy` (loads on scroll)
- Description: More relaxed, personal portrait

### HTML5 Optimization Applied
- `width` and `height` attributes prevent layout shifts (CLS)
- Descriptive `alt` text for accessibility and SEO
- `loading="lazy"` for performance (except hero)

### Image Guidelines
**Quality**:
- High resolution (min 320x320 for hero, 420x420 for about)
- Good lighting, neutral or brand-coherent background
- Professional but approachable expression

**Colors**:
- Prefer red/coral clothing (matches Agapèo brand)
- Sufficient contrast for both light/dark themes

**Format**:
- JPG for photos (good compromise)
- WebP for modern version (30% smaller)
- PNG for logos only

### Future Optimizations
- Convert to WebP with fallback using `<picture>` element
- Generate responsive images with `srcset`
- Consider preloading hero image if critical

## Code Quality & Security

### JavaScript Module Architecture

**Module initialization order** (critical):
```javascript
document.addEventListener('DOMContentLoaded', function() {
    ThemeModule.init();      // ⭐ Load theme FIRST to prevent flash
    NavigationModule.init();
    FormModule.init();
    AnimationModule.init();
    FAQModule.init();
    FooterModule.init();
});
```

### Security Implementations
- **XSS Protection**: `Utils.sanitizeString()` removes `<>` characters
- **Email Validation**: Robust regex pattern
- **No innerHTML**: Never insert user data directly into DOM
- **Strict Mode**: `'use strict'` enabled globally
- **No Global Pollution**: All code in modules

### Performance Optimizations
- **IntersectionObserver**: Efficient scroll animations (no scroll listeners)
- **requestAnimationFrame**: Smooth counter animations
- **Debouncing**: Available via `Utils.debounce()` for high-frequency events
- **GPU-Accelerated CSS**: Animations use `transform` and `opacity`

### Accessibility (WCAG 2.1)
- **Screen Reader Support**: `.sr-only` class for hidden labels
- **ARIA Attributes**: `aria-required`, `aria-label`, `aria-describedby` used appropriately
- **Focus Management**: `:focus-visible` for keyboard navigation
- **Color Contrast**: All combinations meet WCAG standards
- **Dynamic Updates**: Theme toggle updates `aria-label` on state change

### Testing Checklist
**Functionality**:
- Mobile navigation (hamburger)
- Smooth scroll to sections
- Scroll animations
- Animated counter (7 years experience)
- FAQ accordion
- Contact form validation

**Accessibility**:
- Keyboard navigation (Tab, Enter, Space)
- Screen reader testing (NVDA/JAWS)
- Color contrast verification
- Focus visibility
- 200% zoom support

**Performance**:
- Lighthouse score >90 all categories
- PageSpeed Insights (mobile + desktop)
- Core Web Vitals (CLS, LCP, FID)

---

## Version History & Design Evolution

### v1.3.0 - January 2026 - Refonte Direction Artistique Premium

**Objective**: Transformation from "luxury beige/navy" aesthetic to "premium blue/gold" identity for stronger professional authority.

**Color Palette Migration**:

| Element | Before (v1.2.0) | After (v1.3.0) |
|---------|----------------|----------------|
| **Background principal** | Beige crème `#F5F1E8` | Blanc poudré `#FFF2F2` |
| **Primary color** | Navy `#0A1628` | Bleu `#2438B9` |
| **Accent/CTA** | Burgundy `#6B2C3E` | Doré `#C0A27B` |
| **Secondary** | Champagne Gold `#D4AF37` | *(Removed - now uses primary gold)* |

**Impact**:
- Navigation: Background beige → **Bleu** (strong visual anchor)
- All H2/H3: Navy → **Bleu** (structural clarity)
- Primary CTAs: Burgundy → **Doré** (premium conversion)
- Credentials: Navy → **Doré** (authority highlighting)
- Testimonials section: Navy → **Bleu** (dramatic trust moment)
- Footer: Navy → **Bleu** (visual bookend with navigation)

**Technical Changes**:
- 48 CSS variables (24 per theme) vs 28 before
- New variable: `--shadow-gold-hover` for premium hover effects
- Removed: `--secondary-color` family (burgundy deprecated)
- WCAG AA/AAA compliance maintained across all color combinations

**Visual Balance**:
- 40% Bleu (structure, authority)
- 20% Doré (premium, action)
- 30% Blanc poudré (welcome, softness)
- 10% Blanc pur (contrast, breathing)

**Rollback**: If needed, previous palette is documented in `Journal.md` v1.2.0 entry.

### v1.3.1 - January 2026 - Finitions Professionnelles & Precision Layout

**Objective**: Transform visual precision from "good" to "exceptional" through systematic refinement of layout, design systems, and micro-interactions.

**Analysis Methodology**: Professional frontend audit identified 15 categories of issues affecting visual polish and consistency.

**Phase 1 - Critical Bugs (4 fixes)**:
1. **Mobile Menu CSS** - Added complete responsive navigation system with slide-in animation (`.nav-menu.active`)
2. **Variable Undefined** - Fixed 3 references to deprecated `--secondary-color` (now uses `--primary-color`)
3. **Image Fallback** - Removed impossible `img::before` pseudoelements (technical error)
4. **Gold Button Contrast** - Enhanced font-weight to 700 and size to 1.125rem for WCAG compliance

**Phase 2 - Design System Standardization (5 fixes)**:
5. **Typography Hierarchy** - Complete refonte:
   - h1: font-weight 300 → 700 (premium authority)
   - h2: font-weight 300 → 600 (professional structure)
   - h3: font-weight 500 → 600 (consistency)
   - Added fluid sizing with `clamp()` for responsive scaling
   - OpenType features: ligatures, kerning, improved rendering
6. **Spacing Rhythm** - 8px-based scale system (--space-xs through --space-4xl)
   - Standardized section padding: 128px desktop, 96px mobile
   - Fixed inconsistent values (100px → var(--space-4xl))
7. **Border Radius** - Unified system: 8px/12px/16px (--radius-sm/md/lg)
8. **Shadow Consistency** - Applied design tokens throughout, lightened dark mode shadows
9. **Grid Precision** - Standardized minmax values (300px pillars, 320px services)

**Phase 3 - Polish & Micro-interactions (6 fixes)**:
10. **Button Active States** - Complete interaction cycle:
    - :active states with transform feedback
    - :focus-visible outlines with border-radius
    - CSS-only ripple effect (::after pseudoelement with radial-gradient)
11. **Form Error States** - Visual feedback system:
    - :valid/:invalid states with green/red borders
    - .field-error class with warning icon
    - :not(:placeholder-shown) logic for smart validation
12. **Responsive Typography** - Fluid type scale with clamp() for all text sizes
13. **Dark Mode Polish**:
    - Adjusted testimonial background opacity (0.15 → 0.08)
    - Enhanced border visibility (rgba colors increased)
    - Added text-shadow for improved readability
14. **Micro-interactions**:
    - Card hovers use --shadow-gold-hover consistently
    - Theme toggle rotation effect (180deg on hover with elastic easing)
15. **OpenType Features**:
    - Tabular numerals for counter (font-variant-numeric, tnum/lnum)
    - Improved letter-spacing (-0.05em for numbers)

**Technical Stats**:
- **Lines Modified**: ~500 in styles.css
- **New CSS Variables**: 24 design tokens (spacing, typography, radius)
- **Bugs Fixed**: 4 critical (navigation, accessibility, contrast)
- **Design Systems Standardized**: 5 (typography, spacing, borders, shadows, grids)
- **Interactive Refinements**: 6 (buttons, forms, animations, dark mode)

**Before/After Metrics**:
- Typography Weights: 3 inconsistent → Standardized hierarchy (700/600/600/600)
- Spacing Values: 8+ different section paddings → 2 semantic tokens
- Border Radius: 4 different values → 3-tier system
- Shadow Usage: Partial → 100% design tokens
- Button States: Hover only → Complete interaction cycle (hover/active/focus)
- Form Feedback: None → Complete visual validation
- Dark Mode Issues: 6 visibility problems → All resolved

**Impact**: Professional-grade polish with exceptional attention to layout precision, cohesive design language, and refined micro-interactions.

### v1.2.0 - January 2026 - Documentation Consolidation

- Merged 6 separate guides into single `CLAUDE.md`
- Established 4-file documentation structure

### v1.1.0 - October 2025 - Dark Mode Implementation

- Complete dark/light theme system with CSS variables
- Theme toggle with localStorage persistence
- Anti-flash preload script

### v1.0.0 - September 2025 - Initial Release

- Landing page with luxury beige/navy aesthetic
- Full responsive design
- SEO optimization for Lyon market

---

**Current Version**: v1.3.1 (Premium Blue/Gold + Professional Polish)
**Last Updated**: January 12, 2026
**Next Steps**:
- Lighthouse audit (target ≥95 all categories)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Responsive validation on real devices
- Client feedback on DA + finitions → v1.4.0 iteration if needed

For detailed changelog, see `Journal.md`
