<template>
    <div class="outsource" id="outsource_mato">
        <div class="tabs">
            <v-tabs
                v-model="tab"
                color="black"
                class="tabs"
            >
                <v-tabs-slider color="tab-slider-color"></v-tabs-slider>

                <v-tab href="#tab-1">
                    Umumiy hisobot
                </v-tab>

                <v-tab href="#tab-2">
                    Buyurtmalarim
                </v-tab>

                <v-tab href="#tab-3">
                    To‘quvxona skladi
                </v-tab>
            </v-tabs>
            <v-col cols="auto">
                <div class="tab_buttons">
                    {{orderDialog}}
                    <v-btn dark elevation="0" @click="orderDialog = true" class="mr-2" style="background: #2886FF;">
                        <img src="@/assets/icons/receipt-add.svg"
                         alt="receipt-add" class="mr-2 img-width-20px"> 
                        Buyurtma berish 
                    </v-btn>
                    <v-btn dark elevation="0" class="mr-2" style="background: #379c7c;">
                        <img src="@/assets/icons/box-tick.svg"
                         alt="box-tick" class="mr-2 img-width-20px"> 
                        Mahsulot bichildi
                    </v-btn>
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
                            <img v-if="item.status" src="@/assets/images/Ip_berildi.png" alt="">
                            <img v-if="!item.status" src="@/assets/images/Yoqa_olindi.png" alt="">
                        </div>
                    </template>

                    <template v-slot:item.direction="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.direction }}</span>
                        </div>
                    </template>

                    <template v-slot:item.mass="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.mass }}</span>
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
                            <span class="text-black">{{ item.date }}</span>
                        </div>
                    </template>

                </v-data-table>
            </v-tab-item>
            <v-tab-item value="tab-2">
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
                    <template v-slot:header.type="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.title="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.order="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.left="{ header }">
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
                    

                    

                    <template v-slot:item.code="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.code }}</span>
                        </div>
                    </template>

                    <template v-slot:item.type="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.type }}</span>
                        </div>
                    </template>
                    
                    <template v-slot:item.title="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.title }}</span>
                        </div>
                    </template>

                    <template v-slot:item.order="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.order }}</span>
                        </div>
                    </template>

                    <template v-slot:item.left="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.left }}</span>
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
                            <span class="text-black">{{ item.date }}</span>
                        </div>
                    </template>
                    
                </v-data-table>
            </v-tab-item>
            <v-tab-item value="tab-3">
                <v-data-table
                    :headers="headers3"
                    :items="items3"
                    item-key="name"
                    no-footer
                >
                    <!-- eslint-disable  -->
                    <template v-slot:header.ip_code="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.ip_title="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.ip_mass="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.ip_return="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>




                   
                    <template v-slot:item.ip_code="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.ip_code }}</span>
                        </div>
                    </template>
                   
                    <template v-slot:item.ip_title="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.ip_title }}</span>
                        </div>
                    </template>

                    <template v-slot:item.ip_mass="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.ip_mass }}</span>
                        </div>
                    </template>
                    
                    <template v-slot:item.ip_return="{item}">
                        <div class="d-flex align-center">
                            <img class="text-blue img-width-20px mr-1" style="margin-bottom: 5px;"
                             src="@/assets/icons/export2.svg" alt="export">
                            <span class="text-blue">{{ item.ip_return }}</span>
                        </div>
                    </template>

                    
                </v-data-table>
            </v-tab-item>
        </v-tabs-items>
        

        <OrderModal :orderDialog="orderDialog"></OrderModal>
    </div>
</template>

