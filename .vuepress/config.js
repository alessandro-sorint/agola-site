module.exports = {
  title: "Agola",
  themeConfig: {
    //displayAllHeaders: true,
    nav: [
      { text: "Documentation", link: "/doc/" },
      {
        text: 'Learn More',
        items: [
          {
            text: 'About',
            items: [
              {
                text: 'Features',
                link: '/about/features/'
              },
            ]
          },
        ]
      },
    ],
    sidebar: {
      "/doc/": [
        "",
        {
          title: "Concepts",
          collapsable: false,
          children: ["concepts/runs", "concepts/workspaces"],
        },
        {
          title: "Run Configuration",
          collapsable: false,
          children: ["config/reference", "config/caching", "config/docker_registries_auth",
            {
              title: "Examples",
              collapsable: false,
              children: ["config/examples/go"],
            }
          ]
        },
        {
          title: "Architecture",
          collapsable: false,
          children: ["architecture/", "architecture/runservice"]
        },
      ],
    },
  },
  plugins: [
    ["@vuepress/back-to-top", true],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    ["@vuepress/medium-zoom", true],
    ["@vuepress/notification", true]
  ]
};
