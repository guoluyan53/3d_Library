<!-- 新书推荐 轮播图 -->
<template>
    <div class="bookbox">
        <div class="wrapper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="item of swiperList" :key="item.id">
                    <img class="swiper-img" :src="item.imgUrl" />
                    <p class="swiper-title" v-text="item.title"></p>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>

    </div>

</template>
<script>
export default {
	name: 'HomeSwiper',
	data() {
		return {
			swiperOptions: {
				loop: true,
                //  autoplay:true,
				// 显示分页
				pagination: {
					el: '.swiper-pagination',
					clickable: true //允许分页点击跳转
				},
				// 设置点击箭头
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
			},
			swiperList: [
				{
					id: '0001',
					imgUrl: require('../../assets/image/book/bird.png'),
					title: '杀死一只知更鸟'
				},
				{
					id: '0002',
					imgUrl: require('../../assets/image/book/little.png'),
					title: '杀死一只知更鸟'
				},
				{
					id: '0003',
					imgUrl: require('../../assets/image/book/love.png'),
					title: '杀死一只知更鸟'
				},
				{
					id: '0004',
					imgUrl: require('../../assets/image/book/moon.png'),
					title: '杀死一只知更鸟'
				},
				{
					id: '0005',
					imgUrl: require('../../assets/image/book/people.png'),
					title: '杀死一只知更鸟'
				},
				{
					id: '0006',
					imgUrl: require('../../assets/image/book/vuejs.png'),
					title: '杀死一只知更鸟'
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
}
swiper-slide {
	width: 20rem;
	height: 20rem;
	display: grid;
	grid-template-rows: 1fr 1fr;
	justify-content: space-around;
}
.swiper-img{
    transform: scale(0.4)
}
p{
    color: white
}
 .swiper-pagination{
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color:#fff;
    opacity: 1;
    background: rgba(255,255,255,0.2);
  }
  .swiper-pagination-bullet-active {
    color:#fff;
    background-color: aqua;
  }
</style>