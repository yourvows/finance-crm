<template>
    <div class="ready-products" id="ready-products_id">
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
                    Mavjud mahsulotlar
                </v-tab>
            </v-tabs>
            <v-col cols="auto">
                <div class="d-flex align-center">
                    <v-btn dark elevation="0" class="mr-2" style="background: #2886FF;">
                        <img src="@/assets/icons/money-send.svg" 
                        alt="money-send" class="mr-2 img-width-20px"> 
                        Sotildi
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
                    <template v-slot:header.company="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.type="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.color="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.piece="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.piece_price="{ header }">
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
                    
                    <template v-slot:item.company="{item}">
                        <div class="d-flex">
                            <a>{{ item.company }}</a>
                        </div>
                    </template>

                    <template v-slot:item.type="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.type }}</span>
                        </div>
                    </template>

                    <template v-slot:item.color="{item}">
                        <div class="d-flex">
                            <div class="small_circle"></div>
                            <span class="text-black">{{ item.color }}</span>
                        </div>
                    </template>
                    
                    <template v-slot:item.piece="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.piece }}</span>
                        </div>
                    </template>

                    <template v-slot:item.piece_price="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.piece_price }}</span>
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
                    :headers="headers"
                    :items="items"
                    item-key="name"
                    no-footer
                >
                    <!-- eslint-disable  -->
                    <template v-slot:header.status="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.company="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.type="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.color="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.piece="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.piece_price="{ header }">
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
                    
                    <template v-slot:item.company="{item}">
                        <div class="d-flex">
                            <a>{{ item.company }}</a>
                        </div>
                    </template>
                   
                    <template v-slot:item.type="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.type }}</span>
                        </div>
                    </template>

                    <template v-slot:item.color="{item}">
                        <div class="d-flex">
                            <div class="small_circle"></div>
                            <span class="text-black">{{ item.color }}</span>
                        </div>
                    </template>
                    
                    <template v-slot:item.piece="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.piece }}</span>
                        </div>
                    </template>

                    <template v-slot:item.piece_price="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.piece_price }}</span>
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
                {text: 'Qayerdan / Qayerga', value: 'company'},
                {text: 'Turi', value: 'type'},
                {text: 'Rang', value: 'color'},
                {text: 'Dona', value: 'piece'},
                {text: 'Dona narxi', value: 'piece_price'},
                {text: 'Tikuv / bo`yash summasi', value: 'sum'},
                {text: 'Sana', value: 'date'},
            ],
            tab: '',

            items: [
                {status: true, company: 'NEON textile', type: 'Vilvit', color: 'Yashil',
                piece: '722 ta', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, company: 'NEON textile', type: 'Vilvit', color: 'Yashil',
                piece: '722 ta', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, company: 'NEON textile', type: 'Vilvit', color: 'Yashil',
                piece: '722 ta', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, company: 'NEON textile', type: 'Vilvit', color: 'Yashil',
                piece: '722 ta', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, company: 'NEON textile', type: 'Vilvit', color: 'Yashil',
                piece: '722 ta', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, company: 'NEON textile', type: 'Vilvit', color: 'Yashil',
                piece: '722 ta', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, company: 'NEON textile', type: 'Vilvit', color: 'Yashil',
                piece: '722 ta', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, company: 'NEON textile', type: 'Vilvit', color: 'Yashil',
                piece: '722 ta', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, company: 'NEON textile', type: 'Vilvit', color: 'Yashil',
                piece: '722 ta', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, company: 'NEON textile', type: 'Vilvit', color: 'Yashil',
                piece: '722 ta', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},
            ]
        }
    }
};
</script>

<style lang="scss">

</style>
