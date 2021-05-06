export default [
  {
    path: '/home',
    name: 'home',
    component:() => import(/* webpackChunkName: "home" */ '@/views/home/home.vue'),
    meta: {
      title:'首页'
    }
  }
]