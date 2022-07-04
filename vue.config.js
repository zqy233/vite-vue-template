const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [require("unplugin-vue-components/webpack")({})]
  }
})
