<template>
    <div class="supply" id="supply_aksessuar">
        <div class="tabs">
            <v-tabs
                v-model="tab"
                color="black"
            >
                <v-tabs-slider color="tab-slider-color"></v-tabs-slider>

                <v-tab href="#tab-1">
                    Kirim-chiqim
                </v-tab>

                <v-tab href="#tab-2">
                    Mavjud aksessuarlar
                </v-tab>
            </v-tabs>
            <v-col cols="auto">
                <div class="d-flex align-center">
                    <v-btn elevation="0">
                        <img src="@/assets/images/filter.svg" alt="filter">
                    </v-btn>
                </div>
            </v-col>
        </div>
        <v-divider></v-divider> 
        <v-tabs-items v-model="tab" class="tab-items">
            <v-tab-item value="tab-1">
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
                    <template v-slot:header.type="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.code="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.amount="{ header }">
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
                            <img v-if="item.status" src="@/assets/images/enterimg.svg" alt="">
                            <img v-if="!item.status" src="@/assets/images/exitimg.svg" alt="">
                        </div>
                    </template>

                    <template v-slot:item.direction="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.direction }}</span>
                        </div>
                    </template>

                    <template v-slot:item.type="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.type }}</span>
                        </div>
                    </template>

                    <template v-slot:item.code="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.code }}</span>
                        </div>
                    </template>

                    <template v-slot:item.amount="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.amount }}</span>
                        </div>
                    </template>

                    <template v-slot:item.sum="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.sum }}</span>
                        </div>
                    </template>

                    <template v-slot:item.date="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.date }}</span>
                        </div>
                    </template>
                    
                </v-data-table>
            </v-tab-item>

            <v-tab-item value="tab-2">
                <v-row>
                    <v-col>
                        <v-data-table
                            :headers="headers2"
                            :items="items2"
                            item-key="name"
                            no-footer
                        >
                            <!-- eslint-disable  -->
                            <template v-slot:header.type="{ header }">
                                <span class="table-header">{{ header.text}}</span>
                            </template>
                            <template v-slot:header.code="{ header }">
                                <span class="table-header">{{ header.text}}</span>
                            </template>
                            <template v-slot:header.amount="{ header }">
                                <span class="table-header">{{ header.text}}</span>
                            </template>



                            <template v-slot:item.type="{item}">
                                <div class="d-flex">
                                    <span class="text-black">{{ item.type }}</span>
                                </div>
                            </template>

                            <template v-slot:item.code="{item}">
                                <div class="d-flex">
                                    <span class="text-black">{{ item.code }}</span>
                                </div>
                            </template>

                            <template v-slot:item.amount="{item}">
                                <div class="d-flex">
                                    <span class="text-black">{{ item.amount }}</span>
                                </div>
                            </template>
                            
                        </v-data-table>
                    </v-col>
                    <div style="border-right: 1px solid #ececec"></div>
                    <v-col>
                        <v-data-table
                            :headers="headers2"
                            :items="items2"
                            item-key="name"
                            no-footer
                        >
                            <!-- eslint-disable  -->
                            <template v-slot:header.type="{ header }">
                                <span class="table-header">{{ header.text}}</span>
                            </template>
                            <template v-slot:header.code="{ header }">
                                <span class="table-header">{{ header.text}}</span>
                            </template>
                            <template v-slot:header.amount="{ header }">
                                <span class="table-header">{{ header.text}}</span>
                            </template>



                            <template v-slot:item.type="{item}">
                                <div class="d-flex">
                                    <span class="text-black">{{ item.type }}</span>
                                </div>
                            </template>

                            <template v-slot:item.code="{item}">
                                <div class="d-flex">
                                    <span class="text-black">{{ item.code }}</span>
                                </div>
                            </template>

                            <template v-slot:item.amount="{item}">
                                <div class="d-flex">
                                    <span class="text-black">{{ item.amount }}</span>
                                </div>
                            </template>

                        </v-data-table>
                    </v-col>
                </v-row>
            </v-tab-item>
        </v-tabs-items>
        
    </div>
</template>

<script>

export default {
    components: {},
    data() {
        return {
            headers: [
                {text: 'Status', value: 'status'},
                {text: 'Qayerdan / Qayerga', value: 'direction'},
                {text: 'Turi', value: 'type'},
                {text: 'Kodi', value: 'code'},
                {text: 'Adadi', value: 'amount'},
                {text: 'Summa', value: 'sum'},
                {text: 'Sana', value: 'date'},
            ],
            headers2: [
                {text: 'Turi', value: 'type'},
                {text: 'Kod', value: 'code'},
                {text: 'Adadi', value: 'amount'},
            ],
            tab: '',
            items: [
                {status: true, direction: 'Xitoydan', type: 'Paxtali', code: '#419489', amount: '1,500 ta', sum: '3,750,000 so‘m', date: '21.09.2021'},
                {status: true, direction: 'Xitoydan', type: 'Paxtali', code: '#419489', amount: '1,500 ta', sum: '3,750,000 so‘m', date: '21.09.2021'},
                {status: false, direction: 'Xitoydan',  type: '-', code: '#419489', amount: '1,500 ta', sum: '3,750,000 so‘m', date: '21.09.2021'},
                {status: true, direction: 'Xitoydan', type: '-', code: '#419489', amount: '1,500 ta', sum: '3,750,000 so‘m', date: '21.09.2021'},
                {status: false, direction: 'Xitoydan', type: '-', code: '#419489', amount: '1,500 ta', sum: '3,750,000 so‘m', date: '21.09.2021'},
                {status: true, direction: 'Xitoydan', type: 'Paxtali', code: '#419489', amount: '1,500 ta', sum: '3,750,000 so‘m', date: '21.09.2021'},
                {status: false, direction: 'Xitoydan', type: '-', code: '#419489', amount: '1,500 ta', sum: '3,750,000 so‘m', date: '21.09.2021'},
                {status: true, direction: 'Xitoydan', type: 'Paxtali', code: '#419489', amount: '1,500 ta', sum: '3,750,000 so‘m', date: '21.09.2021'},
                {status: false, direction: 'Xitoydan', type: '-', code: '#419489', amount: '1,500 ta', sum: '3,750,000 so‘m', date: '21.09.2021'},
                {status: true, direction: 'Xitoydan', type: 'Paxtali', code: '#419489', amount: '1,500 ta', sum: '3,750,000 so‘m', date: '21.09.2021'},
            ],
            items2: [
                {code: '#512412', amount: '280 kg', type: 'Manjet', date: '21.09.2021'},
                {code: '#512412', amount: '280 kg', type: 'Manjet', date: '21.09.2021'},
                {code: '#512412', amount: '280 kg', type: 'Manjet', date: '21.09.2021'},
                {code: '#512412', amount: '280 kg', type: 'Manjet', date: '21.09.2021'},
                {code: '#512412', amount: '280 kg', type: 'Manjet', date: '21.09.2021'},
                {code: '#512412', amount: '280 kg', type: 'Manjet', date: '21.09.2021'},
                {code: '#512412', amount: '280 kg', type: 'Manjet', date: '21.09.2021'},
                {code: '#512412', amount: '280 kg', type: 'Manjet', date: '21.09.2021'},
                {code: '#512412', amount: '280 kg', type: 'Manjet', date: '21.09.2021'},
                {code: '#512412', amount: '280 kg', type: 'Manjet', date: '21.09.2021'},
            ]
        }
    }
};
</script>

<style lang="scss">

</style>
