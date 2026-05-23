# 📘 Portfolio Editing Guide — Master Documentation

> **Purpose:** This file is your complete "Map and Directions" guide for editing, maintaining, and extending this portfolio website. Every section, data structure, and component is documented so you can modify any line of code just by reading this file.

---

## Table of Contents

1. [Global Architecture & Directory Layout](#1-global-architecture--directory-layout)
2. [Data Layer — The Single Source of Truth](#2-data-layer--the-single-source-of-truth)
3. [Component Deconstructions & Editing Recipes](#3-component-deconstructions--editing-recipes)
4. [Adding New Sections (Scalability Workflow)](#4-adding-new-sections-scalability-workflow)
5. [Resume Download Integration](#5-resume-download-integration)
6. [Styling System & Theme Variables](#6-styling-system--theme-variables)
7. [Developer Quick-Lookup Directory](#7-developer-quick-lookup-directory)

---

## 1. Global Architecture & Directory Layout

### Directory Tree

```
waleed-portfolio/
├── public/
│   └── assets/
│       └── Muhammad_Waleed_CV.pdf    ← Your actual CV PDF goes here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                ← Fixed top navigation bar
│   │   ├── HeroSection.tsx           ← Landing hero with name + terminal
│   │   ├── RotatingTitles.tsx        ← Animated role title scroller
│   │   ├── CodeTerminal.tsx          ← Fake code editor widget
│   │   ├── StatsBar.tsx              ← Metrics counter row
│   │   ├── AboutSection.tsx          ← Bio + focus cards
│   │   ├── SkillsSection.tsx         ← Categorized skill tags
│   │   ├── ProjectsSection.tsx       ← Project showcase cards
│   │   ├── EducationSection.tsx      ← Degree + certifications
│   │   ├── ContactSection.tsx        ← Contact info + links
│   │   └── Footer.tsx                ← Bottom footer
│   ├── data/
│   │   └── portfolioData.ts          ← ALL content lives here
│   ├── App.tsx                       ← Root component (assembles everything)
│   ├── main.tsx                      ← React entry point
│   ├── index.css                     ← Global styles + Tailwind config
│   └── vite-env.d.ts                 ← Vite type declarations
├── index.html                        ← HTML shell
├── package.json                      ← Dependencies
├── tailwind.config.ts                ← Tailwind theme customization
├── postcss.config.js                 ← PostCSS plugins
├── tsconfig.json                     ← TypeScript config
└── vite.config.ts                    ← Vite build config
```

### Architecture Pattern: Data-Driven Components

```
┌─────────────────────────────────────────────────────┐
│                  portfolioData.ts                     │
│         (ALL text, links, arrays live here)           │
└──────────────────────┬──────────────────────────────┘
                       │ imports
                       ▼
┌─────────────────────────────────────────────────────┐
│              Individual Components                    │
│   (Navbar, Hero, About, Skills, Projects, etc.)      │
│   Each component imports ONLY what it needs          │
└──────────────────────┬──────────────────────────────┘
                       │ rendered by
                       ▼
┌─────────────────────────────────────────────────────┐
│                    App.tsx                            │
│   (Assembles all components in viewport order)       │
└─────────────────────────────────────────────────────┘
```

### Import Flow

**App.tsx** imports each component directly:
```tsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
// ... etc
```

**Each component** imports its data from the centralized data file:
```tsx
import { navLinks } from '../data/portfolioData';
import { stats } from '../data/portfolioData';
```

**Key Principle:** To change ANY text content on the site, you almost always edit `src/data/portfolioData.ts` — not the component files.

---

## 2. Data Layer — The Single Source of Truth

**File:** `src/data/portfolioData.ts`

This file contains ALL portfolio content. Every component reads from here. Below is every data structure with its schema and what it controls.

### 2.1 Navigation Links

```typescript
// Controls: Navbar menu items + smooth scroll targets
export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
```

**To add a new nav item:**
```typescript
{ label: "Blog", href: "#blog" },
```
> ⚠️ The `href` must match the `id` attribute on the target section element.

---

### 2.2 Rotating Roles (Hero)

```typescript
// Controls: The animated text scroller in the hero section
export const roles: string[] = [
  "⚡ Full Stack Developer",
  "🤖 MERN Stack Engineer",
  "🚀 AI & Agents Explorer",
  "⚛️ React.js Developer",
  "🛠 Node.js Builder",
];
```

**To add/remove a role:** Simply add or remove a string from this array. The animation cycles through all entries automatically.

> ⚠️ The CSS animation `scrollRoles` in `index.css` uses `steps(1)` with percentage keyframes. If you change the number of roles from 5, you need to update the keyframes. See [Section 6](#6-styling-system--theme-variables).

---

### 2.3 Stats Bar

```typescript
// Controls: The metrics counter row below the hero
export const stats: Stat[] = [
  { value: "3+", label: "Projects Shipped" },
  { value: "6+", label: "Certifications" },
  { value: "20+", label: "Technologies" },
];
```

**Schema:**
| Field   | Type   | Description                    |
|---------|--------|--------------------------------|
| `value` | string | The big number (e.g., "3+")    |
| `label` | string | Description below the number   |

---

### 2.4 About Cards

```typescript
// Controls: The 4 focus cards on the right side of the About section
export const aboutCards: AboutCard[] = [
  {
    icon: "🤖",           // Emoji displayed as card icon
    title: "Agentic AI",  // Card heading
    description: "...",    // Card body text
  },
  // ... more cards
];
```

**To add a new card:** Append a new object to the array. It will automatically render.

---

### 2.5 Skill Categories

```typescript
// Controls: The skills grid with categorized tags
export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",                    // Category title
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", ...],  // Tag list
  },
  // ... more categories
];
```

**To add a new skill:** Find the category and add the string to its `skills` array.
**To add a new category:** Append a new object with `category` and `skills`.

---

### 2.6 Projects

```typescript
// Controls: Project showcase cards
export const projects: Project[] = [
  {
    title: "SchoolWise Manager",
    year: "2026",
    badges: ["DEPLOYED", "LIVE"],     // Status badges (color-coded)
    description: "...",                // Main description
    highlight: "...",                  // Featured highlight with ✦ icon
    tags: ["React", "TypeScript", ...], // Tech stack tags
  },
];
```

**Badge Color Logic (in ProjectsSection.tsx):**
| Badge Value  | Color   |
|-------------|---------|
| `"LIVE"`    | Green   |
| `"HACKATHON"` | Yellow |
| Anything else | Purple |

**To add a new project:** Append a new object to the array.

---

### 2.7 Education & Certifications

```typescript
// Controls: Academic degree card
export const education: Education = {
  degree: "BSc Computer Science (BSCS)",
  institution: "University of Punjab",
  location: "Lahore, Pakistan",
  years: "2023 – 2027",
};

// Controls: Certification list (numbered 01-06)
export const certifications: Certification[] = [
  { name: "Javascript MEAN/MERN Stack", issuer: "KICS, UET Lahore" },
  // ... more entries
];
```

---

### 2.8 Contact Links

```typescript
// Controls: Contact section buttons + email
export const contactLinks: ContactLink[] = [
  {
    type: "email",      // Determines icon + display style
    label: "Email",     // Button label
    value: "mianwaleed2272@gmail.com",  // Displayed text
    href: "mailto:mianwaleed2272@gmail.com",  // Click action
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-waleed-a0037a2ab",
  },
  // ... phone, github
];
```

**Supported `type` values:** `"email"`, `"linkedin"`, `"phone"`, `"github"`
- `email` renders as the large gradient button
- Others render as outlined pill buttons with SVG icons

---

### 2.9 Footer Data

```typescript
export const footerData: FooterData = {
  name: "Muhammad Waleed",
  role: "Full Stack Developer & AI Explorer",
  location: "Lahore, Pakistan",
  email: "mianwaleed2272@gmail.com",
  year: 2025,  // Copyright year
};
```

---

### 2.10 Hero Description & About Paragraphs

```typescript
// Hero section description (with bold keywords handled in component)
export const heroDescription: string = "I build scalable web applications...";

// About section paragraphs (bold keywords handled in component)
export const aboutParagraphs: string[] = [
  "I'm an ambitious MERN Stack developer...",
  "With a growing focus on Artificial Intelligence...",
  "Pursuing my BSCS from University of Punjab...",
];
```

> ⚠️ The bold keywords in the hero and about sections are hardcoded in the component JSX (not in the data file) because they use `<strong>` tags. To change bold text, edit `HeroSection.tsx` or `AboutSection.tsx` directly.

---

## 3. Component Deconstructions & Editing Recipes

### 3.1 Navbar.tsx

**File:** `src/components/Navbar.tsx`
**Data source:** `navLinks` from portfolioData

**What it does:**
- Fixed 68px height navigation bar
- Logo "MW" on the left
- Nav links in the center (desktop)
- "Resume" (download) + "Connect" (scroll to contact) buttons on right
- Hamburger menu on mobile (<768px)

**How to add a new nav link:**
1. Add to `navLinks` in `portfolioData.ts`:
   ```typescript
   { label: "Blog", href: "#blog" },
   ```
2. Make sure a section with `id="blog"` exists in your components.

**How to change the Resume download filename:**
Find this line in Navbar.tsx:
```tsx
download="Muhammad_Waleed_CV.pdf"
```
Change the filename to match your actual PDF in `public/assets/`.

---

### 3.2 HeroSection.tsx

**File:** `src/components/HeroSection.tsx`

**What it does:**
- Two-column layout (text left, terminal right)
- "Available for Work" badge
- Name in gradient text
- RotatingTitles component
- Description paragraph with bold keywords
- "View Projects" + "Get In Touch" CTA buttons

**To change the name:**
Find this line:
```tsx
<span className="bg-gradient-to-br from-[#4facfe] to-[#a78bfa] ...">Muhammad Waleed</span>
```

**To change the description (with bold keywords):**
Edit the `<p>` block directly — bold words use `<strong className="text-[#e2e8f0]">`.

**To change CTA button text:**
Find the `<button>` elements with "View Projects" and "Get In Touch".

---

### 3.3 RotatingTitles.tsx

**File:** `src/components/RotatingTitles.tsx`
**Data source:** `roles` from portfolioData

**How it works:** Uses CSS `scrollRoles` animation to vertically scroll through roles. Each role is a `<span>` with fixed height `1.7rem`.

**To change animation speed:** Edit `10s` in the className:
```tsx
className="... animate-[scrollRoles_10s_steps(1)_infinite]"
```

---

### 3.4 CodeTerminal.tsx

**File:** `src/components/CodeTerminal.tsx`

**What it does:** Renders a fake VS Code-style terminal with syntax-highlighted TypeScript code.

**To change displayed code content:** Edit the `<Line>` components directly. Each line has:
- `n` prop = line number
- Children = syntax-highlighted spans

**Color reference for syntax:**
| Element    | Color     | CSS Class              |
|-----------|-----------|------------------------|
| Keywords  | Purple    | `text-[#c792ea]`       |
| Variables | Blue      | `text-[#82aaff]`       |
| Strings   | Green     | `text-[#a8ff78]`       |
| Keys      | Cyan      | `text-[#89ddff]`       |
| Brackets  | Yellow    | `text-[#ffcb6b]`       |
| Booleans  | Orange    | `text-[#f78c6c]`       |
| Operators | White     | `text-[#cdd6f4]`       |

---

### 3.5 StatsBar.tsx

**File:** `src/components/StatsBar.tsx`
**Data source:** `stats` from portfolioData

**Layout:** Horizontal flex row with dividers. Each stat shows a gradient number + label.

**To add/remove stats:** Edit the `stats` array in portfolioData.ts. The component auto-renders all entries.

---

### 3.6 AboutSection.tsx

**File:** `src/components/AboutSection.tsx`
**Data source:** `aboutCards` from portfolioData

**Layout:** Two-column grid — text on left, cards stacked on right.

**To edit bio paragraphs:** The paragraphs with bold keywords are hardcoded in the component (not from `aboutParagraphs` data). Find the `<p>` tags with `<strong>` elements and edit directly.

**To add/remove focus cards:** Edit `aboutCards` in portfolioData.ts.

---

### 3.7 SkillsSection.tsx

**File:** `src/components/SkillsSection.tsx`
**Data source:** `skillCategories` from portfolioData

**Layout:** 3-column grid of category cards, each with pill-shaped skill tags.

**To add a new skill:**
```typescript
// In portfolioData.ts, find the category and add:
{ category: "Frontend", skills: ["React.js", "Tailwind CSS", "Next.js", "Vue.js"] }
//                                                                        ^^^^^^^^ new
```

**To add a new category:**
```typescript
{ category: "Mobile", skills: ["React Native", "Flutter"] },
```

---

### 3.8 ProjectsSection.tsx

**File:** `src/components/ProjectsSection.tsx`
**Data source:** `projects` from portfolioData

**Layout:** 2-column grid of project cards with badges, description, highlight, and tech tags.

**To add a new project:**
```typescript
// In portfolioData.ts, append to projects array:
{
  title: "My New Project",
  year: "2026",
  badges: ["IN PROGRESS"],
  description: "Description of the project...",
  highlight: "Key technical achievement...",
  tags: ["React", "Node.js"],
}
```

**Badge color customization:** Edit the conditional logic in ProjectsSection.tsx:
```tsx
badge === 'LIVE' ? 'green styles...'
: badge === 'HACKATHON' ? 'yellow styles...'
: 'purple styles (default)...'
```

---

### 3.9 EducationSection.tsx

**File:** `src/components/EducationSection.tsx`
**Data source:** `education`, `certifications` from portfolioData

**To update degree info:** Edit the `education` object.
**To add a certification:** Append to the `certifications` array.

---

### 3.10 ContactSection.tsx

**File:** `src/components/ContactSection.tsx`
**Data source:** `contactLinks` from portfolioData

**To change email/phone/links:** Edit the `contactLinks` array in portfolioData.ts.

**To add a new contact method (e.g., Twitter):**
1. Add to `contactLinks`:
   ```typescript
   { type: "twitter", label: "Twitter", value: "@waleed", href: "https://twitter.com/waleed" },
   ```
2. Add an SVG icon case in the `getIcon()` function inside ContactSection.tsx.

---

### 3.11 Footer.tsx

**File:** `src/components/Footer.tsx`
**Data source:** `footerData` from portfolioData

**To update copyright year:** Change `year` in `footerData`.

---

## 4. Adding New Sections (Scalability Workflow)

### Example: Adding a "Blog" Section

#### Phase A: Define Data

In `src/data/portfolioData.ts`, add:

```typescript
export interface BlogPost {
  title: string;
  date: string;
  summary: string;
  link: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building AI Agents with LangChain",
    date: "2026-01-15",
    summary: "A deep dive into building autonomous agents...",
    link: "https://medium.com/@waleed/...",
  },
];
```

#### Phase B: Create Component

Create `src/components/BlogSection.tsx`:

```tsx
import { blogPosts } from '../data/portfolioData';

const BlogSection = () => {
  return (
    <section id="blog" className="py-28 relative z-[1]">
      <div className="max-w-[1120px] mx-auto px-[5%]">
        {/* Section Header */}
        <div className="mb-12">
          <div className="font-mono text-[0.72rem] text-[#64748b] tracking-[0.12em] uppercase mb-2 flex items-center gap-2">
            <span className="text-[#4facfe]">//</span> Writing
          </div>
          <h2 className="text-[clamp(2rem,3.5vw,2.7rem)] font-black tracking-[-0.03em] leading-[1.1] mb-3">
            Latest <span className="bg-gradient-to-r from-[#4facfe] to-[#a78bfa] bg-clip-text text-transparent">Posts</span>
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogPosts.map((post, index) => (
            <a key={index} href={post.link} target="_blank" rel="noopener noreferrer"
               className="p-6 rounded-xl bg-[#0d1525] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(79,172,254,0.35)] transition-all duration-200 no-underline">
              <p className="font-mono text-[0.7rem] text-[#4facfe] mb-2">{post.date}</p>
              <h3 className="text-[1rem] font-bold text-[#e2e8f0] mb-2">{post.title}</h3>
              <p className="text-[#64748b] text-[0.84rem] leading-[1.65]">{post.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
```

#### Phase C: Add Nav Link

In `portfolioData.ts`, add to `navLinks`:
```typescript
{ label: "Blog", href: "#blog" },
```

#### Phase D: Mount in App.tsx

In `src/App.tsx`, import and place it:
```tsx
import BlogSection from './components/BlogSection';

// Inside the return, place it where you want in the page order:
<ProjectsSection />
<BlogSection />        {/* ← New section */}
<EducationSection />
```

---

## 5. Resume Download Integration

### How It Works

The "Resume" button in the Navbar uses an HTML `<a>` tag with the `download` attribute:

```tsx
<a
  href="/assets/Muhammad_Waleed_CV.pdf"
  download="Muhammad_Waleed_CV.pdf"
>
  Resume
</a>
```

### Setup Steps

1. **Place your PDF** at: `public/assets/Muhammad_Waleed_CV.pdf`
2. The `public/` folder is served as the root by Vite — so `/assets/Muhammad_Waleed_CV.pdf` resolves correctly.
3. The `download` attribute forces the browser to download instead of opening in a new tab.

### Troubleshooting

| Problem | Solution |
|---------|----------|
| Downloads empty/corrupt file | Your PDF file is missing from `public/assets/` — only a `.gitkeep` placeholder exists |
| Wrong filename on download | Change the `download="..."` attribute value |
| Want to change the PDF | Replace the file at `public/assets/Muhammad_Waleed_CV.pdf` with your new one |
| Want a different filename | Rename the file AND update the `href` path in Navbar.tsx |

---

## 6. Styling System & Theme Variables

### Color Palette (from CSS variables)

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0f1e` | Page background |
| Card BG | `#0d1525` | All card backgrounds |
| Terminal BG | `#0d1117` | Code terminal inner |
| Border | `rgba(255,255,255,0.06)` | Default borders |
| Border Hover | `rgba(79,172,254,0.35)` | Hover state borders |
| Accent (Blue) | `#4facfe` | Primary accent color |
| Accent2 (Cyan) | `#00f2fe` | Gradient endpoint |
| Purple | `#a78bfa` | Secondary accent |
| Green | `#4ade80` | "Available" badge, LIVE badge |
| Yellow | `#fbbf24` | HACKATHON badge |
| Text | `#e2e8f0` | Primary text |
| Text Muted | `#64748b` | Secondary/body text |
| Text Dim | `#94a3b8` | Tertiary text |

### Fonts

- **Body:** Inter (weights 300-900)
- **Code/Mono:** JetBrains Mono (weights 400, 500, 700)

Loaded via Google Fonts in `src/index.css`.

### Key CSS Animations (in index.css)

| Animation | Duration | Usage |
|-----------|----------|-------|
| `scrollRoles` | 10s | Rotating titles (5 roles × 2s each) |
| `ping` | 2s | Green pulse dot on "Available" badge |
| `blink` | 0.85s | Terminal cursor blink |

### Updating scrollRoles for Different Number of Roles

If you change the number of roles from 5, update the keyframes:

**Formula:** Each role gets `100% / N` of the animation time.

For 4 roles:
```css
@keyframes scrollRoles {
  0%   { transform: translateY(0); }
  25%  { transform: translateY(-1.7rem); }
  50%  { transform: translateY(-3.4rem); }
  75%  { transform: translateY(-5.1rem); }
  100% { transform: translateY(0); }
}
```

For 6 roles:
```css
@keyframes scrollRoles {
  0%      { transform: translateY(0); }
  16.67%  { transform: translateY(-1.7rem); }
  33.33%  { transform: translateY(-3.4rem); }
  50%     { transform: translateY(-5.1rem); }
  66.67%  { transform: translateY(-6.8rem); }
  83.33%  { transform: translateY(-8.5rem); }
  100%    { transform: translateY(0); }
}
```

### Grid Background

The subtle grid lines are defined in `index.css`:
```css
.grid-bg {
  background-image:
    linear-gradient(rgba(79,172,254,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(79,172,254,.03) 1px, transparent 1px);
  background-size: 72px 72px;
}
```

Change `72px` to adjust grid density. Change the `0.03` opacity to make lines more/less visible.

---

## 7. Developer Quick-Lookup Directory

| What You Want to Change | Edit This File | Specific Location |
|------------------------|----------------|-------------------|
| Navigation menu items | `src/data/portfolioData.ts` | `navLinks` array |
| Your name | `src/components/HeroSection.tsx` | `<span>Muhammad Waleed</span>` |
| Rotating role titles | `src/data/portfolioData.ts` | `roles` array |
| Hero description text | `src/components/HeroSection.tsx` | `<p>` block with `<strong>` tags |
| Stats numbers (3+, 6+, etc.) | `src/data/portfolioData.ts` | `stats` array |
| About bio paragraphs | `src/components/AboutSection.tsx` | `<p>` blocks with `<strong>` tags |
| About focus cards | `src/data/portfolioData.ts` | `aboutCards` array |
| Skills/technologies | `src/data/portfolioData.ts` | `skillCategories` array |
| Projects | `src/data/portfolioData.ts` | `projects` array |
| Education degree | `src/data/portfolioData.ts` | `education` object |
| Certifications | `src/data/portfolioData.ts` | `certifications` array |
| Email address | `src/data/portfolioData.ts` | `contactLinks` array (type: "email") |
| LinkedIn URL | `src/data/portfolioData.ts` | `contactLinks` array (type: "linkedin") |
| GitHub URL | `src/data/portfolioData.ts` | `contactLinks` array (type: "github") |
| Phone number | `src/data/portfolioData.ts` | `contactLinks` array (type: "phone") |
| Footer info | `src/data/portfolioData.ts` | `footerData` object |
| Copyright year | `src/data/portfolioData.ts` | `footerData.year` |
| Resume PDF file | `public/assets/` | Replace `Muhammad_Waleed_CV.pdf` |
| Resume download filename | `src/components/Navbar.tsx` | `download="..."` attribute |
| Accent color (blue) | `src/index.css` + components | Search `#4facfe` |
| Background color | `src/index.css` | `#0a0f1e` in body styles |
| Card background | Components | Search `#0d1525` |
| Terminal code content | `src/components/CodeTerminal.tsx` | `<Line>` components |
| Animation speed (roles) | `src/components/RotatingTitles.tsx` | `10s` in animate class |
| Grid background density | `src/index.css` | `.grid-bg` background-size |
| Section order on page | `src/App.tsx` | Component render order |
| Add a new section | See [Section 4](#4-adding-new-sections-scalability-workflow) | 4-phase workflow |

---

## Build & Run Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server (hot reload) |
| `npm run build` | Production build → `dist/` folder |
| `npm run preview` | Preview production build locally |

---

## Important Notes

1. **All Tailwind CSS is compiled locally** — no CDN. If styles aren't applying, run `npm run build` to verify.
2. **The `public/` folder** is served as-is at the root URL. Files there are NOT processed by Vite.
3. **TypeScript** is used throughout. If you add new data structures, define interfaces in `portfolioData.ts`.
4. **Responsive breakpoints:** Mobile < 768px (md), Tablet 768-1024px (lg), Desktop > 1024px.
5. **All smooth scrolling** uses `element.scrollIntoView({ behavior: 'smooth' })` — no external libraries.
