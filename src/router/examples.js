export default [
  {
    path: '/oms',
    meta: { title: '模板' },
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout'),
    children:[
      {
        name:'Information',
        path:'/oms/Information',
        component:() => import(/* webpackChunkName: "layout" */ '@/pages/Information'),
        meta: { title: 'mock数据' }
      },
      {
        name:'fullPage',
        path:'/oms/fullPage',
        component:() => import(/* webpackChunkName: "layout" */ '@/pages/fullPage'),
        meta: { title: '完整ele页面' }
      }
    ]
  }
]