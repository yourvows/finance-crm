import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./plugins/axios";
import requests from "./plugins/requests";
import vuetify from "./plugins/vuetify";
import '@/assets/scss/main.scss';
import '@/assets/style/style.css';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
    position: "bottom-right",
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
});


import { ValidationProvider, ValidationObserver } from 'vee-validate';
import './plugins/vee-validate';
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
import VueI18n from 'vue-i18n'

import ru from './locales/ru.json'
import uz from './locales/uz.json'
const messages = {
   ru,
    uz
}
console.log(messages)
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'ru', // set locale
    messages, // set locale messages
})

Vue.config.productionTip = false;
// this.$axios = axios;
Vue.prototype.$axios = axios;

new Vue({
    i18n,
    router,
    store,
    requests,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
