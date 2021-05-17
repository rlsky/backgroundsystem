import Vue from 'vue';
import VueRouter from 'vue-router';

// import layout from './layout'
import examples from './examples'
import login from './login'
Vue.use(VueRouter);


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
    mode: "history",
    routes: [
      {
        path: '',
        redirect: '/home',
        component: () => import(/* webpackChunkName: "layout" */ '@/views/layout'),
        children: [
          {
            name:'home',
            path:'home',
            component:() => import(/* webpackChunkName: "layout" */ '@/pages/home'),
            meta: { title: '主页' }
          }
        ]
      },
      ...examples,
      ...login
    ]
});

router.beforeEach((to, from, next) => {
  document.title=to.meta.title || 'background system'
  next()
})

export default router;