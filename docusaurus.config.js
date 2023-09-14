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
          lastVersion: "current",
          versions: {
            current: {
              label: "Latest (v3.0.x)",
            },
            legacy: {
              label: "v2.0 or Older",
              path: "legacy",
            },
          },
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
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
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
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
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
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CabZoy Pro | Fab IT Hub.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
