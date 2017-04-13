<template>
  <div class="wallpaper_box">
    <ul class="wallpaper_list"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loaded" infinite-scroll-distance="289">
      <li v-for="item in list">
        <img v-lazy="item.listimgurl" v-preview="item.downimgurl" :alt="item.author">
        <TipTools v-bind:picInfo="item"></TipTools>
      </li>
    </ul>
    <p class="wallpaper_list_loading" v-show="isLoadShow"><mt-spinner type="snake"></mt-spinner></p>
    <p class="wallpaper_list_loaded" v-show="loaded">没有更多了</p>
  </div>
</template>

<script>
import TipTools from '../common/TipTools.vue'
export default {
  name: 'List',
  data () {
    return {
      list : [],
      page : 1,
      isLoadShow : true,
      loading : false,
      loaded : false,
    }
  },
  methods : {
    loadMore() {
      if (!this.loading){
        this.loading = true;
        setTimeout(() => {
          this.$http.get('./static/api/2.json').then((response) => {
            if (response.data.data == false){
              this.loaded = true;
              this.isLoadShow = false;
            }else{
              let length = response.data.data.length;
              for (let i = 0; i < length; i++) {
                if (localStorage.love){
                  let data = JSON.parse(localStorage.love);
                  response.data.data[i].show = false;
                  for(let j=0; j<data.length; j++) {
                    if (data[j].id == response.data.data[i].id){
                      response.data.data[i].show = true;
                      break;
                    }
                  }
                }else{
                  localStorage.love = "[]";
                  response.data.data[i].show = false;
                }

                this.list.push(response.data.data[i]);
              }
              this.page++;
            }
            this.loading = false;
          },(err) => {
            console.log('Load Pic Data Failed',err)
          })
        }, 500)
      }
    },
  },
  components: {
    TipTools,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wallpaper_box{
  background-color: #39434f;
  padding-top: 45px;
  padding-bottom: 50px;
  padding-left: 8px;
  padding-right: 8px;
}

.wallpaper_list{
  margin: 0;
  padding: 0;
  text-align: center;
  list-style-type: none;
}

.wallpaper_list:after{
  clear:both;
  content:'.';
  display:block;
  width: 0;
  height: 0;
  visibility:hidden;
}

.wallpaper_list li{
  float: left;
  width: 50%;
  padding-left: 8px;
  padding-right: 8px;
  margin: 0 auto;
  margin-top: 15px;
}

.wallpaper_list li img{
  display: block;
  width: 100%;
  height: 257px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  -moz-border-top-right-radius: 5px; 
  -moz-border-top-left-radius: 5px; 
  -webkit-border-top-right-radius: 5px;
  -webkit-border-top-left-radius: 5px;
}

.wallpaper_list li img[lazy=loading] {
  width: 100%;
  height: 257px;
  margin: auto;
  background: url("../../assets/img/loading_list.png");
  background-size: cover;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  -moz-border-top-right-radius: 5px; 
  -moz-border-top-left-radius: 5px; 
  -webkit-border-top-right-radius: 5px;
  -webkit-border-top-left-radius: 5px;
}

.wallpaper_list_loading {
  text-align: center;
  height: 50px;
  line-height: 50px;
  padding-top: 12px;
}

.wallpaper_list_loaded {
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 12px;
  color: #999;
}

.wallpaper_list_loading div {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
