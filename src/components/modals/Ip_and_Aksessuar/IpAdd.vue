<template>
   <v-dialog
        max-width="400"
        persistent
        v-model="ipAddDialog"
    >
        <template>
            <v-card class="ip_add">

                <div class="ip_add__title">
                    <span class="text-black">Ip qo’shilmoqda</span>
                    <v-btn icon @click="closeIpAddDialog">
                        <img src="@/assets/images/BackButton.svg" alt="BackButton">
                    </v-btn>
                </div>

                <validation-observer
                    ref="formIpAdd"
                    v-slot="{ invalid }"
                >
                    <v-form class="ip_add__content" @submit.prevent="onSubmit">

                        <div>
                            <span class="text-black ml-1">Sana</span>
                            <validation-provider
                                v-slot="{ errors }"
                                name="Name"
                                rules="required|max:10"
                            >
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
                            </validation-provider>
                        </div>

                        <div>
                            <span class="text-black ml-1">Partiya raqami</span>
                            <v-text-field class="mt-2" outlined
                                v-model="new_ip.from_where"
                                :rules="[v => !!v || 'Iltimos, maydonni to`ldiring!',
                                e => error || 'Error']"
                                placeholder="Misol: 182455">
                            </v-text-field>
                        </div>

                        <div class="part_content">

                            <span class="text-black ml-1">Import turini tanlang</span>
                            <v-list class="d-flex">
                                <div class="radioContent">
                                    <span>Mavjud ip</span>
                                    <v-radio-group class="radioGroup" v-model="ip_type">
                                        <v-radio value="existing"></v-radio>
                                    </v-radio-group>
                                </div>
                                <div class="radioContent">
                                    <span>Yangi ip</span>
                                    <v-radio-group class="radioGroup" v-model="ip_type">
                                        <v-radio value="new"></v-radio>
                                    </v-radio-group>
                                </div>
                            </v-list>


                            <div v-if="ip_type == 'new'" class="mt-4">
                                <span class="text-black ml-1">Nom va kod</span>
                                <v-text-field :rules="[v => !!v || 'Iltimos, maydonni to`ldiring!',
                                    e => error || 'Error']"
                                    v-model="new_product.name" class="mt-2" outlined
                                    placeholder="Nomni kiriting">
                                </v-text-field>
                                <v-text-field :rules="[errorMain]"
                                    type="number"
                                    v-model="new_product.code" outlined placeholder="Kodni kiriting">
                                </v-text-field>
                            </div>


                            <div v-if="ip_type == 'existing'">
                                <div class="exists">
                                    <span class="exists__title text-black">Mavjud ipni tanlang</span>
                                    <v-text-field :rules="[v => !!v || 'Iltimos, maydonni to`ldiring!',
                                        e => error || 'Error']"
                                        v-model="ipSelect" outlined class="exists__input">
                                        <template v-slot:prepend-inner>
                                            <img src="@/assets/icons/search-normal.svg" class="mb-4 mt-0" alt="">
                                        </template>
                                    </v-text-field>
                                </div>


                                <perfect-scrollbar class="">
                                    <div class="radioContent mb-5" v-for="(element, index) in existingIps" :key="index">
                                        <span>#{{ element.code }} | {{ element.name }}</span>
                                        <v-radio-group class="radioGroup" v-model="existingIp">
                                            <v-radio :value="element.id"></v-radio>
                                        </v-radio-group>
                                    </div>
                                </perfect-scrollbar>
                            </div>


                            <div :class="ip_type == 'existing' ? 'mt-6' : ''">
                                <span class="text-black ml-1">Massa (kg)</span>
                                <v-text-field :rules="[v => !!v || 'Iltimos, maydonni to`ldiring!',
                                    e => error || 'Error']"
                                    type="number" v-model="new_ip.amount"
                                    outlined placeholder="Misol: 1,200 kg" class="mt-2">
                                </v-text-field>
                            </div>


                            <div>
                                <span class="text-black ml-1">KG summa</span>
                                <v-text-field :rules="[v => !!v || 'Iltimos, maydonni to`ldiring!',
                                    e => error || 'Error']"
                                    type="number" v-model="new_ip.price"
                                    outlined placeholder="Misol: 240,000 so’m" class="mt-2">
                                </v-text-field>
                            </div>


                            <div>
                                <span class="text-black ml-1">Umumiy summa</span>
                                <v-text-field :rules="[v => !!v || 'Iltimos, maydonni to`ldiring!',
                                    e => error || 'Error']"
                                    type="number" outlined
                                    placeholder="Misol: 1,240,000 so’m"
                                    class="mt-2" v-model="new_ip.total_price">
                                </v-text-field>
                            </div>


                            <div>
                                <span class="text-black ml-1">Berilgan summa</span>
                                <v-text-field
                                    type="number" outlined
                                    placeholder="Misol: 1,000,000 so’m"
                                    class="mt-2" v-model="new_ip.paid">
                                </v-text-field>
                            </div>

                            {{errorMessage}}
                        </div>
                    
                        <v-card-actions class="d-flex justify-space-between">
                            <v-btn
                                class="backBtn btn"
                                elevation="0"
                                @click="closeIpAddDialog"
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
                </validation-observer>
            </v-card>
        </template>
    </v-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
