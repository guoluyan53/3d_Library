<!--  -->
<template>
    <div class="container1">
        <!-- //通过ref属性进行图表盒子的获取this.$refs.名字 -->
        <div class="chart1" ref="total_ref">
        </div>
    </div>
</template>

<script>
// import {xdata,readdata} from '/src/assets/jstest/Analyse/readtotal.js '
export default {
	data() {
		return {
			//图表实例
			chartInstance: null,
			allData: null //从服务器中获取的所有数据
		};
	},
	mounted() {
		this.initChart();
		this.getData();
		this.updateChart();
	},
	methods: {
		initChart() {
			this.chartInstance = this.$echarts.init(this.$refs.total_ref, 'chalk'); //将图表实例通过ref进行赋值
			const initOption = {
				color: ['#06d3a0', '#0066ff'],
				backgroundColor: '',
				title: {
					text: '不同月份异常商品总数',
					padding: [20, 20, 100, 100]
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#999'
						}
					},
					textstyle: {
						fontSize: 18
					}
				}, 
				//直角坐标轴的位置
				grid: {
					top: '20%',
					left: '12%',
					right: '6%',
					bottom: '18%',
					containLable: true //距离包含坐标轴上的文字
				}
			};
			this.chartInstance.setOption(initOption);
		},

		//获取服务器数据的方法
		getData() {},

		//处理数据的方法
		updateChart() {
			const Option = {
				xAxis: {
					type: 'category',
					data: ['计算机信息工程学院','体育学院','美术学院','商学院','文学院'],
				},
				yAxis: {
                    type: 'value'
				},
				series: {
					type: 'bar',
					data: [100,200,600,350,426],
					barWidth: 50,
					label: {
						show: true,
						position: 'right',
						textStyle: {
							color: 'white'
						}
					},
					itemStyle: {
						color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
							{
								offset: 0,
								color: '#5052EE'
							},
							{
								offset: 1,
								color: '#AB6EE5'
							}
						])
					}
				}
			};
            this.chartInstance.setOption(Option);
			window.addEventListener('resize', () => {
				if (this.chartInstance) {
					this.chartInstance.resize();
				}
			});
		}
	}
};
</script>
<style scoped>
.container1 {
	width: 100%;
	height: 100%;
}
.chart1 {
	width: 96%;
	height: 100%;
}
</style>