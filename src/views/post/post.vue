<template>
  <div class="flex flex-row  m-6 p-6 " style="align-items:flex-start;">
   <div  class="basis-1/7 rounded-md mr-6  text-xl text-slate-400" style="background:#fff; display:flex; justify-content: center;justify-content: center;">
 <ul class="  divide-y divide-slate-200 " style="display: flex; flex-direction: column;text-align: center;" >
    <li class="p-4"><span></span><el-icon><Star /></el-icon><p>1</p></li>
    <li class="p-4"><span></span><el-icon><Star /></el-icon><p >2</p></li>
    <li class="p-4"><span></span><el-icon><Star /></el-icon></li>
    <li class="p-4"><span></span><el-icon><Star /></el-icon></li>
 </ul>
   </div>
   <div class=" rounded-md mr-6  p-6" style="background:#fff; flex:1;">
   <div>
    <h3 class="text-2xl text-slate-500">一个提高go开发效率的秘密武器，一天内开发完成一个极简版社区后端服务</h3>
    <div class="mt-2 text-slate-300 " style="display: flex;  align-items: center; " >
        <span style="display: flex; " >
            <a href="#">
           <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
        </a>
        </span>
        <span class="pl-2"><a href="#">wdf的个人博客</a></span>
        <span style="display: flex; align-items: center; " class="pl-2"><el-icon><View /></el-icon> <p class="p-1">303</p></span>
  <span >/</span>
  <span style="display: flex; align-items: center; " class="pl-2"><el-icon><ChatDotRound /></el-icon><p class="p-1">3</p></span>
  <span>/</span>
  <span style="display: flex; align-items: center; " class="pl-2">创建于1周前</span>
  <span>/</span>
  <span style="display: flex; align-items: center; " class="pl-2">更新于6天前</span>
    </div>
    <div >
        <h3 class="mt-4 mb-4"><a href="#" class="text-2xl font-bold">community-single</a></h3>
        <p class="text-xl text-slate-500 ">community-single 是一个极简版社区的后端服务，主要包括用户的注册、登录、关注等功能，创作内容 
            (文本、图片、视频) 的发布、评论、点赞、收藏等功能，这些功能在各个社区平台、视频平台、
            直播平台等都比较常见，可以作为学习参考用，点击查看完整的项目代码。</p> <br><br>
        <p class="text-xl text-slate-500 ">
            community-single 项目一开始设计为单体 web 服务，整个服务由生成代码工具 
            sponge 辅助完成，sponge 生成 web 服务代码过程中剥离了业务逻辑与非业务逻辑两部分代码，
            这里的非业务逻辑代码指的是 web 服务框架代码，主要包括：
        </p><br><br>
        <ul class="text-xl text-slate-500 p-4">
            <li>·经过封装的 gin 代码</li>
            <li>·服务治理 (日志、限流、熔断、链路跟踪、服务注册与发现、指标采集、性能分析、配置中心、资源统计等)</li>
            <li>·编译构建和部署脚本 (二进制、docker、k8s)</li>
            <li>·CI/CD(jenkins)</li>
        </ul>
        <p class="text-xl text-slate-500 mt-6 mb-6 ">除了 web 服务框架代码，其他都属于业务逻辑代码。</p>
        <p class="text-xl text-slate-500 ">
            把一个完整 web 服务代码看作一个鸡蛋，蛋壳表示 web 服务框架代码，蛋白和蛋黄都表示业务逻辑代码。
            蛋黄是业务逻辑的核心 (需要人工编写的代码)，例如定义 mysql 表、定义 api 接口、编
            写具体逻辑代码都属于蛋黄部分。蛋白是业务逻辑核心代码与 web 框架代码连接的桥梁 (自动生成，
            不需要人工编写)，例如根据 proto 文件生成的注册路由代码、handler 方法函数代码、参数校验代码、错
            误码、swagger 文档等都属于蛋白部分。web 服务鸡蛋模型剖析图如下图所示：
        </p>
        <p class=" mt-6 mb-6 rounded-md  ">
            <img  src="https://cdn.learnku.com/uploads/images/202307/10/106505/VKQbK8bcrO.png!large" alt="">
        </p>
    </div>
