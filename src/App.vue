<!--
 * @Description: 
 * @Author: Demo
 * @Date: 2023-05-05 10:10:02
 * @LastEditors: Demo
 * @LastEditTime: 2023-05-05 14:20:00
-->
<script setup></script>
<template>
  <el-container>
    <el-aside>
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped>
.el-header {
  height: 30px;
}
.el-container {
  height: 100vh;
}
.el-main {
  padding: 0 !important;
  position: relative;
}
.el-aside {
  width: auto;
}
</style>
