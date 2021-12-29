<template>
  <b-list-group >
  <template v-if="allTodos.length">
    <b-list-group-item v-for="todo in allTodos" :key="todo._id">
      <Todo
        :id="todo._id"
        :date="todo.date"
        :title="todo.title"
        :body="todo.body"
        :likes="todo.likes"
      />
    </b-list-group-item>
  </template>
  <template v-else>
    <b-list-group-item>Ваш список пуст</b-list-group-item>
  </template>
  </b-list-group>
</template>

<script>

import { mapGetters } from 'vuex';
import Todo from './Todo.vue';

export default {
  name: 'Todos',
  components: { Todo },
  computed: mapGetters(['allTodos']),
  mounted() {
    if (localStorage.getItem('jwt')) {
      this.$store.dispatch('getAllTodos');
    } else {
      this.router.push('/login');
      localStorage.clear();
    }
  },
};
</script>
