<template>
  <section class="content">
    <h1 class="home__title">{{titleHome}}</h1>
    <div class="info">
      <p class="info__text">email: {{infoUser.email}}</p>
      <p class="info__text">name: {{infoUser.name}}</p>
    </div>
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
      return fetch('/cards', {
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
        .catch((err) => window.confirm(err.message));
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
    align-content: center;
    min-width: 50vw;
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    justify-self: end;
    max-width: 50%;
  }
  .info__text {
    margin: 0;
    margin-right: 20px;
  }
  .info__text:last-of-type {
    margin-right: 0;
  }
  .home__title {
    margin: 0;
    justify-self: center;
  }
</style>
