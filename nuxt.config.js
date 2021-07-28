import colors from "vuetify/es5/util/colors";
// const config = require('./configs/config')
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Wagenabled",
    title: "Wagenabled",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    script: [
      {
        src:
          "https://maps.googleapis.com/maps/api/js?key=AIzaSyBaxMfWKuh_m7up5CvIL-LF_EHJ_eWkRWI&libraries=places"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/sass/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/i18n.js" ,  ssr: true},
    { src: "~/plugins/google-maps.js" ,ssr: false},
    { src: "~/plugins/aos.js", mode: "client" ,ssr: false },
    { src: "~/plugins/vuex-persist", ssr: false },
    { src: "~/plugins/axios" },
    { src: "~/plugins/lazy-load.js" ,ssr: false},
    { src: "~/plugins/vue-awesome-swiper", mode: "client",ssr: false }
  ],

  purgeCSS: {
    whitelist: [
      "aos-init",
      "aos-animate",
      "data-aos-delay",
      "data-aos-duration",
      "fade-up",
      "zoom-in",
      "fade-in",
      "fade-down-left"
    ]
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "nuxt-webfontloader"],
  webfontloader: {
    google: {
      families: ["Nunito+Sans:200,300,400,600,700,800,900&display=swap"]
    }
  },
  // env: {
  //   BASE_URL: config.API_URL,
  // },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      },
      defaultAssets: false
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // analyze: true
  }
};
