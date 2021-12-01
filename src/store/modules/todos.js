import { getResponse } from '../../utils/utils';
import { token } from '../../router';

const todos = {
  state: {
    listTodos: [],
  },
  mutations: {
    updateTodos(state, list) {
      state.listTodos = list;
    },
    addTodo(state, todo) {
      state.listTodos = [todo, ...state.listTodos];
    },
    deleteCard(state, todo) {
      state.listTodos = state.listTodos.filter((el) => el._id !== todo);
    },
  },
  actions: {
    getAllTodos(context) {
      fetch('/cards', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => getResponse(res, 'Ошибка данных карточек'))
        .then((result) => context.commit('updateTodos', result))
        .catch((err) => window.confirm(err.message));
    },
    deleteCard(context, id) {
      fetch(`/cards/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => getResponse(res, 'Ошибка удаления карточки'))
        .then(() => context.commit('deleteCard', id))
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
