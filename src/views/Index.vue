<!-- 首页门户，放图书馆模型的那一页-->
<template>
  <div class="body-box">
    <div class="top">
      <p>图书馆数据展示平台</p>
    </div>

    <!-- 首页下面分成三部分，网格布局 -->
    <div class="container">
      <div class="content-left">

      </div>
      <div class="content-middle">
        <div class="school"></div>
        <div class="total">
          <p>总藏书量</p>
          <p>累计借还量</p>
          <p>今日进馆人数</p>
        </div>
        <div class="roll-top">
          <img src="../assets/image/head.png" alt="">
        </div>
      </div>
      <div class="content-right">

      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'Index'
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
	background-size: cover;
	color: white;
  text-align: center;
	letter-spacing: 2px;
	font-size: 1.3rem;
	text-shadow: 0 0 0.4rem #13b1cd, 0 0 0.5rem rgba(255, 255, 255, 0.6), 0 0 1rem rgba(255, 255, 255, 0.8);
}
.container {
	display: grid;
	grid-template-columns: 28% 40% 32%;
}
</style>
