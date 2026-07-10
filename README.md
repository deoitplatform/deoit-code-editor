<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="logo.png">
    <img src="logo.png" alt="Deoit" width="72" height="72" style="border-radius:12px;">
  </picture>
</p>

<h1 align="center">Deoit Code Editor</h1>

<p align="center">
  <strong>A powerful, browser-based code editor for learning and building on the web.</strong>
</p>

<p align="center">
  <a href="https://deoit.vercel.app">deoit.vercel.app</a> &nbsp;·&nbsp;
  <a href="mailto:deoit.platform@gmail.com">Contact</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black" alt="Firebase">
  <img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white" alt="Vercel">
  <img src="https://img.shields.io/badge/PWA-5A0FC8?logo=pwa&logoColor=white" alt="PWA">
</p>

---

## Overview

Deoit is a full-featured online code editor built for learning, experimenting, and prototyping with HTML, CSS, and JavaScript. It runs entirely in the browser — no downloads, no server, no setup. The platform combines a professional-grade editing experience with an intuitive file system, live console output, and cloud authentication.

Built as a pure static application (zero frameworks, zero build tools), Deoit demonstrates what modern vanilla web technologies can achieve: real-time syntax highlighting, context-aware autocomplete, drag-and-drop file management, and secure third-party authentication — all from a single HTML page.

---

## Features

### Code Editor

- **Single-pane workspace** with tabbed file management
- **Syntax highlighting** for 25+ token types (tags, attributes, strings, selectors, properties, functions, keywords, numbers, operators, comments, punctuation, entities, diffs, etc.) — all driven by CSS custom properties for instant themeability
- **Smart autocomplete** with fuzzy matching across four categories: HTML tags, HTML attributes, CSS properties, and JavaScript keywords + snippets
- **Auto-closing tags** for HTML (`<div>` → `</div>`) and bracket pairs (`{}`, `[]`, `()`)
- **Auto-indentation** triggered after `{`, `[`, `(` and configurable tab size
- **Smart backspace** that removes indentation in one press
- **HTML5 boilerplate** (`!` + Tab)
- **Indent guides** with dynamic depth indicators
- **Gutter** with line numbers

### File System

- **Persistent project storage** via `localStorage` — all files survive page reloads
- **Create, rename, delete** files and folders through an interactive tree
- **Drag-and-drop** reordering for both the file tree and editor tabs
- **Default project** with `index.html`, `style.css`, and `script.js` preloaded
- **Multi-file support** — open and edit multiple files simultaneously with tab navigation

### Run & Output

- **One-click run** — executes your code in a sandboxed popup window
- **Live console** — captures `console.log`, `console.warn`, `console.error`, `console.info`, runtime errors, and unhandled promise rejections via `postMessage` bridge
- **Console clearing**, entry counts, and log-level filtering
- **Multiple HTML file support** with a smart "which file to run?" dialog (with "Don't ask again" option)

### Authentication

- **Google Sign-In** and **GitHub Sign-In** via Firebase Authentication (popup flow)
- **Persistent sessions** — users stay logged in across visits
- **Avatar-first UI** — shows the user's initial letter with a deterministic color derived from their name
- **Dropdown menu** with Settings, Home, and Sign Out

### Auth-Gated Features

The file explorer, settings panel, project export/import, ZIP download, and file operations are locked behind authentication — enforced by both CSS (`pointer-events`, `opacity`) and JavaScript (`requireAuth()` guard at every action point). Unauthenticated users see a clean placeholder with a Sign In prompt.

### Settings Panel

- **7 themes** — Dark, Light, Dracula, Monokai, Nord, GitHub Dark, One Dark
- **Font size** slider (12–24px)
- **Tab size** (2, 4, 8)
- **Line height** control (1.2–2.0)
- **Ligatures** toggle
- **Auto-save** interval (30s)
- **Indent guides** toggle
- All settings persisted in `localStorage` and applied instantly via CSS custom properties

### Export & Import

- **ZIP download** of the entire project via JSZip (loaded on demand from CDN)
- **JSON export** of the project file tree
- **JSON import** to restore or share projects

### Drag & Drop

- **Reorder files** in the file tree with visual drop indicators (before, after, into)
- **Reorder tabs** in the tab bar with a drop indicator line

### Console

- Captures real console output from the executed code
- Supports `log`, `warn`, `error`, `info`, `clear`
- Shows error count badge
- Runtime error capture via `window.onerror`
- Resizable panel with draggable handle

---

## Architecture

### Stack

| Layer | Technology |
|---|---|
| Structure | Semantic HTML5 |
| Styling | CSS3 (custom properties, Grid, Flexbox, animations) |
| Logic | Vanilla JavaScript (no frameworks, no build step) |
| Auth | Firebase Auth (compat SDK v10 via CDN) |
| Hosting | Vercel (with clean URLs, HTTP/2, global CDN) |
| Persistence | `localStorage` |

