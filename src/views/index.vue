<template>
  <el-container class="home" style="height: 100vh">
    <el-header class="home-header">
      <VTSwitchAppearance v-model="isDark"></VTSwitchAppearance>
      <p class="time">{{ formatted }}</p>
    </el-header>
    <el-container class="home-container">
      <el-aside class="home-side" width="auto">
        <div class="aside-icon" @click="collapseAside">
          <el-icon><MoonNight v-if="isCollapse && isDark" /><Moon v-if="!isCollapse && isDark" /><Sunrise v-if="isCollapse && !isDark" /><Sunny v-if="!isCollapse && !isDark" /></el-icon>
        </div>
        <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" ref="menu">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <template #title><span>Group One</span></template>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><Menu /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><Document /></el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><Setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="home-main">
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
const isDark = ref()
const isCollapse = useStorage("isCollapse", false)
const formatted = useDateFormat(useNow(), "YYYY-MM-DD HH:mm:ss")
/** 折叠菜单栏 */
const menu = ref()
const collapseAside = () => {
  menu.value.close("1")
  nextTick(() => {
    isCollapse.value = !isCollapse.value
  })
  console.log(menu.value)
}
</script>
<style lang="scss">
.el-menu {
  border-right: none;
}
.home {
  height: 100vh;

  .home-header {
    height: 100px;
    display: flex;
    font-size: 46px;
    align-items: center;
    .time {
      font-size: 14px;
      margin-left: 20px;
    }
  }

  .home-container {
    /* prettier-ignore */
    height: calc(100vh - 200PX);

    .home-side {
      .aside-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        height: 60px;
      }
      .icon {
        width: 30px;
        height: 30px;
        min-width: 30px;
      }
    }

    .home-main {
      background-color: rgba(255, 255, 255, 0.297);

      .text {
        height: 5000px;
      }
    }
  }
}
</style>
