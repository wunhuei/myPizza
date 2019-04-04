<template>
  <div id="menu" class="innerContainer">
    <div class="inner-banner">
      <img src="../assets/images/inner_bn_02.jpg" alt="bn">
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