<template>
  <div id="app">
    <TopNav></TopNav>
    <transition name="fade">
        <router-view class="app-view"></router-view>
    </transition>
    <lg-preview></lg-preview>
    <BottomNav></BottomNav>
  </div>
</template>

<script>
import TopNav from './components/common/TopNav.vue'
import BottomNav from './components/common/BottomNav.vue'
export default {
  name: 'app',
  created: function(){
    console.info('Sense v 1.0.0 Made By xLogic');
  },
  components: {
    TopNav,
    BottomNav,
  }
}
</script>

<style>
html,body{
  background-color: #39434f;
}

ol, ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

p{
  -webkit-margin-before: 0px;
  -webkit-margin-after: 0px;
}

*, :after, :before {
    box-sizing: border-box;
}

#app {
  width: 100%;
  height: 100%;
  background-color: #39434f;
}

.app-view{
  width: 100%;
  height: 100%;
  overflow: auto;
  position: absolute;
  -webkit-overflow-scrolling: touch;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.mint-spinner-snake{
  margin: 0 auto;
}
</style>
