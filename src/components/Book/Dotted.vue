<!-- 图书分析 玫瑰图-->
<template>
  <div class="dotted">
     <div class="contain" ref="dotted"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Dotted',
    data(){
        return{
            //图表实例
            dotted:{},
            option:{},
            // 数据
            data:''
            // {
            //     types:[], 类型X轴
            //     number:[], 数量Y轴
            //     lineData:[],  //折线
            //     barDate:[]  //柱状
            // }
        }
    },
    mounted(){
        this.initChart();
        this.updateChart();
    },
    methods:{
        async initChart(){
            this.dotted = this.$echarts.init(this.$refs.dotted,'chalk ');
            await axios.get('/api/BookAnalysis/CollectionUtilization').then(res=>{
                this.data = res.data.data;
                console.log(res);
            })
            const option = {
                backgroundColor: '', //背景透明
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                    type: 'shadow'
                    }
                },
                title: [
                    {
                    text: '馆藏图书利用率',  //这里标题还要改
                    left: 'center',
                    top:0,
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 18,
                        color:'#fff'
                    }
                    }
                ],
                legend: {
                    padding:[30,50,0,0],  
                    data: ['line', 'bar'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                xAxis: {
                    data: this.data.types,  //书籍的分类
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff',
                            fontSize:8
                        },                        
                        interval: '0' ,
                        rotate: 40
                    },
                },
                yAxis: {
                    splitLine: { show: false },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                },
                grid: {
                    x: "15%",
                    y: "5%", // y 偏移量
                    width: "80%", // 宽度
                    height: "80%",// 高度
                    bottom:0
                },
                series: [
                    {
                    name: 'line（总馆藏量）',
                    type: 'line',
                    smooth: true,
                    showAllSymbol: true,
                    symbol: 'emptyCircle',
                    symbolSize: 10,
                    data: this.data.lineData
                    },
                    {
                    name: 'bar（年度借阅量）',
                    type: 'bar',
                    barWidth: 5,
                    itemStyle: {
                        borderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#14c8d4' },
                        { offset: 1, color: '#43eec6' }
                        ])
                    },
                    data: this.data.barData
                    },
                    {
                    name: 'line（总馆藏量）',
                    type: 'bar',
                    barGap: '-100%',
                    barWidth: 5,
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(20,200,212,0.5)' },
                        { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
                        { offset: 1, color: 'rgba(20,200,212,0)' }
                        ])
                    },
                    z: -12,
                    data: this.data.lineData
                    },
                    {
                    name: 'dotted（总馆藏量）',
                    type: 'pictorialBar',
                    symbol: 'rect',
                    itemStyle: {
                        color: '#0f375f'
                    },
                    symbolRepeat: true,
                    symbolSize: [12, 4],
                    symbolMargin: 1,
                    z: -10,
                    data: this.data.lineData
                    }
                ]
            };
            this.dotted.setOption(option)
        },

        updateChart(){
            window.addEventListener('resize', () => {
                    if (this.dotted) {
                        this.dotted.resize();}
                });
        }
    }
}
</script>
<style scoped>
.dotted{
    width: 100%;
    height: 100%;
}
.contain{
    width: 100%;
    height: 100%;
}

</style>