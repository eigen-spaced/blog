import { defineConfig, fontProviders, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import { transformerFileName } from "./src/utils/transformers/fileName";
import { remarkReadingTime } from "./src/utils/remark/readingTime";
import { rehypeFootnotesToMargin } from "./src/utils/rehype/footnotesToMargin";
import { SITE } from "./src/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkMath, remarkReadingTime],
    rehypePlugins: [rehypeKatex, rehypeFootnotesToMargin],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  vite: {
    // eslint-disable-next-line
    // @ts-ignore
    // This will be fixed in Astro 6 with Vite 7 support
    // See: https://github.com/withastro/astro/issues/14030
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  fonts: [
    {
      name: "Source Serif 4",
      cssVariable: "--font-source-serif",
      provider: fontProviders.google(),
      optimizedFallbacks: true,
      fallbacks: ["Georgia", "serif"],
      weights: [400, 600],
      styles: ["normal", "italic"],
    },
    {
      name: "IBM Plex Mono",
      cssVariable: "--font-plex-mono",
      provider: fontProviders.google(),
      fallbacks: ["ui-monospace", "monospace"],
      weights: [400, 500, 600],
      styles: ["normal"],
    },
  ],
});
