<!-- 图书分析 中间下面的环形饼图-->
<template>
    <div class="hotbook">
        <div
            class="contain"
            ref="hot1"
        ></div>
    <div
        class="contain"
        ref="hot2"
    ></div>
        </div>
</template>

<script>
import axios from "axios";
// import { hotbook } from "../../assets/data/book";
export default {
  name: "Hotbook",
  data() {
    return {
      //图表实例
      hotbook1: {},
      hotbook2: {},
      // 数据
      data1:'',
      data2:''
    };
  },
  mounted() {
    this.initChart();
    this.updateChart();
  },
  methods: {
    async initChart() {
      await axios.get('/api/BookAnalysis/HotBook').then(res=>{
        this.data1 = res.data.data[0];
        this.data2 = res.data.data[1];
        console.log(this.data1);
        console.log(this.data2);
      })
      this.hotbook1 = this.$echarts.init(this.$refs.hot1, "chalk");
      this.hotbook2 = this.$echarts.init(this.$refs.hot2, "chalk");
      const option1 = {
        backgroundColor: "", //背景透明
        color: ["#00ffff", "#056ee8", "#00cfff", "#ffdf00", "#ff5b00"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "center",
          left: "60%",
          textStyle: {
            color: "#fff", // 图例文字颜色
          },
        },
        title: {
          text: this.data1.deptName,
          top: "center",
          left: "25%",
        },
        series: [
          {
            name: "书籍类型",
            type: "pie",
            radius: ["52%", "60%"],
            avoidLabelOverlap: false,
            center: ["35%", "50%"],
            itemStyle: {
              borderWidth: 1,
                shadowColor: "#5cfbff", //透明的颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 1, //透明度
              shadowBlur: 8, //阴影大小
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "30",
              },
            },
            labelLine: {
              show: false,
            },
            data: this.data1.data,
          },
        ],
      };

      const option2 = {
        backgroundColor: "", //背景透明
        color: ["#00ffff", "#056ee8", "#00cfff", "#ffdf00", "#ff5b00"],
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "center",
          left: "60%",
          textStyle: {
            color: "#fff", // 图例文字颜色
          },
        },
        title: {
          text: this.data2.deptName,
          top: "center",
          left: "22%",
        },
        series: [
          {
            name: this.data2.deptName,
            type: "pie",
            radius: ["52%", "60%"],
            avoidLabelOverlap: false,
            center: ["35%", "50%"],
            itemStyle: {
              borderWidth: 1,
                shadowColor: "#5cfbff", //透明的颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              opacity: 1, //透明度
              shadowBlur: 8, //阴影大小
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "30",
              },
            },
            labelLine: {
              show: false,
            },
            data: this.data2.data,
          },
        ],
      };
      this.hotbook1.setOption(option1);
      this.hotbook2.setOption(option2);
    },

    updateChart() {
      window.addEventListener("resize", () => {
        if (this.hotbook1 && this.hotbook2) {
          this.hotbook1.resize();
          this.hotbook2.resize();
        }
      });
    },
  },
};
</script>
<style scoped>
.hotbook {
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* justify-content: space-around; */
}
.contain {
  display: inline-block;
  width: 50%;
  height: 100%;
}
</style>