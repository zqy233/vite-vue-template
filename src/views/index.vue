<template>
  <el-container class="home" style="height: 100vh">
    <el-header class="home-header">
      <p></p>
      <div><el-input v-model="a" maxlength="11200" resize="none" :clearable="true" :show-word-limit="true" autosize /></div>
    </el-header>
    <el-container class="home-container">
      <el-aside class="home-side">
        <!-- :collapse="isCollapse" @open="handleOpen" @close="handleClose" -->
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-sub-menu index="1">
            <template #title>
              <i-ep-location />
              <span>Navigator One</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title><span>item four</span></template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <template #title>Navigator Two</template>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <template #title>Navigator Three</template>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <template #title>Navigator Four</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="home-main">
        <el-scrollbar>
          <div class="text">111</div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
const a = ref("")
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
  .home-header {
    height: 200px;
  }
  .home-container {
    /* prettier-ignore */
    height: calc(100vh - 200PX);
    .home-side {
      /* prettier-ignore */
      width: 200PX;
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
