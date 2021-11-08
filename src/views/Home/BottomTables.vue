<template>
    <div class="bottom_tables">
        <v-row>
            <v-col  md="6" lg="6" sm="12">
                <div class="first_table">
                    <div class="filter">
                        <span class="t-title">Omborxonadagi rekvizitlar</span>
                        <v-select
                            :items="items"
                            label="Iplar"
                            dense
                            class="t-select"
                            outlined
                        ></v-select>
                    </div>
                    <v-card class="t-card" elevation="0">
                        <v-data-table
                            :headers="headers"
                            :items="items"
                            item-key="name"
                            no-footer
                        >
                            <!-- eslint-disable  -->
                            <template v-slot:item.color="{item}">
                                <div class="d-flex mt-3">
                                    <div class="circle" :class="[item.color]"></div>
                                    <span class="ml-2">{{ item.color }}</span>
                                </div>
                            </template>
                            <template v-slot:item.amount="{item}">
                                <div class="d-flex mt-3">
                                    <span class="ml-2 text--black ">{{ item.amount }} kg</span>
                                </div>
                            </template>
                            <template v-slot:item.lastAmount="{item}">
                                <div class="d-flex mt-3">
                                    <span class="ml-2 text-muted ">{{ item.lastAmount }} kg</span>
                                </div>
                            </template>

                            <template v-slot:item.date="{item}">
                                <div class="d-flex mt-3">
                                    <span class="ml-2 text--black ">{{ item.date }} kg</span>
                                </div>
                            </template>
                        </v-data-table>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="12" md="6" lg="6" sm="12">
                <div class="second_table">
                    <div class="filter">
                        <span class="t-title">Omborxonadagi mahsulotlar</span>
                        <v-select
                            :items="items"
                            label="Qishqi"
                            dense
                            class="t-select"
                            outlined
                        ></v-select>
                    </div>
                    <v-card class="t-card" elevation="0">

                        <v-data-table
                            :headers="headers"
                            :items="items2"
                            item-key="name"
                        >
                            <template v-slot:item.color="{item}">
                                <div class="d-flex mt-3">
                                    <div class="circle" :class="[item.color]"></div>
                                    <span class="ml-2">{{ item.color }}</span>
                                </div>
                            </template>
                            <template v-slot:item.amount="{item}">
                                <div class="d-flex mt-3">
                                    <span class="ml-2 text--black ">{{ item.amount }} kg</span>
                                </div>
                            </template>
                            <template v-slot:item.lastAmount="{item}">
                                <div class="d-flex mt-3">
                                    <span class="ml-2 text-muted ">{{ item.lastAmount }} kg</span>
                                </div>
                            </template>

                            <template v-slot:item.date="{item}">
                                <div class="d-flex mt-3">
                                    <span class="ml-2 text--black ">{{ item.date }} kg</span>
                                </div>
                            </template>
                        </v-data-table>
                    </v-card>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            headers: [
                {text: 'Rang', value: 'color'},
                {text: 'Umumiy massa (kg)', value: 'amount',},
                {text: 'Oxirgi kelgan massa', value: 'lastAmount'},
                {text: 'Oxirgi kelgan sana', value: 'date'},
            ],
            items: [
                {color: 'red', amount: '280', lastAmount: '12', date: '21.09.2021', name: 'color'},
                {color: 'green', amount: '1,144', lastAmount: '24', date: '21.21.2021', name: 'totalAmount'},
                {color: 'blue', amount: '786', lastAmount: '44', date: '18.09.2021', name: 'lastAmount'},
                {color: 'yellow', amount: '320', lastAmount: '22', date: '61.69.2021', lastDate: 'lastDate'},
                {color: 'purple', amount: '832', lastAmount: '19', date: '21.89.2021'},
            ],
            items2: [
                {color: 'red', amount: '280', lastAmount: '132', date: '21.09.2021', name: 'colora'},
                {color: 'green', amount: '1,144', lastAmount: '243', date: '21.21.2021', name: 'totalAmounta'},
                {color: 'blue', amount: '786', lastAmount: '434', date: '18.09.2021', name: 'lastAmounta'},
                {color: 'yellow', amount: '320', lastAmount: '23', date: '61.69.2021', lastDate: 'lastDatea'},
                {color: 'purple', amount: '832', lastAmount: '193', date: '21.89.2021'},
            ],
        }
    },
    mounted() {

    },
    computed: {

    },
    methods: {

    },
}
</script>

<style>

</style>
