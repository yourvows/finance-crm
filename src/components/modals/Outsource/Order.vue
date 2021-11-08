<template>
    <div>
        <v-dialog
            max-width="400"
            persistent
            v-model="orderDialog"
        >
            <template>
                <v-card class="ip_add">

                    <div class="ip_add__title">
                        <span class="text-black">Buyurtma berilmoqda</span>
                        <v-btn icon @click="closeOrderDialog">
                            <img src="@/assets/images/BackButton.svg" alt="BackButton">
                        </v-btn>
                    </div>

                    <v-form class="ip_add__content" ref="formOutsourctOrder" v-model="valid" @submit.prevent="onSubmit" lazy-validation>

                        <div>
                            <span class="text-black ml-1">Sana</span>
                            <v-menu
                                v-model="dateMenu"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        class="mt-2"
                                        :rules="[v => !!v || 'Iltimos, maydonni to`ldiring!',
                                        e => error || 'Error']"
                                        placeholder="Tanlang"
                                        v-model="dateFormatted"
                                        readonly
                                        outlined
                                        v-bind="attrs"
                                        v-on="on"
                                        @blur="date = parseDate(dateFormatted)"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    color="blue lighten-1"
                                    v-model="date"
                                    @input="dateMenu = false"
                                    locale="ru-ru"
                                    first-day-of-week="1"
                                ></v-date-picker>
                            </v-menu>
                        </div>


                        <div v-if="$route.name == 'outsource-yoqa-toquv-id'">
                            <span class="text-black ml-1">Mahsulot turi</span>
                            <v-select :items="categories" item-text="name" item-value="id"
                                label="Tanlang" outlined class="mt-2"
                                v-model="order.type">
                            </v-select>
                        </div>


                        <div>
                            <span class="text-black ml-1">Mahsulot nomi</span>
                            <v-text-field class="mt-2" outlined
                                v-model="order.name"
                                @click="productName=!productName"
                                append-icon="mdi-chevron-right"
                                :rules="[v => !!v || 'Iltimos, maydonni to`ldiring!',
                                e => error || 'Error']"
                                placeholder="Misol: Vilvit">
                            </v-text-field>
                        </div>


                        <div>
                            <span class="text-black ml-1">Massa</span>
                            <v-text-field class="mt-2" outlined
                                v-model="order.amount"
                                :rules="[v => !!v || 'Iltimos, maydonni to`ldiring!',
                                e => error || 'Error']"
                                placeholder="Misol: 2,000 kg">
                            </v-text-field>
                        </div>


                        <div>
                            <span class="text-black ml-1">KG narxi</span>
                            <v-text-field class="mt-2" outlined
                                v-model="order.price"
                                :rules="[v => !!v || 'Iltimos, maydonni to`ldiring!',
                                e => error || 'Error']"
                                placeholder="Misol: 180,000 so’m">
                            </v-text-field>
                        </div>


                        <div>
                            <span class="text-black ml-1">Umumiy summa</span>
                            <v-text-field class="mt-2" outlined
                                v-model="order.total_price"
                                :rules="[v => !!v || 'Iltimos, maydonni to`ldiring!',
                                e => error || 'Error']"
                                placeholder="Misol: 1,240,000 so’m">
                            </v-text-field>
                        </div>


                        <div>
                            <span class="text-black ml-1">Berilgan summa</span>
                            <v-text-field class="mt-2" outlined
                                v-model="order.paid"
                                :rules="[v => !!v || 'Iltimos, maydonni to`ldiring!',
                                e => error || 'Error']"
                                placeholder="Misol: 1,000,000 so’m">
                            </v-text-field>
                        </div>


                        <v-card-actions class="d-flex justify-space-between">
                            <v-btn
                                class="backBtn btn"
                                elevation="0"
                                @click="closeOrderDialog"
                            >Bekor qilish
                            </v-btn>
                            <v-btn
                                class="primaryBtn btn"
                                elevation="0"
                                :loading="loading"
                                :disabled="!valid"
                                type="submit"
                            >Tasdiqlash
                            </v-btn>
                        </v-card-actions>

                    </v-form>
                </v-card>
            </template>
        </v-dialog>


        <v-dialog
            max-width="400"
            v-model="productName"
        >
            <template>
                <v-card class="aksessuar_turi_add">
                    <div class="aksessuar_turi_add__title">
                        <span>Mahsulot tanlash</span>
                        <v-btn icon @click="productName=false">
                            <img src="@/assets/images/BackButton.svg" alt="">
                        </v-btn>
                    </div>

                    <v-list class="aksessuar_turi_add__content">

                        <div class="exists">
                            <span class="exists__title text-black">Bazadagi mahsulot</span>
                            <v-text-field :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined class="exists__input">
                                <template v-slot:prepend-inner>
                                    <img src="@/assets/icons/search-normal.svg" class="mb-4 mt-0" alt="">
                                </template>
                            </v-text-field>
                        </div>


                        <perfect-scrollbar class="">
                            <div class="radioContent mb-5" v-for="(element, index) in existingIps" :key="index">
                                <span>{{element.name}}</span>
                                <v-radio-group :rules="[v => !!v || 'Илтимос, майдони толдиринг']" class="radioGroup" v-model="existingIp">
                                    <v-radio :value="element.id"></v-radio>
                                </v-radio-group>
                            </div>
                        </perfect-scrollbar>


                        <div>
                            <span class="text-black ml-1">Yangi mahsulot qo’shish</span>
                            <v-text-field :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined class="mt-2"
                                placeholder="Nomni kiriting">
                            </v-text-field>

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

                        >Bekor qilish
                        </v-btn>
                        <v-btn
                            class="primaryBtn"
                            elevation="0"
                        >Davom etish
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </template>
        </v-dialog>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
