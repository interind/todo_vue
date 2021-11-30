<template>
  <section class="content">
    <h1 class="home__title">{{titleHome}}</h1>
    <Todos :list="list"/>
  </section>
</template>

<script>
// @ is an alias to /src
import Todos from '@/components/Todos.vue';

export default {
  name: 'Home',
  components: {
    Todos,
  },
  data: () => ({
    titleHome: 'Список дел',
    list: [
      { id: 1, title: 'Тема 1', description: 'Описание задачи' },
      { id: 2, title: 'Тема 2', description: 'Описание задачи' },
      { id: 3, title: 'Тема 3', description: 'Описание задачи' },
      { id: 4, title: 'Тема 4', description: 'Описание задачи' },
      { id: 5, title: 'Тема 5', description: 'Описание задачи' },
      { id: 6, title: 'Тема 6', description: 'Описание задачи' },
      { id: 7, title: 'Тема 7', description: 'Описание задачи' },
      { id: 8, title: 'Тема 8', description: 'Описание задачи' },
      { id: 9, title: 'Тема 9', description: 'Описание задачи' },
    ],
  }),
};
</script>

<style>
  .content {
    display: grid;
  }
  .home__title {
    margin: 0;
    justify-self: center;
  }
</style>
