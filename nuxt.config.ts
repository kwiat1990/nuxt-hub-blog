// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxtjs/color-mode",
    ["reka-ui/nuxt", { prefix: "Reka" }],
  ],
  pages: true,
  vite: {
    plugins: [tailwindcss()],
  },
  content: {
    preview: {
      api: "https://api.nuxt.studio",
      dev: true,
    },
  },
  colorMode: {
    classSuffix: "",
  },
});
