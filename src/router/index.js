import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {path: 'home', name: 'home', params: {title: 'Umumiy'}, component: () => import('../views/Home/Index.vue')},
      {path: 'finance', name: 'finance', component: () => import('../views/Finance.vue')},

      {path: 'warehouse/ip', name: 'warehouse-ip', component: () => import('../views/Warehouse/Ip.vue')},
      {path: 'warehouse/mato', name: 'warehouse-mato', component: () => import('../views/Warehouse/Mato.vue')},
      {path: 'warehouse/yoqa', name: 'warehouse-yoqa', component: () => import('../views/Warehouse/Yoqa.vue')},
      {path: 'income', name: 'income', component: () => import('../views/Warehouse/Yoqa.vue')},
    ]
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
