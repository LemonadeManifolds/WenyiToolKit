// pages/selectFront/selectFront.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    frontArrImgs:[
      { id:0, path:"/assets/front_img/front_0.png"},
      { id:1, path:"/assets/front_img/front_1.png"},
      { id:2, path:"/assets/front_img/front_2.png"},
      { id:3, path:"/assets/front_img/front_3.png"},
      { id:4, path:"/assets/front_img/front_4.png"},
      { id:5, path:"/assets/front_img/front_5.png"},
      { id:6, path:"/assets/front_img/front_6.png"},
      { id:9, path:"/assets/front_img/front_9.png"},
      { id:10, path:"/assets/front_img/front_10.png"},
      { id:11, path:"/assets/front_img/front_11.png"},
      { id:12, path:"/assets/front_img/front_12.png"},
      { id:13, path:"/assets/front_img/front_13.png"},
      { id:14, path:"/assets/front_img/front_14.png"},
      { id:15, path:"/assets/front_img/front_15.png"},
      { id:16, path:"/assets/front_img/front_16.png"},
      { id:17, path:"/assets/front_img/front_17.png"},
      { id:18, path:"/assets/front_img/front_18.png"},
      { id:19, path:"/assets/front_img/front_19.png"},
      { id:20, path:"/assets/front_img/front_20.png"},
      { id:21, path:"/assets/front_img/front_21.png"}, 
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
 
  selectFront(e){
    if (!e.currentTarget.dataset.url.path){
      wx.showModal({
        title: '提示',
        content: '啊！出错了！'
      })
    }else{
      // 选择头像框路径 存入全局
      app.globalData.frontImgs = e.currentTarget.dataset.url.path
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