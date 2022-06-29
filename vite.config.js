import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import Icons from "unplugin-icons/vite"
import IconsResolver from "unplugin-icons/resolver"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
export default defineConfig({
  base: "./", // 根路径
  // 全局加载scss文件
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "src/assets/css/element-plus.scss" as *;`,
        charset: false
      }
    }
  },
  plugins: [
    // 识别vue
    vue(),
    // 自动导入vue3中composition api函数
    AutoImport({
      include: [/\.vue$/, /\.vue\?vue/], // 作用于所有vue文件
      dts: "src/auto-import.d.ts", // 生成全局的vue函数的typescript定义
      imports: ["vue", "vue-router", "vuex"], // vue和vue-router都自动导入
      resolvers: [
        // 自动导入element-plus函数，如message
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon"
        })
      ]
    }),
    // 自动按需导入element-plus组件
    Components({
      dirs: ["src/components"], // 要导入组件的目录路径
      extensions: ["vue"],
      deep: true, // 搜索子目录
      dts: false, // 不使用ts
      include: [/\.vue$/, /\.vue\?vue/], // 只识别vue文件
      resolvers: [
        IconsResolver({
          enabledCollections: ["ep"]
        }),
        ElementPlusResolver({
          importStyle: "sass"
        })
      ]
    }),
    // 自动下载
    Icons({
      autoInstall: true
    })
  ],
  resolve: {
    // 路径别名
    alias: {
      "@": resolve(__dirname, "src"),
      "~@assets": resolve(__dirname, "src/assets"),
      "@utils": resolve(__dirname, "src/utils")
    }
  },
  server: {
    // 设置代理
    // proxy: {
    //   "/test": "http://192.168.1.236:10007"
    // },
    port: 9005, // 端口号
    open: true // 是否自动打开浏览器
  }
})
