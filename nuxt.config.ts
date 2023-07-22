// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/apollo"],
  // appwrite: {
  //   endpoint: "https://cloud.appwrite.io/v1",
  //   project: "6493fe17137e24ba35dd",
  // },

  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://backboard.railway.app/graphql/v2",
        tokenName: "matoke",
      },
    },
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    proxyCookies: true,
  },
});
