<template>
  <ul class="todos" >
    <li v-for="item in list" :key="item.id">
      <Todo :title="item.title" :description="item.description"/>
    </li>
  </ul>
</template>

<script>

import Todo from './Todo.vue';

export default {
  name: 'Todos',
  components: { Todo },
  props: {
    list: Array,
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
