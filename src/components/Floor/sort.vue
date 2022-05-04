<!-- 图书分析 玫瑰图-->
<template>
  <div class="sort">
     <div class="contain" ref="sort"></div>
  </div>
</template>

<script>
import axios from 'axios';
import {borrowbook} from '../../assets/data/floor'
export default {
    name: 'Sort',
    data(){
        return{
            //图表实例
            sort:{},
            option:{},
            // 数据
            data:borrowbook
        }
    },
    mounted(){
        this.initChart();
        this.updateChart();
    },
    methods:{
        initChart(){
            this.sort = this.$echarts.init(this.$refs.sort,'chalk');
            const option = {
                backgroundColor: '', //背景透明
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'none',
                    },
                    formatter: (params) => {
                    return params[0].name + ': ' + params[0].value;
                    },
                },
                title:{
                    text:"2021年各书库借阅情况",
                    top:5
                },
                color:'#25ead5',
                xAxis: {
                    data: borrowbook.name,
                    axisTick: { show: false },
                    axisLine: { show: false },
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                        },
                        
                        interval: '0' ,
                        rotate: 40
                    },
                },
                yAxis: {
                    splitLine: { show: false },
                    axisTick: { show: false },
                    axisLine: { show: false },
                    axisLabel: { show: false },
                },

                series: [
                    {
                    name: 'hill',
                    type: 'pictorialBar',
                    // barCategoryGap： 同一系列的柱间距离，默认为类目间距的20%，可设固定值
                    barCategoryGap: '-100%',
                    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                    itemStyle: {
                        // 每根柱子的透明度为 0.7
                        normal: {
                        opacity: 0.7,
                        },
                        // 鼠标移入柱子上 透明度变为 1
                        emphasis: {
                        opacity: 1,
                        },
                    },
                    data: borrowbook.value,
                    z: 10,
                    label: {
                        normal: {
                        // 设置每根柱子上字的位置和颜色
                        show: true,
                        position: 'top',
                        color: '#fff',
                        },
                    },
                    },
                ]
            };
            this.sort.setOption(option)
        },

        updateChart(){
            window.addEventListener('resize', () => {
                    if (this.sort) {
                        this.sort.resize();
                    }
            });
        }
    }
}
</script>
<style scoped>
.sort{
    width: 100%;
    height: 100%;
}
.contain{
    width: 100%;
    height: 100%;
}

</style>