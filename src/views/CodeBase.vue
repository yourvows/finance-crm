<template>
    <div class="codebase" id="codebase">

        <div class="tabs">
            <v-tabs
                v-model="tab"
                color="black"
            >
                <v-tabs-slider color="teal lighten-3"></v-tabs-slider>

                <v-tab href="#tab-1">
                    Ip
                </v-tab>

                <v-tab href="#tab-2">
                    Mato
                </v-tab>

                <v-tab href="#tab-3">
                    Yoqa
                </v-tab>

                <v-tab href="#tab-4">
                    Aksessuar
                </v-tab>

                <v-tab href="#tab-5">
                    Tayyor mahsulotlar
                </v-tab>
            </v-tabs>
            <div class="d-flex align-center h-100">
                <ModalCodeBaseAdd></ModalCodeBaseAdd>
            </div>
        </div>

        <v-divider></v-divider>

        <v-tabs-items v-model="tab">

            <v-tab-item :value="'tab-1'">

                <code-item-thread></code-item-thread>

            </v-tab-item>

            <v-tab-item :value="'tab-2'">

                <code-item-material></code-item-material>

            </v-tab-item>

            <v-tab-item :value="'tab-3'">

                <code-item-collar></code-item-collar>

            </v-tab-item>

            <v-tab-item :value="'tab-4'">

                <code-item-accessory></code-item-accessory>

            </v-tab-item>

            <v-tab-item :value="'tab-5'">

                <code-item-product></code-item-product>

            </v-tab-item>

        </v-tabs-items>
        <v-overlay :value="overlay" class="overlay" app style="width: 100% ;z-index: 9999;">
            <v-progress-circular
                indeterminate
                size="64"
            ></v-progress-circular>
        </v-overlay>

    </div>
</template>

<script>
/* eslint-disable */
import ModalCodeBaseAdd from '@/components/modals/Codebase/add.vue'
import CodeItemThread from "../components/code_products/CodeItemThread";
import CodeItemMaterial from "../components/code_products/CodeItemMaterial";
import CodeItemCollar from "../components/code_products/CodeItemCollar";
import CodeItemAccessory from "../components/code_products/CodeItemAccessory";
import CodeItemProduct from "../components/code_products/CodeItemProduct";

export default {
    components: {
        CodeItemProduct,
        CodeItemAccessory,
        CodeItemCollar,
        CodeItemMaterial,
        CodeItemThread,
        ModalCodeBaseAdd,
    },
    data() {
        return {
            addModal: false,
            editModal: false,
            deleteModal: false,
            tab: '',
            overlay: true,
            menu: false,
        }
    },
    methods: {
        editItem() {
            this.editModal = true
        },
        deleteItem() {
            console.log(this.editModal)
            this.deleteModal = true
        },
        closeAdd(e) {
            this.addModal = false
        },
        closeEdit(e) {
            this.editModal = false
        },
        closeDelete(e) {
            this.deleteModal = false
        }
    },
    mounted() {

        setTimeout(() => {
            this.overlay = false
        }, 1000)
    }
}
</script>

<style>

</style>
