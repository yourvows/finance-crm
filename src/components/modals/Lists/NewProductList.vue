<template>
<div>
    <v-dialog
        max-width="400"
        persistent
        v-model="newProductsModal"
    >
        <template v-slot:activator="{ on, attrs }">
            <div class="d-flex">
                <button class="btn-white ml-4" v-bind="attrs" v-on="on" @click="modalTitle = {title: 'Yangi tur', id: 0}">
                    <img src="@/assets/icons/add-blue.svg" alt="add-blue">
                </button>
            </div>
        </template>
        <template>
            <v-card class="modalCard">
                <div class="modalToolbar">
                    <span class="">{{modalTitle.title}}</span>
                    <v-btn icon @click="closeProductsModal">
                        <img src="@/assets/images/BackButton.svg" alt="BackButton">
                    </v-btn>
                </div>

                <div class="py-2">
                    <ValidationObserver ref="formNewProduct" v-slot="{ handleSubmit, invalid }">
                        <form @submit.prevent="handleSubmit(onSubmit)">
                            <ValidationProvider rules="required" v-slot="{ errors }">
                                <v-select :items="categories" item-text="name" item-value="id" 
                                    label="Kategoriyani tanlang" outlined class="mt-5"
                                     v-model="categorySelected" :error-messages="errors">
                                </v-select>
                                <!-- <span class="text-red">{{ errors[0] }}</span> -->
                            </ValidationProvider>
                            
                            <ValidationProvider :rules="`required|error:${errorStatus},${errorMessage},`" v-slot="{ errors }">
                                <v-text-field outlined v-model="name" placeholder="Nomni yozing"
                                :error-messages="errors">
                                </v-text-field>
                                <!-- <span class="text-red fs-12px ml-2">{{ errors[0] }}</span> -->
                            </ValidationProvider>
                        
                            <v-card-actions class="d-flex justify-space-between">
                                <v-btn
                                    text
                                    class="backBtn"
                                    elevation="0"
                                    @click="closeProductsModal"
                                >Bekor qilish
                                </v-btn>
                                <v-btn
                                    class="primaryBtn"
                                    elevation="0"
                                    type="submit"
                                    :disabled="invalid"
                                    :loading="loading"
                                    @click="loader = 'loading'"
                                >
                                {{ type == 'edit' ? 'Tahrirlash' : 'Qo‘shish' }}
                                </v-btn>
                            </v-card-actions>
                        </form>
                    </ValidationObserver>
                </div>
            </v-card>   
        </template>
    </v-dialog>
</div>
</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
    props: ['newProductsModal', 'modalTitle'],
    data(){
        return{
            categories: [],
            categorySelected: '',
            name: '',
            loader: null,
            loading: false,
            errorStatus: false,
            errorMessage: '',
            type: '',
            editedProduct: {},
        }
    },
    watch: {
        loader () {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        },
        modalTitle:{
            handler: function(newVal) {
                if(newVal){
                    this.categorySelected = newVal.id

                    if(newVal.element){
                        this.name = newVal.element.name
                        this.editedProduct = newVal.element
                    }
                    if(newVal.type){
                        this.type = newVal.type
                    }
                }
            },
            deep: true
        },
        name(newVal, oldVal){
            this.errorStatus = false
            this.errorMessage = false
        },
    },
    async mounted(){
        await this.refresh();
    },
    computed: {
        ...mapState(
            { productCategories: state => state.categories.productCategories }
        ),
    },
    methods:{
        ...mapActions(
        {
            postCategories: 'categories/postCategories',
            editCategory: 'categories/editCategory'
        }),
        closeProductsModal(){
            this.newProductsModal = false
            this.$emit('closeNewProducts', true)

            this.name = '';
            this.categorySelected = '';
            this.type = '';
            this.errorStatus = false;
            this.errorMessage = false
            this.$refs.formNewProduct.reset();
        },
        refresh(){
            this.categories = this.productCategories
            this.categories = this.categories.slice(1, 5);
        },
        async onSubmit(){
            this.$refs.formNewProduct.validate().then(async(success) => {
                if(success){
                    let a = '';

                    if(this.type == 'edit'){
                        a = await this.editCategory({name: this.name, parent_id: this.categorySelected, id: this.editedProduct.id})
                    }else{
                        a = await this.postCategories({name: this.name, parent_id: this.categorySelected})
                    }

                    console.log(a.response);
                    if(a.response && a.response.status == 422){
                        this.$toast.error('Bu nom avval kiritilgan!');
                        this.errorStatus = true
                        this.errorMessage = a.response.data.errors.name[0];
                    }else{
                        //Toast
                        let toastTitle = ''
                        if(this.type == 'edit'){
                            toastTitle = 'Muvaffaqiyatli tahrirlandi!'
                        }else{
                            toastTitle = 'Muvaffaqiyatli qo`shildi!'
                        }
                        this.$toast.success(toastTitle);

                        this.closeProductsModal();
                    }
                }
            });
        },
        
    }
}
</script>

<style scoped>
.btn-white{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff !important;
    height: 70px!important;
    width: 70px!important;
    border-radius: 10px;
    border: 2px solid #F5F5F5;
    box-shadow: none;
}
</style>
