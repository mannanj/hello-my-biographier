# Hello My Biographier Design System

A comprehensive design and branding guide for the truth-preserving biographical data system.

## Overview

Hello My Biographier uses a minimalist, clarity-focused design approach with clean typography, monospace data display, and a three-tier visual hierarchy that mirrors the three-layer data architecture. The design emphasizes trust, traceability, and transparency in biographical information.

---

## Color Palette

### Primary Colors
```css
--background: #ffffff (White)
--foreground: #1a1a1a (Near-Black, softer than pure black)
```

### Grays (Tailwind CSS)
- `gray-50`: #f9fafb (Card backgrounds, Layer 3 - Synthesis)
- `gray-100`: #f3f4f6 (Hover states, Layer 2 - Interpretation)
- `gray-200`: #e5e7eb (Borders, dividers)
- `gray-300`: #d1d4d8 (Stronger dividers)
- `gray-400`: #9ca3af (Icons, secondary text)
- `gray-500`: #6b7280 (Muted text)
- `gray-600`: #4b5563 (Labels, metadata)
- `gray-700`: #374151 (Layer indicators)
- `gray-800`: #1f2937 (Hover text)
- `gray-900`: #111827 (Layer 1 - Source, highest emphasis)

### Accent Colors
- **Teal/Primary**: `#14b8a6` (teal-500) - Primary actions, links, human-centered accent
- **Warm Amber**: `#f59e0b` (amber-500) - Medium confidence, needs review
- **Soft Red/Alert**: `#ef4444` (red-500) - Low confidence, conflicts
- **Green/Verified**: `#10b981` (emerald-500) - High confidence, verified data
- **Indigo/Synthesis**: `#6366f1` (indigo-500) - Synthesized insights, thoughtful connections

### Layer Color Coding
- **Layer 1 (Source)**: White background with dark gray-800 left border - Highest emphasis, grounded
- **Layer 2 (Interpretation)**: Gray-50 background with teal-500 left border - Medium emphasis, analytical
- **Layer 3 (Synthesis)**: White background with indigo-500 left border - Light emphasis, synthesized

---

## Typography

### Font Families

#### Primary Font Stack (Sans-serif)
```css
font-family: system-ui, -apple-system, sans-serif;
```
**Usage**: All body text, headings, labels, buttons, narrative content

**Next.js Font**: Geist
```typescript
import { Geist } from "next/font/google";
```

#### Monospace Font Stack
```css
font-family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;
```
**Usage**: Dates, confidence scores, technical metadata, source references, line numbers

**Next.js Font**: Geist Mono
```typescript
import { Geist_Mono } from "next/font/google";
```

### Type Scale & Hierarchy

#### Display/Hero
- **Main Title**: `text-4xl` (36px) font-light, tracking-wide
- **Tagline**: `text-xl` (20px) font-light, text-gray-600

#### Headings
- **H1 (Page Title)**: `text-3xl` (30px) font-light, tracking-wide
- **H2 (Section Header)**: `text-2xl` (24px) font-light
- **H3 (Card Title)**: `text-xl` (20px) font-light
- **H4 (Subsection)**: `text-lg` (18px) font-medium

#### Body Text
- **Base**: 16px, line-height: 1.6 (25.6px)
- **Large Body**: `text-lg` (18px) - Timeline events, key statements
- **Small**: `text-sm` (14px) - Labels, metadata
- **Extra Small**: `text-xs` (12px) - Timestamps, source IDs

#### Data Display (Monospace)
- **Dates**: `text-base` (16px) font-mono
- **Confidence Scores**: `text-sm` (14px) font-mono
- **Source References**: `text-xs` (12px) font-mono, text-gray-500

### Font Weights
- `font-light`: 300 - Main headings, primary UI
- `font-normal`: 400 - Body text, descriptions
- `font-medium`: 500 - Emphasis, active states, data labels
- `font-semibold`: 600 - Warnings, important callouts
- `font-mono`: Special class for technical data

### Letter Spacing
- `tracking-wide`: 0.025em - Headings and titles
- `tracking-wider`: 0.05em - Data labels, timestamps

---

## Layout & Spacing

### Container
```css
max-width: 1280px (max-w-6xl)
margin: 0 auto
padding: 32px (p-8)
```