export default {
    props: ['ipAddDialog'],
    components: {
        PerfectScrollbar
    },
    data(){
        return{
            valid: true,
            ipSelect: '',
            loading: false,
            ip_type: 'new',
            new_ip:{
                from_where: '',
                product_id: '',
                amount: '',
                price: '',
                total_price: '',
                paid: ''
            },
            new_product: {
                name: '',
                code: '',
            },
            existingIps: [],
            existingIp: '',
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
        'new_ip.amount': {
            handler(value){
                if(value){
                    this.new_ip.total_price = this.new_ip.amount * this.new_ip.price
                }   
            },
            deep: true,
        },
        'new_ip.price': {
            handler(value){
                if(value){
                    this.new_ip.total_price = this.new_ip.amount * this.new_ip.price
                }
            },
            deep: true,
        },
        async ipSelect(newValue, oldValue){
            if(newValue && newValue.length > 2){
                await this.fetchProductCodes({status: 1, search: newValue})
                this.existingIps = this.productCodesFields.data
            }
        },
        date (val) {
            this.dateFormatted = this.formatDate(this.date)
        },
    },
    async mounted(){
        await this.fetchProductCodes({status: 1})
        this.existingIps = this.productCodesFields.data
    },
    computed: {
        ...mapState(
            {
                productCodesFields: state => state.code.productCodesFields || [],
                errorMessage: state => state.code.error || [],
            }
        ),
    },
    methods:{
        ...mapActions(
            {
                saveProductCode: 'code/saveProductCode',
                postNewIp: 'ipAndAksessuar/postNewIp',
                fetchProductCodes: 'code/fetchProductCodes'
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
            this.new_ip = {
                from_where: '',
                product_id: '',
                amount: '',
                price: '',
                total_price: '',
                paid: ''
            }
            this.new_product = {
                name: '',
                code: '',
            }
        },
        errorMain(){
            console.log(this.errorMessage)
            if(this.errorMessage && this.errorMessage.code){
                console.log(this.errorMessage.code)

                return true || this.errorMessage.code[0]
            }else if(this.errorMessage && this.errorMessage.required){
                return this.errorMessage.required
            }

            // required: value => !!value || 'Required.',
            // e => errorMessage || errorMessage.code,
            // v => !!v || 'Iltimos, maydonni to`ldiring!'
        },
        closeIpAddDialog(){
            this.$parent.ipAddDialog = false;
            this.$refs.formIpAdd.reset();
        },
        async onSubmit(){
            if(this.$refs.formIpAdd.validate()){
                // this.loading = true
                let product;
                if(this.ip_type == 'new'){
                    product = await this.saveProductCode({name: this.new_product.name,
                    code: this.new_product.code, product_category_id: 1});
                    
                    // this.clearInputs();    
                    if(product.response && product.response.status == 422){
                        this.$toast.error(product.response.data.errors.code[0]);
                    }
                }else if(this.ip_type == 'existing'){
                    console.log(this.productCodesFields);
                    product = this.productCodesFields
                }else{
                    this.$toast.error('Xato yuz berdi!');
                }

                let ip = await this.postNewIp(
                    { 
                        created_at: this.date,
                        from_where: this.new_ip.from_where,
                        product_id: product.id,
                        amount: this.new_ip.amount,
                        price: this.new_ip.price,
                        total_price: this.new_ip.total_price,
                        paid: this.new_ip.paid
                    })

                if(ip.response && ip.response.status == 422){
                    this.new_ip.from_where = ''
                    this.error = false
                    this.valid = true
                    this.$toast.error(ip.response.data.errors.total_price[0]);
                }else{
                    let toastTitle = 'Muvaffaqiyatli qo`shildi!'
                    this.$toast.success(toastTitle);
                    this.closeIpAddDialog();
                }
            }else{
                this.$toast.error('Xato yuz berdi!');
            }

        }
    }

}
</script>


<style>

</style>
