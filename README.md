# Virtual Worlds SRIA Portal

[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-green.svg)](https://docusaurus.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)](CONTRIBUTING.md)

A static documentation website for the Strategic Research and Innovation Agenda
(SRIA) for Virtual Worlds. The site is built with Docusaurus v3, TypeScript, and
React, and the runnable application lives in `sria-portal/`.

The portal turns SRIA content into a browsable documentation site with a custom
homepage, chapter landing pages, local search, dark mode, responsive styling, and
section-aware feedback forms.

## Current State

- Docusaurus `3.9.2` static site in `sria-portal/`.
- React `19`, TypeScript `5.6`, and npm lockfile-based dependency management.
- 26 documentation source pages:
  - 1 introduction page.
  - 4 category landing pages.
  - 21 chapter pages across applications, technology, socio-economic topics, and European context.
- Blog disabled; documentation is served under `/docs`.
- Local search is provided by `@easyops-cn/docusaurus-search-local`.
- Feedback is embedded on documentation pages through Tally.so.
- Font Awesome icons are loaded from the CDN configured in `docusaurus.config.ts`.
- Production builds generate static files in `sria-portal/build/`.

## Requirements

- Node.js `24.0` or newer.
- npm. The repository includes `sria-portal/package-lock.json`, so `npm ci` is preferred for clean installs.

The package engine requires Node `>=24.0`, and the GitHub Pages workflow builds
with Node `24`.

## Run Locally

From the repository root:

```powershell
cd sria-portal
npm ci
npm start
```

Open:

```text
http://localhost:3000
```

If dependencies are already installed, only run:

```powershell
cd sria-portal
npm start
```

## Test The Static Build

Docusaurus produces a static site, but it should be served through a local web
server rather than opened directly from `build/index.html`.

```powershell
cd sria-portal
npm run build
npm run serve
```

`npm run build` writes the static output to:

```text
sria-portal/build
```

## Available Scripts

Run these from `sria-portal/`.

```powershell
npm start                 # Start the Docusaurus development server
npm run build             # Create a production static build
npm run serve             # Serve the production build locally
npm run typecheck         # Run TypeScript checks
npm run clear             # Clear Docusaurus caches
npm run swizzle           # Run Docusaurus swizzle tooling
npm run deploy            # Run Docusaurus deployment tooling
npm run write-translations
npm run write-heading-ids
```

There are currently no `lint` or `format` scripts configured in
`sria-portal/package.json`.

## Project Structure

```text
.
|-- README.md
|-- CONTRIBUTING.md
|-- CODE_OF_CONDUCT.md
|-- LICENSE
`-- sria-portal/
    |-- docs/
    |   |-- introduction.md
    |   |-- 01-applications/
    |   |-- 02-technology/
    |   |-- 03-socio-economic/
    |   `-- 04-context/
    |-- src/
    |   |-- components/
    |   |   |-- CategoryCards/
    |   |   |-- FeedbackFab/
    |   |   |-- FeedbackForm.tsx
    |   |   `-- HomepageFeatures/
    |   |-- css/
    |   |   `-- custom.css
    |   |-- pages/
    |   |   |-- index.tsx
    |   |   |-- index.module.css
    |   |   `-- markdown-page.md
    |   `-- theme/
    |       |-- DocItem/Footer/
    |       |-- DocPaginator/
    |       |-- PaginatorNavLink/
    |       `-- TOCItems/
    |-- static/img/
    |-- docusaurus.config.ts
    |-- package.json
    |-- package-lock.json
    |-- sidebars.ts
    `-- tsconfig.json
```

## Content Map

The main documentation areas are:

- Introduction: `/docs/introduction`
- Applications & Opportunities: `/docs/applications`
- Technical Outlook: `/docs/technology`
- Socio-Economic Outlook: `/docs/socio-economic`
- European Context: `/docs/context`

The chapter pages cover:

- Applications: industry and logistics, healthcare and well-being, media and entertainment, arts and culture, education and training, security and defence, cities and public administration.
- Technology: visualisation and sensing, real-time user interaction, authoring and experience design, standardisation and interoperability, digital twins, applied AI.
- Socio-economic topics: human rights and safety, governance and law enforcement, economics and innovation, sustainability and health, trust and human oversight.
- European context: data governance and data spaces, infrastructure and compute, optics and photonics.

## Configuration Notes

Important settings live in `sria-portal/docusaurus.config.ts`.

- `url`: `https://sria.virtualworldsassociation.eu`
- `baseUrl`: `/`
- `routeBasePath`: `docs`
- `trailingSlash`: `false`
- `blog`: disabled
- `deploymentBranch`: `gh-pages`

The package metadata still includes the historical GitHub Pages homepage URL.
The Docusaurus runtime configuration currently targets the custom domain above.

## Feedback And Privacy

The project uses a custom consent-gated Google Analytics 4 loader with the
`G-1SERDQHGJD` measurement ID and IP anonymization enabled. GA4 is only loaded
after the visitor accepts analytics cookies. Google Tag Manager is not
configured. Search is generated locally by the Docusaurus search plugin.

The current site also loads these external resources:

- Font Awesome CSS from `cdnjs.cloudflare.com`.
- Tally.so scripts and embedded forms for page feedback.

Any privacy or GDPR statement for the deployed site should account for these
external services.

## Editing Content

To edit existing content, update the Markdown or MDX files under
`sria-portal/docs/`.

To add a new page:

1. Add the Markdown or MDX file under the relevant docs subdirectory.
2. Keep the existing chapter naming convention, such as `1a-industry.md`.
3. Add frontmatter when a custom title or description is needed.
4. Run `npm start` to preview the page.
5. Run `npm run build` before publishing.

Most sidebar entries are autogenerated from the docs folders through
`sria-portal/sidebars.ts`.

## Customization

- Site title, URL, base path, navbar, footer, search, and external head tags:
  `sria-portal/docusaurus.config.ts`.
- Sidebar structure: `sria-portal/sidebars.ts`.
- Homepage: `sria-portal/src/pages/index.tsx`.
- Global theme styles and CSS variables: `sria-portal/src/css/custom.css`.
- Feedback form integration: `sria-portal/src/components/FeedbackForm.tsx`.
- Category landing page cards: `sria-portal/src/components/CategoryCards/`.

## Deployment

Build the static site:

```powershell
cd sria-portal
npm run build
```

Deploy the contents of `sria-portal/build/` to a static host.

For GitHub Pages, Netlify, Vercel, or a custom server, make sure the configured
site URL and base path in `docusaurus.config.ts` match the deployment target.
For custom servers, configure extensionless HTML routes correctly because the
current site uses `trailingSlash: false`.

Common static-host settings:

- Build command: `npm run build`
- Publish directory: `build`
- Working directory: `sria-portal`

For GitHub Pages deployments through Docusaurus, review `organizationName`,
`projectName`, `deploymentBranch`, `url`, and `baseUrl` before running
`npm run deploy`.

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) for contribution workflow details and
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before participating.

Useful local contributor flow:

```powershell
cd sria-portal
npm ci
npm start
npm run build
```

## License And Support

This repository declares the MIT license in [LICENSE](LICENSE).

For project issues, use the repository issue tracker configured in
`sria-portal/package.json`. For Docusaurus-specific questions, refer to the
[Docusaurus documentation](https://docusaurus.io/).

## Maintenance Notes

The current build succeeds. Docusaurus emits warnings that:

- `siteConfig.onBrokenMarkdownLinks` is deprecated for Docusaurus v4.
- Browserslist data may need periodic updates.

Those warnings do not block the production build, but they are worth addressing
before a Docusaurus v4 migration.
