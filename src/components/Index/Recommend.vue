<!-- 新书推荐 轮播图 -->
<template>
	<div class="bookbox">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item of swiperList" :key="item.id">
					<div class="slideimg"><img class="swiper-img" :src="item.imgUrl" /></div>
					<p class="slidetitle">{{item.title}}</p>
					<p class="slidecontent">{{item.content}}</p>
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>
	</div>

</template>
<script>
import Swiper from 'swiper'; // 注意引入的是Swiper
import 'swiper/css/swiper.min.css';

export default {
	name: 'HomeSwiper',
	mounted() {
		//注册一个swiper
		var mySwiper = new Swiper('.swiper-container', {
			//参数就是配置
			loop: true,
			 autoplay:true,
			// 显示分页器
			pagination: {
				el: '.swiper-pagination',
				clickable: true //允许分页点击跳转
			}
		});
	},
	data() {
		return {
			swiperList: [
				{
					id: '0001',
					imgUrl: require('../../assets/image/book/bird.png'),
					title: '《杀死一只知更鸟》',
					content:
						'该小说讲述一个名叫汤姆·鲁滨逊的年轻人，被人诬告犯了强奸罪后，只是因为是一个黑人，辩护律师阿蒂克斯·芬奇尽管握有汤姆不是强奸犯的证据，都无法阻止陪审团给出汤姆有罪的结论。小说以第一人称著成，叙述者的父亲阿提克斯·芬奇在书中为道德端正的角色，亦是正直律师的典范。1961年，该书获当年度普利策奖，被翻译成四十多种语言，在世界范围内售出超过三千万册，同年被改编成同名电影。'
				},
				{
					id: '0002',
					imgUrl: require('../../assets/image/book/little.png'),
					title: '《小王子》',
					content:
						'该小说讲述一个名叫汤姆·鲁滨逊的年轻人，被人诬告犯了强奸罪后，只是因为是一个黑人，辩护律师阿蒂克斯·芬奇尽管握有汤姆不是强奸犯的证据，都无法阻止陪审团给出汤姆有罪的结论。小说以第一人称著成，叙述者的父亲阿提克斯·芬奇在书中为道德端正的角色，亦是正直律师的典范。1961年，该书获当年度普利策奖，被翻译成四十多种语言，在世界范围内售出超过三千万册，同年被改编成同名电影。'
				},
				{
					id: '0003',
					imgUrl: require('../../assets/image/book/love.png'),
					title: '《霍乱时期的爱情》',
					content:
						'该小说讲述一个名叫汤姆·鲁滨逊的年轻人，被人诬告犯了强奸罪后，只是因为是一个黑人，辩护律师阿蒂克斯·芬奇尽管握有汤姆不是强奸犯的证据，都无法阻止陪审团给出汤姆有罪的结论。小说以第一人称著成，叙述者的父亲阿提克斯·芬奇在书中为道德端正的角色，亦是正直律师的典范。1961年，该书获当年度普利策奖，被翻译成四十多种语言，在世界范围内售出超过三千万册，同年被改编成同名电影。'
				},
				{
					id: '0004',
					imgUrl: require('../../assets/image/book/moon.png'),
					title: '《月亮与六便士》',
					content:
						'该小说讲述一个名叫汤姆·鲁滨逊的年轻人，被人诬告犯了强奸罪后，只是因为是一个黑人，辩护律师阿蒂克斯·芬奇尽管握有汤姆不是强奸犯的证据，都无法阻止陪审团给出汤姆有罪的结论。小说以第一人称著成，叙述者的父亲阿提克斯·芬奇在书中为道德端正的角色，亦是正直律师的典范。1961年，该书获当年度普利策奖，被翻译成四十多种语言，在世界范围内售出超过三千万册，同年被改编成同名电影。'
				},
				{
					id: '0005',
					imgUrl: require('../../assets/image/book/people.png'),
					title: '《人间失格》',
					content:
						'该小说讲述一个名叫汤姆·鲁滨逊的年轻人，被人诬告犯了强奸罪后，只是因为是一个黑人，辩护律师阿蒂克斯·芬奇尽管握有汤姆不是强奸犯的证据，都无法阻止陪审团给出汤姆有罪的结论。小说以第一人称著成，叙述者的父亲阿提克斯·芬奇在书中为道德端正的角色，亦是正直律师的典范。1961年，该书获当年度普利策奖，被翻译成四十多种语言，在世界范围内售出超过三千万册，同年被改编成同名电影。'
				},
				{
					id: '0006',
					imgUrl: require('../../assets/image/book/vuejs.png'),
					title: '《Vuejs前端开发》',
					content:
						'该小说讲述一个名叫汤姆·鲁滨逊的年轻人，被人诬告犯了强奸罪后，只是因为是一个黑人，辩护律师阿蒂克斯·芬奇尽管握有汤姆不是强奸犯的证据，都无法阻止陪审团给出汤姆有罪的结论。小说以第一人称著成，叙述者的父亲阿提克斯·芬奇在书中为道德端正的角色，亦是正直律师的典范。1961年，该书获当年度普利策奖，被翻译成四十多种语言，在世界范围内售出超过三千万册，同年被改编成同名电影。'
				}
			]
		};
	}
};
</script>
<style >
.bookbox {
	background-color: #020f22;
	width: 100%;
	height: 100%;
	position: relative;
}
.swiper-img {
	transform: scale(0.3);
}
.slideimg {
	transform: translateY(-10rem);
}
p {
	transform: translateY(-25rem);
}
.slidecontent {
	color: #fff;
	width: 20rem;
	margin: 0 auto;
	font-size: 0.2rem;
}
.slidetitle {
	color: #1cfbff;
}
.swiper-pagination {
	transform: translateY(-18rem);
	width: 4rem;
	height: 4rem;
	text-align: center;
	line-height: 20px;
	font-size: 12px;
	color: #fff;
	opacity: 1;
}
.swiper-pagination-bullet {
	background-color: #fff;
}
.swiper-pagination-bullet-active {
	background-color: #1cfbff;
}
</style>