<!-- 导航栏-->
<template>
  <div class="nav">
      <div class="header">
          <div class="left">
			  <span @click="toIndex(1)">首页</span>
			  <span @click="toIndex(2)">楼层导航</span>
		  </div>
          <div class="mid">图书馆数据展示平台</div>
          <div class="right">
			  <span @click="toIndex(3)">图书寻找</span>
			  <span @click="toIndex(4)">学情分析</span>
		  </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Head_nav',
  methods:{
	  toIndex(e){
		  if(e==1){
			  this.$router.push('/')
		  }else if(e==2){
			  this.$router.push('/floor')
		  }else if(e==3){
			  this.$router.push('/book')
		  }else if(e==4){
			  this.$router.push('/analyse')
		  }
	  }
  }
}
</script>
<style scoped>
.header{
    width: 100%;
    height: 10vh;
	background-image: url('../../assets/image/head.png');
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
	display: flex;
	justify-content: space-around;
}
.left{
	width: 30%;
	display: flex;
	justify-content: space-around;
}
.right{
	width: 30%;
	display: flex;
	justify-content: space-around;
}
.mid{
	flex: 1;
}
span{
	cursor: pointer;
}
</style>