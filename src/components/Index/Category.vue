<!-- 分类饼图 -->
<template>
	<div class="container">
		<div class="title">
			<p class="title-p">分类借阅比率</p>
		</div>
		<div class="chart-box">
			<div class="chart" ref="cate_ref"></div>
		</div>
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
			this.chartInstance = this.$echarts.init(this.$refs.cate_ref, 'chalk'); //将图表实例通过ref进行赋值
			this.alldata = catedata;
			const initOption = {
				color: [
					'#005de7',
					'#fcd436',
					'#ff333e',
					'#58d9f9',
					'#05c091',
					'#3ad2f8',
					'#33ff87',
					'#38fac9',
					'#ff7f33',
					'#914ee4',
					'#7522dd'
				],
				backgroundColor: '',

				series: [
					{
						type: 'pie',
						radius: ['50%', '70%'],
						center: ['50%', '50%'],
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
							formatter: function(a) {
								var str = ' ';
								return str.concat(a.name + ' ');
							}
						}
					}
				]
			};
			this.chartInstance.setOption(initOption);
		},
		returndata() {
			this.alldata = catedata;
		},
		updateChart() {
			const Option = {};
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
.container {
	width: 100%;
	height: 100%;
}
.chart-box {
	width: 100%;
	height: 100%;
	background-image: url('../../assets/image/roll_back1.png');
	background-repeat: no-repeat;
	background-size: (100%, 100%);
}
.chart {
	width: 100%;
	height: 100%;
	transform: scale(0.9);
}
.title {
	width: 100%;
	height: 1.5rem;
	background-image: url('../../assets/image/rolltitle.png');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	color: white;
}
.title-p {
	transform: translate(-4rem, 0.1rem);
	letter-spacing: 1.6px;
	font-size: 0.8rem;
}
</style>