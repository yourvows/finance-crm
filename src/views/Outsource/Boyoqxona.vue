<template>
    <div class="outsource" id="outsource_boyoqxona">
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
                    Hozirgi jarayon
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
                    <template v-slot:header.batch="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.given="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.code="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.title="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.mass="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.ordered_color="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.ordered_mass_sum="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.ordered_sum="{ header }">
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

                    <template v-slot:item.batch="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.batch }}</span>
                        </div>
                    </template>

                    <template v-slot:item.given="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.given }}</span>
                        </div>
                    </template>

                    <template v-slot:item.code="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.code }}</span>
                        </div>
                    </template>

                    <template v-slot:item.title="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.title }}</span>
                        </div>
                    </template>

                    <template v-slot:item.mass="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.mass }}</span>
                        </div>
                    </template>

                    <template v-slot:item.ordered_color="{item}">
                        <div class="d-flex">
                            <div class="small_circle"></div>
                            <span class="text-black">{{ item.ordered_color }}</span>
                        </div>
                    </template>

                    <template v-slot:item.ordered_mass_sum="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.ordered_mass_sum }}</span>
                        </div>
                    </template>

                    <template v-slot:item.ordered_sum="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.ordered_sum }}</span>
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
                    <template v-slot:header.batch="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.given="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.code="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                     <template v-slot:header.title="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.mass="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.ordered_color="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.ordered_date="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.took_product="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>


                    

                    <template v-slot:item.batch="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.batch }}</span>
                        </div>
                    </template>

                    <template v-slot:item.given="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.given }}</span>
                        </div>
                    </template>

                    <template v-slot:item.code="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.code }}</span>
                        </div>
                    </template>

                    <template v-slot:item.title="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.title }}</span>
                        </div>
                    </template>

                    <template v-slot:item.mass="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.mass }}</span>
                        </div>
                    </template>

                    <template v-slot:item.ordered_color="{item}">
                        <div class="d-flex">
                            <div class="small_circle"></div>
                            <span class="text-black">{{ item.ordered_color }}</span>
                        </div>
                    </template>

                    <template v-slot:item.ordered_date="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.ordered_date }}</span>
                        </div>
                    </template>

                    <template v-slot:item.took_product="{item}">
                        <div class="d-flex">
                            <img src="@/assets/icons/box-tick.svg" alt="box-tick">
                            <span class="text-green">{{ item.took_product }}</span>
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
                {text: 'Partiya', value: 'batch'},
                {text: 'Berildi', value: 'given'},
                {text: 'Kodi', value: 'code'},
                {text: 'Nomi', value: 'title'},
                {text: 'Massa', value: 'mass'},
                {text: 'Buyurtma rang', value: 'ordered_color'},
                {text: 'Buyurtma KG summa', value: 'ordered_mass_sum'},
                {text: 'Buyurtma summa', value: 'ordered_sum'},
                {text: 'Sana', value: 'date'},
            ],
            headers2: [
                {text: 'Partiya', value: 'batch'},
                {text: 'Berildi', value: 'given'},
                {text: 'Mahsulot kodi', value: 'code'},
                {text: 'Nomi', value: 'title'},
                {text: 'Massa', value: 'mass'},
                {text: 'Buyurtma rang', value: 'ordered_color'},
                {text: 'Buyurtma sana', value: 'ordered_date'},
                {text: 'Olingan mahsulot', value: 'took_product'},
            ],
            tab: '',
            items: [
                {status: true, batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali',
                mass: 'mass', ordered_color: '858D90', ordered_mass_sum: '40,000 so‘m',
                ordered_sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali',
                mass: 'mass', ordered_color: '858D90', ordered_mass_sum: '40,000 so‘m',
                ordered_sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali',
                mass: 'mass', ordered_color: '858D90', ordered_mass_sum: '40,000 so‘m',
                ordered_sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali',
                mass: 'mass', ordered_color: '858D90', ordered_mass_sum: '40,000 so‘m',
                ordered_sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali',
                mass: 'mass', ordered_color: '858D90', ordered_mass_sum: '40,000 so‘m',
                ordered_sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali',
                mass: 'mass', ordered_color: '858D90', ordered_mass_sum: '40,000 so‘m',
                ordered_sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali',
                mass: 'mass', ordered_color: '858D90', ordered_mass_sum: '40,000 so‘m',
                ordered_sum: '1,400,000 so‘m', date: '21.09.2021'},

                {status: true, batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali',
                mass: 'mass', ordered_color: '858D90', ordered_mass_sum: '40,000 so‘m',
                ordered_sum: '1,400,000 so‘m', date: '21.09.2021'},

            ],
            items2: [
                {batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali', mass: 'mass',
                 ordered_color: '858D90', ordered_date: '21.09.2021', took_product: 'Mahsulot olindi'},
                {batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali', mass: 'mass',
                 ordered_color: '858D90', ordered_date: '21.09.2021', took_product: 'Mahsulot olindi'},
                {batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali', mass: 'mass',
                 ordered_color: '858D90', ordered_date: '21.09.2021', took_product: 'Mahsulot olindi'},
                {batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali', mass: 'mass',
                 ordered_color: '858D90', ordered_date: '21.09.2021', took_product: 'Mahsulot olindi'},
                {batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali', mass: 'mass',
                 ordered_color: '858D90', ordered_date: '21.09.2021', took_product: 'Mahsulot olindi'},
                {batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali', mass: 'mass',
                 ordered_color: '858D90', ordered_date: '21.09.2021', took_product: 'Mahsulot olindi'},
                {batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali', mass: 'mass',
                 ordered_color: '858D90', ordered_date: '21.09.2021', took_product: 'Mahsulot olindi'},
                {batch: '#1232', given: 'Yoqa', code: '#512412', title: 'Paxtali', mass: 'mass',
                 ordered_color: '858D90', ordered_date: '21.09.2021', took_product: 'Mahsulot olindi'},
            ]
        }
    }
};
</script>

<style lang="scss">

</style>
