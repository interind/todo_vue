<template>
  <section class="content">
    <h1 class="home__title">{{titleHome}}</h1>
    <p>email: {{infoUser.email}}, name: {{infoUser.name}}</p>
    <Todos />
  </section>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import Todos from '@/components/Todos.vue';

export default {
  name: 'Home',
  components: {
    Todos,
  },
  data: () => ({
    titleHome: 'Список дел',
  }),
  computed: mapGetters(['infoUser']),
  mounted() {
    this.$store.dispatch('getUser');
  },
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
