<template>
    <div>
        <v-col cols="auto">
            <v-dialog
                max-width="400"
                persistent
                v-model="addModal"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn dark class="mr-2" elevation="0" v-bind="attrs"
                        v-on="on" style="background: #2886FF!important;">
                        <img src="@/assets/icons/add.svg"
                         alt="add" style="width: 23px;">
                        Qo‘shish
                    </v-btn>
                </template>
                <v-card class="modalCard">
                    <div class="modalToolbar">
                        <span class="font-weight-bold">Yangi mahsulot</span>
                        <v-btn icon @click="addModal=!addModal">
                            <img src="@/assets/images/BackButton.svg" alt="BackButton">
                        </v-btn>
                    </div>
                    <form ref="formAdd" class="py-2">
                        <v-select :items="selectItems" item-text="name" item-value="id"
                            v-model="parentCategoryId" label="Turini tanlang" outlined
                            :rules="[v => !!v || 'Iltimos, tanlang!']"
                        >
                        </v-select>
                        <v-select v-if="parentCategoryId !== 1" :items="selectItemsSecond"
                            v-model="categoryId" class="mt-4" item-text="name"
                            :rules="[v => !!v || 'Iltimos, tanlang!']"
                            item-value="id" label="Turini tanlang" outlined
                        >
                        </v-select>

                        <v-text-field outlined v-model="name" label="Nomini yozing"
                            :rules="[v => !!v || ' Iltimos, nomini kiriting!']"
                            class="mt-4">
                        </v-text-field>

                        <v-text-field outlined v-model="code" onkeypress="return /[0-9]/i.test(event.key)"
                            :rules="[v => !!v || 'Iltimos,kodni kiriting!']"
                            :counter="8" label="Kodini yozing"
                            class="mt-4">
                        </v-text-field>

                        <v-textarea label="Tavsif" v-model="description" auto-grow outlined rows="3"
                            class="mt-4" row-height="15" :rules="[v => !!v || 'Iltimos,tavsifni kiriting!']">
                        </v-textarea>

                        <v-card-actions class="d-flex justify-space-between">
                            <v-btn
                                text
                                class="backBtn"
                                elevation="0"
                                @click="addModal=!addModal"
                            >Bekor qilish
                            </v-btn>
                            <v-btn
                                class="primaryBtn"
                                elevation="0"
                                :loading="loading"
                                :disabled="!btnDisabled"
                                type="submit"
                                @click.prevent="onSubmit"
                            >Qo‘shish
                            </v-btn>
                        </v-card-actions>
                    </form>
                </v-card>
            </v-dialog>
        </v-col>
    </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
    data() {
        return {
            loading: false,
            loader: null,
            parentCategoryId: '',
            categoryId: '',
            name: '',
            addModal: false,
            code: '',
            description: '',
            matoFiltered: [],
            yoqaFiltered: [],
            aksessuarFiltered: [],
            tayyorFiltered: [],
            selectItemsSecond: [],
            error: false,
            errorType: false,
            errorMessage: '',
        }
    },
    async mounted() {
        await this.refresh();
    },
    watch: {
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        },
        parentCategoryId(newVal, oldVal) {
            if (newVal == 2) {
                this.selectItemsSecond = this.productCategories.filter((elem) => elem.parent_id == 2)
            } else if (newVal == 3) {
                this.selectItemsSecond = this.productCategories.filter((elem) => elem.parent_id == 3)
            } else if (newVal == 4) {
                this.selectItemsSecond = this.productCategories.filter((elem) => elem.parent_id == 4)
            } else if (newVal == 5) {
                this.selectItemsSecond = this.productCategories.filter((elem) => elem.parent_id == 5)
            }
        },

    },
    computed: {
        ...mapState(
            {
                productCategories: state => state.categories.productCategories || [],
                update: state => state.code.update
            }
        ),

        selectItems() {
            return this.productCategories.slice(0, 5);
        },
        btnDisabled() {
            return this.name && this.description && this.code && this.parentCategoryId
        }
    },
    methods: {
        ...mapMutations(
            {
                SET_UPDATE: 'code/SET_UPDATE',
            }
        ),

        nameClasses(errors) {
            if (errors.length > 0 || this.error) {
                return 'errorInput'
            }
        },

        ...mapActions(
            {fetchCategories: 'categories/fetchCategories', saveCodeProduct: 'code/saveProductCode'},
        ),

        async onSubmit() {
            let a = '';

            this.loader = 'loading'
            const data = {
                code: this.code,
                product_category_id: this.parentCategoryId,
                name: this.name,
                description: this.description
            }
            a = await this.$store.dispatch("code/saveProductCode", data)
            this.SET_UPDATE(true)

            if (a.response && a.response.status == 422) {
                this.$toast.error(a.response.data.errors.code[0]);
                this.error = true;
                this.errorType = true;
                this.errorMessage = a.response.data.errors.code[0];
            } else {
                //Toast
                let toastTitle = 'Muvaffaqiyatli qo`shildi!'
                this.$toast.success(toastTitle);
                this.closeAddModal();
            }
            this.code = ''
            this.product_category_id = ''
            this.name = ''
            this.description = ''
            this.$refs.form.reset()
        },
        closeAddModal() {
            this.addModal = false

            this.error = false;
            this.errorType = false;
            this.errorMessage = '';
            this.$refs.formAdd.reset();
        },
        async refresh() {
            await this.fetchCategories();
        },
    }
}
</script>

