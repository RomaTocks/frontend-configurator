import Vue from 'vue'
import VueRouter from 'vue-router'
import CpuPage from "@/pages/CpuPage";
import ChassisPage from "@/pages/ChassisPage";
import MotherboardPage from "@/pages/MotherboardPage";
import GraphicCardsPage from "@/pages/GraphicCardsPage";
import PsuPage from "@/pages/PsuPage";
import RamPage from "@/pages/RamPage";
import FanPage from "@/pages/FanPage";

Vue.use(VueRouter)
const routes = [
  {
    name:'cpu',
    path:'/cpu',
    props: {
      path : "cpu",
      controller : new AbortController(),
    },
    component: CpuPage,
  },
  {
    name:'gpu',
    path:'/gpu',
    props: {
      path : "gpu",
      controller : new AbortController(),
    },
    component: GraphicCardsPage,
  },
  {
    name:'chassis',
    path:'/chassis',
    props: {
      path : "chassis",
      controller : new AbortController(),
    },
    component: ChassisPage,
  },
  {
    name:'motherboard',
    path:'/motherboard',
    props: {
      path : "motherboard",
      controller : new AbortController(),
    },
    component: MotherboardPage,
  },
  {
    name:'psu',
    path:'/psu',
    props: {
      path : "psu",
      controller : new AbortController(),
    },
    component: PsuPage,
  },
  {
    name:'ram',
    path:'/ram',
    props: {
      path : "ram",
      controller : new AbortController(),
    },
    component: RamPage,
  },
  {
    name:'fan',
    path:'/fan',
    props: {
      path : "fan",
      controller : new AbortController(),
    },
    component: FanPage,
  },
  // {
  //   path: '/',
  //   redirect: 'dashboard',
  // },
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   component: () => import('@/views/dashboard/Dashboard.vue'),
  // },
  // {
  //   path: '/typography',
  //   name: 'typography',
  //   component: () => import('@/views/typography/Typography.vue'),
  // },
  // {
  //   path: '/icons',
  //   name: 'icons',
  //   component: () => import('@/views/icons/Icons.vue'),
  // },
  // {
  //   path: '/cards',
  //   name: 'cards',
  //   component: () => import('@/views/cards/Card.vue'),
  // },
  // {
  //   path: '/simple-table',
  //   name: 'simple-table',
  //   component: () => import('@/views/simple-table/SimpleTable.vue'),
  // },
  // {
  //   path: '/form-layouts',
  //   name: 'form-layouts',
  //   component: () => import('@/views/form-layouts/FormLayouts.vue'),
  // },
  // {
  //   path: '/pages/account-settings',
  //   name: 'pages-account-settings',
  //   component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
  // },
  // {
  //   path: '/pages/login',
  //   name: 'pages-login',
  //   component: () => import('@/views/pages/Login.vue'),
  //   meta: {
  //     layout: 'blank',
  //   },
  // },
  // {
  //   path: '/pages/register',
  //   name: 'pages-register',
  //   component: () => import('@/views/pages/Register.vue'),
  //   meta: {
  //     layout: 'blank',
  //   },
  // },
  // {
  //   path: '/error-404',
  //   name: 'error-404',
  //   component: () => import('@/views/SearchError.vue'),
  //   meta: {
  //     layout: 'blank',
  //   },
  // },
  {
    path: '*',
    redirect: 'cpu',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


export default router
