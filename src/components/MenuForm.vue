<template>
  <div class="order">
    <div class="order-menu">
      <ul>
        <li v-for="(menu,i) in cart">
          <img :src="menu.img" :alt="menu.name">
          <h3>{{menu.name}}</h3>
          <p>${{menu.money}}</p>
          <button @click.prevent="removeMenu(menu)">delete</button>
        </li>
      </ul>
    </div>
    <div class="data-text">
      <div class="input-item">
        <label for="name">name</label>
        <input type="text" id="name" name="name" v-model="name">
      </div>
      <div class="input-item">
        <label for="phone">phone</label>
        <input type="text" id="phone" name="phone" v-model="phone">
      </div>
      <div class="input-item">
        <label for="note">instruction manual</label>
        <textarea type="text" id="note" name="note" v-model="message"></textarea>
      </div>
      <button id="submit">submit</button>
    </div>
    <div class="order-totall">
      <p>共<span class="orderNum">{{menuItemNum}}</span>項，
        總價：<span class="price">${{price}}</span>元
      </p>
    </div>
    <MenuShop/>
  </div>
</template>

<script>
  import MenuShop from './MenuShop.vue';
  import { mapState, mapGetters, mapMutations } from 'vuex';
  export default {
    components:{
      MenuShop,
    },
    computed: {
      name:{
        get(){
          return this.$store.state.name;
        },
        set(value){
          this.$store.commit('updateName', value)
        },
      },
      phone:{
        get(){
          return this.$store.state.phone;
        },
        set(value){
          this.$store.commit('updatePhone', value)
        },
      },
      message:{
        get(){
          return this.$store.state.message;
        },
        set(value){
          this.$store.commit('updateMessage', value)
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
    mounted(){
      $(function(){
        $('#submit').click(function(e){
          $('.shopBg').addClass('show');
        });
        $('.shop #close').click(function(e){
          e.preventDefault();
          $('.shopBg').removeClass('show');
        });
        $('.shopBg').click(function(e){
          $('.shopBg').removeClass('show');
        });
        $('.shop').click(function(e){
          e.stopPropagation();
        });
        $('.order input[type="button"]').click(function(e){
          alert('Order is complete, please be patient and wait for a response');
        });
      });
    },
  };
  
</script>

<style scooed>
  .order-title{
    font-size: 30px;
  }
  .order{
    border:1px solid #aaaaaa;
    padding: 15px 15px 30px;
    margin-bottom: 100px;
    position: relative;
  }
  .order .data-text{
    display: inline-block;
    width: 30%;
    vertical-align: top;
  }
  .order .input-item{
    margin-bottom: 15px;
  }
  .order .input-item label{
    display: block;
  }
  .order .input-item input{
    width: 100%;
    height: 30px;
    font-family: "微軟正黑體";
    font-size: 17px;
    letter-spacing: 1px;
    padding: 5px;
  }
  .order .input-item textarea{
    width: 100%;
    height: 115px;
    font-family: "微軟正黑體";
    font-size: 17px;
    letter-spacing: 1px;
    padding: 5px;
    border: 1px solid #cecece;
  }
  .order-menu{
    display: inline-block;
    width: 68%;
    height: 249px;
    margin-right: 15px;
    position: relative;
    overflow-y: scroll;
    border: 1px solid #c9c9c9;
    margin-top: 23px;
  }
  .order-menu ul{
    padding: 15px 15px 0px;
  }
  .order-menu ul li{
    margin-bottom: 16px;
    border-bottom: 1px solid #dfdcdc;
    padding-bottom: 16px;
  }
  .order-menu ul li img{
    width: 12%;
    vertical-align: middle;
  }
  .order-menu ul li h3{
    display: inline-block;
    width: 40%;
    font-size: 20px;
    padding-left: 10px;
  }
  .order-menu ul li p{
    display: inline-block;
    width: 29%;
    font-size: 25px;
  }
  .order-menu .quantity{
    width: 13%;
    display: inline-block;
  }
  .order-menu ul li button{
    background: #c0c0c0;
    position: relative;
    width: 10%;
  }
  .order-totall{
    position: absolute;
    left: 15px;
    width: 66.4%;
    height: 32px;
    line-height: 32px;
    padding-right: 31px;
    background: #2a3b93;
    color: #fff;
    margin-top: -19px;
    text-align: right;
    letter-spacing: 4px;
  }
  .order-totall p{
    font-family: "微軟正黑體";
  }
  .order button{
    border: none;
    background: #1aad63;
    width: 29.2%;
    height: 32px;
    color: #ffffff;
    font-size: 16px;
    position: absolute;
    margin-top: -20px;
    cursor: pointer;
  }
  .order button:hover{
    background: #ffffff;
    border:1px solid #1aad63;
    color:#1aad63;
  }
  .order input[type="button"]{
    border: none;
    background: #1aad63;
    width: 29.2%;
    height: 32px;
    color: #ffffff;
    font-size: 16px;
    margin-top: -20px;
  }
  .order input[type="button"]:hover{
    background: #ffffff;
    border:1px solid #1aad63;
    color:#1aad63;
  }
  @media screen and (max-width:1200px){
    .order-totall{
      width: 66.1%;
    }
  }
  @media screen and (max-width:1179px){
    .order-menu{
      display: block;
      width: 100%;
      height: 250px;
      margin-right: 0px;
      margin-top: 15px;
    }
    .order{
      padding: 15px 15px 50px;
    }
    .order .data-text{
      display: block;
      width: 100%;
    }
    .order-totall{
      width: 100%;
      position: relative;
      left: auto;
      margin-top: 0px;
    }
    #submit{
      bottom: 10px;
      left: 13px;
    }
  }
  @media screen and (max-width:767px){
    .order-menu ul li h3{
      width: 30%;
      font-size: 15px;
      vertical-align: middle;
    }
    .order-menu ul li p{
      font-size: 20px;
    }
    .order-menu ul li button{
      width: 19%;
    }
    
  }
  @media screen and (max-width:480px){
    .order-menu ul li img{
      width: 22%;
    }
    .order-menu ul li h3{
      margin-right:10px
    }
    .order-menu ul li p{
      width: 20%;
    }
    .order-menu ul li button{
      width: 18%;
      font-size: 14px;
    }
    
  }
</style>