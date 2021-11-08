import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
          {path: 'home', name: 'home', params:{title:'Umumiy'}, component: () => import('../views/Home/Index.vue')},
          {path: 'finance', name: 'finance', component: () => import('../views/Finance.vue')},
          {path: 'codebase', name: 'codebase', component: () => import('../views/CodeBase.vue')},

          {path: 'warehouse/ip', name: 'warehouse-ip', component: () => import('../views/Warehouse/Ip.vue')},
          {path: 'warehouse/mato', name: 'warehouse-mato', component: () => import('../views/Warehouse/Mato.vue')},
          {path: 'warehouse/yoqa', name: 'warehouse-yoqa', component: () => import('../views/Warehouse/Yoqa.vue')},

          {path: 'outsource/mato-toquv/:id', name: 'outsource-mato-toquv-id', component: () => import('../views/Outsource/MatoToquv/MatoToquvId.vue')},
          {path: 'outsource/yoqa-toquv/:id', name: 'outsource-yoqa-toquv-id', component: () => import('../views/Outsource/YoqaToquv/YoqaToquvId.vue')},
          {path: 'outsource/boyoqxona', name: 'outsource-boyoqxona', component: () => import('../views/Outsource/Boyoqxona.vue')},

          {path: 'supply/tayyor-xomashyo/mato', name: 'supply-tayyor-xomashyo-mato', component: () => import('../views/Supply/TayyorXomashyo/TayyorMato.vue')},
          {path: 'supply/tayyor-xomashyo/yoqa', name: 'supply-tayyor-xomashyo-yoqa', component: () => import('../views/Supply/TayyorXomashyo/TayyorYoqa.vue')},
          {path: 'supply/aksessuar', name: 'supply-aksessuar', component: () => import('../views/Supply/Aksessuar.vue')},
          {path: 'supply/bichuv', name: 'supply-bichuv', component: () => import('../views/Supply/Bichuv.vue')},

          {path: 'factory/:id', name: 'factory-id', component: () => import('../views/Factory/FactoryId.vue')},

          {path: 'ready-products/:id', name: 'ready-products-id', component: () => import('../views/Ready-Products/ReadyProductsId.vue')},
        ]
      }
];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;
