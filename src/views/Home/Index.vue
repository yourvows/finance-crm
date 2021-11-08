<template>
  <div class="home">
      <h1 class="title">Son ko‘rsatkichlar</h1>
      <FirstRowCards></FirstRowCards>
      <SecondRowCards></SecondRowCards>
      <Chart></Chart>
      <Debts></Debts>
      <BottomTables></BottomTables>
  </div>
</template>

<script>
import {mapState} from "vuex";
import FirstRowCards from './FirstRowCards.vue'
import SecondRowCards from './SecondRowCards.vue'

import Chart from './Chart.vue'
import Debts from "./Debts.vue";
import BottomTables from "./BottomTables.vue";

export default {
    components:{
        FirstRowCards,
        SecondRowCards,
        Chart,
        Debts,
        BottomTables
    },
    mounted() {

    },
    computed: {
        ...mapState({
            usersFields: (state) => state.users.usersFields || {}
        }),
    },
    methods: {},
    data() {
        return {
            headers: [
                {text: 'Rang', value: 'color'},
                {text: 'Umumiy massa (kg)', value: 'amount',},
                {text: 'Oxirgi kelgan massa', value: 'lastAmount'},
                {text: 'Oxirgi kelgan sana', value: 'date'},
            ],
            items: [
                {color: 'red', amount: '280', lastAmount: '12', date: '21.09.2021', name: 'color'},
                {color: 'green', amount: '1,144', lastAmount: '24', date: '21.21.2021', name: 'totalAmount'},
                {color: 'blue', amount: '786', lastAmount: '44', date: '18.09.2021', name: 'lastAmount'},
                {color: 'yellow', amount: '320', lastAmount: '22', date: '61.69.2021', lastDate: 'lastDate'},
                {color: 'purple', amount: '832', lastAmount: '19', date: '21.89.2021'},
            ],
            items2: [
                {color: 'red', amount: '280', lastAmount: '12', date: '21.09.2021', name: 'color'},
                {color: 'green', amount: '1,144', lastAmount: '24', date: '21.21.2021', name: 'totalAmount'},
                {color: 'blue', amount: '786', lastAmount: '44', date: '18.09.2021', name: 'lastAmount'},
                {color: 'yellow', amount: '320', lastAmount: '22', date: '61.69.2021', lastDate: 'lastDate'},
                {color: 'purple', amount: '832', lastAmount: '19', date: '21.89.2021'},
            ],
        }
    },

};
</script>

<style lang="css" scoped>
/* .home {
    background: #FBFBFB;
} */
</style>
