// pages/scanCode/scanCode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  scanCode:function(event){
    wx.scanCode({
      onlyFromCamera: true,
      success: (res)=>{
        // console.log(res.result)
        wx.cloud.callFunction({
          // 云函数名称
          name: 'bookInfo',
          // 传给云函数的参数
          data: {
            isbn: '9787020108930'
          },
          success: function (res) {
            var bookStr = JSON.parse(res.result);
            // console.log(bookStr)
            const db = wx.cloud.database()
            const books = db.collection('mybooks')
            db.collection('mybooks').add({
              // data 字段表示需新增的 JSON 数据
              data: bookStr,
              success: function (res) {
                // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
                console.log(res)
              }
            })
          },
          fail: console.error
        })
      },
      fail:err=>{
        console.log(err)
      }
    })
  }
})