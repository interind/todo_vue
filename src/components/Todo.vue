<template>
  <ul class="todo">
    <li :class="currentClasses">
      <input
        type="checkbox"
        @change="checkedCompleted(id)"
        :checked="likes.length"
      >
      {{correctDate}}
    </li>
    <li :class="currentClasses">
      <details>
        <summary class="todo__title">
          {{title}}
        </summary>
        <p class="todo__description">{{body}}</p>
      </details></li>
    <li class="todo__item">
      <button class="button-delete" @click="deleteCard(id)" type="button" />
    </li>
  </ul>
</template>

<script>
import { getResponse } from '../utils/utils';

export default {
  name: 'Todo',
  data: () => ({
    todo: [],
    currentClasses: ['todo__item'],
  }),
  props: {
    title: String,
    body: String,
    date: String,
    id: String,
    likes: Array,
  },
  computed: {
    correctDate() {
      return this.date.slice(0, 10).split('-').reverse().join('/');
    },
  },
  methods: {
    deleteCard(id) {
      this.$store.dispatch('deleteCard', id);
    },
    checkedCompleted(infoId) {
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
            this.$store.dispatch('getAllTodos');
          } else {
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
    display: flex;
    max-width: 1000px;
    min-width: 600px;
    list-style: none;
    padding: 0;
    border-bottom: 1px solid var(--color-grey);
    position: relative;
  }
  .todo__description {
    max-width: 400px;
    word-wrap: break-word;
  }
  .todo__title {
    cursor: pointer;
  }
  .todo__item {
    text-decoration: none;
    margin-right: 10px;
  }
  .todo__item:last-of-type {
    margin-right: 0;
  }
  .button-delete {
    position: absolute;
    top: 10px;
    right: 0;
    border: 0;
    width: 20px;
    height: 3px;
    cursor: pointer;
    background-color: var(--color-red);
  }
</style>
