<template>
  <b-list-group class="flex-row justify-content-between">
    <b-list-group-item>
      <input
        type="checkbox"
        @change="checkedCompleted(id)"
        :checked="likes.length"
      >
      {{correctDate}}
    </b-list-group-item>
    <b-list-group-item class="title">
      <details>
        <summary>
          {{title}}
        </summary>
        <p>{{body}}</p>
      </details>
    </b-list-group-item>
    <b-list-group-item>
      <b-button variant="light">
        <b-icon @click="deleteCard(id)" icon="x-circle" scale="2" variant="danger"></b-icon>
      </b-button>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { getResponse } from '../utils/utils';

export default {
  name: 'Todo',
  data: () => ({
    todo: [],
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
  .title {
    width: 80%;
  }
</style>
