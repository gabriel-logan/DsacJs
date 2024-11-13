import { defineConfigWithTheme } from "vitepress"
import type { ThemeConfig } from "vitepress-carbon"
import baseConfig from "vitepress-carbon/config"

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "🛠️ DsacJs",
  description: "Data Structures - Algorithm - Toolkit Collection",
  srcDir: "src",
  //base: "/vitepress-carbon-template/", if running on github-pages, set repository name here
  base: "/DsacJs/",
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/introduction" },
    ],

    search: {
      provider: "local"
    },
    
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/guide/introduction" },
          { text: "Getting Started", link: "/guide/getting-started" }
        ]
      },
      {
        text: "Others",
        items: [
          { text: "Contributing", link: "https://github.com/gabriel-logan/DsacJs/blob/main/CONTRIBUTING.md" },
          { text: "License", link: "https://github.com/gabriel-logan/DsacJs/blob/main/LICENSE" }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/gabriel-logan/DsacJs" }
    ]
  }
})
