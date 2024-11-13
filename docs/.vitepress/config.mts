import { defineConfigWithTheme } from "vitepress";
import type { ThemeConfig } from "vitepress-carbon";
import baseConfig from "vitepress-carbon/config";

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
      provider: "local",
    },

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/guide/introduction" },
          { text: "Getting Started", link: "/guide/getting-started" },
        ],
      },
      {
        text: "Documentation",
        items: [
          {
            text: "Data Structures",
            items: [
              { text: "Deque", link: "/documentation/data-structures/deque" },
              {
                text: "LinkedList",
                link: "/documentation/data-structures/linkedlist",
              },
              { text: "Queue", link: "/documentation/data-structures/queue" },
              {
                text: "SingleLinkedList",
                link: "/documentation/data-structures/singlelinkedlist",
              },
              { text: "Stack", link: "/documentation/data-structures/stack" },
            ],
          },
          {
            text: "Algorithms",
            items: [
              {
                text: "Math",
                items: [
                  {
                    text: "Factorial",
                    link: "/documentation/algorithms/math/factorial",
                  },
                ],
              },
              {
                text: "Search",
                items: [
                  {
                    text: "Binary Search",
                    link: "/documentation/algorithms/search/binary-search",
                  },
                  {
                    text: "Linear Search",
                    link: "/documentation/algorithms/search/linear-search",
                  },
                  {
                    text: "Recursive Binary Search",
                    link: "/documentation/algorithms/search/recursive-binary-search",
                  },
                ],
              },
              {
                text: "Sort",
                items: [
                  {
                    text: "Bubble Sort",
                    link: "/documentation/algorithms/sort/bubble-sort",
                  },
                  {
                    text: "Insertion Sort",
                    link: "/documentation/algorithms/sort/insertion-sort",
                  },
                  {
                    text: "Merge Sort",
                    link: "/documentation/algorithms/sort/merge-sort",
                  },
                  {
                    text: "Quick Sort",
                    link: "/documentation/algorithms/sort/quick-sort",
                  },
                ],
              },
            ],
          },
          {
            text: "Toolkit",
            items: [{ text: "Logger", link: "/documentation/toolkit/logger" }],
          },
        ],
      },
      {
        text: "Others",
        items: [
          {
            text: "Contributing",
            link: "https://github.com/gabriel-logan/DsacJs/blob/main/CONTRIBUTING.md",
          },
          {
            text: "License",
            link: "https://github.com/gabriel-logan/DsacJs/blob/main/LICENSE",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/gabriel-logan/DsacJs" },
    ],
  },
});
