<template>
  <div class="about">
    <h2>「Sense」是什么？</h2>
    <p>Sense是一款精选壁纸应用，世间最浪漫的事都是免费的。</p>
    <p>应用内素材均由人工挑选，所选图片都是公共版权，但也会尽量注明作者。</p>
    <p>素材每周会不定期更新一次。希望Sense能够把能发现的、适合做壁纸的好图提供给你。</p>
    <h2>「感官逻辑」是谁？</h2>
    <p>「Sense」由微信公众号「感官逻辑」出品。</p>
    <p>「感官逻辑」是一个跨界（有时极客、有时文艺）的公众号，由「xLogic」运营。</p>
    <p class='ad'><img src="../../assets/img/qrcode.png"></p>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.about{
  padding: 30px;
  padding-top: 45px;
  padding-bottom: 50px;
  text-align: left;
}

h2{
  font-size: 16px;
  color: #999;
  padding-top: 5px;
  padding-bottom: 5px;
}

p{
  font-size: 13px;
  padding-bottom: 10px;
  line-height: 20px;
  color: #f7f7f7;
}

.ad{
  width: 100%;
}

.ad img{

  width: 100%;
  height: 100%;
}
</style>
