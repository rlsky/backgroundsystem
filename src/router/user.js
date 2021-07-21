export default [
  {
    path: '/user',
    meta: { title: '用户' },
    redirect: '/user/index',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout'),
    children: [
      {
        name: 'index',
        path: '/user/index',
        component: () => import(/* webpackChunkName: "layout" */ '@/pages/user'),
        meta: { title: '个人中心' }
      }
    ]
  }
]
