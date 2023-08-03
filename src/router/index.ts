import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/layout/layout.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/login/login.vue"),
    },{
      path: "/post",
      component: () => import("@/views/post/post.vue"),
    },{
      path: "/menu",
      component: () => import("@/views/layout/modules/Menu.vue"),
    },{
      path:"/columns",
      component:()=> import("@/views/columns/Column.vue")
    }
  ],
});

export default router;