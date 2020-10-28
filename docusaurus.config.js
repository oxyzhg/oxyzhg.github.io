const baseConfig = {
  WEBSITE: 'https://oxyzhg.cn',
  GITHUB: 'https://github.com/oxyzhg',
  REPO: 'https://github.com/oxyzhg.github.io',
};

module.exports = {
  title: 'Oxyzhg',
  tagline: 'The tagline of my site',
  url: baseConfig.WEBSITE,
  baseUrl: '/demo/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'oxyzhg', // Usually your GitHub org/user name.
  projectName: 'oxyzhg.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Oxyzhg',
      logo: {
        alt: 'Logo',
        src: 'img/moon.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: baseConfig.GITHUB,
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Oxyzhg.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          routeBasePath: '/',
          blogTitle: 'My Blog!',
          blogDescription: 'A docusaurus powered blog!',
          blogSidebarCount: 5,
          blogSidebarTitle: 'Posts',
          showReadingTime: true,
          postsPerPage: 10,
          // Please change this to your repo.
          editUrl: 'https://github.com/oxyzhg/oxyzhg.github.io/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
