<template>
    <div class="contentPages warehouse" id="warehouse_ip">
        <v-card elevation="0">
            <div class="tabs">
                <v-tabs
                    v-model="tab"
                    background-color="contentPages"
                    color="black"
                >
                    <v-tabs-slider color="teal lighten-3"></v-tabs-slider>
                    <!-- vuex: searchURL -->
                    <v-tab href="#tab-1" @click="searchURL = `/product2?search=${searchVALUE}`">
                        Kirim-chiqim
                    </v-tab>
                    <v-tab href="#tab-2">
                        Chiqim
                    </v-tab>

                    <v-tab href="#tab-3">
                        Mavjud iplar
                    </v-tab>

                    <v-tab href="#tab-4">
                        Jarayondagi iplar
                    </v-tab>
                </v-tabs>
                <v-col cols="auto">
                    <div class="d-flex align-center">
                        <IpSending></IpSending>
                        <v-btn elevation="0">
                            <img src="@/assets/images/filter.svg" alt="filter">
                        </v-btn>
                    </div>
                </v-col>
            </div>
            <v-divider></v-divider>
            <v-tabs-items v-model="tab" class="contentPages">
                <v-tab-item :value="'tab-1'">
                    <v-row>
                        <v-col>
                            <v-card class="cardsCommon" elevation="0">
                                <v-data-table
                                    :headers="headers"
                                    :items="items"
                                    item-key="name"
                                    no-footer
                                >
                                    <!-- eslint-disable  -->
                                    <template v-slot:header.status="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.direction="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.title="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.code="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.mass="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.kg_price="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.sum="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.date="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>





                                    <template v-slot:item.status="{item}">
                                        <div class="d-flex">
                                            <img v-if="item.status" src="@/assets/images/Kirim.png" alt="">
                                            <img v-if="!item.status" src="@/assets/images/Chiqim.png" alt="">
                                        </div>
                                    </template>
                                    <template v-slot:item.direction="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.direction }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.title="{item}">
                                        <div class="d-flex">
                                            <div class="circle mr-1" :class="[item.title]"></div>
                                            <span class="text-black">{{ item.title }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.code="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.code }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.mass="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.mass }} kg</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.kg_price="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.kg_price }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.sum="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.sum }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.date="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.date }} kg</span>
                                        </div>
                                    </template>

                                </v-data-table>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-pagination
                                v-model="page"
                                :length="pageCount"
                                total-visible="7"
                            ></v-pagination>
                        </v-col>
                    </v-row>

                </v-tab-item>
                <v-tab-item :value="'tab-2'">
                    <v-row>
                        <v-col>
                            <v-card class="cardsCommon" elevation="0">
                                <v-data-table
                                    :headers="headers"
                                    :items="items"
                                    item-key="name"
                                    no-footer
                                >
                                    <!-- eslint-disable  -->
                                    <template v-slot:header.status="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.direction="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.title="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.code="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.mass="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.kg_price="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.sum="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.date="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>





                                    <template v-slot:item.status="{item}">
                                        <div class="d-flex">
                                            <img v-if="item.status" src="@/assets/images/Kirim.png" alt="">
                                            <img v-if="!item.status" src="@/assets/images/Chiqim.png" alt="">
                                        </div>
                                    </template>
                                    <template v-slot:item.direction="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.direction }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.title="{item}">
                                        <div class="d-flex">
                                            <div class="circle mr-1" :class="[item.title]"></div>
                                            <span class="text-black">{{ item.title }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.code="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.code }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.mass="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.mass }} kg</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.kg_price="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.kg_price }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.sum="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.sum }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.date="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.date }} kg</span>
                                        </div>
                                    </template>

                                </v-data-table>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-pagination
                                v-model="page"
                                :length="pageCount"
                                total-visible="7"
                            ></v-pagination>
                        </v-col>
                    </v-row>

                </v-tab-item>
                <v-tab-item :value="'tab-3'">
                    <v-row>
                        <v-col>
                            <v-card class="cardsCommon" elevation="0">
                                <v-data-table
                                    :headers="headers2"
                                    :items="items2"
                                    item-key="name"
                                    no-footer
                                >
                                    <!-- eslint-disable  -->
                                    <template v-slot:header.code="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.title="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.mass="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>




                                    <template v-slot:item.code="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.code }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.title="{item}">
                                        <div class="d-flex">
                                            <div class="circle mr-1" :class="[item.title]"></div>
                                            <span class="text-black">{{ item.title }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.mass="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.mass }} kg</span>
                                        </div>
                                    </template>

                                </v-data-table>
                            </v-card>
                        </v-col>
                        <div style="border-right: 1px solid #ececec"></div>
                        <v-col>
                            <v-card class="cardsCommon" elevation="0">
                                <v-data-table
                                    :headers="headers2"
                                    :items="items2"
                                    item-key="name"
                                >
                                    <!-- eslint-disable  -->
                                    <template v-slot:header.code="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.title="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.mass="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>





                                    <template v-slot:item.code="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.code }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.title="{item}">
                                        <div class="d-flex">
                                            <div class="circle mr-1" :class="[item.title]"></div>
                                            <span class="text-black">{{ item.title }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.mass="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.mass }} kg</span>
                                        </div>
                                    </template>

                                </v-data-table>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-pagination
                                v-model="page"
                                :length="pageCount"
                                total-visible="7"
                            ></v-pagination>
                        </v-col>
                    </v-row>
                </v-tab-item>
                <v-tab-item :value="'tab-4'">
                    <v-row>
                        <v-col>
                            <v-card class="cardsCommon" elevation="0">
                                <v-data-table
                                    :headers="headers3"
                                    :items="items3"
                                    item-key="name"
                                    no-footer
                                >
                                    <!-- eslint-disable  -->
                                    <template v-slot:header.code="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.title="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.whom="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.mass="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>




                                    <template v-slot:item.code="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.code }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.title="{item}">
                                        <div class="d-flex">
                                            <div class="circle mr-1" :class="[item.title]"></div>
                                            <span class="text-black">{{ item.title }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.whom="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.whom }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.mass="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.mass }} kg</span>
                                        </div>
                                    </template>

                                </v-data-table>
                            </v-card>
                        </v-col>
                        <div style="border-right: 1px solid #ececec"></div>
                        <v-col>
                            <v-card class="cardsCommon" elevation="0">
                                <v-data-table
                                    :headers="headers3"
                                    :items="items3"
                                    item-key="name"
                                    no-footer
                                >
                                    <!-- eslint-disable  -->
                                    <template v-slot:header.code="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.title="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.whom="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.mass="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>




                                    <template v-slot:item.code="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.code }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.title="{item}">
                                        <div class="d-flex">
                                            <div class="circle mr-1" :class="[item.title]"></div>
                                            <span class="text-black">{{ item.title }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.whom="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.whom }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.mass="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.mass }} kg</span>
                                        </div>
                                    </template>

                                </v-data-table>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <v-pagination
                                v-model="page"
                                :length="pageCount"
                                total-visible="7"
                            ></v-pagination>
                        </v-col>
                    </v-row>

                </v-tab-item>
                    <v-row>
                        <v-col>
                            <v-card class="cardsCommon" elevation="0">
                                <v-data-table
                                    :headers="headers2"
                                    :items="items2"
                                    item-key="name"
                                    no-footer
                                >
                                    <!-- eslint-disable  -->
                                    <template v-slot:header.code="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.title="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.mass="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>




                                    <template v-slot:item.code="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.code }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.title="{item}">
                                        <div class="d-flex">
                                            <div class="circle mr-1" :class="[item.title]"></div>
                                            <span class="text-black">{{ item.title }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.mass="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.mass }} kg</span>
                                        </div>
                                    </template>

                                </v-data-table>
                            </v-card>
                        </v-col>
                        <div style="border-right: 1px solid #ececec"></div>
                        <v-col>
                            <v-card class="cardsCommon" elevation="0">
                                <v-data-table
                                    :headers="headers2"
                                    :items="items2"
                                    item-key="name"
                                >
                                    <!-- eslint-disable  -->
                                    <template v-slot:header.code="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.title="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>
                                    <template v-slot:header.mass="{ header }">
                                        <span class="table-header">{{ header.text}}</span>
                                    </template>





                                    <template v-slot:item.code="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.code }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.title="{item}">
                                        <div class="d-flex">
                                            <div class="circle mr-1" :class="[item.title]"></div>
                                            <span class="text-black">{{ item.title }}</span>
                                        </div>
                                    </template>
                                    <template v-slot:item.mass="{item}">
                                        <div class="d-flex">
                                            <span class="text-black">{{ item.mass }} kg</span>
                                        </div>
                                    </template>

                                </v-data-table>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-pagination
                                v-model="page"
                                :length="pageCount"
                                total-visible="7"
                            ></v-pagination>
                        </v-col>
                    </v-row>
                </v-tab-item>
            </v-tabs-items>
        </v-card>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex";
import IpSending from '@/components/modals/Warehouse/IpSending.vue'
export default {
    components:{
        IpSending
    },
    data(){
        return{
            page: 1,
            pageCount: 0,
            tab:'',
            menu:false,

            headers: [
                {text: 'Status', value: 'status'},
                {text: 'Partiya / Qayerga', value: 'direction'},
                {text: 'Nomi', value: 'title'},
                {text: 'Kodi', value: 'code'},
                {text: 'Massa (kg)', value: 'mass'},
                {text: 'KG narxi', value: 'kg_price'},
                {text: 'Summasi', value: 'sum'},
                {text: 'Sana', value: 'date'},
            ],
            headers2: [
                {text: 'Kod', value: 'code'},
                {text: 'Nomi', value: 'title'},
                {text: 'Umumiy massa', value: 'mass'},
            ],
            headers3: [
                {text: 'Kod', value: 'code'},
                {text: 'Nomi', value: 'title'},
                {text: 'Kimga', value: 'whom'},
                {text: 'Massa (kg)', value: 'mass'},
            ],
            items: [
                {status: true, direction: 'Yoqa tikishga', title: 'Yashil', code: '#512412',
                mass: '280', kg_price: '40,000 so‘m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Yoqa tikishga', title: 'Yashil', code: '#512412',
                mass: '280', kg_price: '40,000 so‘m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Yoqa tikishga', title: 'Yashil', code: '#512412',
                mass: '280', kg_price: '40,000 so‘m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Yoqa tikishga', title: 'Yashil', code: '#512412',
                mass: '280', kg_price: '40,000 so‘m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Yoqa tikishga', title: 'Yashil', code: '#512412',
                mass: '280', kg_price: '40,000 so‘m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Yoqa tikishga', title: 'Yashil', code: '#512412',
                mass: '280', kg_price: '40,000 so‘m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Yoqa tikishga', title: 'Yashil', code: '#512412',
                mass: '280', kg_price: '40,000 so‘m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Yoqa tikishga', title: 'Yashil', code: '#512412',
                mass: '280', kg_price: '40,000 so‘m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Yoqa tikishga', title: 'Yashil', code: '#512412',
                mass: '280', kg_price: '40,000 so‘m', sum: '1,400,000 so‘m', date: '21.09.2021'},
            ],
            items2: [
                {code: '#512412', title: 'Qizil', mass: '280'},
                {code: '#512412', title: 'Qizil', mass: '280'},
                {code: '#512412', title: 'Qizil', mass: '280'},
                {code: '#512412', title: 'Qizil', mass: '280'},
                {code: '#512412', title: 'Qizil', mass: '280'},
                {code: '#512412', title: 'Qizil', mass: '280'},
            ],
            items3: [
                {code: '#512412',title: 'Qizil', whom: 'Mato: 1-tikuvxona', mass: '280'},
                {code: '#419489',title: 'Qizil', whom: 'Mato: 1-tikuvxona', mass: '280'},
                {code: '#745874',title: 'Qizil', whom: 'Mato: 1-tikuvxona', mass: '280'},
                {code: '#489489',title: 'Qizil', whom: 'Mato: 1-tikuvxona', mass: '280'},
                {code: '#489489',title: 'Qizil', whom: 'Mato: 1-tikuvxona', mass: '280'},
            ],
        }
    },
    async mounted(){
        await this.fetchIncome({status: 1})
    },
    computed:{
        ...mapState(
            {

            }
        )
        // headersWarehouseIp(){
        //     return this.$store.getters['warehouse/headersWarehouseIp']
        // },
        // headersWarehouseIpThread(){
        //     return this.$store.getters['warehouse/headersWarehouseIpThread']
        // },
        // items() {
        //     return this.$store.getters['warehouse/items']
        // },
    },
    methods:{
        ...mapActions(
            {
                fetchIncome: 'warehouse/fetchIncome'
            }
        )
    }
}
</script>

<style>

</style>
