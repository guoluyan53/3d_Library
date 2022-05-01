<!-- 楼层页，点击图书馆模型进入的那页，默认为第一层-->
<template>
  <div class="floor">

    <div class="main">
      <!-- 分为左中右三部分 -->
      <!-- 左 -->
      <div class="left-box">
        <div class="left-top">
          <p class="p">书库藏书占比</p>
          <div class="zujian">
            <Gauge :Fvalue="curF"></Gauge>
          </div>          
        </div>
        <div class="left-bottom">
          <Sort></Sort>
        </div>
      </div>
      <!-- 右 -->
      <div class="right-box">
        <div class="right-top">
          <div class="envtest">
            <p class="envtitle">楼层环境监测（F{{curF}}）</p>
            <div class="envcontent">
              <li>温度 <span>26℃</span> </li>
              <li>湿度 <span>12%RH</span> </li>
            </div>
            <div class="time">
              <span>当前时间：</span>
              <span>{{dateFormat(curtime)}}</span>
            </div>
          </div>
          <div class="electory">
            <Electory></Electory>
          </div>
        </div>
        <div class="right-bottom">
          <div class="louceng"></div>
          <div class="navlou">
            <div class="f" @click="changeF(4)" :class="{'factive':curF==4}">4F</div>
            <div class="f" @click="changeF(3)" :class="{'factive':curF==3}">3F</div>
            <div class="f" @click="changeF(2)" :class="{'factive':curF==2}">2F</div>
            <div class="f" @click="changeF(1)" :class="{'factive':curF==1}">1F</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gauge from '../components/Floor/gauge.vue'
import Floorobj from '../components/Floor/floorobj.vue';
import Sort from '../components/Floor/sort.vue';
import Electory from '../components/Floor/electory.vue';
export default {
  name: 'Floor',
  components: {
		Floorobj,
    Gauge,
    Sort,
    Electory
	},
  data(){
    return{
      width:0,
      height:0,
      curtime: new Date(), //当前时间
      curF:1
    }
  },
  methods:{
    // 切换楼层
    changeF(e){
      this.curF = e;
    },
    // 格式化时间
    dateFormat () {
    	  var date = new Date()
        var year = date.getFullYear()
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
        var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
        var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
        let week = date.getDay() // 星期
        let weekArr = [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ]
        // 拼接 时间格式处理
        return year + '年' + month + '月' + day + '日 ' + hours + ':' + minutes + ':' + seconds + ' ' + weekArr[week]
    },

    getWH(){
      // var width = document.getElementById('rightbom').clientWidth;
      // var height = document.getElementById('rightbom').clientHeight;
      var width = this.$refs.right.clientWidth;
      var height = this.$refs.right.clientHeight;
      this.width = width;
      this.height = height;
      console.log(this.width,this.height);
    }
  },
  mounted(){
    let that = this;
    this.timer = setInterval(function(){
      that.curtime = new Date().toLocaleString();
    },1000)
    // this.getWH();
  },
  beforeDestory: function(){
    if(this.timer) {
      clearInterval(this.timer)
    }
  }
}
</script>
<style scoped>
.floor {
	width: 100%;
	height: 90vh;
	background-color: #020f23;
}


.main{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #0e0c2b;
}
.left-box{
  width: 35%;
  height: 90vh;
  display: flex;
  flex-flow:row wrap;
  justify-content: space-between;
  /* background-color: rgb(150, 150, 232); */
}
.p{
  margin: 0;
  padding: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
  color: white;
}
.left-top{
  width: 100%;
  height: 60%;
  display: grid;
  grid-template-rows: 5% 95%;
  /* background-color: blanchedalmond; */
  background-image: url("../assets/image/roll_back1.png");
  background-size: 100% 100%;
  padding-bottom: 10px;
  box-sizing: border-box;
}
.left-bottom{
  width: 100%;
  height: 39%;
  background-image: url("../assets/image/roll_back1.png");
  background-size: 100% 100%;
  /* background-color: #ecb576; */
}

.right-box{
  width: 64%;
  height: 100%;
  display: flex;
  flex-flow:row wrap;
  justify-content: space-between;
  /* background-color: rgb(188, 242, 181); */
}
.right-top{
  width: 100%;
  height: 34%;
  display: flex;
  justify-content: space-around;
}
/* 环境监测 */
.envtest{
  width: 40%;
  height: 100%;
  background-image: url('../assets/image/roll_back.png');
  background-size: 100% 100%;
}
.envcontent{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.time{
  color: #1e9aec;
  font-size: 1rem;
  margin-top: 2rem;
}
.envtitle{
  text-align: left;
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  margin-top:10px;
  margin-left: 10px;
}
.envcontent li{
  display: inline-block;
  width: 40%;
  height: 4rem;
  line-height: 4rem;
  color: white;
  font-size: 1.3rem;
  padding-left: 5px;
  text-align: left;
  border: 1px solid hsl(204, 84%, 52%);
  box-shadow: inset 0 0 5px 1px #1e9aec;
}
.envcontent span{
  display: inline-block;
  margin-left: 5px;
  color: #09a4b1;
  font-size: 1.5rem;
}
.electory{
  width: 58%;
  height: 100%;
  background-image: url('../assets/image/roll_back.png');
  background-size: 100% 100%;
}
.right-bottom{
  width: 100%;
  height: 65%;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
}
/* 楼层按键 */
.f{
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  color: white;
  font-size: 2rem;
  margin-top: 10px;
  border: 1px solid hsl(204, 84%, 52%);
  box-shadow: inset 0 0 5px 3px #1e9aec;
  cursor: pointer;
}
/* 点击当前楼层发亮 */
.factive{
  box-shadow: 0 0 10px 3px #dae8f2;
  /* background-color: aqua; */
}
.louceng{
  width: 70%;
  height: 100%;
  background-color: #aad498;
}
.navlou{
  width: 25%;
  height: 100%;
}
</style>