### Spacing Scale (Tailwind)
- `gap-2`: 8px - Tight inline elements
- `gap-3`: 12px - Form elements
- `gap-4`: 16px - Card sections
- `gap-6`: 24px - Grid items
- `gap-8`: 32px - Major sections
- `mb-2`: 8px - Tight vertical spacing
- `mb-4`: 16px - Standard spacing
- `mb-6`: 24px - Section spacing
- `mb-8`: 32px - Major section spacing
- `mb-12`: 48px - Page section dividers
- `p-4`: 16px - Compact card padding
- `p-6`: 24px - Standard card padding
- `p-8`: 32px - Large container padding

### Borders
- **Layer Border**: `border-l-4` (4px left border) - Layer indicators
- **Standard Border**: `border border-gray-200` (1px solid gray)
- **Emphasis Border**: `border-2 border-black` (2px solid black)
- **Divider**: `border-t border-gray-200` (1px top border)

### Border Radius
- **Cards**: `rounded-lg` (8px) - Softer than Sun Signal's brutalism
- **Buttons**: `rounded-md` (6px)
- **Small Elements**: `rounded` (4px)
- **Pills/Badges**: `rounded-full`

### Shadows
- **Subtle**: `shadow-sm` - Floating elements
- **Standard**: `shadow-md` - Cards, panels
- **Elevated**: `shadow-lg` - Modals, popovers
- **Hover**: `hover:shadow-xl` - Interactive states

---

## Components

### Buttons

#### Primary Button
```css
px-6 py-3
bg-teal-500 text-white
rounded-md
hover:bg-teal-600
transition-colors
disabled:opacity-50 disabled:cursor-not-allowed
```

#### Secondary Button
```css
px-6 py-3
bg-white text-black
border border-gray-300
rounded-md
hover:bg-gray-50
transition-colors
```

#### Danger Button
```css
px-6 py-3
bg-red-500 text-white
rounded-md
hover:bg-red-600
transition-colors
```

#### Icon Button
```css
p-2
hover:bg-gray-100
rounded
transition-colors
```

### Cards

#### Source Card (Layer 1)
```css
bg-white
border-l-4 border-gray-800
shadow-md
p-6
rounded-lg
```
**Visual Cue**: Thick dark left border indicates original source material - grounded and foundational

#### Interpretation Card (Layer 2)
```css
bg-gray-50
border-l-4 border-teal-500
shadow-md
p-6
rounded-lg
```
**Visual Cue**: Teal left border indicates interpreted/normalized data - analytical and clear

#### Synthesis Card (Layer 3)
```css
bg-white
border-l-4 border-indigo-500
shadow-md
p-6
rounded-lg
```
**Visual Cue**: Indigo left border indicates synthesized insights - thoughtful and connected

#### Card with Confidence Indicator
```css
position: relative
/* Confidence bar at top */
&::before {
  content: ""
  position: absolute
  top: 0
  left: 0
  right: 0
  height: 4px
  background: linear-gradient based on confidence score
}
```

### Confidence Indicators

#### High Confidence (0.8-1.0)
```css
bg-emerald-50
border-l-4 border-emerald-500
text-emerald-800
```

#### Medium Confidence (0.5-0.79)
```css
bg-amber-50
border-l-4 border-amber-500
text-amber-800
```

#### Low Confidence (0.0-0.49)
```css
bg-red-50
border-l-4 border-red-500
text-red-800
```

#### Confidence Badge
```css
px-2 py-1
text-xs font-mono
rounded-full
bg-gray-200 text-gray-700
```

### Forms

#### Input Field
```css
px-4 py-2
border border-gray-300
rounded-md
focus:border-teal-500 focus:ring-2 focus:ring-teal-200
transition-all
```

#### File Upload Area
```css
border-2 border-dashed border-gray-300
rounded-lg
p-8
text-center
hover:border-teal-500
transition-colors
```

### Timeline Components

#### Timeline Container
```css
position: relative
border-l-2 border-gray-300
ml-4 pl-8
```

#### Timeline Node
```css
position: absolute
left: -6px
width: 10px
height: 10px
border-radius: 50%
bg-teal-500
border-2 border-white
```

#### Timeline Event Card
```css
bg-white
border border-gray-200
rounded-lg
p-4 mb-4
shadow-sm
hover:shadow-md
transition-shadow
```

