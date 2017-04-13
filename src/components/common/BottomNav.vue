<template>
  <div id="footer-nav" v-show="bottomNavIsShow">
      <ul> 
        <li @click="switchTo(1)"><icon name="icon-nav-index" :scale="2" index="1" :currentIndex="activeNavCurrent"></icon></li>
        <li @click="switchTo(2)"><icon name="icon-nav-list" :scale="2" index="2" :currentIndex="activeNavCurrent"></icon></li>
        <li @click="switchTo(3)"><icon name="icon-nav-mine" :scale="2" index="3" :currentIndex="activeNavCurrent"></icon></li>
      </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BottomNav',
  methods : {
    switchTo(index){
      switch(index.toString()){
        case '1':
          this.$router.push('/');
          break;
        case '2':
          this.$router.push('/List');
          break;
        case '3':
          this.$router.push('/Mine');
          break;
      }
    },
  },
  computed: {
    ...mapGetters([
      'activeNavCurrent',
      'bottomNavIsShow',
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer-nav{
  width: 100%;
  height: 48px;
  -webkit-box-shadow:inset 0 0 1px #282f37;  
  -moz-box-shadow:inset 0 0 1px #282f37;  
  box-shadow:inset 0 0 1px #282f37; 
  background-color: #3f4852;
  position: fixed;
  bottom: 0;
  z-index: 2;
}

#footer-nav ul{
  width: 100%;
  height: 100%;
}

#footer-nav ul li{
  width: 33%;
  height: 100%;
  float: left;
  text-align: center;
}

#footer-nav ul li svg{
  margin-top: 15px;
  color: #929292;
}

#footer-nav ul li .active{
  color: #f7f7f7;
}
</style>
