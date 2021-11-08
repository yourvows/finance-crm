<template>
<div>
    <v-dialog
        max-width="500"
        persistent
        v-model="factoriesList"
    >
        <template v-slot:activator="{ on, attrs }">
            <div class="d-flex">
                <v-btn class="btn-blue" v-bind="attrs" v-on="on">Fabrikalar ro`yxati</v-btn>
                <NewFactoryList :newFactoriesModal="newFactoriesModal" :modalTitle="modalTitle"
                    @closeNewFactories="closeNewFactoriesModal($event)">
                </NewFactoryList>
            </div>
        </template>
        <template>
            <v-card class="modalCard">
                <div class="modalToolbar border-bottom">
                    <span class="">Fabrikalar ro‘yxati</span>
                    <v-btn icon @click="factoriesList = false">
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
                            Mato t.
                        </v-tab>
                        <v-tab href="#tab-2">
                            Yoqa t.
                        </v-tab>
                        <v-tab href="#tab-3">
                            Bo’yoqxona
                        </v-tab>
                        <v-tab href="#tab-4">
                            Fabrika
                        </v-tab>
                    </v-tabs>
                    
                    <v-tabs-items v-model="tab" style="border-radius: 14px;">

                        <v-tab-item :value="'tab-1'">
                            <div class="border-bottom mx-8 py-1">
                                <div class="d-flex justify-space-between align-center pt-3 pb-2 px-3 hover" 
                                v-for="(element, index) in matoFiltered" :key="index">
                                    <span>{{element.name}}</span>
                                    <button @click="openModal('Mato fabrikasi tahriri', element.factory_category_id, element, 'edit')" class="mr-2">
                                        <img src="@/assets/icons/edit-2.svg" class="mt-1" alt="edit-2">
                                    </button>
                                </div>
                            </div>
                            <button class="btn-white-new mx-12 my-4"
                            @click="openModal('Yangi mato fabrika', 1)">
                                <img src="@/assets/icons/add-circle-blue.svg" class="mr-1" alt="add-blue">
                                <span class="text-blue">Yangi mato fabrika</span>
                            </button>
                        </v-tab-item>

                        <v-tab-item :value="'tab-2'">
                            <div class="border-bottom mx-8 py-1">
                                <div class="d-flex justify-space-between align-center pt-3 pb-2 px-3 hover" 
                                v-for="(element, index) in yoqaFiltered" :key="index">
                                    <span>{{element.name}}</span>
                                    <button @click="openModal('Yoqa fabrikasi tahriri', element.factory_category_id, element, 'edit')" class="mr-2">
                                        <img src="@/assets/icons/edit-2.svg" class="mt-1" alt="edit-2">
                                    </button>
                                </div>
                            </div>
                            <button class="btn-white-new mx-12 my-4"
                            @click="openModal('Yangi yoqa fabrika', 2)">
                                <img src="@/assets/icons/add-circle-blue.svg" class="mr-1" alt="add-blue">
                                <span class="text-blue">Yangi yoqa fabrika</span>
                            </button>
                        </v-tab-item>

                        <v-tab-item :value="'tab-3'">
                            <div class="border-bottom mx-8 py-1">
                                <div class="d-flex justify-space-between align-center pt-3 pb-2 px-3 hover" 
                                v-for="(element, index) in boyoqxonaFiltered" :key="index">
                                    <span>{{element.name}}</span>
                                    <button @click="openModal('Bo`yoqxona tahriri', element.factory_category_id, element, 'edit')" class="mr-2">
                                        <img src="@/assets/icons/edit-2.svg" class="mt-1" alt="edit-2">
                                    </button>
                                </div>
                            </div>
                            <button class="btn-white-new mx-12 my-4"
                            @click="openModal('Yangi bo`yoqxona', 3)">
                                <img src="@/assets/icons/add-circle-blue.svg" class="mr-1" alt="add-blue">
                                <span class="text-blue">Yangi bo`yoqxona</span>
                            </button>
                        </v-tab-item>

                        <v-tab-item :value="'tab-4'">
                            <div class="border-bottom mx-8 py-1">
                                <div class="d-flex justify-space-between align-center pt-3 pb-2 px-3 hover" 
                                v-for="(element, index) in fabrikaFiltered" :key="index">
                                    <span>{{element.name}}</span>
                                    <button @click="openModal('Fabrika tahriri', element.factory_category_id, element, 'edit')" class="mr-2">
                                        <img src="@/assets/icons/edit-2.svg" class="mt-1" alt="edit-2">
                                    </button>
                                </div>
                            </div>
                            <button class="btn-white-new mx-12 my-4"
                            @click="openModal('Yangi fabrika', 4)">
                                <img src="@/assets/icons/add-circle-blue.svg" class="mr-1" alt="add-blue">
                                <span class="text-blue">Yangi fabrika</span>
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
import NewFactoryList from './NewFactoryList.vue'
export default {
    components:{
        NewFactoryList,
    },
    data(){
        return{
            tab: 'tab-1',
            editModal: false,
            factoriesList: false,
            newFactoriesModal: false,
            matoFiltered: [],
            yoqaFiltered: [],
            boyoqxonaFiltered: [],
            fabrikaFiltered: [],
            modalTitle: ''
        }
    },
    async created(){
        await this.refresh();
    },
    computed: {
        ...mapState(
            { factories: state => state.categories.factories }
        )
    },
    methods: {
        ...mapActions(
        { 
            fetchFactories: 'categories/fetchFactories',
        }),
        editItem(){
            this.editModal = true
        },
        async closeNewFactoriesModal(e){
            if(e){
                this.newFactoriesModal = false
                await this.fetchFactories()
                await this.refresh()
            }
        },
        async refresh() {
            this.matoFiltered = this.factories.filter((elem) => elem.factory_category_id == 1)
            this.yoqaFiltered = this.factories.filter((elem) => elem.factory_category_id == 2)
            this.boyoqxonaFiltered = this.factories.filter((elem) => elem.factory_category_id == 3)
            this.fabrikaFiltered = this.factories.filter((elem) => elem.factory_category_id == 4)
        },
        openModal(title, id, element, type){
            this.newFactoriesModal = true
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
