<template>
  <div id="news" class="innerContainer">
    <div class="inner-banner">
      <img src="https://placem.at/things?w=1200&h=500&random=6" alt="">
      <div class="inner-title">
        <h1>pizza news</h1>
        <h2>leo arcu eget lorem at metus auctor</h2>
      </div>  
    </div>
    <div class="container">
      <div class="new-item" v-for="(newitem,index) in news">
        <img :src="newitem.img" :alt="newitem.title">
        <div class="new-text">
          <h4>{{newitem.newCategory}}</h4>
          <h3>{{newitem.title}}</h3>
          <h5>{{newitem.date}}</h5>
          <p>{{newitem.newsIntro}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [],
    };
  },
  mounted(){
    fetch('./src/api/newsData.json')
    .then(res=>res.json())
    .then(news=>this.news=news);
  },
}
</script>

<style scooed>
  #news{
    padding-bottom: 100px;
  }
  #news .new-item{
    width: 100%;
    display: block;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #aaa;
  }
  #news .new-item img{
    width: 43%;
    margin-bottom: -8px;
    padding-right: 10px;
  }
  #news .new-item .new-text{
    width: 55%;
    display: inline-block;
    text-align: justify;
  }
  #news .new-item h3{
    font-size: 30px;
    margin-bottom: 10px;
  }
  #news .new-item h4{
    color: #da3838;
    font-size: 22px;
  }
  #news .new-item h5{
    color: #a2a2a2;
    font-weight: inherit;
    font-size: 16px;
  }
  #news .new-item p{
    font-size: 21px;
    line-height: 1.3;
  }
  @media screen and (max-width:1190px){
    #news .new-item p{
      line-height: 1.1;
    }
  }
  @media screen and (max-width:1024px){
    #news .new-item h3{
      font-size: 24px;
      margin-bottom: 1px;
      text-align: initial;
    }
    #news .new-item h4{
      line-height: 1;
    }
    #news .new-item p{
      font-size: 17px;
    }
  }
  @media screen and (max-width:800px){
    #news .new-item img{
      width: 100%;
      margin-bottom: 0px;
      padding-right: 0px;
    }
    #news .new-item .new-text{
      width: 100%;
    }
    .container{
      padding: 0 20px;
    }
  }
</style>