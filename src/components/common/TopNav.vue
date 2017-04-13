<template>
  <div id="header-nav">
    <span v-show="!bottomNavIsShow" @click="goBackTo()"><icon name="icon-action-back" :scale="2"></icon></span>
    <p>{{ activeNavTitle }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'TopNav',
  methods : {
    goBackTo(){
      history.go(-1);
    },
  },
  computed: {
    ...mapGetters([
      'activeNavTitle',
      'bottomNavIsShow',
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header-nav{
  width: 100%;
  height: 44px;
  background-color: #414a54;
  -webkit-box-shadow:inset 0 0 1px #575f69;  
  -moz-box-shadow:inset 0 0 1px #575f69;  
  box-shadow:inset 0 0 1px #575f69; 
  position: fixed;
  top: 0;
  z-index: 2;
}

#header-nav p{
  line-height: 44px;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  color: #f7f7f7;
}

#header-nav span{
  position: absolute;
  top: 13px;
  left: 20px;
  color: #f7f7f7
}
</style>
