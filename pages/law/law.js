Page({
  data: {
    knowledge: {
      number: '',
      law: '',
      case: '',
      contents: [],
    },
  },

  onLoad() {
    this.loadKnowledge();
  },

  onShow() {
    wx.setNavigationBarTitle({ title: '普法知识' });
  },

  async loadKnowledge() {
    try {
      wx.showLoading({ title: '加载中', mask: true });
      if (!wx.cloud || !wx.cloud.database) {
        wx.showToast({ title: '云能力不可用', icon: 'none' });
        return;
      }
      const envId = 'cloud1-1gfjke3b6beabd22';
      try {
        wx.cloud.init({ env: envId, traceUser: false });
      } catch (initErr) {
        console.warn('wx.cloud.init 警告：', initErr);
      }
      const db = wx.cloud.database({ env: envId });
      const res = await db.collection('Law_Knowledge').get();
      const doc = (res && res.data && res.data.length) ? res.data[0] : {};
      const contents = [doc.content1, doc.content2, doc.content3, doc.content4, doc.content5]
        .filter((v) => typeof v === 'string' && v.trim().length);
      this.setData({
        knowledge: {
          number: doc.number || '',
          law: doc.law || '',
          case: doc.case || '',
          contents,
        },
      });
      if (!doc._id) {
        wx.showToast({ title: '暂无数据，待云端填充', icon: 'none' });
      }
    } catch (err) {
      console.error('加载 Law_Knowledge 失败：', err);
      wx.showToast({ title: '数据加载失败', icon: 'none' });
    } finally {
      wx.hideLoading();
      wx.stopPullDownRefresh && wx.stopPullDownRefresh();
    }
  },
});