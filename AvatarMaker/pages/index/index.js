//index.js
//获取应用实例
const app = getApp()
let ctx = null
Page({
  data: {
    userInfo: null, // 用户信息
    uploadImg: '', // 上传的头像
    bkgImg: "/assets/bkg_img/bkg_1.png",
    midImg: "/assets/mid_img/mid_2.png",
    frontImg: "/assets/front_img/front_0.png",
    canvasId: 'canvas',
    canvas: null,
    ctx: null,
    preview: {
      left: 0,
      right: 0,
      height: 534
    },
    qualityImg: null,
    screenWidth: '',
    distributionCode: '',
    imageBill: '',
    isWeChatAvatarUrl:true // true微信头像   false自定义头像
  },

//保存头像
async saveImg() {
  let self = this;
  const query = wx.createSelectorQuery();
  const canvasObj = await new Promise((resolve, reject) => {
    query.select('#canvas_box')
      .fields({ node: true, size: true })
      .exec(async (res) => {
        resolve(res[0].node);
      })
  });

  console.log(canvasObj);
  wx.canvasToTempFilePath({
    //fileType: 'jpg',
    //canvasId: 'posterCanvas', //之前的写法
    canvas: canvasObj, //现在的写法
    success: (res) => {
      console.log(res);
      self.setData({ canClose: true });
      //保存图片
      wx.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success: function (data) {
          wx.showToast({
            title: '已保存到相册',
            icon: 'success',
            duration: 2000
          })
          // setTimeout(() => {
          //   self.setData({show: false})
          // }, 6000);
        },
        fail: function (err) {
          console.log(err);
          if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
            console.log("当初用户拒绝，再次发起授权")
          } else {
            util.showToast("请截屏保存分享");
          }
        },
        complete(res) {
          wx.hideLoading();
          console.log(res);
        }
      })
    },
    fail(res) {
      console.log(res);
    }
  }, this)
},

async save () {
  console.log("hiiiiiiiiiiii")
  wx.canvasToTempFilePath({
    canvas: this.data.canvas, // 使用2D 需要传递的参数
    success(res) {
      // 生成以后直接预览图片
      wx.previewImage({
        current: res.tempFilePath,
        urls: [res.tempFilePath],
      })
      console.log(res.tempFilePath)
      wx.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success(res) { 
          console.log(res.tempFilePath)

          wx.showToast({
            title: '已保存到相册',
            icon: 'success',
            duration: 2000
          })
        }
      })
    },
    fail: function (err){            
      console.log(err);
      if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {
        console.log("当初用户拒绝，再次发起授权")
      } else {
        util.showToast("请截屏保存分享");
      }
    }
  })

},

  // 画头像
  async savePhoto() {
    wx.showLoading({
      title: '未知鼠正在画画...',
      mask: true
    })

    const query = wx.createSelectorQuery()
    query.select("#canvas_box")
        .fields({ node:true, size: true })
        .exec((res) => {
          const canvas = res[0].node
          const ctx = canvas.getContext('2d')
          const dpr = wx.getSystemInfoSync().pixelRatio
          //新接口需显示设置画布宽高；
          canvas.width = res[0].width * dpr
          canvas.height = res[0].height * dpr
          ctx.scale(dpr,dpr);
          ctx.clearRect(0, 0, canvas.width, canvas.height); //清空画板
          ctx.fillStyle = '#fff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          this.setData({
                canvas,
                ctx
          });

          /*
          const bkg_img = canvas.createImage()
          bkg_img.src = this.data.bkgImg
          let bkg_imgPo = await new Promise((resolve, reject) => {
            bkg_img.onload = () => {
              resolve(bkg_img)
            }
            bkg_imgwx.onError = (e) =>{
              reject(e)
            }
          })
          */

         const img_b = canvas.createImage();//创建img对象
          img_b.src = this.data.bkgImg;
          console.log(canvas.width, canvas.height)
          img_b.onload = () => {
            console.log(img_b.complete);
            ctx.drawImage(img_b, 0, 0, 300,300);
          };
          console.log(img_b.complete);//false
        

          const img_m = canvas.createImage();//创建img对象
          img_m.src = this.data.midImg;
          img_m.onload = () => {
            console.log(img_m.complete);
            ctx.drawImage(img_m, 0, 0, 300, 300);
          };
          console.log(img_m.complete);//false


          const img_f = canvas.createImage();//创建img对象
          img_f.src = this.data.frontImg;
          img_f.onload = () => {
            console.log(img_f.complete);
            ctx.drawImage(img_f, 0, 0, 300,300);
          };
          console.log(img_f.complete);//false

          console.log(res)
        })

    // this.saveImg()
        this.save()



    wx.hideLoading()
  },

  

  // 选择前景
  selectBkgImg() {
    wx.navigateTo({
      url: '/pages/selectBkg/selectBkg',
    })
  },
  
  // 选择水印
  selectMidImg() {
    wx.navigateTo({
      url: '/pages/selectMid/selectMid',
    })
  },

  // 选择前景
  selectFrontImg() {
    wx.navigateTo({
      url: '/pages/selectFront/selectFront',
    })
  },

 resetImg(){
  app.globalData.bkgImgs= ""
  app.globalData.midImgs = ""
  app.globalData.frontImgs = ""
   this.setData({
    bkgImg: "",
    midImg: "",
    frontImg: "",
    canvasId: 'canvas',
    canvas: null,
    ctx: null
   })
 },

  onShow() {
    this.setData({
      bkgImg: app.globalData.bkgImgs,
      midImg: app.globalData.midImgs,
      frontImg: app.globalData.frontImgs
    })
  },

  onShareAppMessage() {
    return {
      title: "快来和未知鼠一起，制作属于自己的头像吧!",
      path: '/pages/index/index'
    }
  }
})