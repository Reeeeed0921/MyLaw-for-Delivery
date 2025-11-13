Page({
  data: {
    menu: [
      { key: 'case-share', title: '案例分享' },
      { key: 'experience-exchange', title: '经验交流' },
      { key: 'problem-seeking', title: '问题求助' },
      { key: 'platform-feedback', title: '平台反馈' },
    ],
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
  goTo(e) {
    const page = e.currentTarget.dataset.page;
    if (!page) return;
    wx.navigateTo({ url: `/pages/community/${page}/${page}` });
  }
})