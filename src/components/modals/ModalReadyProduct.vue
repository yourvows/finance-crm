<template>
    <div>
        <v-dialog
            max-width="400"
            v-model="readyProduct"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn dark v-bind="attrs"
                       v-on="on" elevation="0" class="mr-2" style="background: #2886FF;">
                    <img src="@/assets/icons/export.svg" alt="" class="mr-2 img-width-20px">
                    <span style="text-transform: none"> Buyurtma berish</span>
                </v-btn>
            </template>
            <v-card class="aksessuar_add">
                <div class="aksessuar_add__title white">
                    <span class="text-black ml-1"> Buyurtma berilmoqda</span>
                    <v-btn icon @click="readyProduct = false">
                        <img src="@/assets/images/BackButton.svg" alt="BackButton">
                    </v-btn>
                </div>
                <v-stepper v-model="e1" elevation="0">
                    <v-stepper-header class="elevation-0">
                        <v-stepper-step
                            :complete="e1 > 1"
                            step="1"
                        >
                        </v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step
                            :complete="e1 > 2"
                            step="2"
                        >
                        </v-stepper-step>

                        <v-divider></v-divider>
                        <v-stepper-step
                            :complete="e1 > 3"
                            step="3"
                        >
                        </v-stepper-step>
                        <v-divider></v-divider>

                        <v-stepper-step step="4">
                        </v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <span>Qaysi fabrikaga</span>
                            <v-select
                                label="Tanlang" class="mt-2 " outlined
                                :rules="[v => !!v || 'Iltimos, tanlang!']"
                            >
                            </v-select>
                            <div>
                                <span class="text-black ml-1">Buyurtma mahsuloti nomi</span>
                                <v-text-field :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined
                                              class="mt-2"
                                              placeholder="Misol: Polo 1.3" v-model="location">
                                </v-text-field>
                            </div>

                            <div>
                                <span class="text-black ml-1">Buyurtma mahsuloti kodi</span>
                                <v-text-field onkeypress="return /[0-9]/i.test(event.key)"
                                              :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined
                                              class="mt-2"
                                              placeholder="Misol: #548874" v-model="location">
                                </v-text-field>
                            </div>
                            <div>
                                <span class="text-black ml-1">Adadi</span>
                                <v-text-field onkeypress="return /[0-9]/i.test(event.key)"
                                              :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined
                                              class="mt-2"
                                              placeholder="Misol: 2,000 ta" v-model="location">
                                </v-text-field>
                            </div>
                            <v-card-actions class="d-flex justify-space-between">
                                <v-btn
                                    text
                                    class="backBtn"
                                    elevation="0"
                                    @click="readyProduct=false"

                                >Bekor qilish
                                </v-btn>
                                <v-btn
                                    class="primaryBtn"
                                    elevation="0"
                                    @click="e1 = 2"
                                >Davom etish
                                </v-btn>
                            </v-card-actions>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <span>Matoni tanlang</span>
                            <v-select
                                label="Tanlang" class="mt-2 " outlined
                                :rules="[v => !!v || 'Iltimos, tanlang!']"
                            ></v-select>
                            <span>Adadi</span>
                            <v-text-field onkeypress="return /[0-9]/i.test(event.key)"
                                          :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined
                                          class="mt-2"
                                          placeholder="Misol: 1,500 ta" v-model="location">
                            </v-text-field>
                            <span class="text-black ml-1">Yoqani tanlang</span>
                            <v-select
                                label="Tanlang" class="mt-2 " outlined
                                :rules="[v => !!v || 'Iltimos, tanlang!']"
                            ></v-select>
                            <v-card-actions class="d-flex justify-space-between">
                                <v-btn
                                    text
                                    class="backBtn"
                                    elevation="0"
                                    @click="readyProduct=false"

                                >Bekor qilish
                                </v-btn>
                                <v-btn
                                    class="primaryBtn"
                                    elevation="0"
                                    @click="e1 = 3"
                                >Davom etish
                                </v-btn>
                            </v-card-actions>

                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <v-list class="aksessuar_add__content">
                                <span class="text-black ml-1">Matoni tanlang</span>
                                <v-select
                                    label="Tanlang" class="mt-2 " outlined
                                    :rules="[v => !!v || 'Iltimos, tanlang!']"
                                ></v-select>
                                <span class="text-black ml-1">Adadi</span>
                                <v-text-field onkeypress="return /[0-9]/i.test(event.key)"
                                              :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined
                                              class="mt-2"
                                              placeholder="Misol: 1,500 ta" v-model="location">
                                </v-text-field>
                            </v-list>
                            <v-card-actions class="d-flex justify-space-between">
                                <v-btn
                                    text
                                    class="backBtn"
                                    elevation="0"
                                    @click="readyProduct=false"

                                >Bekor qilish
                                </v-btn>
                                <v-btn
                                    class="primaryBtn"
                                    elevation="0"
                                    @click="e1 = 4"
                                >Davom etish
                                </v-btn>
                            </v-card-actions>
                        </v-stepper-content>
                        <v-stepper-content step="4">
                            <v-list class="aksessuar_add__content">
                                <span class="text-black ml-1">Dona narxi</span>
                                <v-text-field onkeypress="return /[0-9]/i.test(event.key)"
                                              :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined
                                              class="mt-2"
                                              placeholder="Misol: 1000 so'm" v-model="location">
                                </v-text-field>
                                <span class="text-black ml-1">Umumiy narx</span>
                                <v-text-field onkeypress="return /[0-9]/i.test(event.key)"
                                              :rules="[v => !!v || 'Илтимос, майдони толдиринг']" outlined
                                              class="mt-2"
                                              placeholder="Misol: 2,000 ta" v-model="location">
                                </v-text-field>
                            </v-list>
                            <v-card-actions class="d-flex justify-space-between">
                                <v-btn
                                    text
                                    class="backBtn"
                                    elevation="0"
                                    @click="readyProduct=false"

                                >Bekor qilish
                                </v-btn>
                                <v-btn
                                    class="primaryBtn"
                                    elevation="0"
                                    @click="e1 = 1"
                                >Tasdiqlash
                                </v-btn>
                            </v-card-actions>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>


            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    data() {
        return {
            e1: 1,
            ip_type: 'new',
            location: '',
            total_price: '',
            single_price: '',
            product: '',
            quantity: '',
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

            aksessuarSelectDialog: false,
            typeSelectDialog: false,
            readyProduct: false

        }
    },
    watch: {
        aksessuarSelectDialog(newVal) {
            console.log(newVal)
        }
    },
    computed: {
        disabled() {
            return this.total_price && this.single_price && this.quantity && this.product && this.quantity && this.location
        }

    },
    methods: {
        ...mapActions(
            {
                saveProductCode: 'code/saveProductCode'
            }
        ),


        async onSubmit() {

        }
    }

}
</script>



<style>
.mdi-check::before {
    content: "\F012C";
    color: white;
    background: #2782F6 !important;
    border-radius: 5px;
}

.v-stepper__content {
    top: 0;
    padding: 1px!important;
    flex: 1 0 auto;
    width: 100%;
}
.v-stepper__header {
    width: 110%!important;
    margin-left: -15px!important;
}
</style>
