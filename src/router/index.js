import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Index from '../components/index/Index'
import List from '../components/list/List'
import Mine from '../components/mine/Mine'
import Collection from '../components/mine/Collection'
import FeedBack from '../components/mine/FeedBack'
import About from '../components/mine/About'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        activeNav: {
          title: '精选',
          current: '1',
          bottomNavIsShow: true,
        }
      }
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      meta: {
        activeNav: {
          title: '列表',
          current: '2',
          bottomNavIsShow: true,
        }
      }
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
      meta: {
        activeNav: {
          title: '个人',
          current: '3',
          bottomNavIsShow: true,
        }
      }
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection,
      meta: {
        activeNav: {
          title: '收藏列表',
          current: '4',
          bottomNavIsShow: false,
        }
      }
    },
    {
      path: '/feedback',
      name: 'FeedBack',
      component: FeedBack,
      meta: {
        activeNav: {
          title: '反馈',
          current: '5',
          bottomNavIsShow: false,
        }
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        activeNav: {
          title: '关于',
          current: '6',
          bottomNavIsShow: false,
        }
      }
    },
    {
      path: '*',
	    redirect: '/'
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach(({ meta }, from, next) => {
	store.commit('SET_ACTIVE_NAV_CURRENT', meta.activeNav.current)
  store.commit('SET_BOTTOM_NAV_SHOW', meta.activeNav.bottomNavIsShow)
  store.commit('SET_ACTIVE_NAV_TITLE', meta.activeNav.title)
  next()
})

export default router