</div>
   </div>
   <div class="basis-1/5  " >
  <div class=" rounded-md p-6" style="background:#fff;">
<div class="grid grid-cols-1 divide-y">
    <div style="display: flex; flex-direction: row;justify-content: space-between;">
       <div>
         <a href="#">wdf</a>
        <span><p>未填写</p></span>
       </div>
       <div class="w-20 h-20 rounded-full p-2" >
        <a href="#"><img src=" https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" alt="" style="border-radius: 50%;"></a>
       </div>
    </div>
    <div style="display: flex; flex-direction: row; text-align: center;" class="text-slate-500">
        <div title="1" class="p-4">文章
            <p>1</p>
        </div>
        <div title="1"  class="p-4">粉丝
            <p>1</p>
        </div>
        <div title="1"  class="p-4">喜欢
            <p>1</p>
        </div>
        <div title="1"  class="p-4">收藏
            <p>1</p>
        </div>
    </div>
    <div style="display: flex; flex-direction: row;justify-content:space-between;" class="p-6 text-slate-500">
        <div title="博客总访问量排行第 1632 位 ">
          排名：1632
      </div>
      <div title="博客总访问量 1554（每日更新） ">
        访问：1554
      </div>
    </div>
    <div>
        <el-popover
    placement="top-start"
    :width="200"
    trigger="hover"
    content="关注后此博客的新文章会在首页动态里显示"
  >
    <template #reference>
      <el-button class="m-2 hover:bg-slate-100 hover:text-slate-900">关注</el-button>
    </template>
  </el-popover>
      <el-button class="m-2">私信</el-button>
   </div>
</div>
</div>
  <div class=" rounded-md p-6 mt-2  text-xl text-slate-500" style="background:#fff; display: flex; justify-content: center; align-items: center;" >
    <el-icon><ChatDotRound /></el-icon><a href="#" class="ml-2" >所有博文</a></div>
  <div class=" rounded-md p-6 mt-2 text-xl text-slate-500" style="background:#fff; display: flex; justify-content: center; align-items: center;">
    <el-icon><View /></el-icon><a href="#" class="ml-2 ">阅读模试</a></div>
  <div>
    <span  style="display: flex; flex-direction: row;"><el-input
        v-model="input1"
        class=" h-10 mt-2"
        placeholder="请输入wdf的文章"
        
      />
      <el-button class=" h-10 mt-2" > <el-icon><Search /></el-icon></el-button></span>
  </div>
  <div class="divide-y divide-slate-200 rounded-md  mt-2  text-slate-500" style="background:#fff;">
    <div class=" p-4 text-xl" style="display: flex; justify-content: space-between; align-items: center;"  >
    <span>文章归档 </span>
 <a href="#"><el-icon><MessageBox /></el-icon></a>
    </div>
    <div class=" p-4"  >
        <a href="#" class="p-2 flex justify-between items-center no-underline hover:text-blue-500 hover:underline"><span>2023年7月</span> <span>2篇</span></a>
        <a href="#" class="p-2 flex justify-between items-center no-underline hover:text-blue-500 hover:underline"><span>2023年8月</span> <span>5篇</span></a>
        <a href="#" class="p-2 flex justify-between items-center no-underline hover:text-blue-500 hover:underline"><span>2023年9月</span> <span>1篇</span></a>
        <a href="#" class="p-2 flex justify-between items-center no-underline hover:text-blue-500 hover:underline"><span>2023年12月</span> <span>2篇</span></a>
    </div>
</div>

