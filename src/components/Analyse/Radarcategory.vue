<!-- 不同读者阅读偏好雷达图 -->
<template>
	<div class="container">
		<p>不同读者借阅偏好</p>
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
				backgroundColor:'',
				legend: {
					data: ['研究生', '教职工', '本科生', '教授', '其他人员'],
					icon: 'circle',
					textStyle:{
                            fontSize: 14,//字体大小
                            color: '#ffffff'//字体颜色
                        },
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
p {
	color:white;
	font-weight: bolder;
	margin: 0;
	padding: 0
}
.container {
	width: 100%;
	height: 100%;
	align-items: center;
	background-image: url('../../assets/image/indexkuang.png');
	background-repeat: no-repeat;
	background-size: 100% 100%;
}
.chart {
	width: 100%;
	height: 96%;
	transform: scale(0.9);
}
</style>