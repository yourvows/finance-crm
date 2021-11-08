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
                        <span>Bo’yoqxonaga mato jo’natilmoqda</span>
                        <v-btn icon @click="aksessuarSelectDialog=false">
                            <img src="@/assets/images/BackButton.svg" alt="">
                        </v-btn>
                    </div>

                    <div class="mt-3">
                        <span class="text-black ml-1">Partiya raqami</span>
                        <v-text-field outlined class="mt-2"
                            placeholder="Misol: 1232">
                        </v-text-field>
                    </div>

                    <div>
                        <span class="text-black ml-1">Mahsulot</span>
                        <div @click="selectProduct=!selectProduct">
                            <v-text-field :rules="[v => !!v || 'Илтимос, майдони толдиринг']"
                                append-icon="mdi-chevron-down" outlined
                                class="mt-2" placeholder="Tanlang">
                            </v-text-field>
                        </div>
                    </div>

                    <div>
                        <span class="text-black ml-1">Massa</span>
                        <v-text-field outlined class="mt-2"
                            placeholder="Misol: 2,000 kg">
                        </v-text-field>
                    </div>

                    <div>
                        <span class="text-black ml-1">Rang buyurtma</span>
                        <colorpicker :color="defaultColor" v-model="defaultColor" class="mt-2" />
                    </div>


                    <div class="mt-4">
                        <span class="text-black ml-1">KG narxi</span>
                        <v-text-field outlined class="mt-2"
                            placeholder="Misol: 180,000 so’m">
                        </v-text-field>
                    </div>


                    <div>
                        <span class="text-black ml-1">Umumiy summa</span>
                        <v-text-field outlined class="mt-2"
                            placeholder="Misol: 1,240,000 so’m">
                        </v-text-field>
                    </div>


                    <div>
                        <span class="text-black ml-1">Berilgan summa</span>
                        <v-text-field outlined class="mt-2"
                            placeholder="Misol: 240,000 so‘m">
                        </v-text-field>
                    </div>


                    <div>
                        <span class="text-black ml-1">Qolgan qarzdorlik</span>
                        <v-text-field outlined class="mt-2"
                            placeholder="Misol: 1,000,000 so‘m">
                        </v-text-field>
                    </div>


                    <v-card-actions class="d-flex justify-space-between mb-1">
                        <v-btn
                            text
                            class="backBtn"
                            elevation="0"

                        >Bekor qilish
                        </v-btn>
                        <v-btn
                            class="primaryBtn"
                            elevation="0"
                        >Tasdiqlash
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </template>
        </v-dialog>


        <v-dialog
            max-width="400"
            v-model="selectProduct"
        >
            <template>

                <v-card class="aksessuar_turi_add">
                    <div class="aksessuar_turi_add__title" id="ffas">
                        <span>Mahsulotni tanlang</span>
                        <v-btn icon @click="selectProduct = false">
                            <img src="@/assets/images/BackButton.svg" alt="">
                        </v-btn>
                    </div>

                    <v-list class="aksessuar_turi_add__content">

                        <div class="exists">
                            <span class="exists__title text-black">Mavjud matolar</span>
                            <v-text-field :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined class="exists__input">
                                <template v-slot:prepend-inner>
                                    <img src="@/assets/icons/search-normal.svg" class="mb-4 mt-0" alt="">
                                </template>
                            </v-text-field>
                        </div>


                        <perfect-scrollbar class="">
                            <div class="radioContent mb-5" v-for="(element, index) in existingIps" :key="index">
                                <span>{{element.name}}</span>
                                <v-radio-group :rules="[v => !!v || 'Илтимос, майдони толдиринг']" class="radioGroup" v-model="existingIp">
                                    <v-radio :value="element.id"></v-radio>
                                </v-radio-group>
                            </div>
                        </perfect-scrollbar>

                    </v-list>

                    <v-card-actions class="d-flex justify-space-between">
                        <v-btn
                            class="backBtn"
                            elevation="0"
                            @click="selectProduct = false"
                        >Bekor qilish
                        </v-btn>
                        <v-btn
                            class="primaryBtn"
                            elevation="0"
                        >Tasdiqlash
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
import colorpicker from '@/components/VueColor.vue'
export default {
    props: ['aksessuarAddDialog'],
    components: {
        PerfectScrollbar,
        colorpicker
    },
    data(){
        return{
            selectProduct: false,
            ipSendingDialog: false,
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

    },
    methods:{
        ...mapActions(
            {

            }
        ),


    }
    
}
</script>


<style>

</style>