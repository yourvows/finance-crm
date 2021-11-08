<template>
    <div>
        <v-dialog
            max-width="400"
            v-model="ipSendingDialog"
        >
            <template v-slot:activator="{ on, attrs }">
                    <v-btn class="primaryBtn mr-2" v-bind="attrs"
                        v-on="on" elevation="0">
                        <img src="@/assets/images/export.svg"
                         alt="export" class="mr-2">
                        Jo‘natish
                    </v-btn>
            </template>
            <template>
                <v-card class="aksessuar_turi_add">
                    <div class="aksessuar_turi_add__title" id="ffas">
                        <span>Ip jo’natilmoqda</span>
                        <v-btn icon @click="aksessuarSelectDialog=false">
                            <img src="@/assets/images/BackButton.svg" alt="">
                        </v-btn>
                    </div>

                    <div class="mt-4">
                        <span class="text-black ml-1">Qayerga</span>
                        <v-list class="d-flex">
                            <div class="radioContent">
                                <span>Mavjud ip</span>
                                <v-radio-group class="radioGroup" v-model="ip_type">
                                    <v-radio value="existing"></v-radio>
                                </v-radio-group>
                            </div>
                            <div class="radioContent">
                                <span>Yangi ip</span>
                                <v-radio-group class="radioGroup" v-model="ip_type">
                                    <v-radio value="new"></v-radio>
                                </v-radio-group>
                            </div>
                        </v-list>

                        <v-select :items="categories" item-text="name" item-value="id"
                            label="To’quvxonani tanlang" outlined class="mt-3">
                        </v-select>
                    </div>

                    <v-list class="aksessuar_turi_add__content">

                        <div class="exists">
                            <span class="exists__title text-black">Mavjud ipni tanlang</span>
                            <v-text-field outlined class="exists__input" v-model="inputSearch">
                                <template v-slot:prepend-inner >
                                    <img src="@/assets/icons/search-normal.svg" class="mb-4 mt-0" alt="">
                                </template>
                            </v-text-field>
                        </div>


                        <perfect-scrollbar class="">
                            <div class="radioContent mb-5" v-for="(element, index) in filteredProducts" :key="index">
                                <span>{{element.name}}</span>
                                <v-radio-group class="radioGroup" v-model="existingIp">
                                    <v-radio :value="element.id"></v-radio>
                                </v-radio-group>
                            </div>
                        </perfect-scrollbar>


                        <div>
                            <span class="text-black ml-1">Massa (kg)</span>
                            <v-text-field outlined class="mt-2"
                                placeholder="Nomni kiriting" v-model="amount">
                            </v-text-field>
                        </div>

                    </v-list>

                    <v-card-actions class="d-flex justify-space-between">
                        <v-btn
                            text
                            class="backBtn"
                            elevation="0"

                        >Bekor qilish
                        </v-btn>
                        <v-btn
                            class="primaryBtn"
                            elevation="0"
                            :disabled="!disabled"
                        >Davom etish
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </template>
        </v-dialog>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
export default {
    props: ['aksessuarAddDialog'],
    components: {
        PerfectScrollbar
    },
    data(){
        return{
            ipSendingDialog: false,
            ip_type:'',
            inputSearch:'',
            amount:'',
            existingIps: [
                {id: 1, name: 'Qizil - #548963'},
                {id: 2, name: 'Ko‘k - #498247'},
                {id: 3, name: 'Yashil - #591798'},
                {id: 4, name: 'Dengiz - #8745214'},
            ],
            existingIp: '',
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length <= 20 || 'Max 20 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },

        }
    },
    watch: {

    },
    computed:{
        disabled(){
            return this.ip_type &&  this.existingIp && this.amount
        },
        filteredProducts: function() {
            var that = this;
            return this.existingIps.filter(function(product) {
                return product.name.toLowerCase().indexOf(that.inputSearch.toLowerCase()) !== -1;
            });
        }
    },
    methods:{
        ...mapActions(
            {}
        ),


    }

}
</script>


<style>

</style>