<div class="divide-y divide-slate-200 rounded-md  mt-2 p-4 text-slate-500 " style="background:#fff; letter-spacing: 3px;">
    <el-tabs v-model="activeName"  >
    <el-tab-pane label="最新文章" name="first">
        <div class=" flex flex-row p-1 mb-2 " >
            <a href="#" >
                <span class=" rounded-md bg-gray-400  p-1 one ">1周前
                </span>
                <a href="#" class="  no-underline hover:text-blue-500 hover:underline p-2 tracking-wider mt-1" > 
                    go微服务实战项目，使用工具一天完成了一个社区后端服务（单体）转换到微服务集群</a>
              </a>        
        </div>
        <div class=" flex flex-row mt-4">
            <a href="#" >
                <span class="ui label tiny rounded-md bg-gray-400 mr-2 p-1 ">2个月前
                </span>
                <a href="" class="  no-underline hover:text-blue-500 hover:underline p-2 tracking-wider "> 
                    go微服务实战项目，使用工具一天完成了一个社区后端服务（单体）转换到微服务集群</a>
              </a>        
        </div>
        <div class=" flex flex-row mt-4">
            <a href="#" >
                <span class="ui label tiny rounded-md bg-gray-400 mr-2 p-1 ">2个月前
                </span>
                <a href="" class="  no-underline hover:text-blue-500 hover:underline p-2 tracking-wider "> 
                    go微服务实战项目，使用工具一天完成了一个社区后端服务（单体）转换到微服务集群</a>
              </a>        
        </div>
        <div class=" flex flex-row mt-4">
            <a href="#" >
                <span class="ui label tiny rounded-md bg-gray-400 mr-2  p-1">2个月前
                </span>
                <a href="" class="  no-underline hover:text-blue-500 hover:underline p-2 tracking-wider "> 
                    go微服务实战项目，使用工具一天完成了一个社区后端服务（单体）转换到微服务集群</a>
              </a>        
        </div>
    </el-tab-pane>
    <el-tab-pane label="最受欢迎" name="second">
       <div class="divide-y divide-slate-200">
         <div class=" flex flex-row mt-4 mb-2">
            <a href="#" >
                <span class=" rounded-md bg-gray-300 mr-2 p-1 "> <el-icon><Pointer /></el-icon><i  class="p-1">2</i>
                </span>
                <a href="" class="  no-underline hover:text-blue-500 hover:underline p-2 tracking-wider "> 
                    go微服务实战项目，使用工具一天完成了一个社区后端服务（单体）转换到微服务集群</a>
              </a>        
        </div>
          <div class=" flex flex-row mt-4">
            <a href="#" >
                <span class=" rounded-md bg-gray-300 mr-2 p-1 "> <el-icon><Pointer /></el-icon><i  class="p-1">2</i>
                </span>
                <a href="" class="  no-underline hover:text-blue-500 hover:underline p-2 tracking-wider "> 
                    go微服务实战项目，使用工具一天完成了一个社区后端服务（单体）转换到微服务集群</a>
              </a>        
        </div>
           <div class=" flex flex-row mt-4">
            <a href="#" >
                <span class=" rounded-md bg-gray-300 mr-2 p-1 "> <el-icon><Pointer /></el-icon><i  class="p-1">2</i>
                </span>
                <a href="" class="  no-underline hover:text-blue-500 hover:underline p-2 tracking-wider "> 
                    go微服务实战项目，使用工具一天完成了一个社区后端服务（单体）转换到微服务集群</a>
              </a>        
        </div>
           <div class=" flex flex-row mt-4">
            <a href="#" >
                <span class=" rounded-md bg-gray-300 mr-2 p-1 "> <el-icon><Pointer /></el-icon><i  class="p-1">2</i>
                </span>
                <a href="" class="  no-underline hover:text-blue-500 hover:underline p-2 tracking-wider "> 
                    go微服务实战项目，使用工具一天完成了一个社区后端服务（单体）转换到微服务集群</a>
              </a>        
        </div>
       </div>
    </el-tab-pane>
   
  </el-tabs>
