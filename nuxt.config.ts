// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/color-mode"],
    colorMode: {
        classSuffix: ''
    },
    css:["@/assets/css/tailwind.css"]
})
