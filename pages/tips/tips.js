Page({
  data: {
    
  },

  onLoad: function (options) {
    
  },

  onReady: function () {
    
  },

  onShow: function () {
    
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
    
  }
  ,
  onCardTap(e) {
    const id = e?.currentTarget?.dataset?.id;
    if (id === 'tricks') {
      wx.navigateTo({ url: '/pages/tricks/tricks' });
      return;
    }
    if (id === 'law') {
      wx.navigateTo({ url: '/pages/law/law' });
      return;
    }
    wx.showToast({ title: '模块开发中', icon: 'none' });
  }
})