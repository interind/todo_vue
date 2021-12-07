<template>
  <ul class="todos" >
  <template v-if="allTodos.length">
    <li v-for="todo in allTodos" :key="todo._id">
      <Todo
        :id="todo._id"
        :date="todo.date"
        :title="todo.title"
        :body="todo.body"
        :likes="todo.likes"
      />
    </li>
  </template>
  <template v-else>
    <li>Ваш список пуст</li>
  </template>
  </ul>
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

<style scoped>
  .todos {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    justify-items: center;
  }
</style>
