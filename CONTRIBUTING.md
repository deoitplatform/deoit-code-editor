# Contributing to Deoit

Thank you for your interest in contributing to Deoit! This document provides guidelines for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork
3. Create a new branch for your feature or fix
4. Make your changes
5. Test locally using `npx serve .`
6. Commit and push to your fork
7. Open a Pull Request

## Development Setup

Deoit is a static site with zero build tools. Just open it in a browser:

```bash
git clone https://github.com/YOUR_USERNAME/deoit-code-editor.git
cd deoit-code-editor
npx serve .
```

Then visit `http://localhost:3000`

## Code Guidelines

- **No frameworks** — keep it vanilla HTML, CSS, and JavaScript
- **No build tools** — every file is directly deployable
- **CSP compliant** — no inline scripts beyond what's already allowed
- **Mobile first** — all UI must work on mobile devices
- **Accessible** — use semantic HTML, ARIA labels, and keyboard navigation
- **Dark theme** — follow the existing color scheme using CSS custom properties

## Pull Request Rules

1. Keep PRs focused on one change
2. Describe what you changed and why
3. Test on Chrome, Firefox, and Safari
4. Don't add new dependencies unless absolutely necessary
5. Don't break the Content Security Policy

## Reporting Issues

Use GitHub Issues to report bugs or suggest features. Include:
- Browser and version
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## License

By contributing, you agree that your contributions will be licensed under the
MIT License with Attribution Requirement as included in the LICENSE file.

## Attribution

If you build a project using Deoit, please include attribution as described
in the LICENSE file. This helps the project grow and reach more developers.

---

Built by **Majed Qandeel** - [deoit.platform@gmail.com](mailto:deoit.platform@gmail.com)