### Key Design Decisions

- **Zero build step** — the entire platform is hand-written HTML, CSS, and JS. Every edit is instantly deployable.
- **Overlay syntax highlighting** — a `<pre>` overlay sits above a `<textarea>` to render highlighted tokens while preserving native text editing behavior.
- **PostMessage console bridge** — a small script injected into the `srcdoc` iframe captures console calls and sends them to the editor via `parent.postMessage`.
- **CSS custom properties for theming** — switching themes is a single JS loop that sets 30+ variables on `document.documentElement`. No re-render, no flicker.
- **CSS Grid layout** — the editor, sidebar, and console use a CSS Grid with fixed-sidebar and resizable-console tracks, avoiding the nested-flex overflow bugs of earlier iterations.
- **Defense-in-depth auth gating** — unauthenticated users are blocked at three levels: CSS (`pointer-events`, `opacity`), JavaScript event delegation (`requireAuth()`), and route-level redirects.

### CSP

The editor page uses a strict Content Security Policy that allows only specific CDNs and origins, blocking inline styles (except the editor's own), external images, and form actions. Firebase Auth requires `frame-src` for the OAuth popup and `connect-src` for API endpoints. The `unsafe-inline` in `script-src` is required only for the console bridge script injected into the iframe `srcdoc`.

```
script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://www.gstatic.com https://apis.google.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
img-src 'self' data:;
font-src 'self' https://fonts.gstatic.com;
connect-src 'self' https://identitytoolkit.googleapis.com ...;
frame-src 'self' https://deoit-d2c47.firebaseapp.com https://apis.google.com;
frame-ancestors 'none'
```

---

## Performance

| Optimization | Technique |
|---|---|
| CSS delivery | `content-visibility: auto` on below-fold sections |
| Font loading | `font-display: swap`, `preload` + `media="print" onload="this.media='all'"` |
| Script loading | `defer` for all non-critical scripts, `async` for GA4 |
| Analytics | GA4 loaded at end of `<body>` (non-render-blocking) |
| Preconnects | `dns-prefetch` + `preconnect` to Google Fonts, Firebase, CDN |
| Image loading | `loading="lazy"` on below-fold images |
| Service Worker | Network-first caching for all static assets |
| Build | Zero — no bundler, no transpiler, no build step |

---

## SEO & Discoverability

- **Semantic HTML5** with proper heading hierarchy
- **Structured data** via JSON-LD (WebSite, Organization, BreadcrumbList)
- **Open Graph** and **Twitter Card** meta tags for social sharing
- **Canonical URLs** and `hreflang` annotations
- **XML sitemap** and `robots.txt`
- **Google Search Console** verification
- **Google Analytics 4** integration
- **PWA manifest** and Service Worker for installability
- **ARIA labels**, `sr-only` text, `focus-visible` outlines, and `prefers-reduced-motion` respect

---

## Project Structure

```
├── index.html             # Landing page
├── login.html             # Sign-in page
├── terms.html             # Terms of Service
├── privacy.html           # Privacy Policy
├── 404.html               # Custom 404 page
├── sw.js                  # Service Worker
├── manifest.json          # PWA manifest
├── sitemap.xml            # XML sitemap
├── robots.txt             # Robots exclusion
├── vercel.json            # Vercel deployment config
├── logo.png               # Brand logo
├── css/
│   ├── style.css          # Global styles (homepage, sidebar, footer)
│   ├── editor.css         # Editor-specific styles
│   └── login.css          # Login page styles
├── js/
│   ├── auth.js            # Firebase Auth (Google + GitHub)
│   ├── editor.js          # Core editor logic
│   └── script.js          # Homepage interactivity
└── pages/
    └── editor.html        # Main editor page
```

---

## Development

Deoit is a static site. No build tools, no package managers, no framework dependencies.

```bash
# Clone the repository
git clone https://github.com/deoitplatform/deoit-code-editor.git

# Open the editor directly
open pages/editor.html
```

For local development, use any static HTTP server to avoid CORS issues with Firebase Auth:

```bash
npx serve .
# or
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

---

## Deployment

The project is deployed on Vercel with `cleanUrls: true` and `trailingSlash: false`. The Firebase project must have `deoit.vercel.app` added to the Authorized Domains list in the Firebase Console under Authentication > Settings.

---

## Credits

Built by **Majed Qandeel** — [deoit.platform@gmail.com](mailto:deoit.platform@gmail.com)

---

<p align="center">
  <sub>© 2026 Deoit. All rights reserved.</sub>
</p>