### Source Reference Links

#### Inline Source Link
```css
text-teal-600
text-xs font-mono
hover:underline
cursor-pointer
transition-colors
```

#### Source Popover
```css
bg-gray-900
text-white text-sm
p-4
rounded-lg
shadow-xl
max-width: 400px
z-index: 50
```

### Badges & Pills

#### Layer Badge
```css
px-2 py-1
text-xs
rounded-full
font-medium
```
- **Layer 1**: `bg-gray-800 text-white`
- **Layer 2**: `bg-teal-100 text-teal-800`
- **Layer 3**: `bg-indigo-100 text-indigo-800`

#### Status Badge
```css
px-2 py-1
text-xs
rounded-full
font-medium
```
- **Verified**: `bg-emerald-100 text-emerald-800`
- **Needs Review**: `bg-amber-100 text-amber-800`
- **Conflict**: `bg-red-100 text-red-800`

---

## Data Display

### Grid Layouts

#### 3-Column Timeline Grid
```css
grid grid-cols-1 md:grid-cols-3
gap-6
```

#### 2-Column Source Comparison
```css
grid grid-cols-1 md:grid-cols-2
gap-6
```

### Data Labels
```css
text-sm font-medium text-gray-600
mb-1
```

### Data Values
```css
text-base
(for narrative data)

text-base font-mono
(for dates, scores, IDs)
```

### Metadata Display
```css
text-xs text-gray-500 font-mono
mt-2 pt-2 border-t border-gray-200
```

---

## Animations

### Fade In
```css
@keyframes fadeIn {
  from: opacity 0, translateY(10px)
  to: opacity 1, translateY(0)
}
animation: fadeIn 0.4s ease-out
```

### Slide In From Left (Timeline Events)
```css
@keyframes slideInLeft {
  from: opacity 0, translateX(-20px)
  to: opacity 1, translateX(0)
}
animation: slideInLeft 0.5s ease-out
```

### Confidence Pulse (Low Confidence Items)
```css
@keyframes confidencePulse {
  0%, 100%: border-color: rgba(220, 38, 38, 0.5)
  50%: border-color: rgba(220, 38, 38, 1)
}
animation: confidencePulse 2s ease-in-out infinite
```

### Source Link Highlight
```css
@keyframes highlightSource {
  from: background-color: rgba(59, 130, 246, 0.2)
  to: background-color: transparent
}
animation: highlightSource 1s ease-out
```

### Transitions
- **Standard**: `transition-all duration-300 ease-out` (300ms)
- **Fast**: `transition-colors duration-200` (200ms)
- **Slow**: `transition-all duration-500 ease-in-out` (500ms - for major state changes)

---

## Design Principles

### 1. Trust & Transparency
- Clear layer indicators (colored left borders)
- Visible confidence scores
- Traceable source links
- No hidden interpretations

### 2. Clarity Over Decoration
- Clean typography hierarchy
- Ample whitespace
- Subtle color accents
- Data-focused layouts

### 3. Three-Layer Visual Hierarchy
- Layer 1 (Source): Darkest, highest emphasis
- Layer 2 (Interpretation): Medium emphasis, blue accents
- Layer 3 (Synthesis): Lightest, purple accents

### 4. Confidence Communication
- Color-coded confidence indicators
- Numeric confidence scores (0.0-1.0)
- Visual warnings for low-confidence data
- "Needs Review" flags

### 5. Biographical Context
- Timeline-based layouts
- Chronological ordering
- Event-based storytelling
- Progressive disclosure of detail

### 6. Traceability
- Inline source references
- Click-to-reveal source text
- Bidirectional navigation (synthesis → interpretation → source)
- Visual breadcrumbs

---

## Usage Examples

### Page Header
```html
<header class="mb-12">
  <h1 class="text-4xl font-light tracking-wide mb-2">Hello My Biographier</h1>
  <p class="text-xl font-light text-gray-600">
    Truth-preserving biographical synthesis
  </p>
</header>
```

