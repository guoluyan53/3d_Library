
<!-- // 折线堆叠图，横轴是年份，纵轴是阅读量，颜色代表不同的读者身份 -->
<template>
	<div class="container">
		<div
		    class="chart"
		    ref="reader_ref"
		>
	</div>
	</div>
</template>

<script>
import { readerTotal } from "../../assets/data/readertotal.js";
export default {
  data() {
    return {
      chartInstance: null,
      alldata: [],
      seriesArr: null,
      year: [],
    };
  },
  mounted() {
    this.initChart();
    this.returndata();
    this.updateChart();
  },
  destroyed() {
    window.removeEventListener("resize", () => {
      if (this.chartInstance) {
        this.chartInstance.resize();
      }
    });
  },
  methods: {
    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.reader_ref, "chalk");
      const initOption = {
        backgroundColor: "",
         color:["#005de7","#fa8278","#3ce8c0","#5ec5eb","#fdb650"],
        title: {
          text: "读者年度阅读统计",
          padding: [20, 20, 150],
          textStyle: {
            fontSize: 15, //字体大小
            color: "#fff", //字体颜色
          },
        },

        tooltip: {
          trigger: "axis",
          textstyle: {
            fontSize: 18,
          },
        },
        legend: {
          left: 300,
          top: "8%",
          icon: "roundRect",
          data: ["研究生", "教职工", "本科生", "教授", "其他人员"],
          textStyle: {
            fontSize: 10, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        grid: {
          // top: '12%',
          left: "12%",
          right: "6%",
          bottom: "15%",
          containLable: true, //距离包含坐标轴上的文字
        },
      };
      this.chartInstance.setOption(initOption);
    },

    returndata() {
      //axios
      this.alldata = readerTotal;
    },
    updateChart() {
      this.year = [
        "2014",
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
      ];
      const Option = {
        xAxis: {
          type: "category",
          data: this.year,
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: "white",
            },
          },
        },
        yAxis: {
          type: "value",
          splitLine: false,
          axisLine: {
            lineStyle: {
              color: "white",
            },
          },
          axisLabel: {
            textStyle: {
              color: "white",
            },
          },
        },
        series: [
          //一个数组，每个表示一根折线
          {
            name: "研究生",
            type: "line",
            data: this.alldata[0].data,
            stack: "total", //堆叠图
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 8,
                  color: "#005de7",
                },
              },
            },
            lineStyle: {
              color: "#005de7", //折线的颜色
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(0, 93, 231, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(0, 93, 231, 0)",
                },
              ]),
            },
          },
          {
            name: "教职工",
            type: "line",
            data: this.alldata[1].data,
            stack: "total", //堆叠图
            lineStyle: {
              color: "#fa8278", //折线的颜色
            },
             label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 8,
                  color: "#fa8278",
                },
              },
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#fa8278",
                },
                {
                  offset: 1,
                  color: "rgba(252, 212, 54,0)",
                },
              ]),
            },
          },
          {
            name: "本科生",
            type: "line",
            data: this.alldata[2].data,
            stack: "total", //堆叠图
            lineStyle: {
              color: "#3ce8c0", //折线的颜色
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 8,
                  color: "#3ce8c0",
                },
              },
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#3ce8c0",
                },
                {
                  offset: 1,
                  color: "rgba(60, 232, 192, 0)",
                },
              ]),
            },
          },
          {
            name: "教授",
            type: "line",
            data: this.alldata[3].data,
            stack: "total", //堆叠图
            lineStyle: {
              color: "#5ec5eb", //折线的颜色
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 8,
                  color: "#5ec5eb",
                },
              },
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#5ec5eb",
                },
                {
                  offset: 1,
                  color: "rgba(88, 217, 249, 0)",
                },
              ]),
            },
          },
          {
            name: "其他人员",
            type: "line",
            data: this.alldata[4].data,
            stack: "total", //堆叠图
            lineStyle: {
              color: "#fdb650", //折线的颜色
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 8,
                  color: "#fdb650",
                },
              },
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#fdb650",
                },
                {
                  offset: 1,
                  color: "rgba(5, 192, 145, 0)",
                },
              ]),
            },
          },
        ],
      };
      this.chartInstance.setOption(Option);
      window.addEventListener("resize", () => {
        if (this.chartInstance) {
          this.chartInstance.resize();
        }
      });
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/image/indexkuang.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.chart {
  width: 100%;
  height: 100%;
}
</style>