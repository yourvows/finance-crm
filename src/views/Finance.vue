<template>
    <div class="finance" id="finance">
        <div class="tabs">
            <v-tabs
                v-model="tab"
                color="black"
            >
                <v-tabs-slider color="teal lighten-3" ></v-tabs-slider>

                <v-tab href="#tab-1" @click="SET_ROUTE_URL('/products-kirim')">
                    Kirim-chiqim
                </v-tab>
                <v-tab href="#tab-2" @click="SET_ROUTE_URL('/products-qarz')">
                    Qarzdorlik
                </v-tab>
            </v-tabs>
            <v-col cols="auto">
                <div class="d-flex align-center">
                    <modalExit></modalExit>

                    <v-btn elevation="0">
                        <img src="../assets/images/filter.svg" alt="filter">
                    </v-btn>
                </div>
            </v-col>
        </div>
        <v-divider></v-divider>
        <v-tabs-items v-model="tab">
            <v-tab-item
                :value="'tab-1'"
            >
                <v-row>
                    <v-col cols="12" md="6" lg="6" sm="12" 
                        style="border-right: 1px solid lightgray"
                    >
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            item-key="name"
                            no-footer
                        >
                            <!-- eslint-disable  -->
                            <template v-slot:item.boolean="{item}">
                                <div class="d-flex">
                                    <img v-if="item.boolean" src="../assets/images/enterimg.svg" alt="">
                                    <img v-if="!item.boolean" src="../assets/images/exitimg.svg" alt="">
                                </div>
                            </template>
                            <template v-slot:item.company="{item}">
                                <div class="d-flex">
                                    <span class="blue--text" style="color: #2782F6!important;">
                                        {{ item.company }}
                                    </span>
                                </div>
                            </template>
                            <template v-slot:item.price="{item}">
                                <div class="d-flex">
                                    <span class="text-black">{{ item.price }}</span>
                                </div>
                            </template>

                            <template v-slot:item.date="{item}">
                                <div class="d-flex">
                                    <span class="text-black">{{ item.date }}</span>
                                </div>
                            </template>
                        </v-data-table>
                    </v-col>
                    <v-col cols="12" md="6" lg="6" sm="12">
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            item-key="name"
                        >
                            <!-- eslint-disable  -->
                            <template v-slot:item.boolean="{item}">
                                <div class="d-flex">
                                    <img v-if="item.boolean" src="../assets/images/enterimg.svg" alt="">
                                    <img v-if="!item.boolean" src="../assets/images/exitimg.svg" alt="">
                                </div>
                            </template>
                            <template v-slot:item.company="{item}">
                                <div class="d-flex">
                                    <span class="blue--text" style="color: #2782F6!important;">
                                        {{ item.company }}
                                    </span>
                                </div>
                            </template>
                            <template v-slot:item.lastAmount="{item}">
                                <div class="d-flex">
                                    <span class="text-black">
                                        {{ item.lastAmount }}
                                    </span>
                                </div>
                            </template>

                            <template v-slot:item.date="{item}">
                                <div class="d-flex">
                                    <span class="text-black">{{ item.date }}</span>
                                </div>
                            </template>
                        </v-data-table>
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
            <v-tab-item
                :value="'tab-2'"
            >
                <v-row>
                    <v-col>
                        <v-card style="box-shadow: 6px 12px 30px rgba(22, 28, 36, 0.04);"
                                class="cardsMainSecond">
                            <p class="text--secondary text-h6">Umumiy qarzdorlik</p>
                            <div class="d-flex mt-6">
                                <p class="font-weight-bold numbersOfCardsSecond">29,</p><span
                                style="font-size: 18px" class="mt-2 font-weight-bold text--secondary">000,000 so‘m</span>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card class="cardsMainSecond">
                            <p class="text--secondary text-h6">Mato to’quv</p>
                            <div class="d-flex mt-6">
                                <p class="font-weight-bold numbersOfCardsSecond">69,</p><span
                                style="font-size: 18px" class="mt-2 font-weight-bold text--secondary">000,000 so‘m</span>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card class="cardsMainSecond">
                            <p class="text--secondary text-h6">Yoqa to’quv</p>
                            <div class="d-flex mt-6">
                                <p class="font-weight-bold numbersOfCardsSecond">54,</p><span
                                style="font-size: 18px" class="mt-2 font-weight-bold text--secondary">000,000 so‘m</span>
                            </div>
                        </v-card>
                    </v-col>

                    <v-col>
                        <v-card class="cardsMainSecond">
                            <p class="text--secondary text-h6">Bo’yoqxona</p>
                            <div class="d-flex mt-6">
                                <p class="font-weight-bold numbersOfCardsSecond">69,</p><span
                                style="font-size: 18px" class="mt-2 font-weight-bold text--secondary">000,000 so‘m</span>
                            </div>
                        </v-card>
                    </v-col>

                    <v-col>
                        <v-card class="cardsMainSecond">
                            <p class="text--secondary text-h6">Fabrikalar</p>
                            <div class="d-flex mt-6">
                                <p class="font-weight-bold numbersOfCardsSecond">69,</p><span
                                style="font-size: 18px" class="mt-2 font-weight-bold text--secondary">000,000 so‘m</span>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
                <v-card elevation="0" class="mt-5">
                    <v-divider></v-divider>
                    <v-tabs
                        v-model="debtsTab"
                    >
                        <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

                        <v-tab href="#tab-1">
                            Mato to‘quv
                        </v-tab>

                        <v-tab href="#tab-2">
                            Yoqa to‘quv
                        </v-tab>
                        <v-tab href="#tab-3">
                            Bo‘yoqxona
                        </v-tab>
                        <v-tab href="#tab-4">
                            Fabrikalar
                        </v-tab>
                        <v-tab href="#tab-5">
                            Bichuvxona
                        </v-tab>
                    </v-tabs>
                    <v-divider></v-divider>
                    <v-tabs-items v-model="debtsTab">
                        <v-tab-item
                            :value="'tab-1'"
                        >
                            <v-row>
                                <v-col cols="12">
                                    <v-data-table
                                        :headers="headersDebts"
                                        :items="items"
                                        item-key="name"
                                        no-footer
                                    >
                                        <!-- eslint-disable  -->
                                        <template v-slot:item.boolean="{item}">
                                            <div class="d-flex mt-3">
                                                <img v-if="item.boolean" src="../assets/images/enterimg.svg"
                                                        alt="">
                                                <img v-if="!item.boolean" src="../assets/images/exitimg.svg"
                                                        alt="">
                                            </div>
                                        </template>
                                        <template v-slot:item.company="{item}">
                                            <div class="d-flex mt-3">
                                                <p class="ml-2 blue--text font-weight-bold"
                                                    style="color: #2782F6!important;">
                                                    {{ item.company }}</p>
                                            </div>
                                        </template>
                                        <template v-slot:item.price="{item}">
                                            <div class="d-flex mt-3">
                                                <p class=" text--black ">{{ item.price }} kg</p>
                                            </div>
                                        </template>

                                        <template v-slot:item.date="{item}">
                                            <div class="d-flex mt-3">
                                                <p class="ml-2 text--black font-weight-bold">{{ item.date }}</p>
                                            </div>
                                        </template>
                                        <template v-slot:item.giveMoney="{item}">
                                            <modalPayment></modalPayment>
                                        </template>
                                    </v-data-table>
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
                        <v-tab-item
                            :value="'tab-2'"
                        >
                            <v-row>
                                <v-col cols="12">
                                    <v-data-table
                                        :headers="headers"
                                        :items="items"
                                        item-key="name"
                                        no-footer
                                    >
                                        <!-- eslint-disable  -->
                                        <template v-slot:item.boolean="{item}">
                                            <div class="d-flex mt-3">
                                                <img v-if="item.boolean" src="../assets/images/enterimg.svg"
                                                        alt="">
                                                <img v-if="!item.boolean" src="../assets/images/exitimg.svg"
                                                        alt="">
                                            </div>
                                        </template>
                                        <template v-slot:item.company="{item}">
                                            <div class="d-flex mt-3">
                                                <p class="ml-2 blue--text font-weight-bold"
                                                    style="color: #2782F6!important;">
                                                    {{ item.company }}</p>
                                            </div>
                                        </template>
                                        <template v-slot:item.price="{item}">
                                            <div class="d-flex mt-3">
                                                <p class=" text--black ">{{ item.price }} kg</p>
                                            </div>
                                        </template>

                                        <template v-slot:item.date="{item}">
                                            <div class="d-flex mt-3">
                                                <p class="ml-2 text--black font-weight-bold">{{ item.date }}</p>
                                            </div>
                                        </template>
                                    </v-data-table>
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
                        <v-tab-item
                            :value="'tab-3'"
                        >
                            <v-row>
                                <v-col cols="12">
                                    <v-data-table
                                        :headers="headers"
                                        :items="items"
                                        item-key="name"
                                        no-footer
                                    >
                                        <!-- eslint-disable  -->
                                        <template v-slot:item.boolean="{item}">
                                            <div class="d-flex mt-3">
                                                <img v-if="item.boolean" src="../assets/images/enterimg.svg"
                                                        alt="">
                                                <img v-if="!item.boolean" src="../assets/images/exitimg.svg"
                                                        alt="">
                                            </div>
                                        </template>
                                        <template v-slot:item.company="{item}">
                                            <div class="d-flex mt-3">
                                                <p class="ml-2 blue--text font-weight-bold"
                                                    style="color: #2782F6!important;">
                                                    {{ item.company }}</p>
                                            </div>
                                        </template>
                                        <template v-slot:item.price="{item}">
                                            <div class="d-flex mt-3">
                                                <p class=" text--black ">{{ item.price }} kg</p>
                                            </div>
                                        </template>

                                        <template v-slot:item.date="{item}">
                                            <div class="d-flex mt-3">
                                                <p class="ml-2 text--black font-weight-bold">{{ item.date }}</p>
                                            </div>
                                        </template>
                                    </v-data-table>
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
                        <v-tab-item
                            :value="'tab-4'"
                        >
                            <v-row>
                                <v-col cols="12">
                                    <v-data-table
                                        :headers="headers"
                                        :items="items"
                                        item-key="name"
                                        no-footer
                                    >
                                        <!-- eslint-disable  -->
                                        <template v-slot:item.boolean="{item}">
                                            <div class="d-flex mt-3">
                                                <img v-if="item.boolean" src="../assets/images/enterimg.svg"
                                                        alt="">
                                                <img v-if="!item.boolean" src="../assets/images/exitimg.svg"
                                                        alt="">
                                            </div>
                                        </template>
                                        <template v-slot:item.company="{item}">
                                            <div class="d-flex mt-3">
                                                <p class="ml-2 blue--text font-weight-bold"
                                                    style="color: #2782F6!important;">
                                                    {{ item.company }}</p>
                                            </div>
                                        </template>
                                        <template v-slot:item.price="{item}">
                                            <div class="d-flex mt-3">
                                                <p class=" text--black ">{{ item.price }} kg</p>
                                            </div>
                                        </template>

                                        <template v-slot:item.date="{item}">
                                            <div class="d-flex mt-3">
                                                <p class="ml-2 text--black font-weight-bold">{{ item.date }}</p>
                                            </div>
                                        </template>
                                    </v-data-table>
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
                        <v-tab-item
                            :value="'tab-5'"
                        >
                            <v-row>
                                <v-col cols="12">
                                    <v-data-table
                                        :headers="headers"
                                        :items="items"
                                        item-key="name"
                                        no-footer
                                    >
                                        <!-- eslint-disable  -->
                                        <template v-slot:item.boolean="{item}">
                                            <div class="d-flex mt-3">
                                                <img v-if="item.boolean" src="../assets/images/enterimg.svg"
                                                        alt="">
                                                <img v-if="!item.boolean" src="../assets/images/exitimg.svg"
                                                        alt="">
                                            </div>
                                        </template>
                                        <template v-slot:item.company="{item}">
                                            <div class="d-flex mt-3">
                                                <p class="ml-2 blue--text font-weight-bold"
                                                    style="color: #2782F6!important;">
                                                    {{ item.company }}</p>
                                            </div>
                                        </template>
                                        <template v-slot:item.price="{item}">
                                            <div class="d-flex mt-3">
                                                <p class=" text--black ">{{ item.price }} kg</p>
                                            </div>
                                        </template>

                                        <template v-slot:item.date="{item}">
                                            <div class="d-flex mt-3">
                                                <p class="ml-2 text--black font-weight-bold">{{ item.date }}</p>
                                            </div>
                                        </template>
                                    </v-data-table>
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

            </v-tab-item>
        </v-tabs-items>


    </div>
