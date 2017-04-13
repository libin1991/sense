<template>
  <div class="feedback">
    <p class='ad'><img src="../../assets/img/qrcode.png"></p>
    <p>请关注微信公众号「感官逻辑」，直接在后台进行留言反馈。</p>
    <p>1.问题详细描述（如何触发的问题，请给出详细的操作步骤及截图）</p>
    <p>2.改进讲义或吐槽：）</p>
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

.feedback{
  padding: 30px;
  padding-top: 45px;
  padding-bottom: 50px;
  margin-top: 20px;
  text-align: left;
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