### Source Card (Layer 1)
```html
<div class="bg-white border-l-4 border-gray-800 shadow-md p-6 rounded-lg">
  <div class="flex items-center justify-between mb-4">
    <span class="px-2 py-1 bg-gray-800 text-white text-xs rounded-full font-medium">
      Source
    </span>
    <span class="text-xs font-mono text-gray-500">source-001</span>
  </div>
  <p class="text-base leading-relaxed">Original source text...</p>
  <div class="mt-4 pt-4 border-t border-gray-200">
    <p class="text-xs text-gray-500 font-mono">
      Uploaded: 2025-10-15 • resume.pdf • Page 1
    </p>
  </div>
</div>
```

### Interpretation Card (Layer 2)
```html
<div class="bg-gray-50 border-l-4 border-teal-500 shadow-md p-6 rounded-lg">
  <div class="flex items-center justify-between mb-4">
    <span class="px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded-full font-medium">
      Interpretation
    </span>
    <span class="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-mono rounded-full">
      0.92
    </span>
  </div>
  <h3 class="text-xl font-light mb-2">Senior Software Engineer at Acme Corp</h3>
  <p class="text-sm text-gray-600 font-mono mb-3">2020-03 to 2023-06</p>
  <p class="text-base">Normalized interpretation text...</p>
  <button class="mt-3 text-teal-600 text-xs font-mono hover:underline">
    → View source (source-001:15-18)
  </button>
</div>
```

### Synthesis Card (Layer 3)
```html
<div class="bg-white border-l-4 border-indigo-500 shadow-md p-6 rounded-lg">
  <div class="flex items-center justify-between mb-4">
    <span class="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full font-medium">
      Synthesis
    </span>
    <span class="px-2 py-1 bg-emerald-100 text-emerald-800 text-xs font-mono rounded-full">
      0.88
    </span>
  </div>
  <p class="text-lg leading-relaxed">
    Progressive leadership growth in full-stack development across three organizations...
  </p>
  <div class="mt-4 flex gap-2 flex-wrap">
    <button class="text-teal-600 text-xs font-mono hover:underline">
      → Based on 5 interpretations
    </button>
  </div>
</div>
```

### Timeline Event
```html
<div class="relative border-l-2 border-gray-300 ml-4 pl-8 pb-8">
  <div class="absolute left-[-6px] w-10px h-10px rounded-full bg-teal-500 border-2 border-white"></div>
  <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
    <p class="text-sm font-mono text-gray-600 mb-1">2020-03</p>
    <h4 class="text-lg font-medium mb-2">Joined Acme Corp</h4>
    <p class="text-sm text-gray-700">Started as Senior Software Engineer...</p>
    <button class="mt-2 text-teal-600 text-xs hover:underline">View details</button>
  </div>
</div>
```

### Confidence Indicator
```html
<div class="flex items-center gap-2">
  <div class="flex-1 bg-gray-200 rounded-full h-2">
    <div class="bg-emerald-500 h-2 rounded-full" style="width: 92%"></div>
  </div>
  <span class="text-xs font-mono text-gray-700">0.92</span>
</div>
```

### File Upload Area
```html
<div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-500 transition-colors cursor-pointer">
  <svg class="mx-auto h-12 w-12 text-gray-400 mb-4"><!-- Upload icon or 🧍 emoji --></svg>
  <p class="text-base font-medium mb-1">Drop your resume or bio here</p>
  <p class="text-sm text-gray-500">PDF, DOCX, or TXT (max 10MB)</p>
</div>
```

---

## Technical Implementation

### Tailwind CSS v4
```javascript
// postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}
```

### CSS Variables
```css
:root {
  --background: #ffffff;
  --foreground: #1a1a1a;
  --font-sans: system-ui, -apple-system, sans-serif;
  --font-mono: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace;

  /* Layer Colors */
  --layer-1-border: #1f2937; /* gray-800 */
  --layer-2-border: #14b8a6; /* teal-500 */
  --layer-3-border: #6366f1; /* indigo-500 */

  /* Confidence Colors */
  --confidence-high: #10b981; /* emerald-500 */
  --confidence-medium: #f59e0b; /* amber-500 */
  --confidence-low: #ef4444; /* red-500 */
}
```

### Next.js Font Loading
```typescript
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

---

## Responsive Considerations

### Breakpoints (Tailwind)
- **sm**: 640px
- **md**: 768px (primary breakpoint for 2/3 column layouts)
- **lg**: 1024px (expanded layouts)
- **xl**: 1280px

### Mobile-First Patterns
```css
/* Single column on mobile, 2 columns on tablet+ */
grid-cols-1 md:grid-cols-2

