<!-- 导航栏-->
<template>
	<div class="nav">
		<div class="header">
			<div class="left">
				<a
				    class="button1"
				    @click="toIndex(1)"
				    :class="{'active':$route.name=='Index'}"
				>
					<span class="span1"></span>
					<span class="span2"></span>
					<span class="span3"></span>
					<span class="span4"></span> 首页</a>
					<a
					    class="button2"
					    @click="toIndex(2)"
					    :class="{'active':$route.name=='Floor'}"
					>
						<span class="span1"></span>
						<span class="span2"></span>
						<span class="span3"></span>
						<span class="span4"></span>楼层导航</a>
			</div>
			<div class="mid">图书馆数据展示平台</div>
			<div class="right">
				<a
				    class="button3"
				    @click="toIndex(3)"
				    :class="{'active':$route.name=='Book'}"
				>
					<span class="span1"></span>
					<span class="span2"></span>
					<span class="span3"></span>
					<span class="span4"></span>图书寻找</a>
					<a
					    class="button4"
					    @click="toIndex(4)"
					    :class="{'active':$route.name=='Analyse'}"
					>
						<span class="span1"></span>
						<span class="span2"></span>
						<span class="span3"></span>
						<span class="span4"></span>学情分析</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "Head_nav",
  methods: {
    toIndex(e) {
      if (e == 1) {
        this.$router.push("/");
      } else if (e == 2) {
        this.$router.push("/floor");
      } else if (e == 3) {
        this.$router.push("/book");
      } else if (e == 4) {
        this.$router.push("/analyse");
    }
    },
  },
};
</script>
<style scoped>
.active {
  color: white;
  text-shadow: 0 0 6px rgb(18, 190, 243), 0 0 8px rgb(18, 190, 243),
    0 0 10px rgb(18, 190, 243);
  background-image: linear-gradient(
    90deg,
    rgb(25, 38, 99) 50%,
    rgb(13, 22, 58) 50%
  );
  box-shadow: inset 0 0 10px rgb(14, 20, 105), 0 0 5px rgb(9, 208, 235),
    0 0 10px rgb(9, 208, 235);
}
.mid {
  flex: 1;
  font-size: 1.4rem;
  letter-spacing: 2px;
  color: white;
  text-shadow: 0 0 0.4rem #13b1cd, 0 0 0.5rem rgba(255, 255, 255, 0.6),
    0 0 1rem rgba(255, 255, 255, 0.8);
}
.nav {
  width: 100%;
  height: 10vh;
  background-color: #0e0c2b;
}
.header {
  width: 100%;
  height: 10vh;
  background-image: url("../../assets/image/head.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  align-items: center;
  margin: 0;
  display: flex;
  justify-content: space-around;
}
.left {
  width: 30%;
  display: flex;
  justify-content: space-around;
}
.right {
  width: 30%;
  display: flex;
  justify-content: space-around;
}
a[class^="button"] {
  width: 5.4rem;
  height: 2.2rem;
  cursor: pointer;
  padding-top: 5px;
  position: relative;
  color: white;
  text-align: center;
  background-image: linear-gradient(
    90deg,
    rgb(40, 62, 161) 50%,
    rgb(31, 49, 133) 50%
  );
  text-transform: uppercase;
  user-select: none;
  text-decoration: none;
  overflow: hidden;
  box-shadow: inset 0 0 10px rgb(14, 20, 105), 0 0 5px rgb(9, 208, 235);
  transition: all 0.5s;
}
span[class^="span"] {
  position: absolute;
}
.span1 {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(to right, transparent, rgb(0, 153, 255));
  animation: move1 2s linear infinite;
}
@keyframes move1 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
.span2 {
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  transform: translateY(-100%);
  background-image: linear-gradient(to bottom, transparent, rgb(0, 153, 255));
  animation: move2 2s linear infinite;
  animation-delay: 1s;
}
@keyframes move2 {
  100% {
    transform: translateY(100%);
  }
}
.span3 {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-image: linear-gradient(to left, transparent, rgb(0, 153, 255));
  animation: move3 2s linear infinite;
}
@keyframes move3 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
.span4 {
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  transform: translateY(100%);
  background-image: linear-gradient(to top, transparent, rgb(0, 153, 255));
  animation: move4 2s linear infinite;
  animation-delay: 1s;
}
@keyframes move4 {
  100% {
    transform: translateY(-100%);
  }
}
</style>