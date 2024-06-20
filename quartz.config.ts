export default {
  pageTitle: "My Quartz Site",
  enableSPA: true,
  enablePopovers: true,
  analytics: { provider: 'google', tagId: '<your-google-tag>' },
  locale: "en-US",
  baseUrl: "mydomain.com",
  theme: {
    light: "#ffffff",
    lightgray: "#d3d3d3",
    gray: "#808080",
    darkgray: "#404040",
    dark: "#000000",
    secondary: "#ff6347",
    tertiary: "#4682b4",
    highlight: "#ffff00"
  },
  typography: {
    header: "Roboto",
    code: "Courier New",
    body: "Arial"
  },
  transformers: [
    "frontmatter",
    "description"
  ],
  filters: [
    "drafts"
  ],
  emitters: [
    "rss"
  ]
};
