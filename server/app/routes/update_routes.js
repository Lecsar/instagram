const { sendError, sendSuccessResult, createID } = require('../../const');

const updateData = (
  users,
  res,
  searchParameterObj,
  updatedDataObj,
  dataForResponse
) => {
  users.updateOne(searchParameterObj, { $set: updatedDataObj }, error => {
    if (error) {
      sendError(res, error);
    } else {
      sendSuccessResult(res, dataForResponse);
    }
  });
};

module.exports = (app, users) => {
  // добавить комментарий
  app.post(
    '/addComment',
    (
      {
        body: {
          postId,
          text,
          idOfComment,
          isLogin: author,
          profileName,
          parents = [],
          idPrevComment
        }
      },
      res
    ) => {
      // eslint-disable-next-line consistent-return
      users.findOne({ profileName }, (err, user) => {
        if (err) {
          return sendError(res, err);
        }

        const postComments = user.posts.find(({ id }) => id === postId)
          .comments;

        // если отвечаем на чей-то коммент
        if (idPrevComment) {
          const indexOfPrevComment = postComments.findIndex(
            ({ id }) => id === idPrevComment
          );

          postComments.splice(indexOfPrevComment + 1, 0, {
            profileName: author,
            text,
            id: idOfComment,
            parents
          });
        } else {
          // или просто добавляем свой

          postComments.push({
            profileName: author,
            text,
            id: idOfComment,
            parents
          });
        }

        updateData(
          users,
          res,
          { profileName },
          { posts: user.posts },
          user.posts
        );
      });
    }
  );

  /* eslint-disable no-shadow, consistent-return */
  // добавить пост
  app.post(
    '/addNewPost',
    ({ body: { img, text, isLogin: profileName } }, res) => {
      users.findOne({ profileName }, (err, user) => {
        if (err) {
          return sendError(res, err);
        }

        user.posts.push({
          id: createID(),
          img,
          likes: 0,
          place: 'Skopin', // изменить позже
          comments: [
            {
              id: createID(),
              text,
              profileName
            }
          ]
        });

        updateData(
          users,
          res,
          { profileName },
          { posts: user.posts },
          user.posts
        );
      });
    }
  );

  // подписаться/отписаться от пользователя
  app.post(
    '/toggleFollow',
    (
      { body: { profileNameOfAuthorizedUser, profileName, shouldUnFollow } },
      res
    ) => {
      users.findOne({ profileName }, (err, user) => {
        if (err) {
          return sendError(res, err);
        }

        let followers;

        if (shouldUnFollow) {
          followers = user.followers.filter(
            profileName => profileName !== profileNameOfAuthorizedUser
          );
        } else {
          followers = [...user.followers];
          followers.push(profileNameOfAuthorizedUser);
        }

        updateData(users, res, { profileName }, { followers }, followers);
      });
    }
  );

  // поставить/снять лайк
  app.post(
    '/toogleLike',
    (
      { body: { profileName, postId, profileNameWhoSetLike, isSetLike } },
      res
    ) => {
      users.findOne({ profileName }).then(user => {
        const post = user.posts.find(({ id }) => id === postId);

        if (isSetLike) {
          post.likes.push(profileNameWhoSetLike);
        } else {
          post.likes = post.likes.filter(
            profileName => profileName !== profileNameWhoSetLike
          );
        }

        updateData(
          users,
          res,
          { profileName },
          { posts: user.posts },
          user.posts
        );
      });
    }
  );
};
