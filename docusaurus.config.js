const baseConfig = {
  WEBSITE: 'https://oxyzhg.cn',
  GITHUB: 'https://github.com/oxyzhg',
  REPO: 'https://github.com/oxyzhg.github.io',
};

module.exports = {
  title: 'Oxyzhg',
  tagline: 'Anymore!',
  url: baseConfig.WEBSITE,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'oxyzhg',
  projectName: 'oxyzhg.github.io',
  themeConfig: {
    navbar: {
      title: 'Oxyzhg',
      logo: {
        alt: 'Logo',
        src: 'img/moon.svg',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
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
              label: 'Algorithms',
              href: 'https://oxyzhg.cn/leetcode',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '语雀',
              href: 'https://www.yuque.com/oxyzhg',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/oxyzhg',
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
          editUrl: 'https://github.com/oxyzhg/oxyzhg.github.io/edit/main/docs/',
        },
        blog: {
          routeBasePath: '/',
          blogTitle: 'My Blog!!',
          blogDescription:
            'Reading makes a full man, conference a ready man, and writing an exact man!',
          blogSidebarCount: 5,
          blogSidebarTitle: 'Posts',
          showReadingTime: true,
          postsPerPage: 10,
          editUrl: 'https://github.com/oxyzhg/oxyzhg.github.io/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
