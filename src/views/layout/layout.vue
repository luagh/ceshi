<template>
   <div class="rounded-md">
    <el-container >
      <el-header class="header rounded-md border-t-4 border-indigo-500"><Header></Header></el-header>
      <el-main class="container rounded-md " ><Menu></Menu></el-main>
      <!-- <Post></Post> -->
      <el-footer><Footer></Footer></el-footer>
    </el-container>
    hh
  </div>
</template>

<script setup lang="ts">
import Header from "./modules/Header.vue";
import Menu from "./modules/Menu.vue";
import Footer from "./modules/Footer.vue";
// import Post from "../post/post.vue"


</script>

<style  scoped>
.container{
  width: 1280px;
  display: flex;
margin: 40px auto;
}
.header{
  background: #ffff;
}

</style>