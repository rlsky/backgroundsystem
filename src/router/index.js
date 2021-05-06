import Vue from 'vue';
import home from './home'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    // 路由匹配规则
    routes: [
      {
        path:'/',
        redirect:'/home'
      },
      ...home
    ]
});

router.beforeEach((to, from, next) => {
  document.title=to.meta.title || 'background system'
  next()
})

export default router;