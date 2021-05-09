
export default [
  {
    path: '/layout',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout'),
    children:[
      {
        path:'/layout/home',
        component:() => import(/* webpackChunkName: "layout" */ '@/views/home')
      },
      {
        path:'/layout/Information',
        component:() => import(/* webpackChunkName: "layout" */ '@/views/Information')
      },
    ]
  }
]