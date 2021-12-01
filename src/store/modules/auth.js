const auth = {
  state: {
    token: '',
    _id: '',
    status: false,
  },
  mutations: {
    updateToken(state, info) {
      state._id = info._id;
    },
    updateStatus(state, res) {
      state.status = res;
    },
  },
  actions: {
    authUser(context) {
      if (this.getters.infoToken) {
        context.commit('updateStatus', true);
      }
      context.commit('updateStatus', false);
      window.confirm('Error token');
    },
  },
  getters: {
    infoStatus(state) {
      return state.status;
    },
  },
};

export default auth;
