<template>
    <div>
        <v-col cols="auto">
            <v-dialog
                transition="dialog-top-transition"
                max-width="400"
                v-model="modalPayment"
            >
                <template v-slot:activator="{ on, attrs }">
                    <div class="d-flex ">
                        <v-btn v-bind="attrs"
                               v-on="on" text @click="openWindow"><img src="@/assets/images/giveMoneyImage.png" alt="">
                        </v-btn>
                    </div>
                </template>
                <template>
                    <v-card class="modalCard">
                        <div class="modalToolbar">
                            <p class="mt-3 font-weight-bold">Summani kiriting</p>
                            <v-btn icon @click="modalPayment=false"><img src="@/assets/images/BackButton.svg" alt="">
                            </v-btn>
                        </div>
                        <div class="inputContent">
                            <v-text-field onkeypress="return /[0-9]/i.test(event.key)" v-model="price" outlined
                                          placeholder="Misol: 1,000,000 so‘m"></v-text-field>
                        </div>
                        <v-card-actions class="justify-center d-flex">
                            <v-btn
                                text
                                class="backBtn"
                                elevation="0"

                            >Bekor qilish
                            </v-btn>
                            <v-btn
                                class="primaryBtn"
                                elevation="0"
                                @click="Pay"
                                :disabled="!disable"
                            >Pul berish
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
        </v-col>

    </div>
</template>

<script>
export default {
    name: "ModalPayment",
    data() {
        return {
            modalPayment: false,
            price: ''
        }
    },
    computed: {
        disable() {
            return this.price;
        }
    }
}
</script>

<style scoped>

</style>
