<!-- 学情分析页-->
<template>
	<div class="body-box">
		<div class="headtop">
			<head_nav></head_nav>
		</div>

		<div class="body-container">
			<div class="content-left">
				<!-- 雷达图 -->
				<div class="radar">
					<Radarcategory></Radarcategory>
				</div>
				<!-- 年度学院阅读排名TOP3 -->
				<div class="academytop3">
					<div class="titletop">
						<p>年度学院借阅排名TOP3</p>
					</div>
					<div class="contenttop3">
						<div class="group1">
							<span></span>
							<div class="top1">
								<p>计算机信息工程学院</p>
								<p>借阅量：22312</p>
							</div>
						</div>
						<div class="group2">
							<span></span>
							<div class="top2">
								<p>文学院</p>
								<p>借阅量：22312</p>
							</div>
						</div>
						<div class="group3">
							<span></span>
							<div class="top3">
								<p>锂电学院</p>
								<p>借阅量：22312</p>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="content-middle">
				<img class="studygif" src="../assets/image/studygif.gif" alt="">
			</div>
			<div class="content-right">
					<div class="change">
						<Change></Change>
					</div>
					<div class="reader">
						<Readtotal></Readtotal>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
import Change from "../components/Analyse/Change.vue";
import Radarcategory from "../components/Analyse/Radarcategory.vue";
import Readtotal from "../components/Analyse/Readtotal.vue";
import Head_nav from "../components/public/nav.vue";
export default {
  name: "Analyse",
  data() {
    return {};
  },
  components: {
    Change,
    Radarcategory,
    Readtotal,
    Head_nav,
  },
};
</script>
<style scoped>
.body-box {
  width: 100%;
  height: 100vh;
  background-color: #020f23;
  display: grid;
  grid-template-rows: 8% 92%;
}
.body-container {
  display: grid;
  grid-template-columns: 30% 36% 34%;
}
div[class^="content"] {
  height: 100vh;
}
.content-left {
  display: grid;
  grid-template-rows: 55% 45%;
}
.content-right{
	display: grid;
  grid-template-rows: 55% 45%;
}
.content-middle{
	width: 100%;
	height: 100%;
	/* background-color: #000a2c */
}
.radar {
  padding: 0;
}
.academytop3 {
  background-image: url("../assets/image/indexkuang.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.titletop {
  color: white;
  text-shadow: 0 0 0.4rem #13b1cd, 0 0 0.5rem rgba(255, 255, 255, 0.6),
    0 0 1rem rgba(255, 255, 255, 0.8);
}
.contenttop3 {
  color: white;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
}
div[class^="top"] {
  display: inline-block;
  background-image: url("../assets/image/top3.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 13rem;
  height: 3.8rem;
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
}
span {
  display: inline-block;
  width: 2rem;
  height: 2.5rem;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 1rem;
}
.group1 span {
  background-image: url("../assets/image/1top.png");
}
.group2 span {
  background-image: url("../assets/image/2top.png");
}
.group3 span {
  background-image: url("../assets/image/3top.png");
}
.studygif{
	width: 100%;
	height: 80%;
	margin-top: 18%
}
</style>
