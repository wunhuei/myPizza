<template>
  <div id="footer">
    <p>Copyright © 2019 Gino pizza. All rights reserved</p>
  </div>
</template>

<style>
  #footer{
    position: fixed;
    right: 60px;
    bottom: 17px;
    z-index: 4;
  }
  #footer p{
    color: #444;
  }
  @media screen and (max-width:480px){
    #footer{
      right: 26px;
    }
    #footer p{
      font-size: 14px;
    }
  }
</style>