import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const MENU_URL = './src/api/menuData.json';

const store = new Vuex.Store({
  state:{
    menus: [],
    cart: [],
    name: '',
    phone: '',
    message: '',
  },
  getters:{
    menuInCart(state){
      return state.cart.length;
    },
    priceInCart(state){
      return state.cart.reduce((acc,menu)=>{
        return acc + menu.money;
      },0)
    },
    isMenuIncart(state){
      return(menu) => {
        return state.cart.findIndex(({id})=>{
          return id === menu.id
        }) !== -1;
      }; 
    },
  },
  mutations:{
    setmenulist(state, menulist){
      state.menus = menulist;
    },
    picMenu(state, menu){
      state.cart.push(menu);
    },
    removeMenu(state, menu){
      state.cart.splice(menu, 1);
    },
    updateName (state, name) {
      state.name = name;
    },
    updatePhone (state, phone) {
      state.phone = phone;
    },
    updateMessage (state, message) {
      state.message = message;
    }
  },
  actions:{
    fetchMenu({commit}){
      fetch(MENU_URL)
        .then(rs=>rs.json())
        .then(rs=>{
          commit('setmenulist', rs);
        });
    },
  },
});

export default store;