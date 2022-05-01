<!-- 新书推荐 轮播图 -->
<template>
	<div class="bookbox">
		<div class="swiper-container">
			<p class="reco-title">最新书籍推荐</p>
			<div class="swiper-wrapper">
				<div
				    class="swiper-slide"
				    v-for="item of swiperList"
				    :key="item.id"
				>
					<img
					    class="swiper-img"
					    :src="item.imgUrl"
					/>
					<div>
					</div>
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>
	</div>
	</div>

</template>
<script>
import Swiper from "swiper"; // 注意引入的是Swiper
import "swiper/css/swiper.min.css";

export default {
  name: "HomeSwiper",
  mounted() {
    //注册一个swiper
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 4,
      autoplay: { delay: 2000 },
    });
  },
  data() {
    return {
      swiperList: [
        {
          id: "0001",
          imgUrl: require("../../assets/image/book/bird.png"),
        },
        {
          id: "0002",
          imgUrl: require("../../assets/image/book/little.png"),
        },
        {
          id: "0003",
          imgUrl: require("../../assets/image/book/love.png"),
        },
        {
          id: "0004",
          imgUrl: require("../../assets/image/book/moon.png"),
        },
        {
          id: "0005",
          imgUrl: require("../../assets/image/book/people.png"),
        },
        {
          id: "0006",
          imgUrl: require("../../assets/image/book/vuejs.png"),
        },
      ],
    };
  },
};
</script>
<style >
.bookbox {
  margin-left: 1rem;
  background-color: #020f22;
  width: 42rem;
  height: 100vh;
  padding: 0;
  background-image: url("../../assets/image/swiper_back.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.reco-title {
  color: white;
  text-shadow: 0 0 0.4rem #13b1cd, 0 0 0.5rem rgba(255, 255, 255, 0.6),
    0 0 1rem rgba(255, 255, 255, 0.8);
}
.swiper-img {
  transform: translateY(-17rem) scale(0.2);
}
.swiper-slide {
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
}
.swiper-pagination-bullet {
  background-color: #fff;
}
.swiper-pagination-bullet-active {
  background-color: #1cfbff;
}
</style>