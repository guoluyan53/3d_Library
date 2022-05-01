<!-- 图书分析 玫瑰图-->
<template>
  <div class="rose">
     <div class="contain" ref="rose"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Rose',
    data(){
        return{
            //图表实例
            rose:{},
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
            this.rose = this.$echarts.init(this.$refs.rose,'chalk');
            const option = {
                backgroundColor: '', //背景透明
                title: [
                    {
                    text: '图书分类借阅比',
                    left: 'center',
                    top: 10,
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 20
                    }
                    }
                ],
                legend: {
                    top: 'bottom',
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [50 , 100],
                    center: 'center',
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        { value: 40, name: 'rose 1' },
                        { value: 38, name: 'rose 2' },
                        { value: 32, name: 'rose 3' },
                        { value: 30, name: 'rose 4' },
                        { value: 28, name: 'rose 5' },
                        { value: 26, name: 'rose 6' },
                        { value: 22, name: 'rose 7' },
                        { value: 18, name: 'rose 8' }
                    ]
                    }
                ]
            };
            this.rose.setOption(option)
        },

        updateChart(){
            window.addEventListener('resize', () => {
                    if (this.rose) {
                        this.rose.resize();
                    }
                });
        }
    }
}
</script>
<style scoped>
.rose{
    width: 100%;
    height: 100%;
    background-color: transparent;
}
.contain{
    width: 100%;
    height: 100%;
    background-color: transparent;
}

</style>