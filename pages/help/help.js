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
  onAssistantTap() {
    wx.showToast({ title: '智能咨询开发中', icon: 'none' });
  },
  onActionTap(e) {
    const action = e.currentTarget.dataset.action;
    const map = {
      faq: '常见问题',
      cs: '客服专业回答',
      lawyer: '联系律师',
      template: '文书模板',
    };
    wx.showToast({ title: `${map[action]} · 敬请期待`, icon: 'none' });
  }
})