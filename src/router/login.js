export default [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import(/* webpackChunkName: "layout" */ '@/pages/login')
  }
]
