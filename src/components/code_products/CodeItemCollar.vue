<template>
    <div>
        <v-row>
            <v-col>
                <v-data-table
                    :headers="headers"
                    :items="collarItem"
                    item-key="id"
                    disable-sort
                    hide-default-footer
                    class="pl-2"
                >
                    <!-- eslint-disable  -->
                    <template v-slot:header.code="{ header }">
                        <span class="table-header">{{ header.text }}</span>
                    </template>
                    <template v-slot:header.type="{ header }">
                        <span class="table-header">{{ header.text }}</span>
                    </template>
                    <template v-slot:header.title="{ header }">
                        <span class="table-header">{{ header.text }}</span>
                    </template>
                    <template v-slot:header.actions="{ header }">
                        <span class="table-header">{{ header.text }}</span>
                    </template>


                    <template v-slot:item.code="{item}">
                        <div class="d-flex">
                            <span class="text-black">#{{ item.code }}</span>
                        </div>
                    </template>
                    <template v-slot:item.type="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.product_category.name }}</span>
                        </div>
                    </template>
                    <template v-slot:item.title="{item}">
                        <div class="d-flex">
                            <div class="circle mr-1" :class="[item.title]"></div>
                            <span class="text-black">{{ item.title }}</span>
                        </div>
                    </template>


                    <template v-slot:item.actions="{ item }">
                        <div class="d-flex justify-end">
                            <edit :item="item" @updateTable="updateTable($event)"></edit>
                            <removeModal :item="item" @updateTable="updateTable($event)"></removeModal>
                        </div>
                    </template>

                    <template v-slot:no-data>
                        <div>
                            <no-data class="mt-6"></no-data>
                            <br>
                            <h2>Ma'lumotlar topilmadi!</h2>
                        </div>
                    </template>

                </v-data-table>
            </v-col>
            <div style="border-right: 1px solid #ececec"></div>
            <v-col>
                <v-data-table
                    :headers="headers"
                    :items="collarItemSecond"
                    item-key="id"
                    disable-sort
                    hide-default-footer
                >
                    <!-- eslint-disable  -->
                    <template v-slot:header.code="{ header }">
                        <span class="table-header">{{ header.text }}</span>
                    </template>
                    <template v-slot:header.type="{ header }">
                        <span class="table-header">{{ header.text }}</span>
                    </template>
                    <template v-slot:header.title="{ header }">
                        <span class="table-header">{{ header.text }}</span>
                    </template>
                    <template v-slot:header.actions="{ header }">
                        <span class="table-header">{{ header.text }}</span>
                    </template>


                    <template v-slot:item.code="{item}">
                        <div class="d-flex">
                            <span class="text-black">#{{ item.code }}</span>
                        </div>
                    </template>
                    <template v-slot:item.type="{item}">
                        <div class="d-flex">
                            <span class="text-black">{{ item.product_category.name }}</span>
                        </div>
                    </template>
                    <template v-slot:item.title="{item}">
                        <div class="d-flex">
                            <div class="circle mr-1" :class="[item.title]"></div>
                            <span class="text-black">{{ item.title }}</span>
                        </div>
                    </template>


                    <template v-slot:item.actions="{ item }">
                        <div class="d-flex justify-end">
                            <edit :item="item" @updateTable="updateTable($event)"></edit>
                            <removeModal :item="item" @updateTable="updateTable($event)"></removeModal>
                        </div>
                    </template>

                    <template v-slot:no-data>
                        <div>
                            <no-data class="mt-6"></no-data>
                            <br>
                            <h2>Ma'lumotlar topilmadi!</h2>
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
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import NoData from "../base/NoData";
import removeModal from '../../components/modals/Codebase/delete'
import edit from   '../../components/modals/Codebase/edit'

export default {
    name: "CodeItemCollar",
    components: {NoData,edit,removeModal},
    data() {
        return {
            page: 1,
            pageCount: 0,
            itemsPerPage: 10,
            collarItem: [],
            collarItemSecond: [],
            status: '3',
            headers: [
                {text: 'Kodi', value: 'code'},
                {text: 'Turi', value: 'type'},
                {text: 'Nomi', value: 'name'},
                {text: '', value: 'actions'},
            ],
        }
    },
    watch: {
        page: function (newVal, oldVal) {
            if (newVal) {
                this.refresh()
            }
        }
    },
    async mounted() {
        await this.refresh();
    },
    computed: {
        ...mapState(
            {productCodesFields: state => state.code.productCodesFields || [],}
        ),
    },
    methods: {
        ...mapActions(
            {fetchProductCodes: 'code/fetchProductCodes'}
        ),
        async refresh() {
            await this.fetchProductCodes({page: this.page, status: this.status});

            this.page = this.productCodesFields.current_page;
            this.pageCount = Math.ceil(this.productCodesFields.total / 20);
            this.collarItemSecond = this.productCodesFields.data.slice(10, this.productCodesFields.data.length);
            this.collarItem = this.productCodesFields.data;
        },
        editItem() {
            console.log('edited')
        },
        deleteItem() {
            console.log('deleted!')
        },
        async updateTable(e){
            if(e){
                await this.refresh();
            }
        },
    }
}
</script>

<style scoped>

</style>
