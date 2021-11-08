<template>
    <div>
        <v-dialog
            max-width="400"
            v-model="categoryAndLists"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs"
                        v-on="on" icon class="mr-4">
                    <img src="@/assets/images/Category.svg" alt="Category">
                </v-btn>
            </template>
            <template>
                <v-card class="modalCard d-flex flex-column justify-center align-start">
                    <div class="modalToolbar mb-5">
                        <span class="text-black">Kategoriya va ro’yxatlar</span>
                        <v-btn icon @click="categoryAndLists = false">
                            <img src="@/assets/images/BackButton.svg" alt="BackButton">
                        </v-btn>
                    </div>
                    <div class="d-flex mb-4">
                        <FactoriesList></FactoriesList>
                    </div>
                    <div class="d-flex mb-4">
                        <ProductsLists></ProductsLists>
                    </div>
                </v-card>
            </template>
        </v-dialog>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import ProductsLists from './ProductsLists.vue'
import FactoriesList from './FactoriesList.vue'
import NewProductList from './NewProductList.vue'
import NewFactoryList from './NewFactoryList.vue'

export default {
    components:{
        ProductsLists,
        FactoriesList,
        NewProductList,
        NewFactoryList
    },
    data() {
        return {
            categoryAndLists: false
        }
    },
    async created(){
        await this.refresh()
    },
    computed: {
        ...mapState({})
    },
    methods: {
         ...mapActions(
        { 
            fetchCategories: 'categories/fetchCategories',
            fetchFactoryCategories: 'categories/fetchFactoryCategories' ,
            fetchFactories: 'categories/fetchFactories'
        }),
        closeAddModal() {
            this.$emit('closeAddModal', true)
        },
        async refresh() {
            await this.fetchCategories();
            await this.fetchFactoryCategories();
            await this.fetchFactories();
        },
       
    }
}
</script>

<style scoped>

</style>
