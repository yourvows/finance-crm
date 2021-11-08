<template>
    <div class="supply" id="supply_bichuv">
        <div class="tabs">
            <v-tabs
                v-model="tab"
                color="black"
            >
                <v-tabs-slider color="tab-slider-color"></v-tabs-slider>

                 <v-tab href="#tab-1">
                    Buyurtma tarixi
                </v-tab>

                <v-tab href="#tab-2">
                    Bichuv tarixi
                </v-tab>

                <v-tab href="#tab-3">
                    Bichilgan mahsulot omborxonasi
                </v-tab>
            </v-tabs>
            <v-col cols="auto">
                <div class="tab_buttons d-flex">
                    <readyProductBichildi></readyProductBichildi>
                    <readyProduct></readyProduct>
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
                    <template v-slot:header.company="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.title="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.code="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.amount="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.resource="{ header }">
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



                    <template v-slot:item.company="{item}">
                        <div class="d-flex">
                            <span>{{ item.company }}</span>
                        </div>
                    </template>

                    <template v-slot:item.title="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.title }}</span>
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

                    <template v-slot:item.resource="{item}">
                        <div class="d-flex">
                            <img src="@/assets/icons/eye.svg" alt="eye" class="eye_svg">
                            <a>{{ item.resource }}</a>
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
                    :headers="headers2"
                    :items="items2"
                    item-key="name"
                    no-footer
                >
                    <!-- eslint-disable  -->
                    <template v-slot:header.num="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.product="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.code="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.spent_kg="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.took_amount="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.cut_mass="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.evaporation="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.ratio="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.sum="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.date="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>



                    <template v-slot:item.num="{item}">
                        <div class="d-flex">
                            <span>{{ item.num }}</span>
                        </div>
                    </template>

                    <template v-slot:item.product="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.product }}</span>
                        </div>
                    </template>

                    <template v-slot:item.code="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.code }}</span>
                        </div>
                    </template>

                    <template v-slot:item.spent_kg="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.spent_kg }}</span>
                        </div>
                    </template>

                    <template v-slot:item.took_amount="{item}">
                        <div class="d-flex">
                            <span>{{ item.took_amount }}</span>
                        </div>
                    </template>

                    <template v-slot:item.cut_mass="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.cut_mass }}</span>
                        </div>
                    </template>

                    <template v-slot:item.evaporation="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.evaporation }}</span>
                        </div>
                    </template>

                    <template v-slot:item.ratio="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.ratio }}</span>
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
                    <template v-slot:header.product="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.title="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.code="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.amount="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.date="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>



                    <template v-slot:item.product="{item}">
                        <div class="d-flex">
                            <span>{{ item.product }}</span>
                        </div>
                    </template>

                    <template v-slot:item.title="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.title }}</span>
                        </div>
                    </template>

                    <template v-slot:item.code="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.code }}</span>
                        </div>
                    </template>

                    <template v-slot:item.amount="{item}">
                        <div class="d-flex">
                            <span>{{ item.amount }}</span>
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
import readyProduct from '../../components/modals/ModalOrderProduct'
import readyProductBichildi from '../../components/modals/ModalReadyProduct'

