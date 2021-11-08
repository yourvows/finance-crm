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


                <!-- ========== Outsource Start ========== -->
                <li class="item item-4">
                    <ul class="caret" @click="assignRoute('outsource')"
                        :class="addClass('outsource', 'caret-activated')">
                        <div>
                            <img :class="[ activeRoute == 'outsource' ? 'filter-black' : '' ]"
                                 src="@/assets/icons/element-equal.svg"/>
                            <span>Outsource</span>
                        </div>
                        <img :class="[ activeRoute == 'outsource' ? 'caret-icon-top' : '' ]"
                             src="@/assets/icons/arrow-up.svg"/>
                    </ul>

                    <ul class="nested" :class="[ activeRoute == 'outsource' || activeRoute == 'outsource/mato-toquv'
                    || activeRoute == 'outsource/yoqa-toquv' || activeRoute == 'outsource/boyoqxona'
                    || addActiveClass2('outsource/mato-toquv', outsourceMatoToquvId)
                    || addActiveClass2('outsource/yoqa-toquv', outsourceYoqaToquvId) ? 'active' : '' ]">

                        <li @click="assignRoute('outsource/mato-toquv')"
                            :class="addClass('outsource/mato-toquv', 'caret-activated')">
                            <div>
                                <span></span>Mato to`quv
                            </div>
                            <div>
                                <img :class="[ activeRoute == 'outsource/mato-toquv' ? 'filter-black' : '' ]"
                                     src="@/assets/icons/add-circle.svg"/>
                                <img :class="[ activeRoute == 'outsource/mato-toquv' ? 'filter-black' : '',
                                    activeRoute == 'outsource/mato-toquv' ? 'caret-icon-top' : '' ]"
                                     src="@/assets/icons/arrow-up.svg"/>
                            </div>
                        </li>

                        <!-- Bu pastdagi ko'ni vaqtinchalik yozib turimman -->
                        <ul class="nested" :class="addActiveClass('outsource/mato-toquv', outsourceMatoToquvId)">

                            <router-link tag="li" :to="`/outsource/mato-toquv/${item.id}`"
                                         @click.native="assignRoute(`outsource/mato-toquv/${item.id}`, item.name)"
                                         :class="addClass('outsource/mato-toquv', 'caret-activated', item.id)"
                                         v-for="item of outsourceMatoToquvId" :key="item.id">
                                <div>
                                    <span>{{ item.name }}</span>
                                </div>
                                <img :class="addClass('outsource/mato-toquv', 'active-black', item.id)"
                                     src="@/assets/icons/arrow-up.svg" class="caret-icon-right"/>
                            </router-link>
                        </ul>


                        <li @click="assignRoute('outsource/yoqa-toquv')"
                            :class="addClass('outsource/yoqa-toquv', 'caret-activated')">
                            <div>
                                <span></span>Yoqa to`quv
                            </div>
                            <div>
                                <img :class="[ activeRoute == 'outsource/yoqa-toquv' ? 'filter-black' : '' ]"
                                     src="@/assets/icons/add-circle.svg"/>
                                <img :class="[ activeRoute == 'outsource/yoqa-toquv' ? 'filter-black' : '',
                                    activeRoute == 'outsource/yoqa-toquv' ? 'caret-icon-top' : '' ]"
                                     src="@/assets/icons/arrow-up.svg"/>
                            </div>
                        </li>

                        <ul class="nested" :class="addActiveClass('outsource/yoqa-toquv', outsourceYoqaToquvId)">

                            <router-link tag="li" :to="`/outsource/yoqa-toquv/${item.id}`"
                                         @click.native="assignRoute(`outsource/yoqa-toquv/${item.id}`, item.name)"
                                         :class="addClass('outsource/yoqa-toquv', 'caret-activated', item.id)"
                                         v-for="item in outsourceYoqaToquvId" :key="item.id">
                                <div>
                                    <span>{{ item.name }}</span>
                                </div>
                                <img :class="addClass('outsource/yoqa-toquv', 'active-black', item.id)"
                                     src="@/assets/icons/arrow-up.svg" class="caret-icon-right"/>
                            </router-link>
                        </ul>

                        <router-link tag="li" to="/outsource/boyoqxona"
                                     @click.native="assignRoute('outsource/boyoqxona')"
                                     :class="addClass('outsource/boyoqxona', 'caret-activated')">
                            <div>
                                <span></span>Bo`yoqxona
                            </div>
                            <img :class="addClass('outsource/boyoqxona', 'active-black')"
                                 class="caret-icon-right" src="@/assets/icons/arrow-up.svg"/>
                        </router-link>

                    </ul>
                </li>
                <!-- ========== Outsource End ========== -->


                <!-- ========== Supply Start ========== -->
                <li class="item item-5">
                    <ul class="caret" @click="assignRoute('supply')"
                        :class="addClass('supply', 'caret-activated')">
                        <div>
                            <img :class="[ activeRoute == 'supply' ? 'filter-black' : '' ]"
                                 src="@/assets/icons/layer.svg"/>
                            <span>Ta`minot</span>
                        </div>
                        <img :class="[ activeRoute == 'supply' ? 'caret-icon-top' : '' ]"
                             src="@/assets/icons/arrow-up.svg"/>
                    </ul>

                    <ul class="nested" :class="[ activeRoute == 'supply' || activeRoute == 'supply/tayyor-xomashyo'
                    || activeRoute == 'supply/tayyor-xomashyo/mato' || activeRoute == 'supply/tayyor-xomashyo/yoqa'
                    || activeRoute == 'supply/aksessuar' || activeRoute == 'supply/bichuv' ? 'active' : '' ]">


                        <li @click="assignRoute('supply/tayyor-xomashyo')"
                            :class="addClass('supply/tayyor-xomashyo', 'caret-activated')">
                            <div>
                                <span></span>
                                Tayyor xomashyo
                            </div>

                            <img :class="[ activeRoute == 'supply/tayyor-xomashyo' ? 'caret-icon-top' : '' ]"
                                 src="@/assets/icons/arrow-up.svg"/>
                        </li>

                        <ul class="nested" :class="[ activeRoute == 'supply/tayyor-xomashyo' || activeRoute == 'supply/tayyor-xomashyo/mato'
                    || activeRoute == 'supply/tayyor-xomashyo/yoqa' ? 'active' : '' ]">

                            <router-link tag="li" to="/supply/tayyor-xomashyo/mato"
                                         @click.native="assignRoute('supply/tayyor-xomashyo/mato')"
                                         :class="addClass('supply/tayyor-xomashyo/mato', 'caret-activated')">
                                <div>
                                    <span></span>Mato
                                </div>
                                <img :class="addClass('supply/tayyor-xomashyo/mato', 'active-black')"
                                     src="@/assets/icons/arrow-up.svg" class="caret-icon-right"/>
                            </router-link>

                            <router-link tag="li" to="/supply/tayyor-xomashyo/yoqa"
                                         @click.native="assignRoute('supply/tayyor-xomashyo/yoqa')"
                                         :class="addClass('supply/tayyor-xomashyo/yoqa', 'caret-activated')">
                                <div>
                                    <span></span>Yoqa
                                </div>
                                <img :class="addClass('supply/tayyor-xomashyo/yoqa', 'active-black')"
                                     src="@/assets/icons/arrow-up.svg" class="caret-icon-right"/>
                            </router-link>
                        </ul>

                        <router-link tag="li" to="/supply/aksessuar" @click.native="assignRoute('supply/aksessuar')"
                                     :class="addClass('supply/aksessuar', 'caret-activated')">
                            <div>
                                <span></span>Aksessuar
                            </div>
                            <img :class="addClass('supply/aksessuar', 'active-black')"
                                 class="caret-icon-right" src="@/assets/icons/arrow-up.svg"/>
                        </router-link>

                        <router-link tag="li" to="/supply/bichuv" @click.native="assignRoute('supply/bichuv')"
                                     :class="addClass('supply/bichuv', 'caret-activated')">
                            <div>
                                <span></span>Bichuv
                            </div>
                            <img :class="addClass('supply/bichuv', 'active-black')"
                                 class="caret-icon-right" src="@/assets/icons/arrow-up.svg"/>
                        </router-link>
                    </ul>
                </li>
                <!-- ========== Supply End ========== -->


                <!-- ========== Factory Start ========== -->
                <li class="item item-6">
                    <ul class="caret" @click="assignRoute('factory')"
                        :class="addClass('factory', 'caret-activated')">
                        <div>
                            <img :class="[ activeRoute == 'factory' ? 'filter-black' : '' ]"
                                 src="@/assets/icons/buildings-2.svg"/>
                            <span>Fabrika</span>
                        </div>
                        <img :class="[ activeRoute == 'factory' ? 'caret-icon-top' : '' ]"
                             src="@/assets/icons/arrow-up.svg"/>
                    </ul>

                    <ul class="nested" :class="addActiveClass('factory', factoryId)">

                        <router-link tag="li" @click.native="assignRoute(`factory/${item.id}`, item.name)"
                                     :class="addClass('factory', 'caret-activated', item.id)"
                                     :to="`/factory/${item.id}`" v-for="item in factoryId" :key="item.id">
                            <div>
                                <span>{{ item.name }}</span>
                            </div>
                            <img :class="addClass('factory', 'active-black', item.id)"
                                 src="@/assets/icons/arrow-up.svg" class="caret-icon-right"/>
                        </router-link>

                    </ul>
                </li>
                <!-- ========== Factory End ========== -->


                <!-- ========== ReadyProducts Start ========== -->
                <li class="item item-7">
                    <ul class="caret" @click="assignRoute('ready-products')"
                        :class="addClass('ready-products', 'caret-activated')">
                        <div>
                            <img :class="addClass('ready-products', 'filter-black')"
                                 src="@/assets/icons/shop.svg"/>
                            <span>Tayyor mahsulotlar</span>
                        </div>
                        <img :class="[ activeRoute == 'ready-products' ? 'caret-icon-top' : '' ]"
                             src="@/assets/icons/arrow-up.svg"/>
                    </ul>

                    <ul class="nested" :class="addActiveClass('ready-products', readyProductsId)">
                        <router-link tag="li" :to="element.link"
                                     @click.native="assignRoute(`ready-products/${element.id}`, element.title)"
                                     :class="addClass('ready-products', 'caret-activated', element.id)"
                                     v-for=" (element, index) in readyProductsId" :key="index">
                            <div>
                                <span></span>{{ element.title }}
                            </div>
                            <img :class="addClass('ready-products', 'active-black', element.id)"
                                 src="@/assets/icons/arrow-up.svg" class="caret-icon-right"/>
                        </router-link>
                        <!-- <router-link tag="li" to="/ready-products/:id"><span></span>Qishgi</router-link> -->
                    </ul>
                </li>
                <!-- ========== ReadyProducts End ========== -->
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
