<template>
    <div class="debt-charts">
        <v-card class="d-card">
            <div class="blocks">
                <div class="first_blocks">
                    <div class="first">
                        <div class="pb-1">
                            <span class="text--secondary">1-fabrika</span>
                            <span class="red--text">+3,4% ↑</span>
                        </div>
                        <div>
                            <div class="align-baseline">
                                <span class="text-h6 text-black">12,</span> 
                                <span>000,000 so‘m</span>
                            </div>
                            <img src="@/assets/images/lightCircleGreen.svg" alt="">
                        </div>
                    </div>
                    
                    <div class="second">
                        <div class="pb-1">
                            <span class="text--secondary">2-fabrika</span>
                            <span class="red--text">+3,4% ↑</span>
                        </div>
                        <div>
                            <div class="align-baseline">
                                <span class="text-h6 text-black">23,</span>
                                <span>000,000 so‘m</span>
                            </div>
                            <img src="@/assets/images/lightCircleBlue.svg" alt="">
                        </div>
                    </div>
                </div>

                <div class="second_blocks">
                    <div class="third">
                        <div class="pb-1">
                            <span class="text--secondary">3-fabrika</span>
                            <span class="green--text">+3,4% ↑</span>
                        </div>
                        <div>
                            <div class="align-baseline">
                                <span class="text-h6 text-black">15,</span> 
                                <span>500,000 so‘m</span>
                            </div>
                            <img src="@/assets/images/lightCircleBrown.svg" alt="">
                        </div>
                    </div>
                    
                    <div class="fourth">
                        <div class="pb-1">
                            <span class="text--secondary">Umumiy</span>
                            <span class="red--text">+3,4% ↑</span>
                        </div>
                        <div>
                            <div class="align-baseline">
                                <span class="text-h6 text-black">50,</span> 
                                <span>500,000 so‘m</span>
                            </div>
                            <span class="w20-h20"></span>
                        </div>
                    </div>
                </div>
            </div>
                
            <div class="d-flex align-center mt-3">
                <apexchart width="180" type="donut" :options="options" :series="series"></apexchart>
            </div>
        </v-card>



        <v-card class="d-card">
            <div class="blocks">
                <div class="first_blocks">
                    <div class="first">
                        <div>
                            <span class="text--secondary">Mato to’quv</span>
                            <span class="red--text">+3,4% ↑</span>
                        </div>
                        <div>
                            <div class="align-baseline">
                                <span class="text-h6 text-black">24,</span> 
                                <span>000,000 so‘m</span>
                            </div>
                            <img src="@/assets/images/lightCircleGreen.svg" alt="">
                        </div>
                    </div>
                    
                    <div class="second">
                        <div>
                            <span class="text--secondary">Yoqa to’quv</span>
                            <span class="red--text">+3,4% ↑</span>
                        </div>
                        <div>
                            <div class="align-baseline">
                                <span class="text-h6 text-black">55,</span>
                                <span>000,000 so‘m</span>
                            </div>
                            <img src="@/assets/images/lightCircleBlue.svg" alt="">
                        </div>
                    </div>
                </div>

                <div class="second_blocks">
                    <div class="third">
                        <div>
                            <span class="text--secondary">Bo’yoqxona</span>
                            <span class="green--text">+3,4% ↑</span>
                        </div>
                        <div>
                            <div class="align-baseline">
                                <span class="text-h6 text-black">46,</span> 
                                <span>000,000 so‘m</span>
                            </div>
                            <img src="@/assets/images/lightCircleBrown.svg" alt="">
                        </div>
                    </div>
                    
                    <div class="fourth">
                        <div>
                            <span class="text--secondary">Umumiy</span>
                            <span class="red--text">+3,4% ↑</span>
                        </div>
                        <div>
                            <div class="align-baseline">
                                <span class="text-h6 text-black">125,</span> 
                                <span>000,000 so‘m</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            <div class="d-flex align-center mt-3">
                <apexchart width="180" type="donut" :options="options" :series="series2"></apexchart>
            </div>
        </v-card>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    name: "MainDebtsChart",
    components: {
        apexchart: VueApexCharts
    },
    data: function () {
        return {
            options: {
                colors: ['#43D9A9', '#EBC59E', '#2886FF'],
                plotOptions: {
                    pie: {
                        customScale: 1.1,
                        donut: {
                            size: '55%',
                        }
                    }
                },
                labels: ["1-fabrika", "2-fabrika", "3-fabrika"],
            },
            series: [12000000, 23000000, 15500000],
            series2: [24000000, 55000000, 46000000],
        }
    }
}
</script>

<style>
.apexcharts-align-center {
    display: none !important;
}
.w20-h20{
    width: 20px;
    height: 20px;
}
</style>
