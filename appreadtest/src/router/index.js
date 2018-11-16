import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login/login')
    },
    {
      path: '/mainContent',
      name: 'mainContent',
      component: () => import('@/components/content/mainContent'),
      children: [{
          path: '/baseInfo',
          name: 'baseInfo',
          component: () => import('@/components/content/personInfo/baseInfo')
        },{
          path: '/dayInfo',
          name: 'dayInfo',
          components: () => import('@/components/content/personInfo/dayInfo')
        }
      ]
    }
    // {
    //   name: 'user',
    //   path: '/user',
    //   component: () => import('@/components/user/user/user.vue'),
    //   children: [
    //     {
    //       name: 'usersManage',
    //       path: 'usersManage',
    //       component: () => import('@/components/user/user/userTable.vue')
    //     },
    //     {
    //       name: 'shopsManage',
    //       path: 'shopsManage',
    //       component: () => import('@/components/user/shop/shopTable.vue')
    //     }
    //   ]
    // }
  ]
})
// router.afterEach(route => {
//   // 缓存上次路径，用于登录后进入最后一次访问的页面
//   const savePath = (route) => {
//     const path = route.fullPath
//     if (path !== '/login' && path.indexOf('customer') === -1 ) {
//       localStorage.maoniuLastPath = path;
//     }
//   }
//   savePath(route)
// })

// export default router
