<template>
  <div id="default">
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/images/banner_01.jpg" alt="bn">
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/banner_02.jpg" alt="bn">
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/banner_03.jpg" alt="bn">
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="default-new-list">
      <div class="news-title">news</div>
      <ul>
        <li v-for="Newitem in Newitems">
          <router-link to="/">{{Newitem}}</router-link>
        </li>
      </ul>
    </div>
    <div class="default-about">
      <img src="../assets/images/default-img.jpg" alt="">
      <div class="default-about-content">
        <h2>et blandit erat nisl at metus</h2>
        <h3>ullamcorper velit, ut posuere leo arcu eget lorem.</h3>
        <p>et blandit erat nisl ullamcorper velit, ut posuere leo arcu eget lorem at metus auctor eleifend, metus magna ullamcorper velit, ut posuere leo arcu eget lorem. et blandit erat nisl ullamcorper velit, ut posuere leo arcu eget lorem at metus auctor eleifend, metus magna ullamcorper velit, ut posuere leo arcu eget lorem. lorem. et blandit erat nisl ullamcorper velit, ut posuere leo arcu eget lorem at metus auctor eleifend, metus magna ullamcorper velit, ut posuere leo arcu eget lorem.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from './../assets/js/swiper.min.js';
export default {
  name: 'Swiper',
  data() {
    return{
      dd: 'AAAAA',
      Newitems: [
        '20190212  news  auctor eleifend, metus magna ullamcorper velit, ut posuere leo arcu eget lorem...',
        '20190205  news  placerat magna, et blandit erat nisl at metus. Nam vel porta justota justo, sed....',
        '20190309  news  ullamcorper velit, ut posuere leo arcu eget lorem. nisl nisl placerat magna....',
      ],
    };
  },
  mounted(){
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 100,
      centeredSlides: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    });
  },
}
</script>

<style scoped>
@import './../assets/css/swiper.min.css';
#default{
  margin-top: 176px;
}
.swiper-container{
  margin-bottom: 35px;
}
.swiper-container img{
  width:100%;
}
.default-new-list{
  padding: 20px 0;
  margin-bottom: 40px;
}
.news-title{
  display: inline-block;
  font-size: 2.3em;
  color: #bcbcbc;
  margin: 0 8%;
  line-height: 1;
}
.default-new-list ul{
  display: inline-block;
  vertical-align: top;
  width: 74%;
}
.default-new-list ul li{
  font-size: 17px;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}
.default-new-list ul li a{
  color: #404040;
}
.default-new-list ul li a:hover{
  color: #eb5502;
}
.default-about{
  margin-bottom: 90px;
}
.default-about img{
  margin-left: -15vw;
  width: 70%;
}
.default-about .default-about-content{
  width: 47%;
  display: inline-block;
  text-align: justify;
}
.default-about h2{
  font-family: 'pacifico';
  font-size: 16px;
  color: #314ada;
}
.default-about h3{
  font-size: 32px;
  color: #464646;
  line-height: 1.2;
  margin-bottom: 15px;
}
.default-about p{
  color: #7a7a7a;
  font-size: 18px;
}
@media screen and (max-width:1499px){
  .default-about .default-about-content{
    width: 42%;
  }
}
@media screen and (max-width:1079px){
  .news-title{
    margin: 0 20px;
  }
  .default-new-list ul{
    width: 85%;
  }
}
@media screen and (max-width:949px){
  .default-new-list{
    padding: 0px 0;
    margin-bottom: 30px;
  }
  .news-title{
    margin: 0;
    margin-bottom: 10px;
    display: block;
  }
  .default-new-list ul{
    width: 100%;
  }
  .default-new-list ul li{
    margin-bottom: 6px;
  }
  .default-about img{
    width: 100%;
    margin-left: -8vw;
    margin-bottom: 10px;
  }
  .default-about .default-about-content{
    width: 100%;
  }
}
@media screen and (max-width:767px){
  #default{
    margin-top: 122px;
  }
  .swiper-container{
    margin-bottom: 10px;
  }
  .default-new-list ul li{
    margin-bottom: 14px;
    line-height: 1.2;
    letter-spacing: 0px;
  }
}
@media screen and (max-width:480px){
  .news-title{
    font-size: 25px;
  }
  .default-new-list ul{
    text-align: justify;
  }
  .default-new-list ul li{
    font-size: 15px;
  }
  .default-about h3{
    font-size: 26px;
    text-align: left;
  }
}
</style>