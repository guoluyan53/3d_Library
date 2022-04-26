<!-- 首页门户，放图书馆模型的那一页-->
<template>
  <div class="body-box">
    <div class="top">
      <p>图书馆数据展示平台</p>
    </div>

    <!-- 首页下面分成三部分，网格布局 -->
    <div class="body-container">
      <div class="content-left">

      </div>
      <div class="content-middle">
        <div class="school"></div>
        <div class="total">
          <div class="total1">
            <p>总藏书量</p>
            <p>225164万册</p>
          </div>
          <div class="total2">
            <p>累计借还量</p>
            <p>225164万册</p>
          </div>
          <div class="total3">
            <p>今日进馆人数</p>
            <p>2254人</p>
          </div>

        </div>
        <div class="roll-top">
          <Rolldata></Rolldata>
        </div>
      </div>
      <div class="content-right">

      </div>
    </div>
  </div>
</template>

<script>
import Rolldata from '../components/Index/Rolldata.vue';
export default {
	name: 'Index',
	data() {
		return {};
	},
	components: {
		Rolldata
	}
};
</script>
<style scoped>
.body-box {
	width: 100%;
	height: 100vh;
	background-color: #020f23;
	display: grid;
	grid-template-rows: 10% 90%;
}
.top {
	background-image: url('../assets/image/head.png');
	background-repeat: no-repeat;
	background-size: contain;;
	color: white;
	text-align: center;
	align-items: center;
	letter-spacing: 2px;
	font-size: 1.3rem;
	text-shadow: 0 0 0.4rem #13b1cd, 0 0 0.5rem rgba(255, 255, 255, 0.6), 0 0 1rem rgba(255, 255, 255, 0.8);
	margin-bottom: 1rem;
	margin: 0;
}
.body-container {
	display: grid;
	grid-template-columns: 26% 48% 26%;
}
div[class^='content'] {
	height: 100vh;
}
.content-middle {
	display: grid;
	grid-template-rows: 50% 10% 40%;
}
.school {
	background-image: url('../assets/image/indexschool.png');
	background-repeat: no-repeat;
	background-size: contain;
	z-index: 100;
	transform: translateY(2.2rem) scale(1.46);
}
.total {
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
}
.total1,
.total2,
.total3 {
	background-image: url('../assets/image/totaltwo_back.png');
	background-repeat: no-repeat;
	background-size: contain;
	width: 7.2rem;
	height: 100%;
	text-align: center;
	transform: translateY(-2.8rem);
}
.total p {
	font-size: 0.5rem;
}
.roll-top {
	width: 100%;
	transform: translateY(-2.8rem);
}
</style>
