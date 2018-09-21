const { sendSuccessResult, sendError } = require('../../const');

module.exports = (app, users) => {
  // удалить пост
  app.post('/deletePost', ({ body: { profileName, deletedPostId } }, res) => {
    users
      .findOne({
        profileName
      })
      .then(({ posts }) => posts.filter(({ id }) => id !== deletedPostId))
      .then(posts =>
        users
          .updateOne({ profileName }, { $set: { posts } })
          .then(() => sendSuccessResult(res, posts))
      )
      .catch(err => sendError(res, err));
  });

  // удалить коммент
  // ПРОВЕРИТЬ!!!!
  app.post(
    '/deleteComment',
    ({ body: { profileName, postId, deletedCommentId } }, res) => {
      users
        .findOne({ profileName })
        .then(({ posts }) => {
          let updatedComments = posts.find(({ id }) => id === postId).comments;
          updatedComments = updatedComments.filter(
            ({ id }) => id !== deletedCommentId
          );
          posts.find(({ id }) => id === postId).comments = updatedComments;

          return posts;
        })
        .then(posts => users.updateOne({ profileName }, { $set: { posts } }))
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    }
  );
};
