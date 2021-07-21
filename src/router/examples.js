export default [
  {
    path: '/oms',
    meta: { title: '模板' },
    redirect: '/oms/Information',
    component: () => import(/* webpackChunkName: "layout" */ '@/views/layout'),
    children: [
      {
        name: 'Information',
        path: '/oms/Information',
        component: () => import(/* webpackChunkName: "layout" */ '@/pages/Information'),
        meta: { title: 'mock数据' }
      },
      {
        name: 'fullPage',
        path: '/oms/fullPage',
        component: () => import(/* webpackChunkName: "layout" */ '@/pages/fullPage'),
        meta: { title: '完整ele页面' }
      },
      {
        name: 'upload',
        path: '/oms/upload',
        component: () => import(/* webpackChunkName: "layout" */ '@/pages/upload'),
        meta: { title: '上传' }
      },
      {
        name: 'panorama',
        path: '/oms/panorama',
        component: () => import(/* webpackChunkName: "layout" */ '@/pages/panorama'),
        meta: { title: '全景看图' }
      },
      {
        name: 'lodashPage',
        path: '/oms/lodashPage',
        component: () => import(/* webpackChunkName: "layout" */ '@/pages/lodashPage'),
        meta: { title: 'lodash模块' }
      },
      {
        name: 'customColumns',
        path: '/oms/customColumns',
        component: () => import(/* webpackChunkName: "layout" */ '@/pages/customColumns'),
        meta: { title: '自定义列' }
      }
    ]
  }
]
