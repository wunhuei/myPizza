<template>
  <div id="app">
    <div class="green-border">
      <div class="red-border"></div>
    </div>
    <div class="white-top"></div>
    <div class="white-bottom"></div>
    <div class="container">
      <Header/>
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  @charset "UTF-8";
  @import './assets/css/font.css';
  *{
    font-family:serif;
    padding:0;
    margin:0;
    box-sizing: border-box;
  }
  html,body{
    position:relative;
  }
  a, a:hover{
    text-decoration: none;
  }
  a, button, img, input, textarea{
    outline:none;
  }
  ul, li{
    list-style-type: none;
  }
  .container{
    width:1300px;
    margin:0 auto;
    padding-bottom:15px;
  }
  .green-border{
    pointer-events: none;
    width: 98%;
    height: 98%;
    border: 2px solid #73c640;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
  .red-border{
    width: 98%;
    height: 98%;
    border: 2px solid #da3838;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .white-top{
    width: 100%;
    height: 30px;
    background: #ffffff;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  .white-bottom{
    width: 100%;
    height: 40px;
    background: #ffffff;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  .innerContainer{
    margin-top:180px
  }
  .inner-banner{
    position: relative;
    height: 34vw;
  }
  .inner-banner img{
    position: absolute;
    width: 90%;
    left: -19vw;
  }
  .inner-banner .inner-title{
    position: absolute;
    left: 35vw;
    top: 20vw;
  }
  .inner-title h1{
    font-family: 'pacifico';
    font-weight: inherit;
    font-size: 20px;
    color: #fff;
  }
  .inner-title h2{
    font-size: 32px;
    color: #2c2c2c;
    line-height: 1;
  }
  @media screen and (min-width:1410px){
    .green-border, .red-border{
      width: 98.6%;
    }
    
  }
  @media screen and (max-width:1500px){
    .inner-banner{
      height: 37vw;
    }
  }
  @media screen and (max-width:1410px){
    .container{
      width:100%;
      margin:0 auto;
      padding:0 50px;
    }
    
  }
  @media screen and (max-width:767px){
    .green-border, .red-border{
      width: 97%;
    }
    .innerContainer{
      margin-top:122px
    }
    .inner-banner img{
      left: -11vw;
    }
    .inner-banner .inner-title{
      left: 41vw;
      top: 16vw;
    }
    .inner-title h1{
      font-size: 18px;
    }
    .inner-title h2{
      font-size: 25px;
    }
  }
  @media screen and (max-width:480px){
    .container{
      padding: 0 30px;
    }
    .inner-banner img{
      left: -7vw;
    }
    .inner-banner .inner-title{
      left: 41vw;
      top: 12vw;
    }
    .inner-title h2{
      font-size: 20px;
    }
  }
</style>