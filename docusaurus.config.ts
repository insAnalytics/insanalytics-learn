import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'insanalytics learn',
  tagline: 'Practical AI training built by practitioners',
  favicon: 'img/favicon.ico',

  url: 'https://learn.insanalytics.com',
  baseUrl: '/',

  organizationName: 'insanalytics',
  projectName: 'insanalytics-learn',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'learn',
          editUrl: 'https://github.com/insanalytics/insanalytics-learn/tree/main/',
          showLastUpdateTime: true,
        },
        blog: false, // Blog disabled — not needed
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'insanalytics learn',
      hideOnScroll: false,
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'learnSidebar',
          position: 'left',
          label: 'Learn',
        },
        {
          to: '/about',
          label: 'About',
          position: 'left',
        },
        {
          href: 'https://github.com/insanalytics/insanalytics-learn',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },

    footer: {
      style: 'light',
      links: [
        {
          title: 'Learn',
          items: [
            { label: 'Chatbots', to: '/learn/chatbots' },
            { label: 'Agentic AI', to: '/learn/agentic-ai' },
            { label: 'RAG', to: '/learn/rag' },
            { label: 'RPA', to: '/learn/rpa' },
          ],
        },
        {
          title: 'Quick Links',
          items: [
            { label: 'All Problem Sets', to: '/learn/quick-links/problem-sets' },
            { label: 'All Videos', to: '/learn/quick-links/videos' },
            { label: 'All Resources', to: '/learn/quick-links/resources' },
          ],
        },
        {
          title: 'insanalytics',
          items: [
            { label: 'About', to: '/about' },
            { label: 'GitHub', href: 'https://github.com/insanalytics' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} insanalytics. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'json', 'yaml'],
    },

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    // ── SWAP COLORS HERE ──
    // To switch from react.dev teal to insanalytics green,
    // change the primary color in src/css/custom.css
  } satisfies Preset.ThemeConfig,
};

export default config;
