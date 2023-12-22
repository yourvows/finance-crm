<template>
    <div>
        <div class="bar">
            <div class="d-flex align-center searchInputWrapper">
                <v-btn icon class="mr-2" @click="changeDrawer">
                    <img src="@/assets/icons/menu.svg" alt="menu">
                </v-btn>
                <div class="searchInputWrapper">
                    <img src="@/assets/icons/search-normal.svg" alt="search-normal"
                         class="searchInputIcon navbarDetails">
                    <input type="text" v-model="searchValue" debounce="500"
                           class="searchInput navbarDetails" placeholder="Qidiruv">
                </div>
            </div>
         
          
          {{ $t('hello')}}

            <div class="mr-2 justify-space-between align-center d-flex">
              <locale-changer/>
                <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-width="200"
                    offset-x
                    class="elevation-0"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon elevation="0">
                            <v-avatar>
                                <img
                                    src="../assets/images/avatar.jpg"
                                    alt="John"
                                    v-bind="attrs"
                                    v-on="on"
                                >
                            </v-avatar>
                        </v-btn>
                    </template>

                    <v-card elevation="0">
                        <v-list class="">
                            <v-list-item class="pa-1 ml-3 d-flex">
                                <v-list-item-title class="text--secondary font-weight-bold">Huzayfa Baxromiy
                                </v-list-item-title>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item class="pa-1 ml-3 d-flex">
                                <v-list-item-title class="blue--text font-weight-bold">John Leider</v-list-item-title>
                                <img src="../assets/images/arrow-right.png" alt="">
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-list-item class="pa-1 ml-3">
                                <v-list-item-title class="blue--text font-weight-bold">John Leider</v-list-item-title>
                                <img src="../assets/images/arrow-right.png" alt="">
                            </v-list-item>
                            <v-divider></v-divider>
                        </v-list>
                        <v-card-actions class="text-center d-flex justify-center">
                            <v-btn
                                class="primaryBtn mb-1"
                                text
                                prepend-inner-icon="mdi-exit-to-app"
                                @click="menu = false"
                            >
                                <img src="../assets/images/logout.png" alt=""> Chiqish
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-menu>
            </div>
        </div>
        <div class="toolbar" v-html="changeNav"></div>
    </div>
</template>

<script>
import {mapGetters, mapState, mapMutations} from 'vuex'
import modalCategoryAndLists from '@/components/modals/Lists/Index'
import screenshot from '../components/Screenshot'
import LocaleChanger from "@/components/LocaleChanger.vue";
export default {
    components: {
      LocaleChanger,
        modalCategoryAndLists,
        screenshot
    },
    data() {
        return {
            menu: false,
        }
    },
    computed: {
        ...mapState(
        {
            drawer: state => state.categories.drawer,
        }),
        routeURL: {
            get: function() {
                return this.$store.state.main.routeURL
            },
            set: function(newValue) {
                return this.$store.state.main.routeURL = newValue
            }
        },
        searchValue: {
            get: function() {
                return this.$store.state.main.searchValue
            },
            set: function(newValue) {
                return this.$store.state.main.searchValue = newValue
            }
        },
        changeNav() {
            switch (this.$route.name) {
                case 'home':
                    this.routeURL='/products-categories'
                    return 'Umumiy'
                case 'codebase':
                    this.routeURL='/products'
                    return 'Kodlar bazasi'
                case 'finance':
                    this.routeURL='/products'
                    return 'Moliya'
                case 'warehouse-ip':
                    return '<span class="text-muted">Omborxona</span><span class="mr-2 ml-2 text-muted">/</span>Ip'
                case 'warehouse-mato':
                    return '<span class="text-muted">Omborxona</span><span class="mr-2 ml-2 text-muted">/</span>Mato'
                case 'warehouse-yoqa':
                    return '<span class="text-muted">Omborxona</span><span class="mr-2 ml-2 text-muted">/</span>Yoqa'
                case 'outsource-mato-toquv-id':
                    return `<span class="text-muted">Outsource</span><span class="mr-2 ml-2 text-muted">/</span><span class="text-muted">Mato to\`quv</span><span class="mr-2 ml-2 text-muted">/</span>` + this.$store.state.main.activeRouteName
                case 'outsource-yoqa-toquv-id':
                    return `<span class="text-muted">Outsource</span><span class="mr-2 ml-2 text-muted">/</span><span class="text-muted">Yoqa to\`quv</span><span class="mr-2 ml-2 text-muted">/</span>` + this.$store.state.main.activeRouteName
                case 'outsource-boyoqxona':
                    return '<span class="text-muted">Outsource</span><span class="mr-2 ml-2 text-muted">/</span>Bo`yoqxona'
                case 'supply-tayyor-xomashyo-mato':
                    return `<span class="text-muted">Ta\`minot</span><span class="text-muted mr-1 ml-2">/</span><span class="text-muted">Tayyor xomashyo</span><span class="text-muted ml-2 mr-2">/</span>Mato`
                case 'supply-tayyor-xomashyo-yoqa':
                    return `<span class="text-muted">Ta\`minot</span><span class="text-muted mr-1 ml-2">/</span><span class="text-muted">Tayyor xomashyo</span><span class="text-muted ml-2 mr-2">/</span>Yoqa`
                case 'supply-aksessuar':
                    return '<span class="text-muted">Ta\`minot</span><span class="mr-2 ml-2 text-muted">/</span>Aksessuarlar'
                case 'supply-bichuv':
                    return '<span class="text-muted">Ta\`minot</span><span class="mr-2 ml-2 text-muted">/</span>Bichuv'
                case 'factory-id':
                    return `<span class="text-muted">Fabrika</span><span class="mr-2 ml-2 text-muted">/</span>` + this.$store.state.main.activeRouteName
                case 'ready-products-id':
                    return `<span class="text-muted">Tayyor mahsulotlar</span><span class="mr-2 ml-2 text-muted">/</span>` + this.$store.state.main.activeRouteName
                default:
                    break;
            }
        }
    },
    methods: {
        ...mapMutations(
            {
                SET_DRAWER: 'categories/SET_DRAWER',
                fetchProductCodes: 'code/fetchProductCodes',
            }
        ),
        changeDrawer() {
            this.SET_DRAWER(!this.drawer)
        }
    },
    watch: {
        searchValue(newVal) {
            if(newVal.length > 2){
                // cancel pending call
                clearTimeout(this._timerId)

                // delay new call 500ms
                this._timerId = setTimeout(() => {
                    this.$store.dispatch('main/getFilteredData',{ searchValue: newVal, routeURL: this.routeURL})
                }, 500)
            }
        },
    }

}
</script>

<style lang="scss">
.bar {
    width: 100% !important;
    height: 80px !important;
    display: flex;
    align-items: center;
    justify-content: space-between !important;
    padding: 20px 20px 20px 10px;
    background: #FDFDFD !important;
}

.toolbar {
    font-style: normal;
    font-weight: 500;
    font-size: 33px;
    padding: 16px;
    background: #FDFDFD;
    border-top: 2px solid #F5F5F5;
    border-bottom: 2px solid #F5F5F5;
}

.v-menu__content {
    box-shadow: 0px 12px 24px rgba(133, 141, 144, 0.12) !important;
    border-radius: 14px !important;
}

.navbarDetails {
    display: flex;
}

@media (max-width: 600px) {
    .navbarDetails {
        display: none;
    }
}
</style>

