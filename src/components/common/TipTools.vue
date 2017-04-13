<template>
<div class="tiptools">
  <p class="tips">
    <span class="tips_type"><icon name="icon-tag-pic" :scale="2"></icon></span>
    <slot name="tips_text"></slot>
    <span class="tips_love" @click="loveIt()">
      <icon name="icon-action-love" :scale="2" v-show="!pic_info.show"></icon>
      <icon name="icon-action-love-selected" :scale="2" v-show="pic_info.show"></icon>
    </span>
  </p>
</div>
</template>

<script>
export default {
  name: 'TipTools',
  props: ['picInfo'],
  data () {
    return {
      popupVisible : false,
      pic_info : this.picInfo
    }
  },
  methods : {
    loveIt: function(){
      if (!this.pic_info.show){
        //收藏
        let data = JSON.parse(localStorage.love);
        let obj = {
          id : this.pic_info.id,
          listimgurl : this.pic_info.listimgurl,
          downimgurl : this.pic_info.downimgurl,
          originalimgurl : this.pic_info.originalimgurl,
          show : true
        }
        data.push(obj);
        localStorage.love = JSON.stringify(data);

      }else{
        //取消收藏
        let data = JSON.parse(localStorage.love);
        for(let i=0; i<data.length; i++) {
          if(data[i].id == this.pic_info.id) {
            data.splice(i, 1);
            break;
          }
        }
        localStorage.love = JSON.stringify(data);
      }
      this.pic_info.show = !this.pic_info.show;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tips{
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  color: #f7f7f7;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #404c59;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  -moz-border-bottom-right-radius: 5px; 
  -moz-border-bottom-left-radius: 5px; 
  -webkit-border-bottom-right-radius: 5px;
  -webkit-border-bottom-left-radius: 5px;
}

.tips .tips_type{
  float: left;
}

.tips .tips_text{
  float: left;
  padding-left: 5px;
}

.tips .tips_love{
  float: right;
}

.tips .tips_down{
  float: right;
  padding-right: 10px;
}

.tips svg{
  position: relative;
  top: 5px;
  z-index:1;
}

.tips .tips_right:nth-child(2){
  padding-right: 10px
}
</style>
