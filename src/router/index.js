import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import mineRouter from './mine'
import cinemaRouter from './cinema'
import store from '@/store'
import { Dialog } from 'vant';

import {
  get,
} from '@/axios' // 加入axios接口请求用法
Vue.use(VueRouter)

const routes = [
  movieRouter,
  cinemaRouter,
  mineRouter,
  {
    path: '/*',
    redirect: '/movie'
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.auth)) {
    if (store.getters['user/_isLogin'] && store.state.user.info) {
      get('/member/self').then((res) => {
          if (res.code == 200) {
            store.dispatch('user/_UpdateInfo',res.resource)
          }
        }).catch(err => {
            Dialog.alert({
              message: '令牌失效'
            });
            store.dispatch('user/_Logout')
        })
      next()
    } else if (to.path !== '/') {
        Dialog.alert({
          message: '检测到您未登录，请先登录'
        });
        next({ path: '/mine/login' })
    }
  } else {
    next()
  }
})

export default router
