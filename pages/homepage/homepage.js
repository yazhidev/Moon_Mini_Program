const AV = require('../../libs/av-weapp-min.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: 'http://lc-wl3lbfgv.cn-n1.lcfile.com/U6AzudPjVcrfaDvMWgWjaAtkrbU9IVEYyeFCBrgn.jpg'
  },

  clickImg: function () {
    var that = this
    console.log('test')
    wx.chooseImage({
      success: function (res) {
        var tempFilePath = res.tempFilePaths[0];
        new AV.File('file-name', {
          blob: {
            uri: tempFilePath,
          },
        }).save().then(function(file) {
          console.log(file.url())
          that.setData({
            imgUrl: file.url()
          })
           
        }
          ).catch(console.error);
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})