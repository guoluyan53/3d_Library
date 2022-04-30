<!--  -->
<template>
	<div class="container">
		<div class="chart" ref="radar_ref"></div>
	</div>
</template>

<script>
import { radardata } from '../../assets/data/radar.js';
export default {
	data() {
		return {
			chartInstance: null,
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
			this.chartInstance = this.$echarts.init(this.$refs.radar_ref, 'chalk');

			this.alldata=radardata;
			const initOption = {
				title: {
					text: '不同读者阅读偏好'
				},
				legend: {
					data: ['研究生', '教职工', '本科生', '教授', '其他人员'],
					icon: 'circle'
				},
				tooltip: {
					confine: true,
					trigger: 'legend'
				},
				radar: {
					// shape: 'circle',
					indicator: this.alldata.indicator,
					axisLine: {
						// 设置雷达图中间射线的颜色
						lineStyle: {
							color: '#c0c0c0'
						}
					},
					splitArea: {
						//设置图表颜色，show的值为true
						show: true,
						areaStyle: {
							color: '' //一般设置方式
						}
					},
					splitLine: {
						//网格颜色设置
						show: true,
						lineStyle: {
							width: 1,
							color: '#1e83e4'
						}
					}
				}
			};
			this.chartInstance.setOption(initOption);
		},
		returndata() {
			// this.alldata=radardata;
		},
		updateChart() {
			const Option = {
				series: [
					{
						type: 'radar',
						data: [
							{
								value: this.alldata.seriesdata[0].value,
								name: '研究生',
								areaStyle: {
									color: '#005de7',
									opacity: 0.8
								},
							},
							{
								value:this.alldata.seriesdata[1].value,
								name: '教职工',
								areaStyle: {
									color: '#fcd436',
									opacity: 0.8
								}
							},
							{
								value:this.alldata.seriesdata[2].value,
								name: '本科生',
								areaStyle: {
									color: '#ff333e',
									opacity: 0.8
								}
							},
							{
								value: this.alldata.seriesdata[3].value,
								name: '教授',
								areaStyle: {
									color: '#58d9f9',
									opacity: 0.8
								}
							},
							{
								value: this.alldata.seriesdata[4].value,
								name: '其他人员',
								areaStyle: {
									color: '#05c091',
									opacity: 0.4
								}
							}
						]
					}
				]
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
<style  scoped>
.container {
	width: 100%;
	height: 100%;
	/* background-image: url('../../assets/image/indexkuang.png');
	background-repeat: no-repeat;
	background-size: cover; */
}
.chart {
	width: 100%;
	height: 100%;
}
</style>