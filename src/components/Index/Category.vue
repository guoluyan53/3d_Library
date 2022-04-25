<!-- 分类饼图 -->
<template>
  <div class="container">
    <div class="chart" ref="cate_ref"></div>
  </div>
</template>

<script>
import { catedata } from '../../assets/data/category.js';
export default {
	data() {
		return {
			//图表实例
			chartInstance: {},
			alldata: null
		};
	},
	mounted() {
		this.initChart();
		this.returndata();
		this.updateChart();
	},
	destroyed() {
		window.removeEventListener('resize', () => {
			if (this.chartInstance) {
				this.chartInstance.resize();
			}
		});
	},
	methods: {
		initChart() {
			this.chartInstance = this.$echarts.init(this.$refs.cate_ref, 'dark'); //将图表实例通过ref进行赋值
      this.alldata=catedata;
			const initOption = {
        color: ['#005de7',
            '#fcd436',
            '#ff333e',
            "#58d9f9",
            "#05c091",
            '#3ad2f8',
            '#33ff87',
            "#38fac9",
            "#ff7f33",
            "#914ee4",
            "#7522dd"],
          backgroundColor: '#020e24',
					title: {
					text: '分类借阅比率',
					padding: [15,20,100,160],
				},
          	series: [
					{
						type: 'pie',
						radius: '65%',
						center: ['50%', '50%'],
						selectedMode: 'single',
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						},
						toolbox: {
							show: true,
							feature: {
								mark: { show: true },
								dataView: { show: true, readOnly: false }
							}
						},
						data: this.alldata,
						tooltip: {
							trigger: 'axis',
							axisPointer: {
								type: 'shadow'
							}
						},
						universalTransition: true,
						itemStyle: {
							borderRadius: 8
						},
						label: {
							show: true,
							// formatter: function(a) {
							// 	var str = ' ';
							// 	return str.concat(a.name + ' ' + {d}% );
							// }
               formatter: "a.name<br/>: {d}%"
						}
					}
				]
      };
			this.chartInstance.setOption(initOption);
		},
    returndata(){
        this.alldata=catedata;
    },
    updateChart(){
      const Option = {

      }
      this.chartInstance.setOption(Option);
			window.addEventListener('resize', () => {
				if (this.chartInstance) {
				this.chartInstance.resize();}
			});
    }
	}
};
</script>
<style scoped>
.container {
	width: 100%;
	height: 100%;
}
.chart {
	width: 100%;
	height: 100%;
}
</style>