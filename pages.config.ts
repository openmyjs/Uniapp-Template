import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'soleUniapp',
    navigationBarBackgroundColor: '#f8f8f8',
    navigationBarTextStyle: 'black',
    backgroundColor: '#FFFFFF',
  },
  easycom: {
    autoscan: true,
    custom: {
      '^fg-(.*)': '@/components/fg-$1/fg-$1.vue',
      '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
    },
  },
  // tabbar 的配置统一在 “./src/layouts/fg-tabbar/tabbarList.ts” 文件中
  tabBar: {
    color: '#999999',
    selectedColor: '#FF8F05',
    height: '60px',
    iconWidth: '19px',
    fontSize: '11px',
    backgroundColor: '#fff',
    borderStyle: 'white',

    list: [
      {
        pagePath: 'pages/home/index',
        iconPath: 'static/home.png',
        selectedIconPath: 'static/home_selected.png',
        text: '首页',
        // "visible": false
      },
      // {
      //   "pagePath": "pages/bill/index",
      //   "iconPath": "static/home.png",
      //   "selectedIconPath": "static/home_selected.png",
      //   "text": "还款"
      //   // "visible": false
      // },
      {
        pagePath: 'pages/money/index',
        iconPath: 'static/vip.png',
        selectedIconPath: 'static/vip_selected.png',
        text: '财富',
        // "visible": false
      },
      {
        pagePath: 'pages/mine/index',
        iconPath: 'static/my.png',
        selectedIconPath: 'static/my_selected.png',
        text: '我的',

        // "visible": false
      },
    ],
  },
})
