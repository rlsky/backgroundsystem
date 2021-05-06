import Vue from 'vue';
import VueRouter from 'vue-router';

// import layout from './layout'
Vue.use(VueRouter);


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    mode: "history",
    routes: [
      {
        path: '/',
        redirect: '/layout'
      },
      {
        path: '/layout',
        component: () => import(/* webpackChunkName: "layout" */ '@/views/layout'),
        children:[
          {
            path:'/layout/home',
            component:() => import(/* webpackChunkName: "layout" */ '@/views/home')
          }
        ]
      }
    ]
});

router.beforeEach((to, from, next) => {
  document.title=to.meta.title || 'background system'
  next()
})

export default router;