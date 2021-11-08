<template>
    <div class="chart">
        <div class="before-chart">
            <span class="title">Moliya ko‘rsatkichlari</span>
            <div class="chart-settings">
                <div>
                    <span class="green_dot"></span>
                    <span>Kirim</span>
                </div>
                <div>
                    <span class="brown_dot"></span>
                    <span>Chiqim</span>
                </div>
                <div>
                    <v-btn elevation="0" class="btn">
                        <img src="@/assets/images/filter.svg" alt="">
                    </v-btn>
                </div>
            </div>
        </div>
        <div id="line-chart" class="mt-5">
            <apexchart type="line" height="500" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
    components: {
        apexchart: VueApexCharts
    },
    data(){
return {
    series: [
        {
            name: "Kirim summasi",
            data: [45, 52, 38, 24, 35, 24, 21, 20, 6, 8, 15, 10]
        },
        {
            name: "Chiqim summasi",
            data: [35, 41, 62, 42, 13, 34, 29, 37, 36, 51, 32, 35]
        },
    ],
    chartOptions: {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: true
            },
            toolbar: {
                show: false
            },
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#43D9A9', '#EBC59E'],
        stroke: {
            width: [5, 7, 5],
            curve: 'smooth',
        },
        // title: {
        //     text: 'Page Statistics',
        //     align: 'left'
        // },
        legend: {
            tooltipHoverFormatter: function (val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
            }
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                '10 Jan', '11 Jan', '12 Jan'
            ],
        },
        tooltip: {
            theme: 'dark',
            y: [
                {
                    title: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
                {
                    title: {
                        formatter: function (val) {
                            return val
                        }
                    }
                },
            ]
        },
        grid: {
            borderColor: '#f1f1f1',
            show: true,
        },
        
  
    },
}
    },
}
</script>

<style lang="scss" scoped>
#line-chart{
    background: #FFFFFF!important;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px !important;
    border-radius: 14px;
    width: 100%;
}
.chart{
    padding-top: 20px;
    padding-bottom: 40px;
    border-bottom: 3px solid #F5F5F5;

    .before-chart{
        display: flex;
        justify-content: space-between;

        .chart-settings{
            display: flex;

            div{
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0 0 0 25px;
                font-size: 14px;
                color: #858D90;

                .btn{
                    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px 1px !important;
                    background: #fff!important;
                }
            }
            .green_dot{
                display: inline-block;
                width: 15px;
                height: 15px;
                background: #43D9A9;
                border-radius: 100%;
                margin-right: 5px;
            }
            .brown_dot{
                display: inline-block;
                width: 15px;
                height: 15px;
                background: #EBC59E;
                border-radius: 100%;
                margin-right: 5px;
            }
        }
    }
}

</style>
