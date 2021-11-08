<template>
    <v-app app>
        <div class="dashboard">
            <sidebar></sidebar>
            <div class="content" :class="drawer == false ? 'margin-zero' : '' ">
                <navbar></navbar>
                <div class="views">
                    <router-view/>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
export default {
    components: {
        Sidebar,
        Navbar
    },
    data: () => ({

    }),
    mounted(){

    },
    computed: {
        ...mapState({drawer: state => state.categories.drawer}),
    },

};
</script>

<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css">
</style>

<style>

.margin-zero{
    margin-left: 0%!important;
}





/*=== vue2-perfect-scrollbar ===*/
.ps {
    height: auto;
    max-height: 240px;
}
/*=== vue2-perfect-scrollbar ===*/
</style>
