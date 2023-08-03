<template>
 <div style="display: flex;justify-content: space-between; align-items: flex-end; "  >
        <div style="display: flex; flex-direction: row; "  >
           <a> <el-avatar
          :size="32"
          class="mr-3"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        /></a> 
    <el-dropdown>
    <span class="m-2">
      Go
      <el-icon class="el-icon--right " name="el-icon-arrow-down">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Action 1</el-dropdown-item>
        <el-dropdown-item>Action 2</el-dropdown-item>
        <el-dropdown-item>Action 3</el-dropdown-item>
        <el-dropdown-item disabled>Action 4</el-dropdown-item>
        <el-dropdown-item divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown> 
        </div>
        <div style="display: flex;  float: right;">
        
            <el-tabs class="demo-tabs" >
    <el-tab-pane label="首页" name="first"></el-tab-pane>
    <el-tab-pane label="专栏" name="second"></el-tab-pane>
    <el-tab-pane label="文章" name="third"></el-tab-pane>
    <el-tab-pane label="贴吧" name="fourth"></el-tab-pane>
    <el-tab-pane label="前端" name="fifth"></el-tab-pane>
<el-tab-pane label="后端" name="sixth"></el-tab-pane>
  </el-tabs>
  <input class="w-30 h-10 ml-6 p-6 rounded-full"
        placeholder=" 文章搜索"
        :prefix-icon="Search"
      />
        </div>
        <div><ul style="display: flex; flex-direction: row; justify-content: center; list-style: none;">
            <li><el-button @click="btnFunc">
            
              <router-link to="/login">登录</router-link>
            </el-button></li>
        <li><el-button >注册</el-button></li>
        </ul>
      </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink} from 'vue-router'
import { Search } from '@element-plus/icons-vue'


const btnFunc =()=>{
  // console.log('点击登录');
 

}
</script>

<style lang="less" scoped>

</style>