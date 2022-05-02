<!-- 横轴是阅读量 纵轴是学院 随着时间改变 -->
<!--修改了min.js的版本 只有3以上的版本才可以对y轴进行排序 即inverse: true属性才被支持-->
<template>
  <div class="container">
    <div
      class="chart"
      ref="change_ref"
    ></div>
  </div>
</template>

<script>
import axios from "axios";
// import { changedata } from "../../assets/data/change.js";
export default {
  data() {
    return {
      chartInstance: null,
      alldata: [],
      // colors: null,
      updateFrequency: 500, //数据更新速度
      startYear: null,
      startName: null,
      startData: null,
    };
  },
  mounted() {
    this.returndata();
  },
  destroyed() {
    window.removeEventListener("resize", () => {
      if (this.chartInstance) {
        this.chartInstance.resize();
      }
    });
    clearTimeout(this.timer);
  },
  methods: {
    //先处理一下数据
    returndata() {
      axios.get("/api/StudySituationAnalysis/CollegeReading").then(res => {
        this.alldata = res.data.data;
        //获取第一个数据
        this.startYear = this.alldata[0].year;
        this.startName = this.alldata[0].academyname[0];
        this.startData = this.alldata[0].readdata[0];
        console.log(this.alldata);
        this.initChart();
        this.timer = setInterval(this.updateChart, 5000);
        // this.updateChart();
      });
    },

    initChart() {
      this.chartInstance = this.$echarts.init(this.$refs.change_ref, "chalk");
      const colors = {
        商学院: "#002561",
        政法学院: "#0051de",
        文学院: "#005de7",
        化学与化工学院: "#0d70ea",
        财政金融学院: "#1d85ec",
        计算机信息工程学院: "#2c9aed",
        生命科学学院: "#38adf3",
        物理与通信电子学院: "#46c0f5",
        外国语学院: "#49c4f6",
        软件学院: "#51cff8",
        研究生院: "#002561",
      };
      const initOption = {
        backgroundColor: "",
        title: {
          text: "各学院读者近10年阅读量",
          padding: [4, 20, 150],
          textStyle: {
            fontSize: 18, //字体大小
            color: "#fff", //字体颜色
          },
        },
        grid: {
          left: "15%",
          right: "1%",
          bottom: "10%",
          containLable: true, //距离包含坐标轴上的文字
        },
        xAxis: {
          max: "dataMax",
          // position: 'top',
          axisLine: {
            lineStyle: {
              color: "white",
            },
          },
          axisLabel: {
            // 圆整 X 轴 参数
            formatter: function(n) {
              return Math.round(n) + "";
            },
            textStyle: {
              color: "white",
            },
          },
        },
        //元数据
        dataset: {
          source: this.alldata,
        },
        yAxis: {
          type: "category",
          data: this.startName,
          inverse: true,
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 14,
              color: "white",
            },
            rich: {
              flag: {
                fontSize: 25,
                padding: 5,
              },
            },
          },
          animationDuration: 300,
          animationDurationUpdate: 300,
          //  max: 9
        },
        animationDuration: 0,
        animationDurationUpdate: 3000,
        animationEasing: "linear",
        animationEasingUpdate: "linear",
        //展示年代的那个文字
        graphic: {
          elements: [
            {
              type: "text",
              right: 30,
              bottom: 90,
              style: {
                text: this.startYear,
                fill: "#fff",
                fontSize: 46,
                fontWeight: 800,
              },
              z: 100,
            },
          ],
        },
        series: [
          {
            realtimeSort: true, //设为true表示开启Y轴的动态排序效果
            type: "bar",
            itemStyle: {
              color: function(param) {
                return colors[param.name];
              },
            },
            label: {
              show: true,
              precision: 1,
              position: "right",
              textStyle: {
                fontSize: 12,
                color: "#fff",
              },
              valueAnimation: true,
            },
            data: this.startData,
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },

    //随着年份更新数据 传入每一年的数据对象
    updateYear(updata) {
      const Option = {
        yAxis: {
          inverse: true,
          type: "category",
          data: updata.academyname,
        },
        series: [
          {
            type: "bar",
            data: updata.readdata,
          },
        ],
        graphic: {
          elements: [
            {
              style: {
                text: updata.year,
              },
            },
          ],
        },
      };
      this.chartInstance.setOption(Option);
    },
    updateChart() {
      var that = this;
      for (var i = 0; i < that.alldata.length - 1; ++i) {
        (function(i) {
          setTimeout(function() {
            that.updateYear(that.alldata[i + 1]);
            // console.log(that.alldata);
          }, (i + 1) * 500);
        })(i);
      }
      //自适应
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
  transform: scale(0.9);
}
</style>