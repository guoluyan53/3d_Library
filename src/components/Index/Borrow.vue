<!--首页的借书和还书情况 按照 日（从早上7:00到傍晚17:00） 周（本月第一周 第二周） 月份（2021年的8 9 10等等1月 2月 3月 4月） -->
<template>
	<div class="container">
		<!-- 导航栏 -->
		<div class="nav">
			<li v-for="(item,index) in tabs" :key="item" :class="{active:index == num}" @click="tab(index)">{{item}}</li>
		</div>

		<!-- 总数 -->
		<div class="total">
			<div class="total-count1">
				<div class="borrow-book">
					<p>总借书量</p>
					<p class="borrow-book-value">{{firstborrow}}</p>
				</div>
			</div>

			<div class="total-count2">
				<div class="return-book">

					<p>总还书量</p>
					<p class="return-book-value">{{firstreturn}}</p>
				</div>
			</div>
		</div>

		<div class="chart" ref="borrow_ref"></div>
	</div>
</template>

<script>
import { borrowdata } from '../../assets/data/borrow.js';
export default {
	data() {
		return {
			firstborrow: 600,
			firstreturn: 500,
			chartInstance: {},
			tabs: ['近六日', '近六周', '近六月'],
			alldata: null,
			num: '', //即li的类名，通过类名控制选项卡样式
			borrowtotal: [600, 6000, 60000], //数据总量
			returntotal: [500, 5000, 50000], //异常数据总量
			Btotallist: [], //3个库的6个月的数据数组
			Rtotallist: []
		};
	},
	mounted() {
		this.returndata();
		this.initChart();
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
		returndata() {
			// axios获取数据
			this.alldata = borrowdata;
			for (let i = 0; i < 3; i++) {
				for (let j = 0; j < 6; j++) {
					this.Btotallist.push(this.alldata[i].data[j].borrowtotal);
					this.Rtotallist.push(this.alldata[i].data[j].returntotal);
				}
			}
			console.log(this.Btotallist);
			console.log(this.Rtotallist);
		},
		initChart() {
			//挂载
			this.chartInstance = this.$echarts.init(this.$refs.borrow_ref, 'chalk');
			const initOption = {
				backgroundColor: '',
				//提示框
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				//图例
				legend: {
					left: 300,
					top: '4%',
					left: '46%',
					data: ['借书数', '还书数'],
					textStyle: {
						fontSize: 12, //字体大小
						color: '#ffffff' //字体颜色
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					// bottom: '10%',
					containLabel: true
				},
				xAxis: {
					type: 'value',
					splitLine: false,
					boundaryGap: [0, 0.01],
					axisLine: {
						lineStyle: {
							color: 'white'
						}
					}
				},
				yAxis: {
					type: 'category',
					data: ['周一', '周二', '周三', '周四', '周五', '周六'],
					axisLine: {
						lineStyle: {
							color: 'white'
						}
					}
				}
			};
			//设置初始选项 同时实现自适应
			this.chartInstance.setOption(initOption);
			window.addEventListener('resize', () => {
				if (this.chartInstance) {
					this.chartInstance.resize();
				}
			});
		},

		//更新图标数据
		updateChart() {
			const Option = {
				series: [
					{
						name: '借书数',
						type: 'bar',
						data: this.Btotallist.slice(0, 6),
						itemStyle: {
							barBorderRadius: [0, 33, 33, 0],
							color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
								{
									offset: 0,
									color: '#50abfd'
								},
								{
									offset: 1,
									color: '#05edfb'
								}
							])
						}
					},
					{
						name: '还书数',
						type: 'bar',
						data: this.Rtotallist.slice(0, 6),
						itemStyle: {
							barBorderRadius: [0, 33, 33, 0],
							color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
								{
									offset: 0,
									color: '#1bfdf2'
								},
								{
									offset: 1,
									color: '#3de6bd'
								}
							])
						}
					}
				]
			};
			this.chartInstance.setOption(Option);
			window.addEventListener('resize', () => {
				if (this.chartInstance) {
					this.chartInstance.resize();
				}
			});
		},

		//导航栏切换功能
		tab: function(index) {
			this.num = index; //即li的类名，通过类名控制选项卡样式
			this.firstborrow = this.borrowtotal[index];
			this.firstreturn = this.returntotal[index];
			//设置默认值，传为0
			if (index == 0) {
				var option = {
					yAxis: {
						type: 'category',
						data: ['周一', '周二', '周三', '周四', '周五', '周六'],
						axisLine: {
							lineStyle: {
								color: 'white'
							}
						}
					},
					series: [
						{
							name: '借书数',
							type: 'bar',
							data: this.Btotallist.slice(0, 6),
							itemStyle: {
								barBorderRadius: [0, 33, 33, 0],
								color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
									{
										offset: 0,
										color: '#50abfd'
									},
									{
										offset: 1,
										color: '#05edfb'
									}
								])
							}
						},
						{
							name: '还书数',
							type: 'bar',
							data: this.Rtotallist.slice(0, 6),
							itemStyle: {
								barBorderRadius: [0, 33, 33, 0],
								color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
									{
										offset: 0,
										color: '#1bfdf2'
									},
									{
										offset: 1,
										color: '#3de6bd'
									}
								])
							}
						}
					]
				};
				this.chartInstance.setOption(option); //更改（而非覆盖）图表数据
			} else if (index == 1) {
				var option = {
					yAxis: {
						type: 'category',
						data: ['第一周', '第二周', '第三周', '第四周', '第五周', '第六周'],
						axisLine: {
							lineStyle: {
								color: 'white'
							}
						}
					},
					series: [
						{
							name: '借书数',
							type: 'bar',
							data: this.Btotallist.slice(6, 12),
							itemStyle: {
								barBorderRadius: [0, 33, 33, 0],
								color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
									{
										offset: 0,
										color: '#50abfd'
									},
									{
										offset: 1,
										color: '#05edfb'
									}
								])
							}
						},
						{
							name: '还书数',
							type: 'bar',
							data: this.Rtotallist.slice(6, 12),
							itemStyle: {
								barBorderRadius: [0, 33, 33, 0],
								color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
									{
										offset: 0,
										color: '#1bfdf2'
									},
									{
										offset: 1,
										color: '#3de6bd'
									}
								])
							}
						}
					]
				};
				this.chartInstance.setOption(option); //更改（而非覆盖）图表数据
			} else if (index == 2) {
				var option = {
					yAxis: {
						type: 'category',
						data: ['2021.11', '2021.12', '2022.01', '2022.02', '2022.03', '2022.04'],
						axisLine: {
							lineStyle: {
								color: 'white'
							}
						}
					},
					series: [
						{
							name: '借书数',
							type: 'bar',
							data: this.Btotallist.slice(12, 18),
							itemStyle: {
								barBorderRadius: [0, 33, 33, 0],
								color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
									{
										offset: 0,
										color: '#50abfd'
									},
									{
										offset: 1,
										color: '#05edfb'
									}
								])
							}
						},
						{
							name: '还书数',
							type: 'bar',
							data: this.Rtotallist.slice(12, 18),
							itemStyle: {
								barBorderRadius: [0, 33, 33, 0],
								color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
									{
										offset: 0,
										color: '#1bfdf2'
									},
									{
										offset: 1,
										color: '#3de6bd'
									}
								])
							}
						}
					]
				};
				this.chartInstance.setOption(option); //更改（而非覆盖）图表数据
			}
		}
	}
};
</script>
<style scoped>
.container {
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: 0.5fr 1fr 3.8fr;
	background-image: url('../../assets/image/indexkuang.png');
	background-repeat: no-repeat;
	background-size: contain;
}
.chart{
	transform: scale(0.96)
}
li {
	list-style: none;
	float: left;
	cursor: pointer;
	color: white;
}
.active {
	color: #2df0d4;
	font-weight: 600;
	text-shadow: 0 0 0.1rem #ebfcff;
}
.nav {
	margin-top: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.total {
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 0.5rem;
}
.chart {
	width: 100%;
	height: 100%;
}
.total-count1,
.total-count2 {
	background-image: url('../../assets/image/totaltwo_back.png');
	background-repeat: no-repeat;
	background-size: contain;
	width: 8rem;
	text-align: center;
}
.borrow-book-value,
.return-book-value {
	font-size: 0.8rem;
	color: #24bfc4;
}
</style>