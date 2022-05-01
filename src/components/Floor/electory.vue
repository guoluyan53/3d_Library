<!-- 楼层电力分析图表-->
<template>
  <div class="electoryt">
     <div class="contain" ref="electory"></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Electory',
    data(){
        return{
            //图表实例
            electory:{},
            option:{},
            // 数据
            data:''
        }
    },
    mounted(){
        this.initChart();
        this.updateChart();
    },
    methods:{
        initChart(){
            this.electory = this.$echarts.init(this.$refs.electory,'chalk');
            
            const option = {
                backgroundColor: '', //背景透明
                title: {
                    text: '昨日用电量趋势',
                    left:10,
                    top:10
                    // subtext: 'Fake Data'
                },
                grid: {
                    // x: "10%",//x 偏移量
                    y: "22%", // y 偏移量
                    width: "87%", // 宽度
                    height: "65%"// 高度
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    // prettier-ignore
                    data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                    formatter: '{value} W'
                    },
                    axisPointer: {
                    snap: true
                    }
                },
                visualMap: {
                    show: false,
                    dimension: 0,
                    pieces: [
                    {
                        lte: 6,
                        color: '#25ead5'
                    },
                    {
                        gt: 6,
                        lte: 8,
                        color: '#fdf485'
                    },
                    {
                        gt: 8,
                        lte: 14,
                        color: '#25ead5'
                    },
                    {
                        gt: 14,
                        lte: 17,
                        color: '#fdf485'
                    },
                    {
                        gt: 17,
                        color: '#25ead5'
                    }
                    ]
                },
                series: [
                    {
                    name: 'Electricity',
                    type: 'line',
                    smooth: true,
                    // prettier-ignore
                    data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
                    markArea: {
                        itemStyle: {
                        color: 'rgba(32, 110, 212, 0.2)'
                        },
                        data: [
                        [
                            {
                            name: 'Morning Peak',
                            xAxis: '07:30'
                            },
                            {
                            xAxis: '10:00'
                            }
                        ],
                        [
                            {
                            name: 'Evening Peak',
                            xAxis: '17:30'
                            },
                            {
                            xAxis: '21:15'
                            }
                        ]
                        ]
                    }
                    }
                ]
            };

            this.electory.setOption(option)
        },

        updateChart(){
            window.addEventListener('resize', () => {
                    if (this.electory) {
                        this.electory.resize();
                    }
            });
        }
    }
}
</script>
<style scoped>
.electoryt{
    width: 100%;
    height: 100%;
}
.contain{
    width: 100%;
    height: 100%;
}

</style>