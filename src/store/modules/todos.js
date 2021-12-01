import api from '../../utils/api';

const todos = {
  state: {
    listTodos: [],
  },
  mutations: {
    updateTodos(state, list) {
      state.listTodos = list;
    },
  },
  actions: {
    getAllTodos(context) {
      return api.getAllCards()
        .then((result) => context.commit('updateTodos', result))
        .catch((err) => window.confirm(err.message));
    },

  },
  getters: {
    allTodos(state) {
      return state.listTodos;
    },
  },
};

export default todos;
