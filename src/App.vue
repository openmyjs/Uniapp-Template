<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app'
// 关闭启动图
function closeSplash() {
  // #ifdef APP-PLUS
  plus.navigator.closeSplashscreen()
  // #endif
}
onLaunch(() => {
  console.log('App Launch')
  closeSplash()
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>

<style></style>
