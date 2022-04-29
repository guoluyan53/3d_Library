<!-- 楼层页，点击图书馆模型进入的那页，默认为第一层-->
<template>
  <div class="floor">
    <div class="top">
      <!-- <p>图书馆数据展示平台</p> -->
      <HeaderNav></HeaderNav>
    </div>

    <div class="main">
      <!-- 分为左中右三部分 -->
      <!-- 左 -->
      <div class="left-box">
        <div class="left-top"></div>
        <div class="left-bottom"></div>
      </div>
      <!-- 中 -->
      <div class="mid-box">
        <div class="mid-top" ref="midtop">
        </div>
        <div class="mid-bottom"></div>
      </div>
      <!-- 右 -->
      <div class="right-box">
        <div class="right-top"></div>
        <div class="right-bottom"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '../components/public/nav.vue'
import Floorobj from '../components/Floor/floorobj.vue';
export default {
  name: 'Floor',
  components: {
    HeaderNav,
		Floorobj
	},
  data(){
    return{
      width:'600',
      height:'400'
    }
  },
  methods:{
    getWH(){
      this.width = this.$refs.midtop.offsetWidth;
      this.height = this.$refs.midtop.offsetHight;
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
	height: 100vh;
	background-color: #020f23;
	display: grid;
	grid-template-rows: 10% 90%;
}
.top {
	background-image: url('../assets/image/head.png');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	color: white;
	text-align: center;
	align-items: center;
	letter-spacing: 2px;
	font-size: 1.3rem;
	text-shadow: 0 0 0.4rem #13b1cd, 0 0 0.5rem rgba(255, 255, 255, 0.6), 0 0 1rem rgba(255, 255, 255, 0.8);
	margin-bottom: 1rem;
	margin: 0;
}

.main{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #13b1cd;
}
.left-box{
  width: 20rem;
  height: 90vh;
  display: flex;
  flex-flow:row wrap;
  justify-content: space-between;
  background-color: rgb(150, 150, 232);
}
.left-top{
  width: 100%;
  height: 68%;
  background-color: blanchedalmond;
}
.left-bottom{
  width: 100%;
  height: 30%;
  background-color: #ecb576;
}
.mid-box{
  width: 50%;
  height: 100%;
  display: flex;
  flex-flow:row wrap;
  justify-content: space-between;
  background-color: rgb(243, 156, 240);
}
.mid-top{
  width: 100%;
  height: 60%;
  background-color: #ecb576;
}
.mid-bottom{
  width: 100%;
  height: 37%;
  background-color: #ecb576;
}
.right-box{
  width: 20rem;
  height: 100%;
  display: flex;
  flex-flow:row wrap;
  justify-content: space-between;
  background-color: rgb(188, 242, 181);
}
.right-top{
  width: 100%;
  height: 55%;
  background-color: #ecb576;
}
.right-bottom{
  width: 100%;
  height: 40%;
  background-color: #ecb576;
}
</style>