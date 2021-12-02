import { getResponse } from '../../utils/utils';
import { token } from '../../router';

const user = {
  state: {
    user: { email: '', name: '', _id: '' },
  },
  mutations: {
    updateInfoUser(state, info) {
      state.user = { ...state.user, ...info };
    },
  },
  actions: {
    getUser(context) {
      fetch('/users/me', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => getResponse(res, 'Ошибка данных пользователя'))
        .then((result) => context.commit('updateInfoUser', result))
        .catch((err) => {
          window.confirm(err.message);
          localStorage.clear();
        });
    },
  },
  getters: {
    infoUser(state) {
      return state.user;
    },
  },
};

export default user;
