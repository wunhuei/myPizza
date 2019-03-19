<template>
  <li @click="picMenu(menu)" :class="liClass">
    <img :src="menu.img" :alt="menu.name">
    <span class="dolor">${{menu.money}}</span>
    <h3><span>{{menu.subname}}</span>{{menu.name}}</h3>
    <p>{{menu.Ingredients}}<span>{{menu.subIngredients}}</span></p>
  </li>
</template>

<script>
import { mapGetters ,mapMutations } from 'vuex';
export default {
  props: ['menu'],
  computed: {
   ...mapGetters(['isMenuIncart']),
   liClass(){
     return{
       choise: this.isMenuIncart(this.menu),
     };
   },
  },
  methods:{
    ...mapMutations(['picMenu']),
  },
};
</script>