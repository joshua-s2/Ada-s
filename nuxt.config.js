// import colors from "vuetify/es5/util/colors";

import {
  primaryColor,
  secondaryColor,
  warningColor,
  errorColor,
  successColor,
  accentColor,
  darkNeutralColor,
  lightNeutralColor,
  darkGrey,
  lightGrey,
  lightToDarkBtn
} from "./vuetify.options";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - portfolio",
    title: "portfolio",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/fonts/Poppins/stylesheet.css"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
        integrity:
          "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
        crossorigin: "anonymous"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
        integrity:
          "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",
        crossorigin: "anonymous"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.1/js/bootstrap.min.js",
        integrity: "sha256-xaF9RpdtRxzwYMWg4ldJoyPWqyDPCRD0Cv7YEEe6Ie8=",
        crossorigin: "anonymous"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~/assets/main.scss", lang: "scss" }],

  // set src as default
  srcDir: "src/",

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  // vuetify: {
  //   customVariables: ["~/assets/variables.scss"],
  //   theme: {
  //     dark: false,
  //     themes: {
  //       dark: {
  //         primary: colors.blue.darken2,
  //         accent: colors.grey.darken3,
  //         secondary: colors.amber.darken3,
  //         info: colors.teal.lighten1,
  //         warning: colors.amber.base,
  //         error: colors.deepOrange.accent4,
  //         success: colors.green.accent3
  //       }
  //     }
  //   }
  // },
  vuetify: {
    treeShake: true,
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      options: {
        customProperties: true
      },
      themes: {
        light: {
          primary: primaryColor,
          secondary: secondaryColor,
          warning: warningColor,
          error: errorColor,
          success: successColor,
          accent: accentColor,
          info: darkNeutralColor,
          darkNeutral: darkNeutralColor,
          lightNeutral: lightNeutralColor,
          darkGrey: accentColor
        },
        dark: {
          primary: darkNeutralColor,
          secondary: darkGrey,
          warning: warningColor,
          error: errorColor,
          success: successColor,
          accent: accentColor,
          info: darkNeutralColor,
          darkNeutral: darkNeutralColor,
          lightNeutral: lightNeutralColor,
          darkGrey: darkGrey,
          lightGrey: lightGrey,
          lightToDarkBtn: lightToDarkBtn
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend: config => {
      const svgRule = config.module.rules.find(rule => rule.test.test(".svg"));

      svgRule.test = /\.(png|jpe?g|gif|webp)$/;

      config.module.rules.push({
        test: /\.svg$/,
        use: ["vue-loader", "vue-svg-loader"]
      });
    }
  }
};
