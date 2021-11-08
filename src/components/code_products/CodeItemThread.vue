<template>
    <div>
        <v-row>
            <v-col>
                <v-data-table
                    :headers="headers"
                    :items="threadItem"
                    item-key="id"
                    disable-sort
                    hide-default-footer
                    class="pl-2"
                >
                    <!-- eslint-disable  -->
                    <template v-slot:header.code="{ header }">
                        <span class="table-header">{{ header.text }}</span>
                    </template>
                    <template v-slot:header.name="{ header }">
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
                    :items="threadItemSecond"
                    item-key="id"
                    disable-sort
                    hide-default-footer
                >
                    <!-- eslint-disable  -->
                    <template v-slot:header.code="{ header }">
                        <span class="table-header">{{ header.text }}</span>
                    </template>
                    <template v-slot:header.name="{ header }">
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
                ></v-pagination>
            </v-col>
            {{update}}
        </v-row>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import NoData from "../base/NoData";
import removeModal from '../../components/modals/Codebase/delete'
import edit from   '../../components/modals/Codebase/edit'
export default {
    name: "CodeItemThread",
    components: {NoData,edit,removeModal},
    data() {
        return {
            page: 1,
            pageCount: 0,
            itemsPerPage: 10,
            threadItem: [],
            threadItemSecond: [],
            status: '1',
            headers: [
                {text: 'Kodi', value: 'code'},
                {text: 'Nomi', value: 'name'},
                {text: '', value: 'actions'},
            ],
        }
    },
    watch: {
        page: async function (newVal, oldVal) {
            if (newVal) {
                await this.refresh()
            }
        },
        update: async function (newVal, oldVal) {
            if (newVal) {
                await  this.refresh()
            }
        },
    },
    async mounted() {
        await this.refresh();
    },
    computed: {
        ...mapState(
            {
                productCodesFields: state => state.code.productCodesFields || [],
                update: state => state.code.update
            }
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
            this.threadItemSecond = this.productCodesFields.data.slice(10, this.productCodesFields.data.length);
            this.threadItem = this.productCodesFields.data;
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