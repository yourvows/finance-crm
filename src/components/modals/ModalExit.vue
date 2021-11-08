<template>
    <div>
        <v-dialog
            transition="dialog-top-transition"
            max-width="400"
            v-model="exitModal"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn dark v-bind="attrs"
                       v-on="on" elevation="0" style="background:#EEA36C;">
                    <img src="@/assets/images/wallet-minus.svg" alt="">
                    Chiqim
                </v-btn>
                <!-- <div class="add-text">
                    <div>Qo'shish</div>
                    <span>Ip yo'ki aksessuar</span>
                </div> -->
            </template>
            <template>
                <v-card class="modalCard">
                    <div class="modalToolbar">
                        <p class="mt-2 font-weight-bold">Chiqim bo’lmoqda</p>
                        <v-btn icon @click="exitModal=false"><img src="@/assets/images/BackButton.svg" alt="">
                        </v-btn>
                    </div>
                    <v-list>
                        <div class="inputContent">
                            <p class="inputContentParagrapgh">Xarajat nomi</p>
                            <v-text-field :rules="[v => !!v || 'Iltimos, maydoni toldiring!']" v-model="name" outlined placeholder="Misol: Ovqatga"></v-text-field>
                        </div>
                        <div class="inputContent">
                            <p class="inputContentParagrapgh">Xarajat summasi</p>
                            <v-text-field :rules="[v => !!v || 'Iltimos, maydoni toldiring!']" v-model="amount" outlined placeholder="Misol: 120,000 so’m"></v-text-field>
                        </div>
                    </v-list>
                    <v-card-actions class="justify-center d-flex">
                        <v-btn
                            text
                            class="backBtn"
                            elevation="0"
                            @click="exitModal=false"
                        >Bekor qilish
                        </v-btn>
                        <v-btn
                            class="primaryBtn"
                            elevation="0"
                            @click="Next"
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
export default {
    name: "ModalExit",
    data() {
        return {
            exitModal: false,
            name:'',
            amount:''
        }
    },
    computed:{
        disabled(){
            return this.name && this.amount
        }
    }
}
</script>

<style scoped>

</style>