<script>
import OrderModal from '@/components/modals/Outsource/Order.vue'
export default {
    components: {
        OrderModal
    },
    data() {
        return {
            orderDialog: false,
            headers: [
                {text: 'Status', value: 'status'},
                {text: 'Berildi / Olindi', value: 'direction'},
                {text: 'Massa', value: 'mass'},
                {text: 'KG narxi', value: 'kg_price'},
                {text: 'Summasi', value: 'sum'},
                {text: 'Sana', value: 'date'},
            ],
            headers2: [
                {text: 'Kodi', value: 'code'},
                {text: 'Turi', value: 'type'},
                {text: 'Nomi', value: 'title'},
                {text: 'Buyurtma', value: 'order'},
                {text: 'Qoldi', value: 'left'},
                {text: 'KG narxi', value: 'kg_price'},
                {text: 'Summasi', value: 'sum'},
                {text: 'Sana', value: 'date'},
            ],
            headers3: [
                {text: 'Berilgan ip kodi', value: 'ip_code'},
                {text: 'Berilgan ip nomi', value: 'ip_title'},
                {text: 'Ip massasi', value: 'ip_mass'},
                {text: 'Ipni qaytarish', value: 'ip_return'},
            ],
            tab: '',

            items: [
                {status: true, direction: 'Qizil - #458796', mass: '1,144 kg',
                 kg_price: '11,000 so‘m', sum: '1,290,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Qizil - #458796', mass: '1,144 kg',
                 kg_price: '11,000 so‘m', sum: '1,290,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Qizil - #458796', mass: '1,144 kg',
                 kg_price: '11,000 so‘m', sum: '1,290,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Qizil - #458796', mass: '1,144 kg',
                 kg_price: '11,000 so‘m', sum: '1,290,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Qizil - #458796', mass: '1,144 kg',
                 kg_price: '11,000 so‘m', sum: '1,290,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Qizil - #458796', mass: '1,144 kg',
                 kg_price: '11,000 so‘m', sum: '1,290,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Qizil - #458796', mass: '1,144 kg',
                 kg_price: '11,000 so‘m', sum: '1,290,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Qizil - #458796', mass: '1,144 kg',
                 kg_price: '11,000 so‘m', sum: '1,290,000 so‘m', date: '21.09.2021'},

                {status: true, direction: 'Qizil - #458796', mass: '1,144 kg',
                 kg_price: '11,000 so‘m', sum: '1,290,000 so‘m', date: '21.09.2021'},
            ],
            items2: [
                {code: '#512412', type: 'Yoqa', title: 'Vilvit', order: '1,400 kg', left: '400 kg',
                kg_price: '49,000 so‘m', sum: '8,165,000 so‘m', date: '21.09.2021'},
                {code: '#512412', type: 'Yoqa', title: 'Vilvit', order: '1,400 kg', left: '400 kg',
                kg_price: '49,000 so‘m', sum: '8,165,000 so‘m', date: '21.09.2021'},
                {code: '#512412', type: 'Yoqa', title: 'Vilvit', order: '1,400 kg', left: '400 kg',
                kg_price: '49,000 so‘m', sum: '8,165,000 so‘m', date: '21.09.2021'},
                {code: '#512412', type: 'Yoqa', title: 'Vilvit', order: '1,400 kg', left: '400 kg',
                kg_price: '49,000 so‘m', sum: '8,165,000 so‘m', date: '21.09.2021'},
                {code: '#512412', type: 'Yoqa', title: 'Vilvit', order: '1,400 kg', left: '400 kg',
                kg_price: '49,000 so‘m', sum: '8,165,000 so‘m', date: '21.09.2021'},
                {code: '#512412', type: 'Yoqa', title: 'Vilvit', order: '1,400 kg', left: '400 kg',
                kg_price: '49,000 so‘m', sum: '8,165,000 so‘m', date: '21.09.2021'},
                {code: '#512412', type: 'Yoqa', title: 'Vilvit', order: '1,400 kg', left: '400 kg',
                kg_price: '49,000 so‘m', sum: '8,165,000 so‘m', date: '21.09.2021'},
                {code: '#512412', type: 'Yoqa', title: 'Vilvit', order: '1,400 kg', left: '400 kg',
                kg_price: '49,000 so‘m', sum: '8,165,000 so‘m', date: '21.09.2021'},
                {code: '#512412', type: 'Yoqa', title: 'Vilvit', order: '1,400 kg', left: '400 kg',
                kg_price: '49,000 so‘m', sum: '8,165,000 so‘m', date: '21.09.2021'},
            ],
            items3: [
                {ip_code: '#512412', ip_title: 'Qizil', ip_mass: '1,400 kg', ip_return: 'O‘tkazish'},
                {ip_code: '#512412', ip_title: 'Qizil', ip_mass: '1,400 kg', ip_return: 'O‘tkazish'},
                {ip_code: '#512412', ip_title: 'Qizil', ip_mass: '1,400 kg', ip_return: 'O‘tkazish'},
                {ip_code: '#512412', ip_title: 'Qizil', ip_mass: '1,400 kg', ip_return: 'O‘tkazish'},
                {ip_code: '#512412', ip_title: 'Qizil', ip_mass: '1,400 kg', ip_return: 'O‘tkazish'},
                {ip_code: '#512412', ip_title: 'Qizil', ip_mass: '1,400 kg', ip_return: 'O‘tkazish'},
                {ip_code: '#512412', ip_title: 'Qizil', ip_mass: '1,400 kg', ip_return: 'O‘tkazish'},
                {ip_code: '#512412', ip_title: 'Qizil', ip_mass: '1,400 kg', ip_return: 'O‘tkazish'},
                {ip_code: '#512412', ip_title: 'Qizil', ip_mass: '1,400 kg', ip_return: 'O‘tkazish'},
                {ip_code: '#512412', ip_title: 'Qizil', ip_mass: '1,400 kg', ip_return: 'O‘tkazish'},
                {ip_code: '#512412', ip_title: 'Qizil', ip_mass: '1,400 kg', ip_return: 'O‘tkazish'},
                {ip_code: '#512412', ip_title: 'Qizil', ip_mass: '1,400 kg', ip_return: 'O‘tkazish'},
            ]
        }
    }
};
</script>

<style lang="scss">

</style>
