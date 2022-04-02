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
    },
    component: CpuPage,
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
    name:'chassis',
    path:'/chassis',
    props: {
      path : "chassis",
    },
    component: ChassisPage,
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
    name:'psu',
    path:'/psu',
    props: {
      path : "psu",
    },
    component: PsuPage,
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
    name:'fan',
    path:'/fan',
    props: {
      path : "fan",
    },
    component: FanPage,
  },
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