/* Single column on mobile, 3 columns on desktop */
grid-cols-1 md:grid-cols-3

/* Hide on mobile, show on desktop */
hidden md:block

/* Full width on mobile, fixed width on desktop */
w-full md:w-auto
```

---

## Accessibility

### Semantic HTML
- Use `<article>` for biographical entries
- Use `<time>` for dates with datetime attribute
- Use `<section>` for major page divisions
- Use heading hierarchy (h1 → h2 → h3)

### Focus States
```css
focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2
```

### ARIA Labels
- `aria-label` for icon-only buttons
- `aria-describedby` for confidence scores
- `role="button"` for clickable non-button elements
- `aria-expanded` for accordion/disclosure widgets

### Color Contrast
- All text meets WCAG AA standards (4.5:1 minimum)
- Confidence indicators use both color AND text labels
- Layer borders provide additional non-color visual distinction

### Keyboard Navigation
- Tab order follows visual hierarchy
- Source links are keyboard accessible
- Modal dialogs trap focus
- Skip links for long content

---

## Brand Identity

### Logo/Mark
- Project name: "Hello My Biographier"
- Brand emoji: 🧍 (Standing Person / Stick Figure)
- Visual identity: Simple, human-centered, approachable
- Represents: The person at the center of their own story

### Voice & Tone
- Warm and human-centered
- Trustworthy, transparent
- Conversational but precise
- Friendly guide, not cold algorithm
- Celebrates personal narratives
- Approachable expertise

### Key Messages
- "Your story, in your own words, accurately preserved"
- "Every person deserves a clear, truthful record of their journey"
- "We keep the receipts - trace every claim to its source"
- "Human stories, thoughtfully organized"
- "Truth over polish, clarity over spin"

---

## Component Library Structure

### Planned Components (`/components`)
```
components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── ConfidenceIndicator.tsx
│   └── SourceLink.tsx
├── layers/
│   ├── SourceCard.tsx
│   ├── InterpretationCard.tsx
│   └── SynthesisCard.tsx
├── timeline/
│   ├── Timeline.tsx
│   ├── TimelineEvent.tsx
│   └── TimelineNode.tsx
├── upload/
│   ├── FileUpload.tsx
│   └── DocumentPreview.tsx
└── biography/
    ├── BiographyViewer.tsx
    └── ExportOptions.tsx
```

---

## Design Tokens (Future)

### To be implemented in `tailwind.config.ts`
```typescript
export default {
  theme: {
    extend: {
      colors: {
        layer: {
          1: '#111827',
          2: '#3b82f6',
          3: '#9333ea',
        },
        confidence: {
          high: '#16a34a',
          medium: '#f59e0b',
          low: '#dc2626',
        }
      },
      borderWidth: {
        'layer': '4px',
      }
    }
  }
}
```

---

## Comparison to Sun Signal

### Similarities
- Minimalist aesthetic
- Clean typography with light weights
- Monospace for data
- High contrast
- Tailwind CSS v4
- System font stack
- Generous whitespace

### Differences
- **Softer edges**: 8px border radius vs 0px (less brutalist)
- **Layer hierarchy**: Three-tier visual system vs single focus
- **Confidence indicators**: Core to design vs not present
- **Color palette**: More colors (layer/confidence coding) vs strict B&W
- **Teal primary**: Human-centered, approachable vs sun-focused yellow
- **Traceable links**: Core interaction pattern vs simple navigation
- **Timeline focus**: Chronological storytelling vs single-day data
- **Light mode only**: Single consistent experience vs multiple themes

---

## Future Enhancements

- [ ] Interactive source highlighting (hover interpretation → highlight source)
- [ ] Conflict resolution UI (side-by-side comparison)
- [ ] Export styling (PDF/print-optimized layouts)
- [ ] Animation library for layer transitions
- [ ] Component Storybook documentation
- [ ] Design token system in Tailwind config
- [ ] Illustration system for empty states with friendly stick figures

---

This design system maintains a clean, data-focused aesthetic while centering human stories. The friendly stick figure 🧍 brand identity, warm teal primary color, and three-layer visualization system create an approachable yet trustworthy experience. The design prioritizes clarity, traceability, and putting the person at the center of their own biographical narrative - truth over polish, warmth over coldness.
