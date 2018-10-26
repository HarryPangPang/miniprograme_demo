const db = wx.cloud.database()
const books = db.collection('mybooks')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booklist:[]
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
    db.collection('mybooks').get().then(res => {
      // res.data 包含该记录的数据
      this.setData({
        booklist: res.data
      })
    })
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
  _bookDetail: (item) => {
    let current_item_id = item.currentTarget.dataset.id
    // console.log(current_item_id)
    wx.navigateTo({
      url: '../bookDetail/bookDetail?id=' + current_item_id 
    })
  },
  updates:() =>{
    wx.cloud.callFunction({
      name: 'batchUpdate',
      success:(res) => {
        console.log(res)
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  }
})