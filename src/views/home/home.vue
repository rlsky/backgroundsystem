<!--  -->
<template>
  <div class="home">
    home页
    <p class="text">text类的文字</p>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'home',
  data () {
    return {
    }
  },
  methods: {},
  mounted(){}
}

</script>
<style lang='scss' scoped>
.home{
  color: red;
  .text{
    color: $color-theme;
  }
}
</style>