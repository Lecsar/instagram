const { sendSuccessResult, sendError } = require('../../const');

module.exports = (app, users) => {
  // удалить пост
  app.post('/deletePost', ({ body: { profileName, deletedPostId } }, res) => {
    users
      .findOne({
        profileName
      })
      .then(({ posts }) => posts.filter(({ id }) => id !== deletedPostId))
      .then(posts => users
          .updateOne({ profileName }, { $set: { posts } })
          .then(() => sendSuccessResult(res, posts)))
      .catch(err => sendError(res, err));
  });
};
