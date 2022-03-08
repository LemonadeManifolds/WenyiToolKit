// pages/selectBkg/selectBkg.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bkgArrImgs:[
      { id:1, path:"/assets/bkg_img/bkg_1.png"},
      { id:2, path:"/assets/bkg_img/bkg_2.png"},
      { id:3, path:"/assets/bkg_img/bkg_3.png"},
      { id:4, path:"/assets/bkg_img/bkg_4.png"},
      { id:5, path:"/assets/bkg_img/bkg_5.png"},
      { id:6, path:"/assets/bkg_img/bkg_6.png"},
      { id:7, path:"/assets/bkg_img/bkg_7.png"},
      { id:99, path:"/assets/empty.png"}          
    ],
    title:''
  },
  

  
  onLoad(){
    wx.showLoading({
      title: 'Loading...',
      mask:true
    })

    wx.hideLoading()
  },
 
  selectBkg(e){
    if (!e.currentTarget.dataset.url.path){
      wx.showModal({
        title: '提示',
        content: '啊！出错了！'
      })
    }else{
      // 选择头像框路径 存入全局
      app.globalData.bkgImgs = e.currentTarget.dataset.url.path
      wx.showToast({
        title: '背景色选择成功！',
        icon:'none',
        duration:1000,
        success:function(){
          // 然后返回上一页
          wx.navigateBack()
        }
      })
    }
  }
})