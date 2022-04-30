<!-- 图书分析 中间下面的环形饼图-->
<template>
  <div class="hotbook">
     <div class="contain" ref="hot1"></div>
     <div class="contain" ref="hot2"></div>
  </div>
</template>

<script>
import axios from 'axios';
import {hotbook} from "../../assets/data/book"
export default {
    name: 'Hotbook',
    data(){
        return{
            //图表实例
            hotbook1:{},
            hotbook2:{},
            // 数据
            data:hotbook
        }
    },
    mounted(){
        this.initChart();
        this.updateChart();
    },
    methods:{
        initChart(){
            this.hotbook1 = this.$echarts.init(this.$refs.hot1,'chalk');
            this.hotbook2 = this.$echarts.init(this.$refs.hot2,'chalk');
            const option = {
                backgroundColor: '', //背景透明
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    top: 'center',
                    left: '60%',
                    textStyle: {
                        color: '#fff'   // 图例文字颜色
                    }
                },
                title:{
                    text:'计算机学院',
                    top:'center',
                    left:'19%'
                },
                // grid: {
                //     left: "3%",
                //     // right: "20%",
                //     // bottom: "3%",
                //     containLabel: true,
                // },
            series: [
                {
                name: '书籍类型',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                center:['35%','50%'],
                itemStyle: {
                    borderRadius: 5,
                    // borderColor: '#fff', //圆形边框
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                    show: false,
                    fontSize: '30',
                    // fontWeight: 'bold'
                    },
                },
                labelLine: {
                    show: false
                },
                data: this.data
            }
        ]
    };
    this.hotbook1.setOption(option);
    this.hotbook2.setOption(option);
    },

    updateChart(){
	  window.addEventListener('resize', () => {
			if (this.hotbook1 && this.hotbook2) {
				this.hotbook1.resize();
                this.hotbook2.resize();
            }
		});
    }
}
}
</script>
<style scoped>
.hotbook{
    width: 100%;
    height: 100%;
    /* display: flex; */
    /* justify-content: space-around; */
}
.contain{
    display: inline-block;
    width: 50%;
    height: 100%;
}

</style>