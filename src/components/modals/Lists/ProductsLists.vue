<template>
<div>
    <v-dialog
        max-width="500"
        persistent
        v-model="productsList"
    >
        <template v-slot:activator="{ on, attrs }">
            <div class="d-flex">
                <v-btn class="btn-blue" v-bind="attrs" v-on="on">Mahsulot turlari ro`yxati</v-btn>
                <NewProductList :newProductsModal="newProductsModal" :modalTitle="modalTitle"
                    @closeNewProducts="closeNewProductsModal($event)">
                </NewProductList>
            </div>
        </template>
        <template>
            <v-card class="modalCard">
                <div class="modalToolbar border-bottom">
                    <span class="">Mahsulot turlari ro‘yxati</span>
                    <v-btn icon @click="productsList = false">
                        <img src="@/assets/images/BackButton.svg" alt="">
                    </v-btn>
                </div>
                <div>
                    <v-tabs
                        v-model="tab"
                        background-color="white"
                        color="black"
                        align-with-title
                        class="border-bottom"
                    >
                        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

                        <v-tab href="#tab-1">
                            Mato
                        </v-tab>
                        <v-tab href="#tab-2">
                            Yoqa
                        </v-tab>
                        <v-tab href="#tab-3">
                            Aksessuar
                        </v-tab>
                        <v-tab href="#tab-4">
                            Tayyor m.
                        </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tab" style="border-radius: 14px;">

                        <v-tab-item :value="'tab-1'">
                            <div class="border-bottom mx-8 py-1">
                                <div class="d-flex justify-space-between align-center pt-3 pb-2 px-3 hover" 
                                v-for="(element, index) in matoFiltered" :key="index">
                                    <span>{{element.name}}</span>
                                    <button @click="openModal('Mato turi tahriri', element.parent_id, element, 'edit')" class="mr-2">
                                        <img src="@/assets/icons/edit-2.svg" class="mt-1" alt="edit-2">
                                    </button>
                                </div>
                            </div>
                            <button class="btn-white-new mx-12 my-4" 
                            @click="openModal('Yangi mato turi', 2)">
                                <img src="@/assets/icons/add-circle-blue.svg" class="mr-1" alt="add-blue">
                                <span class="text-blue">Yangi mato turi</span>
                            </button>
                        </v-tab-item>

                        <v-tab-item :value="'tab-2'">
                            <div class="border-bottom mx-8 py-1">
                                <div class="d-flex justify-space-between align-center pt-3 pb-2 px-3 hover" 
                                v-for="(element, index) in yoqaFiltered" :key="index">
                                    <span>{{element.name}}</span>
                                    <button @click="openModal('Yoqa turi tahriri', element.parent_id, element, 'edit')" class="mr-2">
                                        <img src="@/assets/icons/edit-2.svg" class="mt-1" alt="edit-2">
                                    </button>
                                </div>
                            </div>
                            <button class="btn-white-new mx-12 my-4" 
                            @click="openModal('Yangi yoqa turi', 3)">
                                <img src="@/assets/icons/add-circle-blue.svg" class="mr-1" alt="add-blue">
                                <span class="text-blue">Yangi yoqa turi</span>
                            </button>
                        </v-tab-item>

                        <v-tab-item :value="'tab-3'">
                            <div class="border-bottom mx-8 py-1">
                                <div class="d-flex justify-space-between align-center pt-3 pb-2 px-3 hover" 
                                v-for="(element, index) in aksessuarFiltered" :key="index">
                                    <span>{{element.name}}</span>
                                    <button @click="openModal('Aksessuar turi tahriri', element.parent_id, element, 'edit')" class="mr-2">
                                        <img src="@/assets/icons/edit-2.svg" class="mt-1" alt="edit-2">
                                    </button>
                                </div>
                            </div>
                            <button class="btn-white-new mx-12 my-4" 
                            @click="openModal('Yangi aksessuar turi', 4)">
                                <img src="@/assets/icons/add-circle-blue.svg" class="mr-1" alt="add-blue">
                                <span class="text-blue">Yangi aksessuar tur</span>
                            </button>
                        </v-tab-item>

                        <v-tab-item :value="'tab-4'">
                            <div class="border-bottom mx-8 py-1">
                                <div class="d-flex justify-space-between align-center pt-3 pb-2 px-3 hover" 
                                v-for="(element, index) in tayyorFiltered" :key="index">
                                    <span>{{element.name}}</span>
                                    <button @click="openModal('Tayyor mahsulot turi tahriri', element.parent_id, element, 'edit')" class="mr-2">
                                        <img src="@/assets/icons/edit-2.svg" class="mt-1" alt="edit-2">
                                    </button>
                                </div>
                            </div>
                            <button class="btn-white-new mx-12 my-4" 
                            @click="openModal('Yangi tayyor mahsulot turi', 5)">
                                <img src="@/assets/icons/add-circle-blue.svg" class="mr-1" alt="add-blue">
                                <span class="text-blue">Yangi tayyor mahsulot turi</span>
                            </button>
                        </v-tab-item>
                        
                    </v-tabs-items>
                </div>
            </v-card>
        </template>
    </v-dialog>
</div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import NewProductList from './NewProductList.vue'
export default {
    components:{
        NewProductList,
    },
    data(){
        return{
            tab: 'tab-1',
            editModal: false,
            productsList: false,
            newProductsModal: false,
            matoFiltered: [],
            yoqaFiltered: [],
            aksessuarFiltered: [],
            tayyorFiltered: [],
            modalTitle: ''
        }
    },
    async created(){
        this.refresh();
    },
    computed: {
        ...mapState(
            { productCategories: state => state.categories.productCategories }
        )
    },
    methods: {
        ...mapActions(
            { fetchCategories: 'categories/fetchCategories' }
        ),
        editItem(){
            this.editModal = true
        },
        async closeNewProductsModal(e){
            if(e){
                this.newProductsModal = false
                await this.fetchCategories()
                await this.refresh()
            }
        },
        refresh() {
            this.matoFiltered = this.productCategories.filter((elem) => elem.parent_id == 2)
            this.yoqaFiltered = this.productCategories.filter((elem) => elem.parent_id == 3)
            this.aksessuarFiltered = this.productCategories.filter((elem) => elem.parent_id == 4)
            this.tayyorFiltered = this.productCategories.filter((elem) => elem.parent_id == 5)
        },
        openModal(title, id, element, type){
            this.newProductsModal = true
            this.modalTitle = {title: title, id: id}
            if(element){
                this.modalTitle.element = element
            }
            if(type){
                this.modalTitle.type = type
            }
        }
    }
}
</script>

<style scoped>
.theme--light{
    background: white!important;
 }
.btn-blue{
    background: #2782F6 !important;
    color: #fff;
    height: 70px!important;
    width: 275px!important;
    padding: 30px;
    border-radius: 10px;
    box-shadow: none;
}

.btn-white-new{
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff !important;
    height: 80px!important;
    width: 402px!important;
    border-radius: 10px;
    border: 2px solid #F5F5F5;
    box-shadow: none;
}

.modalToolbar{
    padding: 14px 20px 10px 20px;
}

.modalCard{
    padding: 0;
}
</style>
