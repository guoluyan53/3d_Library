<!-- 学情分析页-->
<template>
  <div class="body-container">
    <div class="content-left">

      <!-- 年度学院阅读排名TOP3 -->
      <div class="academytop3">
        <div class="titletop">
          <p>年度学院借阅排名TOP3</p>
        </div>
        <div class="contenttop3">
          <div class="group1">
            <span></span>
            <div class="top1">
              <p>文学院</p>
              <p style="color:#2df0d4">60277</p>
            </div>
          </div>
          <div class="group2">
            <span></span>
            <div class="top2">
              <p>政法学院</p>
              <p style="color:#2df0d4">42531</p>
            </div>
          </div>
          <div class="group3">
            <span></span>
            <div class="top3">
              <p>生命科学学院</p>
              <p style="color:#2df0d4">38435</p>
            </div>
          </div>

        </div>
      </div>
      <div class="reader">
        <Readtotal></Readtotal>
      </div>
    </div>
    <div class="content-middle">
      <img
        class="studygif"
        src="../assets/image/studygif.gif"
        alt=""
      >
    </div>
    <div class="content-right">
      <div class="change">
        <Change></Change>
      </div>
      <!-- 雷达图 -->

      <div class="radar">
        <Radarcategory></Radarcategory>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Change from "../components/Analyse/Change.vue";
import Radarcategory from "../components/Analyse/Radarcategory.vue";
import Readtotal from "../components/Analyse/Readtotal.vue";
import Head_nav from "../components/public/nav.vue";
export default {
  name: "Analyse",
  data() {
    return {
      topdata: [],
    };
  },
  mounted() {
    this.returndata();
  },
  components: {
    Change,
    Radarcategory,
    Readtotal,
    Head_nav,
  },
  methods: {
    returndata() {
      axios.get("/api/StudySituationAnalysis/TopCollege").then(res => {
        this.topdata = res.data.data;
        // console.log(this.topdata);
      });
    },
  },
};
</script>
<style scoped>
.body-container {
  display: grid;
  background-color: #020f23;
  grid-template-columns: 30% 36% 34%;
}
div[class^="content"] {
  height: 100vh;
}
.content-left {
  display: grid;
  grid-template-rows: 42% 58%;
}
.content-right {
  display: grid;
  grid-template-rows: 55% 45%;
}
.content-middle {
  width: 100%;
  height: 100%;
  /* background-color: #000a2c */
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
  margin-bottom: 0.6rem;
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
.studygif {
  width: 100%;
  height: 70%;
  margin-top: 30%;
}
.group1,
.group3 {
  transform: translateX(-2.8rem);
}
.group2 {
  transform: translateX(1rem);
}
</style>
