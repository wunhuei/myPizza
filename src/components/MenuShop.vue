<template>
  <div class="shopBg">
    <div class="shop">
      <h1>Order form</h1>
      <form action="">
        <div class="data-text">
          <div class="show-input">
            <span>name</span>{{name}}
          </div>
          <div class="show-input">
            <span>phone</span>{{phone}}
          </div>
          <div class="show-input">
            <span>motes</span>{{message}}
          </div>
        </div>
        <div class="order-menu">
          <ul>
            <li v-for="(menu,i) in cart">
              <img :src="menu.img" :alt="menu.name">
              <h3>{{menu.name}}</h3>
              <p>${{menu.money}}</p>
            </li>
          </ul>
        </div>
        <div class="order-totall">
          <p>共<span class="orderNum">{{menuItemNum}}</span>項，
            總價：<span class="price">${{price}}</span>元
          </p>
        </div>
        <input type="button" value="order" onclick="location.href='/'"> 
        <button id="close">Close</button>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex';
  export default {
    computed: {
      name:{
        get(){
          return this.$store.state.name;
        },
      },
      phone:{
        get(){
          return this.$store.state.phone;
        },
      },
      message:{
        get(){
          return this.$store.state.message;
        },
      },
      ...mapState(['cart']),
      ...mapGetters({
        menuItemNum: 'menuInCart',
        price: 'priceInCart',
      }),
    },
    methods: {
      ...mapMutations(['removeMenu']),
    },
  };
</script>

<style scooed>
  .shopBg{
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #111111a6;
    z-index: 99;
  }
  .shopBg.show{
    display: block;
  }
  .shop{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #ffffff;
    border-radius: 5px;
    padding: 30px;
    width: 55%;
    height: 80%;
    overflow-y: auto;
  }
  .shop h1{
    margin-bottom: 20px;
    border-bottom: 1px solid #2bb470;
  }
  .shop .show-input{
    margin-bottom: 13px;
    font-size: 21px;
    font-family: "微軟正黑體";
  }
  .shop .show-input span{
    font-size: 16px;
    display: block;
    line-height: 1;
    color: #139832;
  }
  .order .shop .data-text{
    display: block;
    width: 100%;
  }
  .shop .order-menu{
    display: block;
    width: 100%;
    height: auto;
    margin-right: 0px;
    position: relative;
    overflow-y: inherit;
  }
  .shop .order-totall{
    position: relative;
    left: auto;
    width: 100%;
    margin-top: -18px;
  }
  .shop button{
    position: relative;
    margin-top: 15px;
  }
  .shop button:last-child{
    background: #7d7d7d;
  }
  .shop button:last-child:hover{
    background: #ffffff;
    border: 1px solid #616161;
    color: #696969;
  }
  .shop .order-menu ul li img{
    width: 22%;
  }
  .shop .order-menu ul li h3{
    width: 50%;
    font-size: 24px;
  }
  .shop .order-menu ul li p{
    width: 18%;
  }
  @media screen and (max-width:1179px){
    .shop{
      width: 70%;
    }
  }
  @media screen and (max-width:767px){
    .shop{
      width: 90%;
    }
  }
  @media screen and (max-width:480px){
    .shop{
      padding: 15px;
    }
    .shop .order-menu ul li img{
      width: 33%;
    }
    .shop .order-menu ul li h3{
      width: 40%;
      font-size: 15px;
    }
  }
</style>