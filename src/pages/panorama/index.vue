<!-- 全景看图 -->
<template>
  <div class="PSViewer" ref="psvdbg"></div>
</template>

<script>
import photoSphereViewer from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'

export default {
  data() {
    return {
      img:require("../../img/yule/sun.jpg")
    };
  },

  components: {},

  computed: {},

  mounted(){
    this.init()
  },

  methods: {
    init(){
      const self =this;
      var PSV = new photoSphereViewer({
        panorama:self.img, // 图片路径
        container: self.$refs.psvdbg, // 容器
        time_anim:true, //自动播放
        navbar:["fullscreen","autorotate"], // 下方导航栏
        zoom_level:100, //缩放界别，默认值为0，范围0-100
        default_fov:100,
        navbar_style:{
          backgroundColor:"rgba(58,67,77,0.7)"
        },
        anim_speed:"0.6rpm", // 旋转速度
        size:{
          width:"100%",
          height:"500"
        }
      })
    }
  }
}

</script>
<style lang='scss' scoped>
</style>