import api from '../../utils/api';

const user = {
  state: {
    user: { email: '', name: '' },
  },
  mutations: {
    updateInfoUser(state, info) {
      state.user = { ...state.user, ...info };
    },
  },
  actions: {
    getUser(context) {
      return api.getInfoUser()
        .then((result) => context.commit('updateInfoUser', result))
        .catch((err) => window.confirm(err.message));
    },
  },
  getters: {
    infoUser(state) {
      return state.user;
    },
  },
};

export default user;
