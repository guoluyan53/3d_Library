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
            <Gauge></Gauge>
          </div>          
        </div>
        <div class="left-bottom">
          <Sort></Sort>
        </div>
      </div>
      <!-- 右 -->
      <div class="right-box">
        <div class="right-top"></div>
        <div class="right-bottom" id="rightbom" ref="right">
          <Floorobj :width='768' :height="481"></Floorobj>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Gauge from '../components/Floor/gauge.vue'
import Floorobj from '../components/Floor/floorobj.vue';
import Sort from '../components/Floor/sort.vue'
export default {
  name: 'Floor',
  components: {
		Floorobj,
    Gauge,
    Sort
	},
  data(){
    return{
      width:0,
      height:0
    }
  },
  methods:{
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
    this.getWH();
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
  background-color: #ecb576;
}
.right-bottom{
  width: 100%;
  height: 65%;
  overflow: hidden;
  /* background-color: #ecb576; */
}
</style>