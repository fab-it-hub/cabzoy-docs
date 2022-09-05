// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "CabZoy",
  tagline: "CabZoy Docs are cool",
  url: "https://docs.fabithub.com",
  baseUrl: "/cabzoy/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "fabithub", // Usually your GitHub org/user name.
  projectName: "cabzoy", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "CabZoy Docs",
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Installation",
          },
          {
            type: "doc",
            docId: "tutorial/tutorial-intro",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://fabithub.com",
            label: "Fab IT Hub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Installation",
                to: "/docs/intro",
              },
              {
                label: "Tutorial",
                to: "/docs/tutorial/tutorial-intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Environment Setup",
                href: "https://reactnative.dev/docs/environment-setup",
              },
              {
                label: "Fab IT Hub",
                href: "https://fabithub.com",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CabZoy Docs, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "GJIJS5P8C1",
        apiKey: "3f770b340e02b3cdc5dde9ed165d30b0",
        indexName: "docs_cabzoy",
        contextualSearch: true,
        searchPagePath: "search",
      },
    }),
};

module.exports = config;
