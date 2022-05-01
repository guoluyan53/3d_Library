<!-- 楼层页，点击图书馆模型进入的那页，默认为第一层-->
<template>
  <div class="book">
   <!-- <div class="top">
       <p>图书馆数据展示平台</p> -->
      <!-- <HeaderNav></HeaderNav> 
    </div>-->

    <div class="main">
      <!-- 分为左中右三部分 -->
      <!-- 左 -->
      <div class="left-box">
        <div class="left-top">
          <Rose></Rose>
        </div>
        <div class="left-bottom">
          <Top10></Top10>
        </div>
      </div>
      <!-- 中 -->
      <div class="mid-box">
        <div class="mid-top">
          <Popo></Popo>
        </div>
        <div class="mid-bottom">
          <Hotbook></Hotbook>
        </div>
      </div>
      <!-- 右 -->
      <div class="right-box">
        <div class="right-top">
          <img src="../assets/image/wordwindow.png" alt="">
          <div class="p">
            <ul class="ul">
              <li>1</li>
              <li>6</li>
              <li>9</li>
              <li>8</li>
              <li>0</li>
            </ul>
            <p>年度检索关键词数</p>
          </div>
        </div>
        <div class="right-bottom">
          <Dotted></Dotted>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '../components/public/nav.vue'
import Dotted from '../components/Book/Dotted.vue';
import Hotbook from '../components/Book/hotbook.vue';
import Popo from '../components/Book/popo.vue';
import Rose from '../components/Book/rose.vue';
import Top10 from '../components/Book/Top10.vue';
export default {
  name: 'Book',
  components: {
    HeaderNav,
		Dotted,Hotbook,Popo,Rose,Top10
	},
  data(){
    return{
    }
  },
  methods:{
    
  },
  mounted(){
    
  }
}
</script>
<style scoped>
.book {
	width: 100%;
	height: 90vh;
	/* display: grid;
	grid-template-rows: 10% 90%; */
  background-image: url('../assets/image/book_back.png');
  background-size: 100% 100%;
}
/* .top {
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
} */

.main{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.left-box{
  width: 26%;
  height: 90vh;
  display: flex;
  flex-flow:row wrap;
  justify-content: space-between;
  /* background-color: rgb(150, 150, 232); */
}
.left-top{
  width: 100%;
  height: 59%;
  background-image: url('../assets/image/roll_back1.png');
  background-size: 100% 100%;
  /* background-color: blanchedalmond; */
}
.left-bottom{
  width: 100%;
  height: 40%;
  background-image: url('../assets/image/indexkuang.png');
  background-size: 100% 100%;
  /* background-color: #ecb576; */
}
.mid-box{
  width: 45%;
  height: 100%;
  display: flex;
  flex-flow:row wrap;
  justify-content: space-between;
  /* background-color: rgb(243, 156, 240); */
}
.mid-top{
  width: 100%;
  height: 60%;
  background-image: url('../assets/image/indexkuang.png');
  background-size: 100% 100%;
  /* background-color: #ecb576; */
}
.mid-bottom{
  width: 100%;
  height: 37%;
  background-image: url('../assets/image/roll_back.png');
  background-size: 100% 100%;
  /* background-color: #ecb576; */
}
.right-box{
  width: 26%;
  height: 100%;
  display: flex;
  flex-flow:row wrap;
  justify-content: space-between;
}
.right-top{
  width: 100%;
  height: 63%;
  background-image: url('../assets/image/roll_back1.png');
  background-size: 100% 100%;
  /* background-color: rgb(28, 26, 26); */
}
.right-top img{
  width: 100%;
  height: 80%;
}
.p{
  margin: 0;
  height: 19%;
  font-size: 2rem;
  color: #07deed;
  background-image: url('../assets/image/year_word.png');
  background-size: 100% 100%;
}
.p p{
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
  color: white;
  margin: 0;
}
ul{
  margin: 0;
  padding: 0;
}
.ul li{
  display: inline-block;
  width: 10%;
  background-color: rgba(21, 228, 243, 0.2);
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  color: white;
  font-weight: 600;
  border: 1px solid #41eaf7;
}
.right-bottom{
  width: 100%;
  height: 35%;
  background-image: url('../assets/image/indexkuang.png');
  background-size: 100% 100%;
  /* background-color: #ecb576; */
}
</style>