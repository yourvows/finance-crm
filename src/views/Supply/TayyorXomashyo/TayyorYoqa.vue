<template>
    <div class="supply" id="supply_mato">
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
                    Mavjud tayyor yoqa
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
                    <template v-slot:header.code="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.title="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.mass="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.color="{ header }">
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

                    <template v-slot:item.color="{item}">
                        <div class="d-flex">
                            <div class="small_circle"></div>
                            <span class="text-black">{{ item.color }}</span>
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
                            <template v-slot:header.code="{ header }">
                                <span class="table-header">{{ header.text}}</span>
                            </template>
                            <template v-slot:header.title="{ header }">
                                <span class="table-header">{{ header.text}}</span>
                            </template>
                            <template v-slot:header.color="{ header }">
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
                                    <span class="text-black">{{ item.title }}</span>
                                </div>
                            </template>

                            <template v-slot:item.color="{item}">
                                <div class="d-flex">
                                    <div class="small_circle"></div>
                                    <span class="text-black">{{ item.color }}</span>
                                </div>
                            </template>

                            <template v-slot:item.mass="{item}">
                                <div class="d-flex">
                                    <span class="text-black">{{ item.mass }}</span>
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
                            <template v-slot:header.code="{ header }">
                                <span class="table-header">{{ header.text}}</span>
                            </template>
                            <template v-slot:header.title="{ header }">
                                <span class="table-header">{{ header.text}}</span>
                            </template>
                            <template v-slot:header.color="{ header }">
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
                                    <span class="text-black">{{ item.title }}</span>
                                </div>
                            </template>

                            <template v-slot:item.color="{item}">
                                <div class="d-flex">
                                    <div class="small_circle"></div>
                                    <span class="text-black">{{ item.color }}</span>
                                </div>
                            </template>

                            <template v-slot:item.mass="{item}">
                                <div class="d-flex">
                                    <span class="text-black">{{ item.mass }}</span>
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
                {text: 'Kodi', value: 'code'},
                {text: 'Nomi', value: 'title',},
                {text: 'Massa', value: 'mass'},
                {text: 'Rangi', value: 'color'},
                {text: 'Sana', value: 'date'},
            ],
            headers2: [
                {text: 'Kodi', value: 'code'},
                {text: 'Nomi', value: 'title',},
                {text: 'Rangi', value: 'color'},
                {text: 'Massa', value: 'mass'},
            ],
            tab: '',
            items: [
                {status: true, direction: 'Bo‘yoqxonadan', code: '#512412',  title: 'Paxtali', mass: '291 kg', color: '858D90', date: '21.09.2021'},
                {status: true, direction: 'Bo‘yoqxonadan', code: '#512412',  title: 'Paxtali', mass: '291 kg', color: '858D90', date: '21.09.2021'},
                {status: false, direction: 'Bo‘yoqxonadan', code: '#512412',  title: 'Paxtali', mass: '291 kg', color: '858D90', date: '21.09.2021'},
                {status: true, direction: 'Bo‘yoqxonadan', code: '#512412',  title: 'Paxtali', mass: '291 kg', color: '858D90', date: '21.09.2021'},
                {status: false, direction: 'Bo‘yoqxonadan', code: '#512412',  title: 'Paxtali', mass: '291 kg', color: '858D90', date: '21.09.2021'},
                {status: true, direction: 'Bo‘yoqxonadan', code: '#512412',  title: 'Paxtali', mass: '291 kg', color: '858D90', date: '21.09.2021'},
                {status: false, direction: 'Bo‘yoqxonadan', code: '#512412',  title: 'Paxtali', mass: '291 kg', color: '858D90', date: '21.09.2021'},
                {status: true, direction: 'Bo‘yoqxonadan', code: '#512412',  title: 'Paxtali', mass: '291 kg', color: '858D90', date: '21.09.2021'},
                {status: false, direction: 'Bo‘yoqxonadan', code: '#512412',  title: 'Paxtali', mass: '291 kg', color: '858D90', date: '21.09.2021'},
                {status: true, direction: 'Bo‘yoqxonadan', code: '#512412',  title: 'Paxtali', mass: '291 kg', color: '858D90', date: '21.09.2021'},

            ],
            items2: [
                {code: '#512412', title: 'Vilvit', color: '858D90',  mass: '280 kg'},
                {code: '#512412', title: 'Vilvit', color: '858D90',  mass: '280 kg'},
                {code: '#512412', title: 'Vilvit', color: '858D90',  mass: '280 kg'},
                {code: '#512412', title: 'Vilvit', color: '858D90',  mass: '280 kg'},
                {code: '#512412', title: 'Vilvit', color: '858D90',  mass: '280 kg'},
                {code: '#512412', title: 'Vilvit', color: '858D90',  mass: '280 kg'},
                {code: '#512412', title: 'Vilvit', color: '858D90',  mass: '280 kg'},
                {code: '#512412', title: 'Vilvit', color: '858D90',  mass: '280 kg'},
                {code: '#512412', title: 'Vilvit', color: '858D90',  mass: '280 kg'},
                {code: '#512412', title: 'Vilvit', color: '858D90',  mass: '280 kg'},
                {code: '#512412', title: 'Vilvit', color: '858D90',  mass: '280 kg'},

            ]
        }
    }
};
</script>

<style lang="scss">

</style>
