<!-- 不同读者阅读偏好雷达图 -->
<template>
  <div class="container">
    <p>不同读者借阅偏好</p>
    <div
      class="chart"
      ref="radar_ref"
    ></div>
  </div>
</template>

<script>
// import { radardata } from "../../assets/data/radar.js";
import axios from "axios";
export default {
  data() {
    return {
      chartInstance: null,
      alldata: null,
    };
  },
  mounted() {
    // this.initChart();
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
      returndata() {
       axios.get('/api/StudySituationAnalysis/radar').then(res=>{
            this.alldata = res.data.data;
            // console.log(this.alldata);
            this.initChart();
            this.updateChart();
        })
    },

    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.radar_ref, "chalk");
      // this.alldata = radardata;
      const initOption = {
        backgroundColor: "",
        color: ["#005de7", "#fa8278", "#3ce8c0", "#5ec5eb", "#fdb650"],
        legend: {
          data: ["博士生", "博士后", "教职工", "本科生", "硕士生"],
          icon: "circle",
          left:"3%",
          // orient: "vertical", //垂直显示
          y: "5%", //延Y轴居中
          // x: "3%", //居右显示
          textStyle: {
            fontSize: 14, //字体大小
            color: "#ffffff", //字体颜色
          },
        },
        tooltip: {
          confine: true,
          trigger: "legend",
        },
        radar: {
          indicator: this.alldata.indicator,
           center: ['50%', '60%'],
          axisLine: {
            // 设置雷达图中间射线的颜色
            lineStyle: {
              color: "#c0c0c0",
            },
          },
          splitArea: {
            //设置图表颜色，show的值为true
            show: true,
            areaStyle: {
              color: "", //一般设置方式
            },
          },
          splitLine: {
            //网格颜色设置
            show: true,
            lineStyle: {
              width: 1,
              color: "#1e83e4",
            },
          },
        },
      };
      this.chartInstance.setOption(initOption);
    },
  
    updateChart() {
      const Option = {
        series: [
          {
            type: "radar",
            data: [
              {
                value: this.alldata.seriesdata[0].value,
                name: "博士后",
                areaStyle: {
                  color: "#005de7",
                  opacity: 0.8,
                },
              },
              {
                value: this.alldata.seriesdata[1].value,
                name: "博士生",
                areaStyle: {
                  color: "#fa8278",
                  opacity: 0.8,
                },
              },
              {
                value: this.alldata.seriesdata[2].value,
                name: "教职工",
                areaStyle: {
                  color: "#3ce8c0",
                  opacity: 0.8,
                },
              },
              {
                value: this.alldata.seriesdata[3].value,
                name: "本科生",
                areaStyle: {
                  color: "#5ec5eb",
                  opacity: 0.8,
                },
              },
              {
                value: this.alldata.seriesdata[4].value,
                name: "硕士生",
                areaStyle: {
                  color: "#fdb650",
                  opacity: 0.4,
                },
              },
            ],
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
<style  scoped>
p {
  color: white;
  font-weight: bolder;
  margin: 0;
  padding: 0;
  transform: translateY(1rem);
}
.container {
  width: 100%;
  height: 100%;
  align-items: center;
  /* padding-top: 1rem; */
  background-image: url("../../assets/image/roll_back1.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.chart {
  padding: 0;
  width: 100%;
  height: 100%;
  transform: scale(0.9);
}
</style>