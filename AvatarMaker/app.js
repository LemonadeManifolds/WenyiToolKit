//app.js
App({
  onLaunch: function () {
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope:'scope.writePhotosAlbum',
              success() {
                console.log('授权成功')
                }
            })
         }
        }
    })
  },


  // 全局变量
  globalData: {
    userInfo: null, // 用户信息
    bkgImgs:'', // 选择的背景色
    midImgs:'', //选择的中间水印
    frontImgs:'', //选择的前景图片
    lastpath:'/assets/figure/slice.png' // 成品
  }
})