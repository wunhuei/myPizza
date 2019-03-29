<template>
  <div id="about" class="innerContainer">
    <div class="inner-banner">
      <img src="https://placem.at/things?w=1200&h=500&random=6" alt="">
      <div class="inner-title">
        <h1>about pizza</h1>
        <h2>leo arcu eget lorem at metus auctor</h2>
      </div>  
    </div>
    <div class="container">
      <div class="about-content">
        <h2>et blandit erat nisl at metus</h2>
        <h3>et blandit erat nisl ullamcorper velit, velit, ut posuere leo arcu eget lorem at metus auctor<br> eleifendut posuere leo arcu eget lorem at metus auctor eleifend</h3>
        <div class="about-box twoPic">
          <img src="https://placem.at/things?w=800&h=500&random=6" alt="">
          <img src="https://placem.at/things?w=800&h=500&random=6" alt="">
        </div>
        <div class="about-box">
          <div class="text-left">
          <h4>leo arcu eget lorem</h4>
          <h5>end, metus magna ullamcorper velit, ut posuere</h5>
          <p>et blandit erat nisl ullamcorper velit, ut posuere leo arcu eget lorem at metus auctor eleifend, metus magna ullamcorper velit, ut posuere leo arcu eget lorem. et blandit erat nisl ullamcorper velit, ut posuere leo arcu eget lorem at metus auctor eleifend</p>
          </div>
          <img src="https://placem.at/things?w=800&h=400&random=6" alt="" class="rightpic">
        </div>
        <div class="about-box">
          <img src="https://placem.at/things?w=1400&h=400&random=6" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scooed>
  .about-content h2{
    font-size: 24px;
    text-align: center;
  }
  .about-content h3{
    font-size: 17px;
    text-align: center;
    margin-bottom: 60px;
  }
  .about-content h4{
    font-size: 22px;
    letter-spacing: -0.1px;
    color: #db5e19;
  }
  .about-content h5{
    font-size: 32px;
    line-height: 1;
    margin-bottom: 17px;
  }
  .about-content p{
    font-size: 21px;
    line-height: 1.2;
  }
  .about-box{
    position: relative;
    margin-bottom: 80px;
  }
  .about-box img{
    width: 100%;
  }
  .about-box.twoPic{
    position: relative;
    margin-bottom: 130px;
  }
  .about-box.twoPic img:nth-child(1){
    width: 55vw;
  }
  .about-box.twoPic img:nth-child(2){
    width: 39vw;
    position: absolute;
    right: 0;
    bottom: -44px;
  }
  .about-content .rightpic{
    width: 69.4%;
    display: inline-block;
    margin-bottom: -15px;
  }
  .about-content .text-left{
    width: 30%;
    display: inline-block;
  }
  @media screen and (max-width:767px){
    .about-content h2{
      font-size: 22px;
      margin-bottom: 10px;
    }
    .about-content h3{
      line-height: 1.2;
    }
    .about-box.twoPic{
      margin-bottom: 30px;
    }
    .about-box.twoPic img:nth-child(1){
      width: 100%;
    }
    .about-box.twoPic img:nth-child(2){
      width: 100%;
      position: relative;
      right: auto;
      bottom: auto;
    }
    .about-content .text-left{
      width: 100%;
    }
    .about-content p{
      margin-bottom: 10px;
    }
    .about-content .rightpic{
      width: 100%;
      margin-bottom: 0px;
    }
    .about-box{
      margin-bottom: 20px;
    }
    .about-box:last-child{
      margin-bottom: 60px;
    }
  }
  @media screen and (max-width:480px){
    .container{
      padding: 0 15px;
    }
    .about-content h3{
      margin-bottom: 30px;
    }
    .about-box {
      margin-bottom: 10px;
    }
  }
</style>