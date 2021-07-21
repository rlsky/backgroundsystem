/**
 * 动态加载高德地图
 *
 */
export default function loadMap(
  key = '28e73463f974db27fceb2ca3b009f71b',
  plugins,
  v = '1.4.15'
) {
  return new Promise(function(resolve, reject) {
    if (typeof AMap !== 'undefined') {
      // eslint-disable-next-line no-undef
      resolve(AMap)
      return true
    }
    window.onCallback = function() {
      // eslint-disable-next-line no-undef
      resolve(AMap)
    }
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://webapi.amap.com/maps?v=${v}&key=${key}&plugin=${plugins}&callback=onCallback`
    script.onerror = reject
    document.head.appendChild(script)
  })
}
