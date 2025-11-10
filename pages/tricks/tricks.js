Page({
  data: {
    current: 0,
    cards: [],
  },

  onLoad() {
    this.loadCards();
  },

  onShow() {
    wx.setNavigationBarTitle({ title: '维权小妙招' });
  },

  onPullDownRefresh() {
    this.loadCards(true);
  },

  onSwiperChange(e) {
    const { current = 0 } = e?.detail || {};
    this.setData({ current });
  },

  async loadCards(isRefresh = false) {
    try {
      if (!isRefresh) wx.showLoading({ title: '加载中', mask: true });
      if (!wx.cloud || !wx.cloud.database) {
        wx.showToast({ title: '云能力不可用', icon: 'none' });
        return;
      }
      const envId = 'cloud1-1gfjke3b6beabd22'; // 如果与你的实际环境ID不一致，请替换或删除
      try {
        // 在页面内初始化云环境，避免未全局 init 导致查询失败
        wx.cloud.init({ env: envId, traceUser: false });
      } catch (initErr) {
        console.warn('wx.cloud.init 警告：', initErr);
      }
      const db = wx.cloud.database({ env: envId });
      const res = await db.collection('LawTreasureCard').get();
      console.log('LawTreasureCard 查询结果：', res?.data?.length, res?.data);
      const list = (res?.data || []).map((doc) => ({
        _id: doc._id,
        title: doc.Title || '未命名',
        content: doc.Content || '',
      }));
      this.setData({ cards: list, current: 0 });
      if (!list.length) {
        wx.showToast({ title: '暂无可读文档或权限限制', icon: 'none' });
      }
    } catch (err) {
      console.error('加载 LawTreasureCard 失败：', err);
      wx.showToast({ title: '数据加载失败', icon: 'none' });
    } finally {
      if (!isRefresh) wx.hideLoading();
      wx.stopPullDownRefresh && wx.stopPullDownRefresh();
    }
  },
});