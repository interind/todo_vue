<template>
  <section class="content">
    <h1 class="home__title">{{titleHome}}</h1>
    <p>email: {{infoUser.email}}, name: {{infoUser.name}}</p>
    <Form :submit="addCard"/>
    <Todos />
  </section>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex';
import Todos from '@/components/Todos.vue';
import Form from '@/components/Form.vue';
import { getResponse } from '../utils/utils';

export default {
  name: 'Home',
  components: {
    Todos,
    Form,
  },
  data: () => ({
    titleHome: 'Список дел',
  }),
  methods: {
    addCard({ title, body }) {
      const token = localStorage.getItem('jwt') || '';
      fetch('/cards', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          title,
          body,
        }),
      })
        .then((res) => getResponse(res, 'Ошибка добавления новой карточки'))
        .then(() => this.$store.dispatch('getAllTodos'))
        .catch((err) => console.log(err.message));
    },
  },
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
