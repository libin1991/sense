<template>
  <div class="mine">
    <h2>Sense</h2>
    <p @click="switchTo(4)">收藏列表<span class='right'><icon name="icon-action-more" :scale="2"></icon></span></p>
    <p @click="clearLocalStorage()">清除缓存<span class="right">{{ localStorageSize }}</span></p>
    <h2>其他</h2>
    <p @click="switchTo(5)">反馈</p>
    <p @click="switchTo(6)">关于</p>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'mine',
  data (){
    return{
      localStorageSize : ((unescape(encodeURIComponent(JSON.stringify(localStorage))).length - 2) / 1024).toFixed(2) + 'KB'
    }
  },
  methods : {
    switchTo(index){
      switch(index.toString()){
        case '4':
          this.$router.push('/Collection');
          break;
        case '5':
          this.$router.push('/FeedBack');
          break;
        case '6':
          this.$router.push('/About');
          break;
      }
    },
    clearLocalStorage(){
      localStorage.clear();
      this.localStorageSize = '0.00KB';
      Toast({
        message: '清除成功',
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mine{
  padding: 20px;
  padding-top: 45px;
  padding-bottom: 50px;
  text-align: left;
}

h2{
  font-weight: bold;
  font-size: 13px;
  color: #626C77;
  padding-top: 5px;
  padding-bottom: 5px;
}

p{
  font-weight: bold;
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 20px;
  color: #f7f7f7;
}

.right{
  float: right;
  color: #626C77;
}

</style>
