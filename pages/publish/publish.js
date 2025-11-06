Page({
  data: {
    categories: ['案例分享', '经验交流', '问题求助', '平台反馈'],
    categoryIndex: 0,
    title: '',
    content: ''
  },

  onTitleInput(event) {
    this.setData({
      title: event.detail.value
    });
  },

  onContentInput(event) {
    this.setData({
      content: event.detail.value
    });
  },

  onCategoryChange(event) {
    this.setData({
      categoryIndex: event.detail.value
    });
  },

  onPublish() {
    const { title, content, categories, categoryIndex } = this.data;

    if (!title || !content) {
      wx.showToast({
        title: '标题和内容不能为空',
        icon: 'none'
      });
      return;
    }

    const newPost = {
      title,
      content,
      category: categories[categoryIndex],
      author: '匿名用户',
      avatar: '/assets/icon-profile.svg',
      likes: 0,
      comments: 0,
      timestamp: new Date().toLocaleString()
    };

    const eventChannel = this.getOpenerEventChannel();
    eventChannel.emit('acceptDataFromOpenedPage', { data: newPost });

    wx.navigateBack();
  }
});