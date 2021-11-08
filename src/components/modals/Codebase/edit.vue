<template>
    <div>

        <v-dialog
            max-width="400"
            persistent
            v-model="editModal"
        >
            <template v-slot:activator="{ on, attrs }">
                <div @click="edit" class="cursor-pointer mt-1 mr-2">
                    <img src="@/assets/icons/edit-2.svg" alt="edit-2">
                </div>
            </template>

            <v-card class="modalCard">
                <div class="modalToolbar">
                    <span class="font-weight-bold">Mahsulot tahriri</span>
                    <v-btn icon @click="closeModal"><img src="@/assets/images/BackButton.svg" alt="BackButton">
                    </v-btn>
                </div>
                <v-form ref="form" v-model="valid">
                    <div class="py-2">
                        <v-select :items="filteredItems" v-model="product.product_category_id" item-text="name"
                                  class="mt-2"
                                  item-value="id" label="Turini tanlang"
                                  outlined></v-select>
                        <v-text-field outlined v-model="product.name"
                                      :rules="[v => !!v || ' Iltimos, nomini kiriting!']" class="mt-2"
                                      placeholder="Nomini yozing"></v-text-field>
                        <v-text-field outlined v-model="product.code" onkeypress="return /[0-9]/i.test(event.key)"
                                      :rules="[v => !!v || 'Iltimos,kodni kiriting!']"
                                      class="mt-2"
                                      placeholder="Kodini yozing"></v-text-field>
                        <v-text-field outlined v-model="product.description"
                                      :rules="[v => !!v || 'Iltimos,tavsifni kiriting!']" class="mt-2"
                                      placeholder="Tavsif yozing"></v-text-field>
                    </div>

                    <v-card-actions class="d-flex justify-space-between">
                        <v-btn
                            text
                            class="backBtn"
                            elevation="0"
                            @click="editModal=false"
                        >Bekor qilish
                        </v-btn>
                        <v-btn
                            class="primaryBtn"
                            elevation="0"
                            @click="update"
                            :loading="loading"
                        >Tahrirlash
                        </v-btn>
                    </v-card-actions>
                </v-form>
                <v-overlay :value="overlay" :absolute="absolute">
                    <v-progress-circular
                        indeterminate
                        size="64"
                    ></v-progress-circular>
                </v-overlay>
            </v-card>
        </v-dialog>


    </div>
</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
    props: [
        'item'
    ],
    data() {
        return {
            loading: false,
            loader: null,
            overlay: false,
            absolute: true,
            valid: true,
            title: '',
            editModal: false,
            categoryId: '',
            code: '',
            items: [
                {text: 'Yoqa', value: 'Yoqa'},
                {text: 'Manjet', value: 'Manjet'},
                {text: 'Tesma', value: 'Tesma'},
            ],
        }
    },
    computed: {
        buttonDisabled(){
          return  this.product.name && this.product.code && this.product.description && product.product_category_id
        },
        ...mapState(
            {
                product: state => state.code.product || [],
                errorMessage: state => state.code.error,
                productCategories: state => state.categories.productCategories || [],
            }
        ),
        filteredItems() {
            return this.productCategories.slice(0, 5);
        }
    },
    methods: {
        ...mapActions(
            {
                getProductId: 'code/getProductId',
                fetchCategories: 'categories/fetchCategories',
                editProduct: 'code/editProduct',
            }
        ),
        closeModal() {
            this.editModal = false
            this.overlay = false
        },
        edit() {
            this.getProductId(this.item)
            this.editModal = !this.editModal
            this.overlay = !this.overlay
        },
        async update() {
            this.loader = 'loading'
            await this.editProduct(this.product)
            this.$emit('updateTable', true)
            if (this.errorMessage && this.errorMessage.code && this.errorMessage.name && this.errorMessage.description) {
                this.$toast.error(this.errorMessage.code[0]);
                this.$toast.error(this.errorMessage.name[0]);
                this.$toast.error(this.errorMessage.description[0]);
                this.product.name = ''
                this.product.description = ''
                this.product.code = ''
                this.product.product_category_id = ''
                this.valid = true
            } else {
                console.log('is enter ')
                this.editModal = false
                this.$toast.success('Muvaffaqiyatli ozgarildi!');
            }
        }
    },
    watch: {
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        },
        overlay(val) {
            val && setTimeout(() => {
                this.overlay = false
            }, 1200)
        }
    },

}
</script>

<style scoped>

</style>
