<!-- 图书分析 玫瑰图-->
<template>
  <div class="top">
     <div class="contain" ref="top"></div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Top',
    data(){
        return{
            //图表实例
            top:{},
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
            this.top = this.$echarts.init(this.$refs.top,'chalk');
            //Y轴的数据，和数据值位置一一对应
            var cate = [
                "人民教育出版社",
                "人民邮电出版社",
                "清华大学出版社",
                "科学出版社",
                "教育科学出版社",
            ];
            //数据值，顺序和Y轴的名字一一对应
            var barData = [3214, 4322, 5244, 8187, 9000];
            var option = {
                backgroundColor: '', //背景透明
                title: {
                    text: "热门出版社top5",
                    x:"center",
                    y:20,
                    textStyle:{
                        color:'#fff'
                    },
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                    },
                    backgroundColor: 'rgba(0,0,0,0.7)',     // 提示背景颜色，默认为透明度为0.7的黑色
                    borderColor: '#333',       // 提示边框颜色
                    borderRadius: 4,    
                    textStyle: {
                        color: '#fff'
                    }  
                },
                //图表位置
                grid: {
                    left: "10%",
                    // right: "4%",
                    bottom: "3%",
                    containLabel: true,
                },
                //X轴
                xAxis: {
                    type: "value",
                    axisLine: {
                        show: false,
                },
                axisTick: {
                    show: false,
                },
                //不显示X轴刻度线和数字
                splitLine: { show: false },
                axisLabel: { show: false },
                },
                yAxis: {
                    type: "category",
                    data: cate,   //y轴的数据：书本名
                    //升序
                    inverse: true,
                    splitLine: { show: false },
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        textStyle: {
                            color:  '#fff' , //坐标值得具体的颜色
    
                        }
                    },
                    //key和图间距
                    offset: 5,
                    //key文字大小
                    nameTextStyle: {
                        fontSize: 5,
                    },
                },
                series: [
                {
                    //柱状图自动排序，排序自动让Y轴名字跟着数据动
                    realtimeSort: true,
                    name: "数量",
                    type: "bar",
                    data: barData,  //x轴数据：借阅数量，x轴不显示
                    barWidth: 14,
                    barGap: 10,
                    smooth: true,
                    valueAnimation: true,
                    //Y轴数字显示部分
                    label: {
                    normal: {
                        show: true,
                        position: '50%',
                        valueAnimation: true,
                        offset: [20, 3],
                        textStyle: {
                        color: "#fff",
                        fontSize: 10,
                        },
                    },
                    },
                    itemStyle: {
                    emphasis: {
                        barBorderRadius: 7,
                    },
                    //颜色样式部分
                    normal: {
                        barBorderRadius: 7,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: "#143770" },
                        { offset: 1, color: "#3893d1" },
                        ]),
                    },
                    },
                },
                ],   
            };

            this.top.setOption(option)
        },

        updateChart(){
            window.addEventListener('resize', () => {
                    if (this.top) {
                        this.top.resize();
                    }
            });
        }
    }
}
</script>
<style scoped>
.top{
    width: 100%;
    height: 100%;
}
.contain{
    width: 100%;
    height: 100%;
}

</style>