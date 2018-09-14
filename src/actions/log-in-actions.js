import {
  ON_CHANGE_LOGIN_INPUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  ROUTING,
  ON_LOG_OUT,
  NOT_FOUND_CODE,
  LOGIN_ERROR,
  createDataForPostRequest
} from '../const';

export const onChangeLoginInput = payload => ({
  type: ON_CHANGE_LOGIN_INPUT,
  payload
});

export const onClickLoginRequest = objWithPostParametersForRequest => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST
  });

  return (
    // eslint-disable-next-line no-undef
    fetch(
      'http://localhost:8000/auth',
      createDataForPostRequest(objWithPostParametersForRequest)
    )
      .then((response) => {
        if (response.status !== NOT_FOUND_CODE) {
          // если такой логин и пароль найден в БД
          // тогда распарси JSON и обработай
          response.json().then(payload => new Promise((resolve) => {
              // обновляем userState
              dispatch({
                type: LOGIN_SUCCESS,
                payload
              });

              resolve(payload.profileName);
            }).then((profileNameOfFindedUser) => {
              // делаем редирект на URL авторизовавшегося пользователя
              dispatch({
                type: ROUTING,
                payload: {
                  method: 'push',
                  nextUrl: `/profile/${profileNameOfFindedUser}`
                }
              });
            }));
          // если логин и пароль не правильные, то показываем ошибку
        } else {
          dispatch({ type: LOGIN_FAIL });
        }
      })
      // внутренняя ошибка сервера
      .catch(payload => dispatch({ type: LOGIN_ERROR, payload }))
  );
};

export const onLogOut = () => ({
  type: ON_LOG_OUT
});
