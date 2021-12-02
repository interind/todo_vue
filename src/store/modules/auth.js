const auth = {
  state: {
    _id: '',
    status: false,
  },
  mutations: {
    updateStatus(state, res) {
      state.status = res;
    },
  },
  getters: {
    infoStatus(state) {
      return state.status;
    },
  },
};

export default auth;
