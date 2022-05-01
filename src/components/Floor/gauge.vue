<!-- 图书分析 玫瑰图-->
<template>
  <div class="gauge">
     <div class="contain" ref="gauge1"></div>
     <div class="contain" ref="gauge2"></div>
     <div class="contain" ref="gauge3"></div>
     <div class="contain" ref="gauge4"></div>
  </div>
</template>

<script>
import axios from 'axios';
import {shuku1,shuku2,shuku3,shuku4} from '../../assets/data/floor';
export default {
    name: 'Gauge',
    data(){
        return{
            //图表实例
            gauge1:{},
            gauge2:{},
            gauge3:{},
            gauge4:{},
            // 数据
            data:shuku1
        }
    },
    mounted(){
        this.initChart();
        this.updateChart();
    },
    methods:{
        changedata(){
            
        },
        initChart(){
            this.gauge1 = this.$echarts.init(this.$refs.gauge1,'chalk');
            this.gauge2 = this.$echarts.init(this.$refs.gauge2,'chalk');
            this.gauge3 = this.$echarts.init(this.$refs.gauge3,'chalk');
            this.gauge4 = this.$echarts.init(this.$refs.gauge4,'chalk');
            
            const option1 = {
                backgroundColor: '', //背景透明
                title: { // 标题组件，包含主标题和副标题
                    text: this.data[0].name, // 主标题文本，支持使用 \n 换行。
                    bottom: "bottom", // title 组件离容器上侧的距离。top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
                    left: "center", // title 组件离容器左侧的距离。 ...同上
                    textStyle: { // 主标题文字的设置
                        fontSize: 18,
                        fontWeight: "normal",
                    },
                },
                series: [
                    {
                        type: 'gauge', // 测量仪
                        center: ['50%', '50%'], // 图形坐标位置 左, 右
                        radius: '60%', // 控制饼图的大小
                        startAngle: 90, // 开始位置
                        endAngle: -270, // 结束位置
                        pointer: { // 显示仪表盘指针
                            show: false // 是否显示仪表盘指针
                        },
                        progress: { // 展示当前进度。
                            show: true, // 是否展示进度条
                            overlap: false, // 是否重叠
                            roundCap: true, // 是否圆顶
                            clip: false, // 是否裁掉超出部分
                            itemStyle: {
                                // 设置圆形
                                color: '#e769a2', // 设置进度条初期式样
                            }
                        },
                        axisLine: {
                            // 设置线条
                            lineStyle: {
                                width: 12, // 线条宽度
                                color: [[1, '#081d54']] // 不透明度, 线条设置背景色
                            }
                        },
                        splitLine: { // 分隔线样式。
                            show: false, // 是否显示分隔线。
                            distance: 0, // 分隔线与轴线的距离。
                            length: 1033 // 分隔线线长。支持相对半径的百分比。
                        },
                        axisTick: { // 刻度样式。
                            show: false // 是否显示刻度。
                        },
                        axisLabel: { //刻度标签。
                            show: false, // 是否显示标签。
                            distance: 50 // 标签与刻度线的距离。
                        },
                        data: [
                            {
                                value: this.data[0].value, // 可写变量  此value 对应 formatter: '{value}%' 中的Value  64类型不对请用'64'
                                detail: {  // 仪表盘边框数据详情，用于显示数据。
                                    valueAnimation: true, // 是否开启标签的数字动画。
                                    offsetCenter: ['0%', '0%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                                    fontSize: 20 // 文字的字体大小。
                                }
                            }
                        ],
                        detail: { //仪表盘详情，用于显示数据 仪表盘中间数字数据。
                            color: '#e769a2', // 文本颜色，默认取数值所在的区间的颜色
                            formatter: '{value}%' // 格式化函数或者字符串  formatter: function (value) { return value.toFixed(0);}
                        },
                    }
                ]
            };

            const option2 = {
                backgroundColor: '', //背景透明
                title: { // 标题组件，包含主标题和副标题
                    text: this.data[1].name, // 主标题文本，支持使用 \n 换行。
                    bottom: "bottom", // title 组件离容器上侧的距离。top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
                    left: "center", // title 组件离容器左侧的距离。 ...同上
                    textStyle: { // 主标题文字的设置
                        fontSize: 18,
                        fontWeight: "normal",
                    },
                },
                series: [
                    {
                        type: 'gauge', // 测量仪
                        center: ['50%', '50%'], // 图形坐标位置 左, 右
                        radius: '60%', // 控制饼图的大小
                        startAngle: 90, // 开始位置
                        endAngle: -270, // 结束位置
                        pointer: { // 显示仪表盘指针
                            show: false // 是否显示仪表盘指针
                        },
                        progress: { // 展示当前进度。
                            show: true, // 是否展示进度条
                            overlap: false, // 是否重叠
                            roundCap: true, // 是否圆顶
                            clip: false, // 是否裁掉超出部分
                            itemStyle: {
                                // 设置圆形
                                color: '#fdf485', // 设置进度条初期式样
                            }
                        },
                        axisLine: {
                            // 设置线条
                            lineStyle: {
                                width: 12, // 线条宽度
                                color: [[1, '#081d54']] // 不透明度, 线条设置背景色
                            }
                        },
                        splitLine: { // 分隔线样式。
                            show: false, // 是否显示分隔线。
                            distance: 0, // 分隔线与轴线的距离。
                            length: 1033 // 分隔线线长。支持相对半径的百分比。
                        },
                        axisTick: { // 刻度样式。
                            show: false // 是否显示刻度。
                        },
                        axisLabel: { //刻度标签。
                            show: false, // 是否显示标签。
                            distance: 50 // 标签与刻度线的距离。
                        },
                        data: [
                            {
                                value: this.data[1].value, // 可写变量  此value 对应 formatter: '{value}%' 中的Value  64类型不对请用'64'
                                detail: {  // 仪表盘边框数据详情，用于显示数据。
                                    valueAnimation: true, // 是否开启标签的数字动画。
                                    offsetCenter: ['0%', '0%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                                    fontSize: 20 // 文字的字体大小。
                                }
                            }
                        ],
                        detail: { //仪表盘详情，用于显示数据 仪表盘中间数字数据。
                            color: '#fdf485', // 文本颜色，默认取数值所在的区间的颜色
                            formatter: '{value}%' // 格式化函数或者字符串  formatter: function (value) { return value.toFixed(0);}
                        },
                    }
                ]
            };

            const option3 = {
                backgroundColor: '', //背景透明
                title: { // 标题组件，包含主标题和副标题
                    text: this.data[2].name, // 主标题文本，支持使用 \n 换行。
                    bottom: "bottom", // title 组件离容器上侧的距离。top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
                    left: "center", // title 组件离容器左侧的距离。 ...同上
                    textStyle: { // 主标题文字的设置
                        fontSize: 18,
                        fontWeight: "normal",
                    },
                },
                series: [
                    {
                        type: 'gauge', // 测量仪
                        center: ['50%', '50%'], // 图形坐标位置 左, 右
                        radius: '60%', // 控制饼图的大小
                        startAngle: 90, // 开始位置
                        endAngle: -270, // 结束位置
                        pointer: { // 显示仪表盘指针
                            show: false // 是否显示仪表盘指针
                        },
                        progress: { // 展示当前进度。
                            show: true, // 是否展示进度条
                            overlap: false, // 是否重叠
                            roundCap: true, // 是否圆顶
                            clip: false, // 是否裁掉超出部分
                            itemStyle: {
                                // 设置圆形
                                color: '#a349f4', // 设置进度条初期式样
                            }
                        },
                        axisLine: {
                            // 设置线条
                            lineStyle: {
                                width: 12, // 线条宽度
                                color: [[1, '#081d54']] // 不透明度, 线条设置背景色
                            }
                        },
                        splitLine: { // 分隔线样式。
                            show: false, // 是否显示分隔线。
                            distance: 0, // 分隔线与轴线的距离。
                            length: 1033 // 分隔线线长。支持相对半径的百分比。
                        },
                        axisTick: { // 刻度样式。
                            show: false // 是否显示刻度。
                        },
                        axisLabel: { //刻度标签。
                            show: false, // 是否显示标签。
                            distance: 50 // 标签与刻度线的距离。
                        },
                        data: [
                            {
                                value: this.data[2].value, // 可写变量  此value 对应 formatter: '{value}%' 中的Value  64类型不对请用'64'
                                detail: {  // 仪表盘边框数据详情，用于显示数据。
                                    valueAnimation: true, // 是否开启标签的数字动画。
                                    offsetCenter: ['0%', '0%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                                    fontSize: 20 // 文字的字体大小。
                                }
                            }
                        ],
                        detail: { //仪表盘详情，用于显示数据 仪表盘中间数字数据。
                            color: '#a349f4', // 文本颜色，默认取数值所在的区间的颜色
                            formatter: '{value}%' // 格式化函数或者字符串  formatter: function (value) { return value.toFixed(0);}
                        },
                    }
                ]
            };

            const option4 = {
                backgroundColor: '', //背景透明
                title: { // 标题组件，包含主标题和副标题
                    text: this.data[3].name, // 主标题文本，支持使用 \n 换行。
                    bottom: "bottom", // title 组件离容器上侧的距离。top 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'top', 'middle', 'bottom'
                    left: "center", // title 组件离容器左侧的距离。 ...同上
                    textStyle: { // 主标题文字的设置
                        fontSize: 18,
                        fontWeight: "normal",
                    },
                },
                series: [
                    {
                        type: 'gauge', // 测量仪
                        center: ['50%', '50%'], // 图形坐标位置 左, 右
                        radius: '60%', // 控制饼图的大小
                        startAngle: 90, // 开始位置
                        endAngle: -270, // 结束位置
                        pointer: { // 显示仪表盘指针
                            show: false // 是否显示仪表盘指针
                        },
                        progress: { // 展示当前进度。
                            show: true, // 是否展示进度条
                            overlap: false, // 是否重叠
                            roundCap: true, // 是否圆顶
                            clip: false, // 是否裁掉超出部分
                            itemStyle: {
                                // 设置圆形
                                color: '#25ead5', // 设置进度条初期式样
                            }
                        },
                        axisLine: {
                            // 设置线条
                            lineStyle: {
                                width: 12, // 线条宽度
                                color: [[1, '#081d54']] // 不透明度, 线条设置背景色
                            }
                        },
                        splitLine: { // 分隔线样式。
                            show: false, // 是否显示分隔线。
                            distance: 0, // 分隔线与轴线的距离。
                            length: 1033 // 分隔线线长。支持相对半径的百分比。
                        },
                        axisTick: { // 刻度样式。
                            show: false // 是否显示刻度。
                        },
                        axisLabel: { //刻度标签。
                            show: false, // 是否显示标签。
                            distance: 50 // 标签与刻度线的距离。
                        },
                        data: [
                            {
                                value: this.data[3].value, // 可写变量  此value 对应 formatter: '{value}%' 中的Value  64类型不对请用'64'
                                detail: {  // 仪表盘边框数据详情，用于显示数据。
                                    valueAnimation: true, // 是否开启标签的数字动画。
                                    offsetCenter: ['0%', '0%'], // 相对于仪表盘中心的偏移位置，数组第一项是水平方向的偏移，第二项是垂直方向的偏移。可以是绝对的数值，也可以是相对于仪表盘半径的百分比。
                                    fontSize: 20 // 文字的字体大小。
                                }
                            }
                        ],
                        detail: { //仪表盘详情，用于显示数据 仪表盘中间数字数据。
                            color: '#25ead5', // 文本颜色，默认取数值所在的区间的颜色
                            formatter: '{value}%' // 格式化函数或者字符串  formatter: function (value) { return value.toFixed(0);}
                        },
                    }
                ]
            };

            this.gauge1.setOption(option1);
            this.gauge2.setOption(option2);
            this.gauge3.setOption(option3);
            this.gauge4.setOption(option4);
        },

        updateChart(){
            window.addEventListener('resize', () => {
                    if (this.gauge1 && this.gauge2 && this.gauge3 && this.gauge4) {
                        this.gauge1.resize();
                        this.gauge2.resize();
                        this.gauge3.resize();
                        this.gauge4.resize();
                    }
            });
        }
    }
}
</script>
<style scoped>
.gauge{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
.contain{
    width: 50%;
    height: 50%;
}

</style>