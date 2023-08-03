<template>
  <div style="display: flex; flex-direction: row; align-items: flex-start;" >
   <div style="width: 1000px; background:#fff; " class="rounded-md mr-6 p-6">
    <el-tabs class="ml-4" v-model="activeName">
    <el-tab-pane  label="首页"  name="first" >
      <div class="rounded-full bg-light-100">
<MenuModules></MenuModules>

      </div>
    </el-tab-pane>
    <el-tab-pane label="专栏" name="second">专栏</el-tab-pane>
    <el-tab-pane label="文章"  name="third">
      <div class="rounded-full bg-light-100">

      </div>
    </el-tab-pane>
    <el-tab-pane label="贴吧" name="fourth">贴吧</el-tab-pane>
    <el-tab-pane label="前端"  name="fifth">前端</el-tab-pane>
    <el-tab-pane label="后端"  name="sixth">后端</el-tab-pane>
  </el-tabs>
  
   </div>
   <div style="background:#fff; flex: 1;" class="rounded-md ">
<p class="p-6 text-gray-500">Go（又称 Golang）是 Google 开发的一种静态强类型、编译型、并发型，
  并具有垃圾回收功能的编程语言。Go 被誉为是未来的服务器端编程语言。</p>
   </div>
  
  </div>
</template>

<script setup lang="ts">
import MenuModules from "./Menu-modules.vue";
import { ref } from 'vue'


const activeName = ref('first')
</script>

<style  scoped>

</style>