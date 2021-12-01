import api from '../../utils/api';

const auth = {
  state: {
    token: '',
    status: false,
  },
  mutations: {
    updateToken(state, info) {
      state.token = info;
    },
    updateStatus(state, res) {
      state.status = res;
    },
  },
  actions: {
    authUser(context) {
      return api.authorizationPost()
        .then(() => context.commit('updateStatus', true))
        .catch((err) => {
          context.commit('updateStatus', false);
          window.confirm(err.message);
        });
    },
  },
  getters: {
    infoToken(state) {
      return state.token;
    },
  },
};

export default auth;
