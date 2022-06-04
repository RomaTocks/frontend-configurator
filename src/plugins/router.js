import Vue from 'vue'
import VueRouter from 'vue-router'
import CpuPage from "@/pages/CpuPage";
import ChassisPage from "@/pages/ChassisPage";
import MotherboardPage from "@/pages/MotherboardPage";
import GraphicCardsPage from "@/pages/GraphicCardsPage";
import PsuPage from "@/pages/PsuPage";
import RamPage from "@/pages/RamPage";
import FanPage from "@/pages/FanPage";
import ProductPage from "@/pages/ProductPage";
import LandingPage from "@/pages/LandingPage";
import ConfiguratorPage from "@/pages/ConfiguratorPage";
import ProfilePage from "@/pages/ProfilePage";
import AuthPage from "@/pages/AuthPage";

Vue.use(VueRouter)
const routes = [
  {
    name:'cpu',
    path:'/cpu',
    props: {
      path : "cpu",
    },
    component: CpuPage,
  },
  {
    path: '/cpu/:id',
    props:{
      path:"cpu"
    },
    component: ProductPage
  },
  {
    name:'gpu',
    path:'/gpu',
    props: {
      path : "gpu",
    },
    component: GraphicCardsPage,
  },
  {
    path: '/gpu/:id',
    props:{
      path:"gpu"
    },
    component: ProductPage
  },
  {
    name:'chassis',
    path:'/chassis',
    props: {
      path : "chassis",
    },
    component: ChassisPage,
  },
  {
    path: '/chassis/:id',
    props:{
      path:"chassis"
    },
    component: ProductPage
  },
  {
    name:'motherboard',
    path:'/motherboard',
    props: {
      path : "motherboard",
    },
    component: MotherboardPage,
  },
  {
    path: '/motherboard/:id',
    props:{
      path:"motherboard"
    },
    component: ProductPage
  },
  {
    name:'psu',
    path:'/psu',
    props: {
      path : "psu",
    },
    component: PsuPage,
  },
  {
    path: '/psu/:id',
    props:{
      path:"psu"
    },
    component: ProductPage
  },
  {
    name:'ram',
    path:'/ram',
    props: {
      path : "ram",
    },
    component: RamPage,
  },
  {
    path: '/ram/:id',
    props:{
      path:"ram"
    },
    component: ProductPage
  },
  {
    name:'fan',
    path:'/fan',
    props: {
      path : "fan",
    },
    component: FanPage,
  },
  {
    path: '/fan/:id',
    props:{
      path:"fan"
    },
    component: ProductPage
  },
  {
    name: 'configurator',
    path: '/config',
    component: ConfiguratorPage
  },
  {
    name: 'main',
    path: '/',
    component: LandingPage
  },
  {
    name: 'profile',
    path:'/profile',
    component: ProfilePage
  },
  {
    name: 'auth',
    path:'/authentication',
    component: AuthPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


export default router
