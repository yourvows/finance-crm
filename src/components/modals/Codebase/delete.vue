<template>
    <v-dialog
        max-width="400"
        persistent
        v-model="deleteModal"
    >
        <template v-slot:activator="{  }">
            <div @click="deleteItem" class="mt-1 cursor-pointer">
                <img src="@/assets/icons/trash.svg" alt="edit-2">
            </div>
        </template>
        <v-card class="modalCard">
            <div class="modalToolbar">
                <span class="font-weight-bold">Mahsulot o‘chirilishi</span>
                <v-btn icon @click="deleteModal=!deleteModal"><img src="@/assets/images/BackButton.svg"
                                                                   alt="BackButton"></v-btn>
            </div>

            <div class="mb-5 mt-4 text-muted">
                Bu mahsulotni o‘chirmoqchimisiz?
            </div>

            <v-card-actions class="d-flex justify-space-between">
                <v-btn
                    text
                    class="backBtn"
                    elevation="0"
                    @click="deleteModal=!deleteModal"
                >Yo‘q
                </v-btn>
                <v-btn
                    class="primaryBtn"
                    elevation="0"
                    @click="removeProduct"
                    :loading="loading"
                    :disabled="loading"
                >Ha
                </v-btn>
            </v-card-actions>

        </v-card>
    </v-dialog>

</template>

<script>
import {mapState, mapActions} from "vuex";

export default {
    props: [
        'item'
    ],
    data() {
        return {
            deleteModal: false,
            loading: false,
            loader: null,
        }
    },
    computed: {
        ...mapState(
            {
                product: state => state.code.product || [],
            }
        ),
    },
    methods: {
        ...mapActions(
            {
                getProductId: 'code/getProductId',
                removeProduct: 'code/removeProduct',
            }
        ),
        deleteItem() {
            this.deleteModal = !this.deleteModal
            this.getProductId(this.item)

        },
        async removeProduct() {
            this.loader = 'loading'
            await this.$store.dispatch('code/removeProduct', this.item)
            this.$emit('updateTable', true)
            this.deleteModal = false
            let toastTitle = 'Muvaffaqiyatli ochirildi!'
            this.$toast.success(toastTitle);
        }
    },
    watch: {
        loader() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => (this[l] = false), 3000)

            this.loader = null
        },
    },
}
</script>

<style scoped>

</style>
