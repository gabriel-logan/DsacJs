import { defineConfigWithTheme } from "vitepress"
import type { ThemeConfig } from "vitepress-carbon"
import baseConfig from "vitepress-carbon/config"

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "DsacJs",
  description: "Data Structures - Algorithm - Toolkit Collection",
  srcDir: "src",
  //base: "/vitepress-carbon-template/", if running on github-pages, set repository name here
  base: "/DsacJs/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    search: {
      provider: "local"
    },
    
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" }
        ]
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/gabriel-logan/DsacJs" }
    ]
  }
})