<template>
    <div>
        <v-dialog
            max-width="400"
            persistent
            v-model="aksessuarAddDialog"
        >
            <template>
                <v-card class="aksessuar_add">

                    <div class="aksessuar_add__title">
                        <span class="text-black">Aksessuar qo’shilmoqda</span>
                        <v-btn icon @click="closeAksessuarAddDialog">
                            <img src="@/assets/images/BackButton.svg" alt="BackButton">
                        </v-btn>
                    </div>

                    <v-list class="aksessuar_add__content">

                        <div>
                            <span class="text-black ml-1">Qayerdan olindi</span>
                            <v-text-field :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined class="mt-2"
                                          placeholder="Misol: Xitoydan" v-model="new_aksessuar.from_where">
                            </v-text-field>
                        </div>

                        <div>
                            <span class="text-black ml-1">Aksessuar turini tanlang</span>
                            <v-text-field :rules="[v => !!v || 'Илтимос, майдони толдиринг']"
                                          @click="aksessuarSelectDialog=!aksessuarSelectDialog"
                                          append-icon="mdi-chevron-right" v-model="existingAksessuarType.name" outlined
                                          class="mt-2" placeholder="Misol: Xitoydan">
                            </v-text-field>
                        </div>

                        <div>
                            <span class="text-black ml-1">Mahsulotni tanlang</span>
                            <v-text-field :rules="[v => !!v || 'Илтимос, майдони толдиринг']"
                                          @click="typeSelectDialog=!typeSelectDialog"
                                          append-icon="mdi-chevron-right" v-model="existingProductType.name" outlined
                                          class="mt-2" placeholder="Kiriting">
                            </v-text-field>
                        </div>

                        <div>
                            <span class="text-black ml-1">Adadini kiriting</span>
                            <v-text-field onkeypress="return /[0-9]/i.test(event.key)"
                                          :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined class="mt-2"
                                          v-model="new_aksessuar.amount"
                                          placeholder="Misol: 1,200 kg">
                            </v-text-field>
                        </div>

                        <div>
                            <span class="text-black ml-1">Dona narxi (majburiy emas)</span>
                            <v-text-field onkeypress="return /[0-9]/i.test(event.key)"
                                          :rules="[v => !!v || 'Илтимос, майдони толдиринг']"
                                          v-model="new_aksessuar.price"
                                          outlined class="mt-2"
                                          placeholder="Misol: 240,000 so’m">
                            </v-text-field>
                        </div>

                        <div>
                            <span class="text-black ml-1">Umumiy summa</span>
                            <v-text-field onkeypress="return /[0-9]/i.test(event.key)"
                                          :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined
                                          v-model="getTotalPrice" class="mt-2"
                                          placeholder="Misol: 1,240,000 so’m">
                            </v-text-field>
                        </div>
                    </v-list>

                    <v-card-actions class="d-flex justify-space-between">
                        <v-btn
                            text
                            class="backBtn"
                            elevation="0"
                            @click="closeAksessuarAddDialog"
                        >Bekor qilish
                        </v-btn>
                        <v-btn
                            class="primaryBtn"
                            elevation="0"
                            @click="submitNewIp"
                        >Tasdiqlash
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </template>
        </v-dialog>


        <v-dialog
            max-width="400"
            v-model="aksessuarSelectDialog"
        >
            <template>
                <v-card class="aksessuar_turi_add">
                    <div class="aksessuar_turi_add__title">
                        <span>Aksessuar tanlang</span>
                        <v-btn icon @click="aksessuarSelectDialog=false">
                            <img src="@/assets/images/BackButton.svg" alt="">
                        </v-btn>
                    </div>

                    <v-list class="aksessuar_turi_add__content">

                        <div class="exists">
                            <span class="exists__title text-black">Mavjud ipni tanlang</span>
                            <v-text-field v-model="aksessuarSelect" :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined
                                          class="exists__input">
                                <template v-slot:prepend-inner>
                                    <img src="@/assets/icons/search-normal.svg" class="mb-4 mt-0" alt="">
                                </template>
                            </v-text-field>
                        </div>

                        <perfect-scrollbar class="">
                            <div class="radioContent mb-5" v-for="(element, index) in filteredAksessuarTypes"
                                 :key="index">
                                <span>{{ element.name }}</span>
                                <v-radio-group :rules="[v => !!v || 'Илтимос, майдони толдиринг']" class="radioGroup"
                                               v-model="existingAksessuarType">
                                    <v-radio :value="element"></v-radio>
                                </v-radio-group>
                            </div>
                        </perfect-scrollbar>
                        <div>
                            <span class="text-black ml-1">Yangi aksessuar turi</span>
                            <v-text-field :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined class="mt-2"
                                          placeholder="Nomni kiriting">
                            </v-text-field>
                        </div>

                    </v-list>

                    <v-card-actions class="d-flex justify-space-between">
                        <v-btn
                            text
                            class="backBtn"
                            elevation="0"
                            @click="aksessuarSelectDialog=false"

                        >Bekor qilish
                        </v-btn>
                        <v-btn
                            class="primaryBtn"
                            elevation="0"
                            @click="aksessuarSelectDialog=false"
                        >Tanlash
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </template>
        </v-dialog>


        <v-dialog
            max-width="400"
            v-model="typeSelectDialog"
        >
            <template>

                <v-card class="aksessuar_turi_add">
                    <div class="aksessuar_turi_add__title" id="ffas">
                        <span>Mahsulotni tanlang</span>
                        <v-btn icon @click="typeSelectDialog=false">
                            <img src="@/assets/images/BackButton.svg" alt="">
                        </v-btn>
                    </div>

                    <v-list class="aksessuar_turi_add__content">

                        <div class="exists">
                            <span class="exists__title text-black">Mavjud mahsulotlar</span>
                            <v-text-field v-model="productSelect" :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined
                                          class="exists__input">
                                <template v-slot:prepend-inner>
                                    <img src="@/assets/icons/search-normal.svg" class="mb-4 mt-0" alt="">
                                </template>
                            </v-text-field>
                        </div>

                        <perfect-scrollbar class="">
                            <div class="radioContent mb-5" v-for="(element, index) in filteredProducts" :key="index">
                                <span>{{ element.name }}</span>
                                <v-radio-group :rules="[v => !!v || 'Илтимос, майдони толдиринг']" class="radioGroup"
                                               v-model="existingProductType">
                                    <v-radio :value="element"></v-radio>
                                </v-radio-group>
                            </div>
                        </perfect-scrollbar>


                        <div>
                            <span class="text-black ml-1">Yangi mahsulot</span>
                            <v-text-field :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined class="mt-2"
                                          placeholder="Nomni kiriting">
                            </v-text-field>
                        </div>

                    </v-list>

                    <v-card-actions class="d-flex justify-space-between">
                        <v-btn
                            text
                            class="backBtn"
                            elevation="0"
                            @click="typeSelectDialog=false"
                        >Bekor qilish
                        </v-btn>
                        <v-btn
                            class="primaryBtn"
                            elevation="0"
                            @click="typeSelectDialog=false"
                        >Tanlash
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </template>
        </v-dialog>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {PerfectScrollbar} from 'vue2-perfect-scrollbar'

