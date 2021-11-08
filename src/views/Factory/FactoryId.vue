<template>
    <div class="factory" id="factory_id">
         <div class="tabs">
            <v-tabs
                v-model="tab"
                color="black"
            >
                <v-tabs-slider color="tab-slider-color"></v-tabs-slider>

                <v-tab href="#tab-1">
                    Umumiy hisobot
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
                    <template v-slot:header.title="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.amount="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.color="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.resource="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.amount_get="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.sum="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.date="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>




                    <template v-slot:item.title="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.title }}</span>
                        </div>
                    </template>

                    <template v-slot:item.amount="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.amount }}</span>
                        </div>
                    </template>

                    <template v-slot:item.color="{item}">
                        <div class="d-flex">
                            <div class="small_circle"></div>
                            <span class="text-black">{{ item.color }}</span>
                        </div>
                    </template>

                    <template v-slot:item.resource="{item}">
                        <div class="d-flex">
                            <img src="@/assets/icons/eye.svg" alt="eye" class="eye_svg">
                            <a class="">{{ item.resource }}</a>
                        </div>
                    </template>

                    <template v-slot:item.amount_get="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.amount_get }}</span>
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
                    <template v-slot:header.title="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.amount="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.color="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.resource="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.amount_get="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.sum="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>
                    <template v-slot:header.date="{ header }">
                        <span class="table-header">{{ header.text}}</span>
                    </template>




                    <template v-slot:item.title="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.title }}</span>
                        </div>
                    </template>

                    <template v-slot:item.amount="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.amount }}</span>
                        </div>
                    </template>

                    <template v-slot:item.color="{item}">
                        <div class="d-flex">
                            <div class="small_circle"></div>
                            <span class="text-black">{{ item.color }}</span>
                        </div>
                    </template>

                    <template v-slot:item.resource="{item}">
                        <div class="d-flex">
                            <img src="@/assets/icons/eye.svg" alt="eye" class="eye_svg">
                            <a class="">{{ item.resource }}</a>
                        </div>
                    </template>

                    <template v-slot:item.amount_get="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.amount_get }}</span>
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
                {text: 'Kutuv', value: 'title'},
                {text: 'Soni', value: 'amount',},
                {text: 'Rang', value: 'color'},
                {text: 'Berilgan resurs', value: 'resource'},
                {text: 'Olingan mahsulot (%)', value: 'amount_get'},
                {text: 'Summasi', value: 'sum'},
                {text: 'Sana', value: 'date'},
            ],
            tab: '',
            items: [
                {title: 'Polo-qishqi', amount: '1,500 ta', color: 'Qizil', resource: 'Ko`rish',
                 amount_get: '1,498 (99,4%)', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {title: 'Polo-qishqi', amount: '1,500 ta', color: 'Qizil', resource: 'Ko`rish',
                 amount_get: '1,498 (99,4%)', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {title: 'Polo-qishqi', amount: '1,500 ta', color: 'Qizil', resource: 'Ko`rish',
                 amount_get: '1,498 (99,4%)', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {title: 'Polo-qishqi', amount: '1,500 ta', color: 'Qizil', resource: 'Ko`rish',
                 amount_get: '1,498 (99,4%)', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {title: 'Polo-qishqi', amount: '1,500 ta', color: 'Qizil', resource: 'Ko`rish',
                 amount_get: '1,498 (99,4%)', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {title: 'Polo-qishqi', amount: '1,500 ta', color: 'Qizil', resource: 'Ko`rish',
                 amount_get: '1,498 (99,4%)', sum: '1,400,000 so‘m', date: '21.09.2021'},

                {title: 'Polo-qishqi', amount: '1,500 ta', color: 'Qizil', resource: 'Ko`rish',
                 amount_get: '1,498 (99,4%)', sum: '1,400,000 so‘m', date: '21.09.2021'},
            ]
        }
    }
};
</script>

<style lang="scss">

</style>
