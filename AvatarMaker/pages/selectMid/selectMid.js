// pages/selectMid/selectMid.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    midArrImgs:[
      {id:1, path:"/assets/mid_img/mid_1.png"},
      {id:2, path:"/assets/mid_img/mid_2.png"},
      {id:3, path:"/assets/mid_img/mid_3.png"},
      {id:4, path:"/assets/mid_img/mid_4.png"},
      {id:5, path:"/assets/mid_img/mid_5.png"},
      {id:6, path:"/assets/mid_img/mid_6.png"},
      {id:7, path:"/assets/mid_img/mid_7.png"},
      {id:8, path:"/assets/mid_img/mid_8.png"},
      {id:9, path:"/assets/mid_img/mid_9.png"},
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
 
  selectMid(e){
    if (!e.currentTarget.dataset.url.path){
      wx.showModal({
        title: '提示',
        content: '啊！出错了！'
      })
    }else{
      // 选择头像框路径 存入全局
      app.globalData.midImgs = e.currentTarget.dataset.url.path
      wx.showToast({
        title: '前景选择成功！',
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