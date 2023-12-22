<template>
    <v-navigation-drawer app v-model="drawer" :class="drawer ? 'sidebar' : ''">
        <div class="sidebar__inside">
            <ul class="items" id="sidebar_items">
                <div class="logo">
                    <img src="@/assets/emiran_logo2.svg"/>
                </div>
                <!-- ========== Home Start ========== -->
                <li class="item item-1">
                    <router-link tag="ul" class="caret" @click.native="assignRoute('home')"
                                 :class="addClass('home', 'caret-activated')" to="/home">
                        <div>
                            <img :class="[ activeRoute == 'home' ? 'filter-black' : '' ]"
                                 src="@/assets/icons/home-2.svg"/>
                            <span>Umumiy</span>
                        </div>
                    </router-link>
                </li>
                <!-- ========== Home End ========== -->


                <!-- ========== Finance Start ========== -->
                <li class="item item-2">
                    <router-link tag="ul" class="caret" @click.native="assignRoute('finance')"
                                 :class="addClass('finance', 'caret-activated')" to="/finance">
                        <div>
                            <img :class="[ activeRoute == 'finance' ? 'filter-black' : '' ]"
                                 src="@/assets/icons/dollar-square.svg"/>
                            <span>Moliya</span>
                        </div>
                    </router-link>
                </li>
                <!-- ========== Finance End ========== -->


                <!-- ========== Warehouse Start ========== -->
                <li class="item item-3">
                    <ul class="caret" @click="assignRoute('warehouse')"
                        :class="addClass('warehouse', 'caret-activated')">
                        <div>
                            <img :class="[ activeRoute == 'warehouse' ? 'filter-black' : '' ]"
                                 src="@/assets/icons/3d-cube-scan.svg"/>
                            <span>Omborxona</span>
                        </div>
                        <img :class="[ activeRoute == 'warehouse' || activeRoute == 'warehouse/ip'
                        || activeRoute == 'warehouse/mato' || activeRoute == 'warehouse/yoqa' ? 'caret-icon-top' : '' ]"
                             src="@/assets/icons/arrow-up.svg"/>
                    </ul>

                    <ul class="nested" :class="[ activeRoute == 'warehouse' || activeRoute == 'warehouse/ip'
                    || activeRoute == 'warehouse/mato' || activeRoute == 'warehouse/yoqa' ? 'active' : '' ]">

                        <router-link tag="li" to="/warehouse/ip" @click.native="assignRoute('warehouse/ip')"
                                     :class="addClass('warehouse/ip', 'caret-activated')">
                            <div>
                                <span></span>Ip
                            </div>
                            <img :class="addClass('warehouse/ip', 'active-black')"
                                 class="caret-icon-right" src="@/assets/icons/arrow-up.svg"/>
                        </router-link>

                        <router-link tag="li" to="/warehouse/mato" @click.native="assignRoute('warehouse/mato')"
                                     :class="addClass('warehouse/mato', 'caret-activated')">
                            <div>
                                <span></span>Mato
                            </div>
                            <img :class="addClass('warehouse/mato', 'active-black')"
                                 class="caret-icon-right" src="@/assets/icons/arrow-up.svg"/>
                        </router-link>

                        <router-link tag="li" to="/warehouse/yoqa" @click.native="assignRoute('warehouse/yoqa')"
                                     :class="addClass('warehouse/yoqa', 'caret-activated')">
                            <div>
                                <span></span>Yoqa
                            </div>
                            <img :class="addClass('warehouse/yoqa', 'active-black')"
                                 class="caret-icon-right" src="@/assets/icons/arrow-up.svg"/>
                        </router-link>

                    </ul>
                </li>
                <!-- ========== Warehouse End ========== -->
              <li class="item item-2">
                <router-link tag="ul" class="caret" @click.native="assignRoute('income')"
                             :class="addClass('income', 'caret-activated')" to="/income">
                  <div>
                    <img :class="[ activeRoute == 'income' ? 'filter-black' : '' ]"
                         src="@/assets/icons/dollar-square.svg"/>
                    <span>Rasxod</span>
                  </div>
                </router-link>
              </li>
              <li class="item item-2">
                <router-link tag="ul" class="caret" @click.native="assignRoute('outcome')"
                             :class="addClass('outcome', 'caret-activated')" to="/outcome">
                  <div>
                    <img :class="[ activeRoute == 'outcome' ? 'filter-black' : '' ]"
                         src="@/assets/icons/dollar-square.svg"/>
                    <span>Daxod</span>
                  </div>
                </router-link>
              </li>
            
            
            </ul>

            <div class="add-box" id="add-box" @click="dialog = true">
                <div class="add-button">
                    <img src="@/assets/icons/add.svg" alt="">
                </div>
                <div class="add-text">
                    <div>Qo'shish</div>
                    <span>Ip yo'ki aksessuar</span>
                </div>
            </div>
        </div>
        <IpAndAksessuar :dialog="dialog"></IpAndAksessuar>
    </v-navigation-drawer>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import IpAndAksessuar from './modals/Ip_and_Aksessuar/Index.vue'

export default {
    components: {
        IpAndAksessuar
    },
    data() {
        return {
            dialog: false,
            activeRoute: 'home',
            outsourceMatoToquvId: [],
            outsourceYoqaToquvId: [],
            factoryId: [],
            readyProductsId: [
                {id: '1', title: 'Bahorgi', link: '/ready-products/1'},
                {id: '2', title: 'Qishgi', link: '/ready-products/2'},
            ],

        }
    },
    async mounted() {
        await this.fetchFactories()
        this.outsourceMatoToquvId = this.factories.filter((e) => e.factory_category.type == 'material')
        this.outsourceYoqaToquvId = this.factories.filter((e) => e.factory_category.type == 'collar')
        this.factoryId = this.factories.filter((e) => e.factory_category.type == 'factory')
    },
    computed: {
        ...mapState({
            factories: state => state.categories.factories || [],
        }),
        drawer: {
            get: function () {
                return this.$store.state.categories.drawer
            },
            set: function (newValue) {
                return this.$store.state.categories.drawer = newValue
            }
        },

    },
    methods: {
        ...mapActions(
            {
                fetchFactories: 'categories/fetchFactories'
            }
        ),
        assignRoute(route, name) {
            this.activeRoute = route;
            console.log(name, 'name')
            if (name)
                this.$store.state.main.activeRouteName = name;
        },
        addActiveClass(baseRoute, array) {
            let response = ''
            array.forEach(element => {
                if ((this.activeRoute == baseRoute) || (this.activeRoute == baseRoute + '/' + element.id)) {
                    response = 'active'
                }
            });
            return response
        },
        addActiveClass2(baseRoute, array) {
            let response = false
            array.forEach(element => {
                if ((this.activeRoute == baseRoute + '/' + element.id)) {
                    response = true
                }
            });
            return response
        },
        addClass(baseRoute, className, elementId) {
            let response = ''
            let route = baseRoute
            if (elementId) {
                route = route + '/' + elementId
            }
            if (this.activeRoute == route) {
                response = className
            }
            return response
        },
    }
}
</script>

<style lang="scss">

</style>