</div>
<div class="divide-y divide-slate-200 rounded-md  mt-2  text-slate-500" style="background:#fff;">
    <div class=" p-4 text-xl" style="display: flex; justify-content: space-between; align-items: center;"  >
    <span>博客标签 </span>
    </div>
    <div class="rounded-md p-4 flex-wrap" style="display: flex; flex-direction: row; ">
    
        <a href="#" class="mt-4">
            <span class=" rounded-md bg-yellow-200 mr-2 p-2 "> redis<i  class="p-3">2</i>
           </span>
        </a>
        <a href="#" class="mt-4">
            <span class=" rounded-md bg-yellow-200 mr-2 p-2 "> redis<i  class="p-3">2</i>
           </span>
        </a>
        <a href="#" class="mt-4">
            <span class=" rounded-md bg-yellow-200 mr-2 p-2 "> redis<i  class="p-3">2</i>
           </span>
        </a>
        <a href="#" class="mt-6">
            <span class=" rounded-md bg-yellow-200 mr-2 p-2 "> redis<i  class="p-3">2</i>
           </span>
        </a>
        <a href="#" class="mt-6">
            <span class=" rounded-md bg-yellow-200 mr-2 p-2 "> redis<i  class="p-3">2</i>
           </span>
        </a>
        <a href="#" class="mt-6">
            <span class=" rounded-md bg-yellow-200 mr-2 p-2 "> redis<i  class="p-3">2</i>
           </span>
        </a>
         <a href="#" class="mt-6">
            <span class=" rounded-md bg-yellow-200 mr-2 p-2 "> 生成代码<i  class="p-3">2</i>
           </span>
        </a>
        <a href="#" class="mt-6">
            <span class=" rounded-md bg-yellow-200 mr-2 p-2 "> 自动生成代码<i  class="p-3">2</i>
           </span>
        </a>
    </div>
    <div>

    </div>
    
</div>
<div class="divide-y divide-slate-200 rounded-md  mt-2  text-slate-500" style="background:#fff;">
    <div class=" p-4 text-xl" style="display: flex;justify-content: center;  align-items: center;"  >
    <span>社区赞助商 </span>
    </div>
    <div class="rounded-md p-4  flex-wrap" style="text-align: center; display: flex;justify-content: center;  align-items: center;">
    <a href="#" class="mt-2">
        <img  style="width: 150px;" src="https://cdn.learnku.com/uploads/banners/OgojJqmwSGX6n70x3K3t.png!large" alt="">
    </a>
    <a href="#" class="mt-2">
        <img style="width: 150px;" src="https://cdn.learnku.com/uploads/banners/1Ihupum3jYbbaKS9vqUL.jpg!large" alt="">
    </a>
     <a href="#" class="mt-2">
        <img style="width: 150px;" src="https://cdn.learnku.com/uploads/banners/9OmEvWfBFQ9gLuUbWRNR.jpg!large" alt="">
    </a>
     <a href="#" class="mt-2">
        <img style="width: 150px;" src="https://cdn.learnku.com/uploads/banners/DS81TsKI8sOAYDBbLjEq.png!large" alt="">
    </a>
     <a href="#" class="mt-2">
        <img style="width: 150px;" src="https://cdn.learnku.com/uploads/banners/sIrR8HH5jtwSb1UEI2zz.png!large" alt="">
    </a>
    <a href="#" class="mt-2">
        <img style="width: 150px;" src="https://cdn.learnku.com/uploads/banners/GX8a3CAZX276iGVAz6jN.jpg!large" alt="">
    </a>
   <a href="#" class="mt-2">
        <img style="width: 150px;" src="https://cdn.learnku.com/uploads/banners/6xjr0tkvWMJnYzEkBEd2.png!large" alt="">
    
    </a>
    </div>
    <div class=" p-4 " style="display: flex;justify-content: center;  align-items: center;"  >
    <a href="#" class="no-underline  hover:underline hover:text-dark-50">成为赞助商</a>
    </div>
</div>


</div>

  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
const activeName = ref('first')
const input1 = ref('')


</script>

<style  scoped>
.one{
    margin-bottom: 5px;
}
</style>