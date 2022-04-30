<!-- 图书分析 中间下面的环形饼图-->
<template>
  <div class="hotbook">
     <div class="contain" ref="hot"></div>
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
            hotbook:{},
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
            this.hotbook = this.$echarts.init(this.$refs.hot,'dark');
            const option = {
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    top: 'center',
                    right: 'right'
                },
                title:{
                    text:'计算机学院',
                    top:'center',
                    left:'center'
                },
            series: [
                {
                name: '书籍类型',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                    show: false,
                    fontSize: '40',
                    fontWeight: 'bold'
                    },
                },
                labelLine: {
                    show: false
                },
                data: this.data
            }
        ]
    };
    this.hotbook.setOption(option)
    },

    updateChart(){
    //   const Option = {

    //   }
      this.chartInstance.setOption(option);
	  window.addEventListener('resize', () => {
			if (this.chartInstance) {
				this.chartInstance.resize();}
		});
    }
}
}
</script>
<style scoped>
.hotbook{
    width: 100%;
    height: 100%;
}
.contain{
    width: 100%;
    height: 100%;
}

</style>