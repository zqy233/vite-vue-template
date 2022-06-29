<template>
  <!-- <p>
    <home-header>111</home-header>
    <el-button type="primary">点击</el-button>

    <el-card> 111111111111 </el-card>
    <i-ep-loading color="#409EFC" class="is-loading" />
  </p> -->
  <!-- <template> -->
  <!-- <div class="common-layout"> -->
  <el-container class="home" style="height: 100vh">
    <el-header height="100px" class="home-header">Header</el-header>
    <el-container class="home-container">
      <el-aside width="200px" class="home-side">
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
          <div class="ssssss">111</div>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
  <!-- </div> -->
  <!-- </template> -->
</template>
<style lang="scss" scoped>
.home {
  height: 100vh;
  .home-header {
    /* background-color: skyblue; */
  }
  .home-container {
    /* height: calc(100vh - 100px); */
    .home-side {
      /* background-color: pink; */
    }
    .home-main {
      /* padding: 0; */
      /* height: 100%; */
      background-color: rgba(255, 255, 255, 0.297);
      /* overflow: auto; */
      /* padding-bottom: 500px; */
      /* overflow: auto; */
    }
  }
}
.ssssss {
  height: 5000px;
}
</style>
