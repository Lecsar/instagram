const { sendError, sendSuccessResult, sendNotFound } = require('../../const');

const answerOnRequestWithObjData = (res, error, dataForResponse, delay) => {
  setTimeout(() => {
    if (error) {
      sendError(res, error);
    } else if (dataForResponse) {
      sendSuccessResult(res, dataForResponse);
    } else {
      sendNotFound(res);
    }
  }, delay);
};

module.exports = (app, users) => {
  // Найти пользователя по profileName, если такого пользователя нет, то вернуть код 404
  app.get('/getuser/:profileName', ({ params: { profileName } }, res) => {
    users.findOne({ profileName }, { password: 0 }, (error, user) => {
      answerOnRequestWithObjData(res, error, user, 0);
    });
  });

  // Запрос на авторизацию
  app.post('/auth', ({ body }, res) => {
    users.findOne(body, (error, user) => {
      answerOnRequestWithObjData(res, error, user, 0);
    });
  });

  // Запрос на поиск пользователей по profileName
  app.get('/findUsers/:profileName', ({ params: { profileName } }, res) => {
    users.find(
      { profileName: { $regex: profileName } },
      {
        password: 0,
        followers: 0,
        following: 0,
        email: 0,
        posts: 0
      },
      (error, usersData) => {
        setTimeout(() => {
          if (error) {
            sendError(res, error);
          } else if (usersData.length) {
            sendSuccessResult(res, usersData);
          } else {
            sendNotFound(res, []);
          }
        }, 0);
      }
    );
  });

  app.post('/getNews', ({ body: { profileName } }, res) => {
    users.findOne({ profileName }, { following: 1 }, (error, { following }) => {
      if (error) {
        return sendError(res, error);
      }

      following
        .reduce(
          (accumPosts, profileName) => users
              .findOne({ profileName }, { posts: 1 })
              .then(({ posts }) => accumPosts.concat(posts)),
          []
        )
        .then(posts => sendSuccessResult(res, posts));
    });
  });
};
