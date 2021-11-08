<template>
    <div>
        <v-dialog
            max-width="400"
            v-model="readyProduct"
        >
            <template v-slot:activator="{ on, attrs }">

                <v-btn dark v-bind="attrs"
                       v-on="on" elevation="0" class="mr-2" style="background: #379c7c;">
                    <img src="@/assets/icons/convert-3d-cube.svg" alt="" class="mr-2 img-width-20px">
                    <span style="text-transform: none"> Mahsulot bichildi</span>
                </v-btn>
            </template>

            <v-card class="aksessuar_add">

                <div class="aksessuar_add__title ">
                    <span class="text-black">Mahsulot bichildi</span>
                    <v-btn icon @click="readyProduct = false">
                        <img src="@/assets/images/BackButton.svg" alt="BackButton">
                    </v-btn>
                </div>

                <v-list class="aksessuar_add__content">
                    <span class="text-black ml-1">Mahsulot</span>
                    <v-select
                        label="Tanlang" class="mt-2 " outlined
                        :rules="[v => !!v || 'Iltimos, tanlang!']"
                    >
                    </v-select>
                    <span class="text-black ml-1">Mahsulotni tanlang</span>
                    <v-select
                        label="Tanlang" class="mt-2 " outlined
                        :rules="[v => !!v || 'Iltimos, tanlang!']"
                    >
                    </v-select>
                    <div>
                        <span class="text-black ml-1">Necha kg ishlatildi</span>
                        <v-text-field :rules="[v => !!v || 'Iltimos, maydoni toldiring!']" outlined class="mt-2"
                                      placeholder=" Misol: 2,000 kg" v-model="location">
                        </v-text-field>
                    </div>

                    <div>
                        <span class="text-black ml-1">Necha dona olindi</span>
                        <v-text-field :rules="[v => !!v || 'Iltimos, maydoni toldiring!']"
                                      append-icon="mdi-chevron-down" v-model="aksessuar_type" outlined
                                      class="mt-2" placeholder="Misol: 180,000 so’m">
                        </v-text-field>
                    </div>

                    <div>
                        <span class="text-black ml-1">Bichuv massasi</span>
                        <v-text-field :rules="[v => !!v || 'Iltimos, maydoni toldiring!']"
                                      append-icon="mdi-chevron-down" v-model="product" outlined
                                      class="mt-2" placeholder="Misol: 180,000 so’m">
                        </v-text-field>
                    </div>

                    <div>
                        <span class="text-black ml-1">Isporeniya</span>
                        <v-text-field onkeypress="return /[0-9]/i.test(event.key)"
                                      :rules="[v => !!v || 'Iltimos, maydoni toldiring!']" outlined class="mt-2"
                                      v-model="quantity"
                                      placeholder="200 kg">
                        </v-text-field>
                    </div>

                    <div>
                        <span class="text-black ml-1">Summa</span>
                        <v-text-field onkeypress="return /[0-9]/i.test(event.key)"
                                      :rules="[v => !!v || 'Iltimos, maydoni toldiring!']"
                                      v-model="single_price"
                                      outlined class="mt-2"
                                      placeholder="Misol: 240,000 so‘m">
                        </v-text-field>
                    </div>

                    <div>
                        <span class="text-black ml-1">Berildi</span>
                        <v-text-field onkeypress="return /[0-9]/i.test(event.key)"
                                      :rules="[v => !!v || 'Iltimos, maydoni toldiring!']" outlined v-model="total_price"
                                      class="mt-2"
                                      placeholder="Misol: 140,000 so’m">
                        </v-text-field>
                    </div>

                    <div>
                        <span class="text-black ml-1">Qoldi</span>
                        <v-text-field onkeypress="return /[0-9]/i.test(event.key)"
                                      :rules="[v => !!v || 'Iltimos, maydoni toldiring!']" outlined v-model="total_price"
                                      class="mt-2"
                                      placeholder="Misol: 100,000 so’m">
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
                    >Tasdiqlash
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
    data() {
        return {
            ip_type: 'new',
            location: '',
            aksessuar_type:'',
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

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css">
</style>

<style>
.ps {
    height: 240px;
}

</style>
