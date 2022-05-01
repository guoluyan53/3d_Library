<!-- 分类饼图 -->
<template>
  <div class="container">
    <div class="title">
      <p class="title-p">分类借阅比率</p>
    </div>
    <div class="chart-box">
      <div
        class="chart"
        ref="cate_ref"
      ></div>
  </div>
  </div>
</template>


<script>
import { catedata } from "../../assets/data/category.js";
export default {
  data() {
    return {
      //图表实例
      chartInstance: {},
      alldata: null,
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
      this.chartInstance = this.$echarts.init(this.$refs.cate_ref, "chalk"); //将图表实例通过ref进行赋值
      this.alldata = catedata;
      const initOption = {
        backgroundColor: "",
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            center: ["50%", "50%"],
            avoidLabelOverlap: false,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            data: this.alldata,
            tooltip: {
              trigger: "item",
            },
            universalTransition: true,
            label: {
              show: true,
              formatter: "{b} : {d}%",
              textStyle: {
                fontSize: 14,
                color: "#ffffff",
              },
            },
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },
    returndata() {
      this.alldata = catedata;
    },
    updateChart() {
      const Option = {};
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
}
.chart-box {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/image/roll_back1.png");
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
  background-image: url("../../assets/image/rolltitle.png");
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