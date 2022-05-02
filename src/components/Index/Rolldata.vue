<!--首页滚榜实现-->
<template>
	<div class="container">
		<div class="rolltitle">
			<p class="rolltitle-p">热门借阅图书详情</p>
		</div>
		<div class="nav">
			<ul>
				<li>书籍名称</li>
				<li>所属书库</li>
				<li>书籍类别</li>
				<li>借阅人数</li>
			</ul>
		</div>
		<vueSeamless
		    :data="listData"
		    class="warp"
		>
			<ul class="item">
				<li
				    class="itemli"
				    v-for="(item, index) in listData"
				    :key="index"
				>
					<span
					    class="name"
					    v-text="item.name"
					></span>
						<span
						    class="name"
						    v-text="item.stack"
						></span>
							<span
							    class="brand"
							    v-text="item.category"
							></span>
								<span
								    class="category"
								    v-text="item.num"
								></span>
									</li>
			</ul>
			</vueSeamless>
	</div>

</template>

<script>
import vueSeamless from "vue-seamless-scroll/src";
// import { listData } from "../../assets/data/rolldata.js";
import axios from "axios";
export default {
  components: {
    vueSeamless,
  },
  data() {
    return {
      listData:[],
    };
  },
  mounted() {
    this.returndata();
  },
  computed: {
    classOption() {
      return {
        step: 1, // 数值越大速度滚动越快
        limitMoveNum: 4, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
        autoPlay: true,
      };
    },
  },
  methods: {
    returndata() {
      axios.get("/api/Home/Hotbook").then(res => {
        this.listData = res.data.data;
      });
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.nav {
  width: 100%;
}
/* 滑动条的盒子 */
.warp {
  height: 15rem;
  width: 100%;
  overflow: hidden;
  padding-left: 0;
  padding-top: 0;
  background-image: url("../../assets/image/roll_back.png");
  background-repeat: no-repeat;
  background-size: cover;
}
ul {
  list-style: none;
  padding-left: 0;
  margin: 0 auto;
  width: 100%;
}
.itemli {
  list-style: none;
  float: left;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: space-around;
  margin-right: 6px;
  width: 100%;
  padding: 0 10px;
}
span {
  display: inline-block;
  text-align: center;
  color: white;
  margin-top: 10px;
  white-space: nowrap; /*设置不换行*/
  overflow: hidden; /*设置隐藏*/
  text-overflow: ellipsis; /*设置隐藏部分为省略号*/
  font-size: 0.8rem;
}
/* 上面导航栏是ul为单位，如果上面导航栏和下面一一对齐是nav ul和item li对齐 使用grid */
.nav ul {
  list-style: none;
  align-items: center;
  color: #07dbff;
  background-color: #0c3571;
  height: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.rolltitle {
  width: 100%;
  height: 1.6rem;
  background-image: url("../../assets/image/rolltitle.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: white;
  text-align: start;
}
.rolltitle-p {
  transform: translate(0.8rem, -0.6rem);
  letter-spacing: 1.6px;
  font-size: 0.8rem;
}
</style>