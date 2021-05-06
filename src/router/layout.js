
export default [
  {
    path: '/layout',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout'),
    children:[
      {
        path:'home',
        component:() => import(/* webpackChunkName: "layout" */ '@/views/home')
      }
    ]
  }
]