</template>

<script>
import modalExit from '../components/modals/ModalExit'
import modalPayment from '../components/modals/ModalPayment'
import {mapState, mapMutations} from "vuex";
export default {
    data() {
        return {
            page: 1,
            pageCount: 0,
            headers: [
                {text: 'Status', value: 'boolean'},
                {text: 'Qayerga / Qayerdan', value: 'company',},
                {text: 'Summasi', value: 'price'},
                {text: 'Sana', value: 'date'},
            ],
            headersDebts:[
                {text: 'Kimdan', value: 'company'},
                {text: 'Qarzdorlik', value: 'price',},
                {text: 'Berildi', value: 'price'},
                {text: 'Qoldi', value: 'price'},
                {text: 'Dastlabki sana', value: 'date'},
                {text: 'Pul bersih',value: 'giveMoney'},
            ],
            tab: 'tab-1',
            debtsTab: 'tab-1',
            items: [
                {boolean: true, company: 'NEON textile', price: '1,400,000 so‘m', date: '21.09.2021', name: 'color'},
                {
                    boolean: true,
                    company: '2-fabrikaga',
                    price: '4,850,00 so‘m',
                    date: '21.21.2021',
                    name: 'totalAmount'
                },
                {boolean: false, company: 'Ahmad aka', price: '3,750,000 so‘m', date: '18.09.2021', name: 'lastAmount'},
                {
                    boolean: true,
                    company: 'Mega tekstil',
                    price: '1,400,000 so‘m',
                    date: '61.69.2021',
                    lastDate: 'lastDate'
                },
                {boolean: false, company: '1-mato to’quvga', price: '4,850,00 so‘m', date: '21.89.2021'},
                {boolean: true, company: 'NEON textile', price: '1,400,000 so‘m', date: '21.09.2021', name: 'color'},
                {
                    boolean: true,
                    company: '2-fabrikaga',
                    price: '4,850,00 so‘m',
                    date: '21.21.2021',
                    name: 'totalAmount'
                },
                {boolean: false, company: 'Ahmad aka', price: '3,750,000 so‘m', date: '18.09.2021', name: 'lastAmount'},
                {
                    boolean: true,
                    company: 'Mega tekstil',
                    price: '1,400,000 so‘m',
                    date: '61.69.2021',
                    lastDate: 'lastDate'
                },
                {boolean: false, company: '1-mato to’quvga', price: '4,850,00 so‘m', date: '21.89.2021'},
            ]
        }
    },
    components: {
        modalExit,
        modalPayment
    },
    computed:{

    },
    methods:{
        ...mapMutations(
        {
            SET_ROUTE_URL: 'main/SET_ROUTE_URL',
        }),
    }
};
</script>

<style lang="scss">

</style>
