<template>
  <ul class="todos" >
    <li v-for="todo in allTodos" :key="todo.id">
      <Todo :title="todo.title" :body="todo.body" />
    </li>
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
    this.$store.dispatch('getAllTodos');
  },
};
</script>

<style scoped>
  .todos {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
  }
</style>
