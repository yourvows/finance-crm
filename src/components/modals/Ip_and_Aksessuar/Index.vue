<template>
   <div>
       <v-dialog
            max-width="400"
            persistent
            v-model="dialog"
        >
            <template>
                <v-card class="ip_and_akssessuar">

                    <div class="ip_and_akssessuar__title">
                        <span>Turni tanlang</span>
                        <v-btn icon @click="closeDialog">
                            <img src="@/assets/images/BackButton.svg" alt="">
                        </v-btn>
                    </div>


                    <div class="radioContent">
                        <span>Income</span>
                        <v-radio-group class="radioGroup" v-model="type">
                            <v-radio value="Income"></v-radio>
                        </v-radio-group>
                    </div>
                    <div class="radioContent mt-3">
                        <span>Outcome</span>
                        <v-radio-group class="radioGroup" v-model="type">
                            <v-radio value="Income"></v-radio>
                        </v-radio-group>
                    </div>


                    <v-card-actions class="d-flex justify-space-between mt-5">
                        <v-btn
                            text
                            class="backBtn"
                            elevation="0"
                            @click="closeDialog"
                        >Bekor qilish
                        </v-btn>
                        <v-btn
                            class="primaryBtn"
                            elevation="0"
                            @click="selectType"
                            :disabled="!disabled"
                        >Davom etish
                        </v-btn>
                    </v-card-actions>

                </v-card>
            </template>
        </v-dialog>

        <IpAdd :ipAddDialog="ipAddDialog"></IpAdd>
        <AksessuarAdd
            :aksessuarAddDialog="aksessuarAddDialog">
        </AksessuarAdd>

   </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import IpAdd from './IpAdd.vue'
import AksessuarAdd from './AksessuarAdd.vue'

export default {
    props: ['dialog'],
    components: {
        IpAdd,
        AksessuarAdd
    },
    data() {
        return {
            type: '',
            aksessuarAddDialog: false,
            ipAddDialog: false,
        }
    },
    computed: {
        disabled(){
            return this.type
        }

    },
    methods: {
        selectType() {
            if (this.type == 'Income') {
                return this.ipAddDialog = true
            }else if(this.type == 'Outcome') {
                return this.aksessuarAddDialog = true
            }
        },
        closeDialog(){
            this.$parent.$parent.dialog = false
        }
    },
}
</script>

<style scoped>
.ip_and_akssessuar__title{
    border-bottom: 0;
    margin-bottom: 10px;
}
</style>
