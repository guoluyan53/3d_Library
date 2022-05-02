<!-- 分类饼图 -->
<template>
  <div class="container">
    <div class="title">
      <p class="title-p">图书分类馆藏量</p>
    </div>
    <div class="chart-box">
      <span>总数:547265册</span>
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
          legend: {
              top: "2%",
              left: "75%",
              textStyle: {
                color: "#fff", // 图例文字颜色
              },
            },
            tooltip: {
              trigger: "item",
            },
        series: [
          {
            type: "pie",
            radius: ["50%", "70%"],
            center: ["40%", "50%"],
            avoidLabelOverlap: false,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            data: this.alldata,
            universalTransition: true,
            label: {
              show: false,
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
span{
  display: inline-block;
  color: white;
    text-shadow: 0 0 0.4rem #13b1cd, 0 0 0.5rem rgba(255, 255, 255, 0.6),
    0 0 1rem rgba(255, 255, 255, 0.8);
    transform: translate(-2rem,9.5rem);
}
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
  transform: translateY(-1.5rem) scale(0.9);
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
  transform: translate(-6rem, 0.1rem);
  letter-spacing: 1.6px;
  font-size: 0.8rem;
}
</style>