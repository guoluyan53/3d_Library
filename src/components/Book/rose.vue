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
        // this.updateChart();
    },
    methods:{
        initChart(){
            this.rose = this.$echarts.init(this.$refs.rose,'dark');
            const option = {
                legend: {
                    top: 'bottom'
                },
                series: [
                    {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [50, 250],
                    center: ['50%', '50%'],
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
        //   const Option = {

        //   }
        this.rose.setOption(this.option);
        window.addEventListener('resize', () => {
                if (this.chartInstance) {
                    this.chartInstance.resize();}
            });
        }
    }
}
</script>
<style scoped>
.rose{
    width: 100%;
    height: 100%;
}
.contain{
    width: 100%;
    height: 100%;
}

</style>