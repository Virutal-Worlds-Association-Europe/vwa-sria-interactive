import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'SRIA - Virtual Worlds',
  tagline: 'Strategic Research & Innovation Agenda for Europe',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://sria.virtualworldsassociation.eu',
  baseUrl: '/',

  organizationName: 'Virutal-Worlds-Association-Europe',
  projectName: 'vwa-sria-interactive',

  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
        integrity: 'sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==',
        crossorigin: 'anonymous',
        referrerpolicy: 'no-referrer',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          // Remove edit links
          editUrl: undefined,
          breadcrumbs: false,
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-1SERDQHGJD',
          anonymizeIP: true,
        },
        googleAnalytics: undefined,
        googleTagManager: undefined,
      } satisfies Preset.Options,
    ],
  ],

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

  themeConfig: {
    image: 'img/sria-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Virtual Worlds Association Logo',
        src: 'img/vwa-logo.png',
        srcDark: 'img/vwa-logo-light.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sriaSidebar',
          position: 'left',
          label: 'SRIA Deep Dive',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Navigation',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'Applications & Opportunities',
              to: '/docs/applications',
            },
            {
              label: 'Technical Outlook',
              to: '/docs/technology',
            },
            {
              label: 'Socio-Economic Outlook',
              to: '/docs/socio-economic',
            },
            {
              label: 'European Context',
              to: '/docs/context',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'EU Digital Strategy',
              href: 'https://digital-strategy.ec.europa.eu',
            },
            {
              label: 'Virtual Worlds Association',
              href: 'https://www.virtualworldsassociation.eu',
            },
            {
              label: 'European Context',
              to: '/docs/context',
            },
          ],
        },
        {
          title: 'SRIA',
          items: [
            {
              label: 'About SRIA',
              to: '/docs/introduction',
            },
            {
              label: 'Contact',
              href: 'https://www.virtualworldsassociation.eu',
            },
            {
              label: 'Privacy Policy',
              href: 'https://docs.google.com/document/d/e/2PACX-1vQeQq7FhZwTwIkaVib4txK0UeY7n2hO2hhKUCuknYEOZMavNY5kTvJP_opD3eKfvA/pub',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Virtual Worlds Association. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // Local search configuration will be added via plugin
  } satisfies Preset.ThemeConfig,
};

export default config;