export default {
    props: ['aksessuarAddDialog'],
    components: {
        PerfectScrollbar
    },
    data() {
        return {
            new_aksessuar: {
                from_where: '',
                product_id: this.sendingProduct,
                amount: '',
                price: '',
                total_price: '',
            },
            aksessuarSelect: '',
            productSelect:'',
            existingAksessuarType: '',
            existingProductType: '',
            ip_type: 'new',
            existingIps: [
                {id: 1, name: 'Qizil - #548963'},
                {id: 2, name: 'Ko‘k - #498247'},
                {id: 3, name: 'Yashil - #591798'},
                {id: 4, name: 'Dengiz - #8745214'},
            ],
            existingIp: '',
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length <= 20 || 'Max 20 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },

            aksessuarSelectDialog: false,
            typeSelectDialog: false,

        }
    },
    watch: {
        aksessuarSelectDialog(newVal) {
            console.log(newVal)
        },
        async aksessuarSelect(newValue, oldValue) {
            console.log(newValue)
            if (newValue && newValue.length > 2){
                await this.loadAksessuar({status:1,search:newValue})
            }else if(newValue == ''){
                await this.loadAksessuar({status:1,search:newValue})
            }
            this.existingAksessuarType=this.aksessuars
        },
        async productSelect(newValue,oldValue){
            if(newValue && newValue.length > 2){
                await this.loadProduct({status:4,search:newValue})
            }else if(newValue ==''){
                await this.loadProduct({status:4,search:newValue})
            }
            this.existingProductType=this.productsType
        }
    },
    computed: {
        disabled() {
            return this.total_price && this.single_price && this.quantity && this.product && this.quantity && this.location
        },
        ...mapState({
            aksessuars: state => state.ipAndAksessuar.aksessuars || [],
            productsType: state => state.ipAndAksessuar.productsType || [],
        }),
        filteredAksessuarTypes() {
            return this.aksessuars.filter(el => el.parent_id == 4)
        },
        filteredProducts() {
            return this.productsType.filter(el => el.product_category_id == 4)
        },
        sendingProduct() {
            return this.existingAksessuarType.id
        },
        getTotalPrice() {
            return this.new_aksessuar.total_price = this.new_aksessuar.price * this.new_aksessuar.amount
        }
    },
    methods: {
        ...mapActions(
            {
                saveProductCode: 'code/saveProductCode',
                createNewIp: 'ipAndAksessuar/createNewIp',
                loadAksessuar:'ipAndAksessuar/loadAksessuarType',
                loadProduct:'ipAndAksessuar/loadProductType'
            }
        ),
        closeAksessuarAddDialog() {
            this.$parent.aksessuarAddDialog = false
        },
        async submitNewIp() {
            this.new_aksessuar.product_id = this.sendingProduct
            this.createNewIp(this.new_aksessuar)
        },

    },
    mounted() {
        this.loadProduct()
        this.loadAksessuar()
    }

}
</script>


<style>

</style>
