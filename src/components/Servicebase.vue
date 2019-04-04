<template>
  <div id="servicebase" class="innerContainer">
    <div class="inner-banner">
      <img src="../assets/images/inner_bn_02.jpg" alt="bn">
      <div class="inner-title">
        <h1>servicebase</h1>
        <h2>leo arcu eget lorem at metus auctor</h2>
      </div>  
    </div>
    <div class="container">
      <div class="service-nav">
        <a href="#" @click="linkMenu" class="number0">Branch1</a>
        <a href="#" @click="linkMenu" class="number1">Branch2</a>
        <a href="#" @click="linkMenu" class="number2">Branch3</a>
        <a href="#" @click="linkMenu" class="number3">Branch4</a>
      </div>
      <div class="service-section">
        <div class="service-list" v-for="(serviceitem,index) in service" :value="index" :key="serviceitem.storeNamestoreName" :id="'number'+index">
          <div class="service-text">
            <h3>{{serviceitem.storeName}}</h3>
            <font-awesome-icon :icon="['fab', 'facebook']"/>
            <font-awesome-icon :icon="['fab', 'instagram']"/>
            <font-awesome-icon :icon="['fab', 'line']"/>
            <ul>
              <li><span>time</span>{{serviceitem.time}}</li>
              <li><span>add</span>{{serviceitem.add}}</li>
              <li><span>tel</span>{{serviceitem.tel}}</li>
            </ul>
          </div>
          <img :src="serviceitem.img">
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      service: [],
    };
  },
  mounted(){
    fetch('./src/api/serviceData.json')
    .then(res=>res.json())
    .then(service=>this.service=service);
  },
  methods:{
    linkMenu: function(e){
        e.preventDefault();
        let nav_choise = $(e.target).attr('class');
        console.log(nav_choise);
        $('html, body').animate(
          {
            scrollTop:$('#'+nav_choise).offset().top-120
          }, 500
        );
      
    }
  }
}
</script>

<style scooed>
  #servicebase{
    padding-bottom: 100px;
  }
  #servicebase .service-nav{
    margin-bottom: 60px;
    border-bottom: 1px solid #e1e1e1;
    padding-bottom: 25px;
  }
  #servicebase .service-nav a{
    font-size: 18px;
    border: 2px solid #343535;
    background: #353535;
    color: #ffffff;
    padding: 5px 30px;
    letter-spacing: 1px;
    margin-right: 6px;
    margin-bottom: 10px;
    display: inline-block;
    transition: all 0.3s;
  }
  #servicebase .service-nav a:hover{
    border: 2px solid #1aad63;
    background: #ffffff;
    color: #1aad63;
  }
  .service-section .service-list{
    display: block;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #cbcbcb;
  }
  .service-list .service-text{
    width: 30%;
    display: inline-block;
  }
  .service-list img{
    width: 69%;
    margin-bottom: -15px;
  }
  .service-list h3{
    font-size: 35px;
    margin-left: -3px;
    color: #1a3b8b;
    margin-bottom: 6px;
  }
  .service-list ul{
    font-size: 17px;
  }
  .service-list ul li{
    margin-bottom: 15px;
    position: relative;
    font-size: 21px;
    line-height: 1;
  }
  .service-list ul li span{
    display: block;
    font-weight: bold;
    color: #1aad63;
    font-size: 16px;
  }
  .service-list .service-text svg{
    font-size: 30px;
    margin-right: 7px;
    margin-bottom: 10px;
    color: #2a2a2a;
  }
  @media screen and (max-width:992px){
    .container{
      padding: 0 15px;
    }
    #servicebase .service-nav{
      margin-bottom: 20px;
      padding-bottom: 10px;
    }
    .service-list .service-text{
      width: 100%;
    }
    .service-list img{
      width: 100%;
      margin-bottom: 0px;
    }
    #servicebase .service-nav a{
      font-size: 15px;
      padding: 3px 10px;
      letter-spacing: 1px;
    }
  }
</style>