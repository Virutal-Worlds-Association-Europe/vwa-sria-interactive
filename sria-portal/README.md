# Virtual Worlds SRIA Portal

A GDPR-compliant documentation portal for the Virtual Worlds Strategic Research and Innovation Agenda, built with Docusaurus v3.

## 🌟 Features

- **Privacy-First Design**: No cookies, no tracking, no analytics
- **Local Search**: Fast, privacy-respecting search using @easyops-cn/docusaurus-search-local
- **GDPR Compliant**: Follows EU data protection regulations
- **Responsive Design**: Works seamlessly on all devices
- **Dark Mode Support**: Respects user's system preferences
- **Feedback Integration**: Tally.so embedded forms for user feedback

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

## 🚀 Quick Start

### Installation

```bash
cd sria-portal
npm install
```

### Development

Start the development server:

```bash
npm start
```

This will start a local development server at `http://localhost:3000` with hot-reloading enabled.

### Build

Create a production build:

```bash
npm run build
```

The static files will be generated in the `build/` directory.

### Serve Locally

Test the production build locally:

```bash
npm run serve
```

## 📁 Project Structure

```
sria-portal/
├── docs/                          # Markdown documentation files
│   ├── 00-introduction.md         # Introduction
│   ├── 01-applications/           # Chapter 1: Applications
│   │   ├── 1a-industry.md
│   │   ├── 1b-healthcare.md
│   │   └── ...
│   ├── 02-technology/             # Chapter 2: Technology
│   ├── 03-socio-economic/         # Chapter 3: Socio-Economic
│   └── 04-context/                # Chapter 4: European Context
├── src/
│   ├── components/                # React components
│   │   ├── FeedbackForm.tsx       # Tally.so feedback integration
│   │   └── FeedbackForm.module.css
│   ├── pages/                     # Custom pages
│   │   ├── index.tsx              # Homepage
│   │   ├── index.module.css
│   └── css/
│       └── custom.css             # Global styles
├── static/                        # Static assets (images, etc.)
├── docusaurus.config.ts           # Docusaurus configuration
├── sidebars.ts                    # Sidebar configuration
└── package.json
```

## 🎨 Customization

### Update Site Configuration

Edit `docusaurus.config.ts` to modify:
- Site title and tagline
- URL and base URL
- Navigation items
- Footer content

### Modify Content

1. **Documentation**: Edit markdown files in the `docs/` directory
2. **Homepage**: Edit `src/pages/index.tsx`
3. **Styles**: Edit `src/css/custom.css` for global styles

### Configure Feedback Form

1. Create a form on [Tally.so](https://tally.so)
2. Get your form ID
3. Update `src/components/FeedbackForm.tsx`:
   ```tsx
   data-tally-src="https://tally.so/embed/YOUR_FORM_ID?..."
   ```

## 🔒 Privacy & GDPR Compliance

This site is designed to be fully GDPR compliant:

- ✅ No cookies
- ✅ No tracking scripts
- ✅ No Google Analytics
- ✅ Local search only
- ✅ Privacy policy included
- ✅ Minimal data collection

The only external service used is Tally.so for feedback forms, which is also GDPR compliant.

## 📦 Deployment

### Deploy to GitHub Pages

1. Update `docusaurus.config.ts`:
   ```typescript
   url: 'https://your-username.github.io',
   baseUrl: '/repository-name/',
   organizationName: 'your-username',
   projectName: 'repository-name',
   ```

2. Deploy:
   ```bash
   npm run deploy
   ```

### Deploy to Netlify

1. Connect your repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
3. Deploy

### Deploy to Vercel

1. Import your repository in Vercel
2. Configure:
   - Framework Preset: Other
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Deploy

### Deploy to Custom Server

1. Build the site:
   ```bash
   npm run build
   ```

2. Upload the `build/` directory to your web server

3. Configure your web server to:
   - Serve `index.html` for all routes (for SPA routing)
   - Enable HTTPS
   - Set appropriate cache headers

## 🔍 Search Configuration

The local search plugin is configured in `docusaurus.config.ts`:

```typescript
plugins: [
  [
    require.resolve('@easyops-cn/docusaurus-search-local'),
    {
      hashed: true,
      language: ['en'],
      indexBlog: false,
      indexPages: true,
      docsRouteBasePath: '/docs',
    },
  ],
],
```

## 🛠 Development Tips

### Clear Cache

If you encounter issues, try clearing the cache:

```bash
npm run clear
npm start
```

### Update Dependencies

Check for outdated packages:

```bash
npm outdated
```

Update packages:

```bash
npm update
```

## 📝 Content Migration Status

✅ Completed:
- Introduction
- Chapter 1a: Industry and Logistics
- Homepage with vision
- Privacy policy
- Feedback component
- Site configuration

🚧 In Progress:
- Remaining application chapters (1b-1g)
- Technology chapters (2a-2f)
- Socio-economic chapters (3a-3e)
- European context chapters (4a-4c)

## 🤝 Contributing

To add or modify content:

1. Edit the relevant markdown files in `docs/`
2. Test locally with `npm start`
3. Build and verify with `npm run build && npm run serve`
4. Commit and push your changes

## 📄 License

Please refer to the official Virtual Worlds Association documentation for licensing information.

## 🆘 Support

For issues or questions:
- Check the [Docusaurus documentation](https://docusaurus.io/)
- Review the [Privacy Policy](https://docs.google.com/document/d/e/2PACX-1vQeQq7FhZwTwIkaVib4txK0UeY7n2hO2hhKUCuknYEOZMavNY5kTvJP_opD3eKfvA/pub)
- Submit feedback through the integrated feedback form