export default {
    components: {readyProduct,readyProductBichildi},
    data() {
        return {
            headers: [
                {text: 'Kimga', value: 'company'},
                {text: 'Buyurtma nomi', value: 'title'},
                {text: 'Mahsulot kodi', value: 'code'},
                {text: 'Adadi', value: 'amount'},
                {text: 'Berilgan resurs', value: 'resource'},
                {text: 'Dona narxi', value: 'piece_price'},
                {text: 'Summa', value: 'sum'},
                {text: 'Sana', value: 'date'},
            ],
            headers2: [
                {text: '№', value: 'num'},
                {text: 'Mahsulot', value: 'product'},
                {text: 'Kodi', value: 'code'},
                {text: 'Ishlatilgan kg', value: 'spent_kg'},
                {text: 'Olingan dona', value: 'took_amount'},
                {text: 'Bichuv massasi', value: 'cut_mass'},
                {text: 'Isporeniya', value: 'evaporation'},
                {text: 'Nisbat', value: 'ratio'},
                {text: 'Summa', value: 'sum'},
                {text: 'Sana', value: 'date'},
            ],
            headers3: [
                {text: 'Mahsulot', value: 'product'},
                {text: 'Nomi', value: 'title'},
                {text: 'Kodi', value: 'code'},
                {text: 'Adadi', value: 'amount'},
                {text: 'Oxirgi kelgan sana', value: 'date'},
            ],
            tab: '',

            items: [
                {company: '3-fabrikaga', title: 'Polo wear',code: '#512412', amount: '5,000 ta',
                resource: 'ko`rish', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {company: '3-fabrikaga', title: 'Polo wear',code: '#512412', amount: '5,000 ta',
                resource: 'ko`rish', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {company: '3-fabrikaga', title: 'Polo wear',code: '#512412', amount: '5,000 ta',
                resource: 'ko`rish', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {company: '3-fabrikaga', title: 'Polo wear',code: '#512412', amount: '5,000 ta',
                resource: 'ko`rish', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {company: '3-fabrikaga', title: 'Polo wear',code: '#512412', amount: '5,000 ta',
                resource: 'ko`rish', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {company: '3-fabrikaga', title: 'Polo wear',code: '#512412', amount: '5,000 ta',
                resource: 'ko`rish', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {company: '3-fabrikaga', title: 'Polo wear',code: '#512412', amount: '5,000 ta',
                resource: 'ko`rish', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {company: '3-fabrikaga', title: 'Polo wear',code: '#512412', amount: '5,000 ta',
                resource: 'ko`rish', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {company: '3-fabrikaga', title: 'Polo wear',code: '#512412', amount: '5,000 ta',
                resource: 'ko`rish', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {company: '3-fabrikaga', title: 'Polo wear',code: '#512412', amount: '5,000 ta',
                resource: 'ko`rish', piece_price: '180,000 so`m', sum: '1,400,000 so‘m', date: '21.09.2021'},
            ],

            items2: [
                {num: '001', product: 'Mato', code: '#512412', spent_kg: '5,400 kg', took_amount: '6,500 ta',
                cut_mass: '5,250 kg', evaporation: '150 kg (5%)', ratio: '0.7', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {num: '001', product: 'Mato', code: '#512412', spent_kg: '5,400 kg', took_amount: '6,500 ta',
                cut_mass: '5,250 kg', evaporation: '150 kg (5%)', ratio: '0.7', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {num: '001', product: 'Mato', code: '#512412', spent_kg: '5,400 kg', took_amount: '6,500 ta',
                cut_mass: '5,250 kg', evaporation: '150 kg (5%)', ratio: '0.7', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {num: '001', product: 'Mato', code: '#512412', spent_kg: '5,400 kg', took_amount: '6,500 ta',
                cut_mass: '5,250 kg', evaporation: '150 kg (5%)', ratio: '0.7', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {num: '001', product: 'Mato', code: '#512412', spent_kg: '5,400 kg', took_amount: '6,500 ta',
                cut_mass: '5,250 kg', evaporation: '150 kg (5%)', ratio: '0.7', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {num: '001', product: 'Mato', code: '#512412', spent_kg: '5,400 kg', took_amount: '6,500 ta',
                cut_mass: '5,250 kg', evaporation: '150 kg (5%)', ratio: '0.7', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {num: '001', product: 'Mato', code: '#512412', spent_kg: '5,400 kg', took_amount: '6,500 ta',
                cut_mass: '5,250 kg', evaporation: '150 kg (5%)', ratio: '0.7', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {num: '001', product: 'Mato', code: '#512412', spent_kg: '5,400 kg', took_amount: '6,500 ta',
                cut_mass: '5,250 kg', evaporation: '150 kg (5%)', ratio: '0.7', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {num: '001', product: 'Mato', code: '#512412', spent_kg: '5,400 kg', took_amount: '6,500 ta',
                cut_mass: '5,250 kg', evaporation: '150 kg (5%)', ratio: '0.7', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {num: '001', product: 'Mato', code: '#512412', spent_kg: '5,400 kg', took_amount: '6,500 ta',
                cut_mass: '5,250 kg', evaporation: '150 kg (5%)', ratio: '0.7', sum: '1,400,000 so‘m', date: '21.09.2021'},
            ],
            items3: [
                {product: 'Mato', title: 'Jinsoviy', code: '#512412', amount: '6,500 ta', date: '21.09.2021'},
                {product: 'Mato', title: 'Jinsoviy', code: '#512412', amount: '6,500 ta', date: '21.09.2021'},
                {product: 'Mato', title: 'Jinsoviy', code: '#512412', amount: '6,500 ta', date: '21.09.2021'},
                {product: 'Mato', title: 'Jinsoviy', code: '#512412', amount: '6,500 ta', date: '21.09.2021'},
                {product: 'Mato', title: 'Jinsoviy', code: '#512412', amount: '6,500 ta', date: '21.09.2021'},
                {product: 'Mato', title: 'Jinsoviy', code: '#512412', amount: '6,500 ta', date: '21.09.2021'},
                {product: 'Mato', title: 'Jinsoviy', code: '#512412', amount: '6,500 ta', date: '21.09.2021'},
                {product: 'Mato', title: 'Jinsoviy', code: '#512412', amount: '6,500 ta', date: '21.09.2021'},
                {product: 'Mato', title: 'Jinsoviy', code: '#512412', amount: '6,500 ta', date: '21.09.2021'},
                {product: 'Mato', title: 'Jinsoviy', code: '#512412', amount: '6,500 ta', date: '21.09.2021'},
                {product: 'Mato', title: 'Jinsoviy', code: '#512412', amount: '6,500 ta', date: '21.09.2021'},
            ]
        }
    }
};
</script>

<style lang="scss">

</style>
