<template>
  <div class="shopBg">
    <div class="shop">
      <form action="">
        <div class="data-text">
          <div class="input-item">
            {{name}}
          </div>
          <div class="input-item">
            {{phone}}
          </div>
          <div class="input-item">
            {{message}}
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
        <button type="submit">submit</button>
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
  .shop{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  
</style>