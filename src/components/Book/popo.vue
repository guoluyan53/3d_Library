<!-- 图书分析 中间的泡泡图散点图-->
<template>
  <div class="popo">
     <div class="contain" ref="popo"></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Popo',
  data(){
      return{
          //图表实例
          popo:{},
          //数据
          popodata:'',
          options: []
      }
  },
  created(){
    // this.getdata();
  },
  mounted(){
      this.initChart();
      this.updateChart();
  },
  methods:{
    // 请求数据
     getdata(){
        axios.get('/data/popo.json').then(res=>{
            var resdata = JSON.parse(JSON.stringify(res));
            this.popodata = resdata.data;
            console.log(this.popodata);
            console.log(JSON.parse(JSON.stringify(resdata.data)));
            console.log(this.popodata);
        })
    },
    // 初始化图表
	  async initChart(){
          var resdata;
          await axios.get('/api/BookAnalysis/RelationshipEvolution').then(res=>{
            // resdata = JSON.parse(JSON.stringify(res.data));
            // console.log(resdata);
            resdata = res.data.data;
          })
          this.popo = this.$echarts.init(this.$refs.popo,'chalk');
          const itemStyle = {
                opacity: 0.8
          };
          const sizeFunction = function (x) {
                var y = Math.sqrt(x / 5e6) + 0.1;
                return y * 80;
          };
          // Schema:
          const schema = [
            { name: 'Income', index: 0, text: '绝对平均册借次', unit: '次' },
            { name: 'LifeExpectancy', index: 1, text: '相对平均册借次', unit: '次' },
            { name: 'Population', index: 2, text: '累计总借阅数', unit: '本' },
            { name: 'Country', index: 3, text: '书籍类别', unit: '' }
          ];
          const initOption = {
              backgroundColor: '', //背景透明
              baseOption: {
                backgroundColor: '', //背景透明
                timeline: {
                    axisType: 'category',
                    orient: 'vertical',
                    // autoPlay: true,  //是否自动播放
                    inverse: true,
                    playInterval: 1000,
                    left: null,
                    right: 0,
                    top: 20,
                    bottom: 20,
                    width: 55,
                    height: null,
                    symbol: 'none',
                    checkpointStyle: {
                    borderWidth: 2
                    },
                    controlStyle: {
                    showNextBtn: false,
                    showPrevBtn: false
                    },
                    data: []
                },
                title: [
                    {
                    text: resdata.timelines[0],
                    textAlign: 'center',
                    left: '63%',
                    top: '55%',
                    textStyle: {
                        fontSize: 50  //年份字体的大小
                    }
                    },
                    {
                    text: '馆藏图书利用率关系演变',
                    left: 'center',
                    top: 10,
                    textStyle: {
                        fontWeight: 'normal',
                        fontSize: 20
                    }
                    }
                ],
                tooltip: {
                    padding: 5,
                    borderWidth: 1,
                    formatter: function (obj) {
                    var value = obj.value;
                    // prettier-ignore 鼠标滑过的label
                    return schema[3].text + '：' + value[3] + '<br>'
                                    + schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
                                    + schema[0].text + '：' + value[0] + schema[0].unit + '<br>'
                                    + schema[2].text + '：' + value[2] + '<br>';
                    }
                },
                grid: {
                    top: 100,
                    containLabel: true,
                    left: 50,
                    right: '110'
                },
                xAxis: {
                    type: 'log',
                    name: '学科绝对平均册借次',
                    // max: 10,
                    // min: 0,
                    nameGap: 25,
                    nameLocation: 'middle',
                    nameTextStyle: {
                        fontSize: 18,
                        color:'#fff'
                    },
                    axisLine:{
		                lineStyle:{
		                    color:'#fff',
		                    width:1,//这里是为了突出显示加上的
		                }
		            },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        interval:0,
                        formatter: '{value} 次',
                        textStyle: {
                            color:  '#fff' , //坐标值得具体的颜色
    
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    name: '学科平均相对册借次',
                    max: 10,
                    nameLocation:'middle',
                    nameGap:'40',
                    nameTextStyle: {
                        fontSize: 18,
                        color:'#fff',
                    },
                    splitLine: {
                    show: false
                    },
                    axisLabel: {
                    formatter: '{value} 次',
                    textStyle: {
                         color:  '#fff' , //坐标值得具体的颜色
                    }
                    },
                    axisLine:{
		                lineStyle:{
		                    color:'#fff',
		                    width:1,//这里是为了突出显示加上的
		                }
		            },
                },
                visualMap: [
                    {
                    show: false,
                    dimension: 3,
                    categories: resdata.types, //数据
                    inRange: {
                        color: (function () {
                        // prettier-ignore
                        var colors = ['#60eeff', '#0066fe', '#ff3844', '#38ff94', '#0066fe', '#ffe93b', '#05d39f', '#38fac9', '#1993db', '#6890ba'];
                        return colors.concat(colors);
                        })()
                    }
                    }
                ],
                series: [
                    {
                        type: 'scatter',
                        itemStyle: itemStyle,
                        data: resdata.series[0],
                        symbolSize: function (val) {
                            return sizeFunction(val[2]);
                        },
                        
                    }
                ],
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'quinticInOut'
                },
                options: []
            };
            for (var n = 0; n < resdata.timelines.length; n++) {
                initOption.baseOption.timeline.data.push(resdata.timelines[n]);
                initOption.options.push({
                title: {
                    show: true,
                    text: resdata.timelines[n] + ''
                },
                series: {
                    name: resdata.timelines[n],
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: resdata.series[n],
                    symbolSize: function (val) {
                    return sizeFunction(val[2]);
                    }
                }
            });
         }
         this.popo.setOption(initOption);
       },

        //更新图表
        updateChart(){
            window.addEventListener('resize', () => {
				if (this.popo) {
				this.popo.resize();}
			});
        }
     
  }
}
</script>
<style scoped>
.popo{
    width: 100%;
    height: 100%;
}
.contain{
    width: 100%;
    height: 100%;
}

</style>