export default {
    props: ['orderDialog'],
    components: {
        PerfectScrollbar
    },
    data(){
        return{
            valid: true,
            loading: false,
            productName: false,

            order:{
                type: '',
                name: '',
                amount: '',
                product_id: '',
                price: '',
                paid: '',
                total_price: '',
                created_at: ''
            },

            date: '',
            dateMenu: '',
            dateFormatted: '',

            error: true
        }
    },
    watch: {
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        },

        date (val) {
            this.dateFormatted = this.formatDate(this.date)
        },
    },
    async mounted(){

    },
    computed: {
        ...mapState(
            {
                mato_order: state => state.outsource.mato_order || [],
                errorMessage: state => state.code.error || [],
            }
        ),
    },
    methods:{
        ...mapActions(
            {
                postMatoOrder: 'outsource/postMatoOrder',
            }
        ),
        formatDate (date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${day}-${month}-${year}`
        },
        parseDate (date) {
            if (!date) return null

            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        clearInputs(){

        },
        errorMain(){

        },
        closeOrderDialog(){
            this.$parent.orderDialog = false;
            this.$refs.formOutsourctOrder.reset();
        },
        async onSubmit(){
            if(this.$refs.formOutsourctOrder.validate()){

                // this.loading = true

                let order = await this.postMatoOrder(
                    {
                        created_at: this.date,
                        product_id: product.id,
                        amount: this.order.amount,
                        price: this.order.price,
                        total_price: this.order.total_price,
                        paid: this.order.paid
                    })

                console.log(order)


            //     let ip = await this.postNewIp(
            //         {
            //             created_at: this.date,
            //             from_where: this.new_ip.from_where,
            //             product_id: product.id,
            //             amount: this.new_ip.amount,
            //             price: this.new_ip.price,
            //             total_price: this.new_ip.total_price,
            //             paid: this.new_ip.paid
            //         })

            //     if(ip.response && ip.response.status == 422){
            //         this.new_ip.from_where = ''
            //         this.error = false
            //         this.valid = true
            //         this.$toast.error(ip.response.data.errors.total_price[0]);
            //     }else{
            //         let toastTitle = 'Muvaffaqiyatli qo`shildi!'
            //         this.$toast.success(toastTitle);
            //         this.closeOrderDialog();
            //     }
            }else{
                this.$toast.error('Xato yuz berdi!');
            }

        }
    }

}
</script>


<style>

</style>
