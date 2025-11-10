Page({
  data: {
    
  },

  onLoad: function (options) {
    
  },

  onReady: function () {
    
  },

  onShow: function () {
    wx.setNavigationBarTitle({ title: '个人设置' });
  },

  onHide: function () {
    
  },

  onUnload: function () {
    
  },

  onPullDownRefresh: function () {
    
  },

  onReachBottom: function () {
    
  },

  onShareAppMessage: function () {
    
  },

  goto(e) {
    const url = e?.currentTarget?.dataset?.url;
    if (!url) return;
    wx.navigateTo({ url });
  }
})