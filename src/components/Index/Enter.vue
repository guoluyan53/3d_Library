<!-- 首页进馆人数图表：堆叠折线图 -->
<template>
  <div class="container1">
    <div
      class="chart1"
      ref="mon_ref"
    >
  </div>
  </div>
</template>

<script>
import axios from "axios";
// import { countdata } from "../../assets/data/enter.js";
export default {
  data() {
    return {
      chartInstance: {},
      timeMonth: [],
      alldata: null,
    };
  },
  mounted() {
    this.initChart();
    this.returndata();
    // this.updateChart();
  },
  destroyed() {
    window.removeEventListener("resize", () => {
      if (this.chartInstance) {
        this.chartInstance.resize();
      }
    });
  },
  methods: {
    //获取服务器数据的方法
    async returndata() {
      await axios.get("/api/Home/People").then(res => {
        this.alldata = res.data.data;
        console.log(this.alldata);
        this.updateChart();
      });
    },

    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.mon_ref, "chalk");
      const initOption = {
        color: ["#06d3a0", "#0066ff"],
        backgroundColor: "",
        title: {
          text: "在馆人数情况",
          padding: [4, 20, 150],
          textStyle: {
            fontSize: 18, //字体大小
            color: "#1fd6fc", //字体颜色
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#999",
            },
          },
          textstyle: {
            fontSize: 18,
          },
        },
        legend: {
          left: 300,
          top: "8%",
          icon: "circle",
          data: ["昨日", "今日"],
          textStyle: {
            fontSize: 10, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        grid: {
          // top: '12%',
          left: "12%",
          right: "6%",
          bottom: "25%",
          containLable: true, //距离包含坐标轴上的文字
        },
      };
      this.chartInstance.setOption(initOption);
    },

    //更新图标和处理数据的方法
    updateChart() {
      this.timeMonth = [
        "6:00",
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
      ];
      const Option = {
        xAxis: {
          type: "category",
          data: this.timeMonth,
          interval: 0,
          axisLabel: {
            interval: 0,
            rotate: 45,
          },
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
              color: "white", //坐标的字体颜色
            },
          },
        },
        series: [
          {
            name: "昨日",
            type: "line",
            data: this.alldata[0].data,
            stack: "total", //堆叠图
            lineStyle: {
              color: "#06d3a0", //折线的颜色
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                fontSize: 12,
                color: "#06d3a0",
              },
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(9, 128, 224, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(121, 223, 112, 0)",
                },
              ]),
            },
          },
          {
            name: "今日",
            type: "line",
            data: this.alldata[1].data,
            stack: "total",
            lineStyle: {
              color: "#0066ff", //折线的颜色
            },
            label: {
              show: true,
              position: "top",
              textStyle: {
                fontSize: 12,
                color: "#0066ff",
              },
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(44, 110, 255, 1)",
                },
                {
                  offset: 1,
                  color: "rgba(44, 110, 255, 0)",
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
.container1 {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/image/indexkuang.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.chart1 {
  width: 100%;
  height: 100%;
  transform: scale(0.86);
}
</style>