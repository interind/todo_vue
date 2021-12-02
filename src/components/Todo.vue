<template>
  <ul class="todo">
    <li class="todo__item">
      <input type="checkbox" @change="classes(id)" :checked="likes.length">
    </li>
    <li :class="todoItem">{{date.slice(0, 10).split('-').reverse().join('/')}}</li>
    <li :class="todoItem">{{likes.length}} {{title}}</li>
    <li :class="todoItem">{{body}}</li>
    <li class="todo__item">
      <button class="button-delete" @click="deleteCard(id)" type="button" />
    </li>
  </ul>
</template>

<script>
import { getResponse } from '../utils/utils';

export default {
  name: 'Todo',
  props: {
    title: String,
    body: String,
    date: String,
    id: String,
    likes: Array,
  },
  data: () => ({
    todoItem: ['todo__item'],
  }),
  methods: {
    deleteCard(id) {
      this.$store.dispatch('deleteCard', id);
    },
    classes(infoId) {
      const token = localStorage.getItem('jwt') || '';
      const status = this.likes.length;
      const toggleMethod = status ? 'DELETE' : 'PUT';
      fetch(`/cards/${infoId}/likes`, {
        method: toggleMethod,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => getResponse(res, 'Ошибка метки карточки'))
        .then((card) => {
          if (!card.likes.length) {
            this.todoItem.push('todo__item_disabled');
            this.$store.dispatch('getAllTodos');
          } else {
            this.todoItem = ['todo__item'];
            this.$store.dispatch('getAllTodos');
          }
        })
        .catch((err) => window.confirm(err.message));
    },
  },
};
</script>

<style scoped>
  .todo {
    display: grid;
    grid-template-columns: 20px 1fr 1fr 3fr 30px;
    grid-auto-flow: row;
    align-items: center;
    max-width: 1000px;
    min-width: 600px;
    list-style: none;
    padding: 0;
    border-bottom: 1px solid var(--color-grey);
  }
  .todo__item {
    text-decoration: none;
  }
  .todo__item_disabled {
    text-decoration: line-through;
    color: var(--color-red);
  }
  .button-delete {
    border: 0;
    width: 10px;
    height: 2px;
    cursor: pointer;
    background-color: var(--color-red);
  }
</style>
