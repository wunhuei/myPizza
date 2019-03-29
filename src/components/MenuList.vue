<template>
  <div>
    <div class="menu-nav">
      <a href="#/menu" @click="linkMenu">Basictomato</a>
      <a href="#/menu" @click="linkMenu">Classicflavor</a>
      <a href="#/menu" @click="linkMenu">Appetizerdessert</a>
      <a href="#/menu" @click="linkMenu">Drink</a>
    </div>
    <div class="menu-section">
      <div class="menu-list Basictomato">
        <h2>Basictomato</h2>
        <ul>
          <MenuItem v-for="(menu1,idx) in menu1(menus)" :menu="menu1"/>
        </ul>
      </div>
      <div class="menu-list Classicflavor">
        <h2>Classicflavor</h2>
        <ul>
          <MenuItem v-for="(menu2,idx) in menu2(menus)" :menu="menu2"/>
        </ul>
      </div>
      <div class="menu-list Appetizerdessert">
        <h2>Appetizerdessert</h2>
        <ul>
          <MenuItem v-for="(menu3,idx) in menu3(menus)" :menu="menu3"/>
        </ul>
      </div>
      <div class="menu-list Drink">
        <h2>Drink</h2>
        <ul>
          <MenuItem v-for="(menu4,idx) in menu4(menus)" :menu="menu4"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MenuItem from './MenuItem.vue';

export default {
  components:{
    MenuItem,
  },
  computed:{
    ...mapState(['menus']),
  },
  methods:{
    ...mapActions(['fetchMenu']),
    menu1: function (menus) {
      return menus.filter(function(item){
        return item.productCategory === "number1";
      });
    },
    menu2: function (menus) {
      return menus.filter(function(item){
        return item.productCategory === "number2";
      });
    },
    menu3: function (menus) {
      return menus.filter(function(item){
        return item.productCategory === "number3";
      });
    },
    menu4: function (menus) {
      return menus.filter(function(item){
        return item.productCategory === "number4";
      });
    },
    linkMenu: function(e){
        let nav_choise = $(e.target).text();
        $('html').animate(
          {
            scrollTop:$('.'+nav_choise).offset().top -120
          }, 500
        );
    },
  },
  mounted(){
    this.fetchMenu();
  },
}
</script>

<style>
  .menu-nav{
    margin-bottom: 30px;
    border-bottom: 1px solid #e1e1e1;
    padding-bottom: 15px;
  }
  .menu-nav a{
    margin-bottom: 5px;
    display: inline-block;
    font-size: 18px;
    background: #353535;
    color: #ffffff;
    padding: 5px 30px;
    letter-spacing: 1px;
    margin-right: 6px;
    border: 1px solid #353535;
    transition:all 0.3s;
  }
  .menu-nav a:hover{
    background: #ffffff;
    color: #1aad63;
    border: 1px solid #1aad63;
  }
  .menu-list{
    border-bottom:1px solid #eee;
    margin-bottom:80px;
    border: 1px solid #d2d1d1;
  }
  .menu-list ul li{
    display: inline-block;
    width: 24%;
    margin-right:9px;
    margin-bottom:30px;
    position: relative;
    cursor: pointer;
    border: 1px solid #d6d6d6;
    padding: 5px;
    vertical-align: top;
  }
  .menu-list ul li:hover{
    border: 1px solid #db5e19;
  }
  .menu-list ul li.choise{
    opacity: 0.5;
    border: 1px solid #db5e19;
    pointer-events: none;
  }
  .menu-list ul li:nth-child(4n){
    margin-right:0px;
  }
  .menu-list img{
    width:100%;
  }
  .menu-list h2{
    display: block;
    background: #494949;
    text-align: center;
    color: #ffffff;
    margin-bottom: 19px;
    line-height: 2;
    letter-spacing: 1px;
  }
  .menu-list .dolor{
    position: absolute;
    right: 9px;
  }
  .menu-list h3{
    font-size: 23px;
    color: #063e8b;
    font-family: 'pacifico';
    margin-bottom: 5px;
    border-bottom: 1px solid #aaa;
    padding-bottom: 5px;
    line-height: 1.2;
  }
  .menu-list h3 span{
    display: block;
    font-size: 12px;
    font-weight: bold;
    color: #797979;
    font-family: -webkit-pictograph;
    margin-bottom: 2px;
  }
  .menu-list p span{
    display: block;
    font-size: 12px;
  }
  @media screen and (max-width:1090px){
    .menu-nav a{
      font-size: 16px;
      padding: 5px 18px;
      letter-spacing: 2px;
    }
    .menu-list ul li{
      width: 32%;
      margin-right: 10px;
    }
    .menu-list ul li:nth-child(3n){
      margin-right: 0px;
    }
    .menu-list ul li:nth-child(4n){
      margin-right: 10px;
    }
    .menu-list h3{
      font-size: 19px;
    }
  }
  @media screen and (max-width:806px){
    .menu-nav a{
      font-size: 15px;
      padding: 3px 10px;
      letter-spacing: 1px;
    }
    .menu-list h3{
      border-bottom: none;
      margin-bottom: 0px;
    }
    .menu-list h3 span{
      margin-bottom: 4px;
    }
    .menu-list ul li{
      width: 48%;
      margin-right: 10px;
      margin-bottom: 18px;
    }
    .menu-list ul li:nth-child(2n){
      margin-right: 0px;
    }
    .menu-list ul li:nth-child(3n){
      margin-right: 10px;
    }
    .menu-list ul li:nth-child(4n){
      margin-right: 0px;
    }
    .menu-list ul li:nth-child(6n){
      margin-right: 0px;
    }
  }
  @media screen and (max-width:767px){
    .container{
      padding: 0 15px;
    }
    .menu-list{
      margin-bottom: 45px;
    }
    .menu-list p{
      display:none;
    }
    .menu-list .dolor{
      right: 6px;
      margin-top: -31px;
      background: #d05b23;
      padding: 2px 9px;
      color: #ffffff;
    }
    .menu-list h3{
      font-size: 17px;
    }
  }
</style>