
export default [
  {
    path: '/layout',
    name:'layout',
    meta: { title: '首页' },
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout'),
    children:[
      {
        name:'home',
        path:'/layout/home',
        component:() => import(/* webpackChunkName: "layout" */ '@/pages/home'),
        meta: { title: '主页' }
      }
    ]
  }
]