/* eslint-disable no-undef */
<!-- lodash页面 -->
<template>
  <div>
    <div id="container" class="map" tabindex="0"/>
    <div id="pickerBox">
      <input id="pickerInput" placeholder="输入关键字选取地点" >
      <div id="poiInfo"/>
    </div>
  </div>
</template>

<script>
import loadMap from './loadMap.js'
export default {

  components: {},
  data() {
    return {}
  },

  computed: {},

  mounted() {
    this.initMap()
  },

  methods: {
    /**
     * 初始化高德地图
     */
    initMap() {
      const that = this
      // 传入key，plugins，版本号
      loadMap(that.key, that.plugins, that.v)
        .then(AMap => {
          // 地图加载
          const Atestmap = new AMap.Map('container', {
            zoom: 10
          })
          // 将map存入window对象中，供https://cache.amap.com/lbs/static/addToolbar.js中的方法使用
          window.Atestmap = Atestmap
          // 输入提示
          // eslint-disable-next-line no-undef
          AMapUI.loadUI(['misc/PoiPicker'], function(PoiPicker) {
            var poiPicker = new PoiPicker({
              // city:'北京',
              input: 'pickerInput'
            })
            // 初始化poiPicker
            // eslint-disable-next-line no-undef
            poiPickerReady(poiPicker)
          })
        })
        .catch(err => {
          console.log(err, '地图加载失败！')
        })
    }
  }
}
</script>
<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
  margin: 0px;
  font-size: 13px;
}

#pickerBox {
  position: absolute;
  z-index: 9999;
  top: 50px;
  right: 30px;
  width: 300px;
}

#pickerInput {
  width: 200px;
  padding: 5px 5px;
}

#poiInfo {
  background: #fff;
}

.amap_lib_placeSearch .poibox.highlight {
  background-color: #cae1ff;
}

.amap_lib_placeSearch .poi-more {
  display: none !important;
}
/deep/ #pickerInput{
  color: #cae1ff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
</style>
