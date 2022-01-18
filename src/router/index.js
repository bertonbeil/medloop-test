import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/practices',
      name: 'practices',
      component: () => import('@/views/practices/Practices.vue'),
      meta: {
        pageTitle: 'Practices',
        breadcrumb: [
          {
            text: 'Practices',
            active: true,
          },
        ],
      },
    },
    {
      path: '/companies',
      name: 'companies',
      component: () => import('@/views/companies/Companies.vue'),
      meta: {
        pageTitle: 'Companies',
        breadcrumb: [
          {
            text: 'Companies',
            active: true,
          },
        ],
      },
    },
    {
      path: '/plans',
      name: 'plans',
      component: () => import('@/views/plans/Plans.vue'),
      meta: {
        pageTitle: 'Plans',
        breadcrumb: [
          {
            text: 'Plans',
            active: true,
          },
        ],
      },
    },
    {
      path: '/types',
      name: 'types',
      component: () => import('@/views/types/Types.vue'),
      meta: {
        pageTitle: 'Types',
        breadcrumb: [
          {
            text: 'Types',
            active: true,
          },
        ],
      },
    },
    {
      path: '/codes',
      name: 'codes',
      component: () => import('@/views/codes/Codes.vue'),
      meta: {
        pageTitle: 'Codes',
        breadcrumb: [
          {
            text: 'Codes',
            active: true,
          },
        ],
      },
    },
    {
      path: '/bundles',
      name: 'bundles',
      component: () => import('@/views/bundles/Bundles.vue'),
      meta: {
        pageTitle: 'Bundles',
        breadcrumb: [
          {
            text: 'Bundles',
            active: true,
          },
        ],
      },
    },
    {
      path: '/schedules',
      name: 'schedules',
      component: () => import('@/views/schedules/Schedules.vue'),
      meta: {
        pageTitle: 'Schedules',
        breadcrumb: [
          {
            text: 'Schedules',
            active: true,
          },
        ],
      },
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('@/views/settings/Settings.vue'),
      meta: {
        pageTitle: 'Settings',
        breadcrumb: [
          {
            text: 'Settings',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
