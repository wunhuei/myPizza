<template>
  <div id="menu" class="innerContainer">
    <div class="inner-banner">
      <img src="https://placem.at/things?w=1200&h=500&random=6" alt="">
      <div class="inner-title">
        <h1>pizza menu</h1>
        <h2>leo arcu eget lorem at metus auctor</h2>
      </div>  
    </div>
    <div class="container">
      <MenuList/>
      <MenuForm/>
    </div>
  </div>
</template>

<script>
import MenuList from './MenuList.vue';
import MenuForm from './MenuForm.vue';

export default {
  components:{
    MenuList,
    MenuForm,
  }
}
</script>