Page({
  data: {
    newTitle: '',
    newContent: '',
    posts: []
  },

  handleTitleInput(e) {
    this.setData({ newTitle: e.detail.value });
  },

  handleContentInput(e) {
    this.setData({ newContent: e.detail.value });
  },

  publishPost() {
    const { newTitle, newContent, posts } = this.data;
    if (!newTitle && !newContent) return;
    const next = posts.concat([{ title: newTitle, content: newContent, replies: [], replyInput: '' }]);
    this.setData({ posts: next, newTitle: '', newContent: '' });
  },

  handleReplyInput(e) {
    const index = e.currentTarget.dataset.index;
    const value = e.detail.value;
    const posts = this.data.posts.slice();
    if (posts[index]) {
      posts[index].replyInput = value;
      this.setData({ posts });
    }
  },

  sendReply(e) {
    const index = e.currentTarget.dataset.index;
    const posts = this.data.posts.slice();
    if (!posts[index]) return;
    const text = posts[index].replyInput && posts[index].replyInput.trim();
    if (!text) return;
    posts[index].replies = posts[index].replies.concat([text]);
    posts[index].replyInput = '';
    this.setData({ posts });
  }
});