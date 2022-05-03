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
        async initChart(){
            await axios.get('/api//BookAnalysis/PieRoseType').then(res=>{
                this.data = res.data.data;
            });
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
                    show:false,
                    bottom:2,
                    textStyle: {
                        color: '#fff'
                    }
                },
                series: [
                    {
                    name: 'Nightingale Chart',
                    type: 'pie',
                    radius: [50 , 80],
                    center: 'center',
                    roseType: 'area',
                    itemStyle: {
                        
                        normal: {
                            borderRadius: 8,
                            label: {                 //指示到模块的标签文字
                                show: true,
                                color:'white',
                            },
                            labelLine: {             //指示到模块的标签线
                                show: true,
                            }
                        }
                    },
                    data: this.data
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
}
.contain{
    width: 100%;
    height: 100%;
   transform: scale(0.95)
}

</style>