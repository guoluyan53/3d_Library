<!-- 楼层页，点击图书馆模型进入的那页，默认为第一层-->
<template>
  <div class="book">
    <div class="main">
      <!-- 分为左中右三部分 -->
      <!-- 左 -->
      <div class="left-box">
        <div class="left-top">
          <img
            src="../assets/image/wordwindow.png"
            alt=""
          >
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
          <Rose></Rose>
        </div>
        <div class="right-bottom">
          <Dotted></Dotted>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from "../components/public/nav.vue";
import Dotted from "../components/Book/Dotted.vue";
import Hotbook from "../components/Book/hotbook.vue";
import Popo from "../components/Book/popo.vue";
import Rose from "../components/Book/rose.vue";
import Top10 from "../components/Book/Top10.vue";
export default {
  name: "Book",
  components: {
    HeaderNav,
    Dotted,
    Hotbook,
    Popo,
    Rose,
    Top10,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.book {
  width: 100%;
  height: 90vh;
  /* display: grid;
	grid-template-rows: 10% 90%; */
  background-image: url("../assets/image/book_back2.png");
  background-size: 100% 100%;
}
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.left-box {
  width: 26%;
  height: 90vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.left-top {
  width: 100%;
  height: 59%;
  background-image: url("../assets/image/roll_back1.png");
  background-size: 100% 100%;
}
.left-bottom {
  width: 100%;
  height: 40%;
  background-image: url("../assets/image/indexkuang.png");
  background-size: 100% 100%;
}
.mid-box {
  width: 45%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.mid-top {
  width: 100%;
  height: 60%;
  background-image: url("../assets/image/indexkuang.png");
  background-size: 100% 100%;
}
.mid-bottom {
  width: 100%;
  height: 37%;
  background-image: url("../assets/image/roll_back.png");
  background-size: 100% 100%;
}
.right-box {
  width: 26%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.right-top {
  width: 100%;
  height: 45%;
  background-image: url("../assets/image/roll_back1.png");
  background-size: 100% 100%;
}
.left-top img {
  width: 100%;
  height: 80%;
}
.p {
  margin: 0;
  height: 19%;
  font-size: 2rem;
  color: #07deed;
  background-image: url("../assets/image/year_word.png");
  background-size: 100% 100%;
}
.p p {
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
  color: white;
  margin: 0;
}
ul {
  margin: 0;
  padding: 0;
}
.ul li {
  display: inline-block;
  width: 10%;
  background-color: rgba(21, 228, 243, 0.2);
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  color: white;
  font-weight: 600;
  border: 1px solid #41eaf7;
}
.right-bottom {
  width: 100%;
  height: 55%;
  background-image: url("../assets/image/indexkuang.png");
  background-size: 100% 100%;
}
</style>