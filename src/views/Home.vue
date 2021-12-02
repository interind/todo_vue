<template>
  <section class="content">
    <h1 class="home__title">{{titleHome}}</h1>
    <div class="info">
      <p class="info__text">email: {{infoUser.email}}</p>
      <p class="info__text">name: {{infoUser.name}}</p>
      <button class="info__button-close" @click="exit" type="button">EXIT</button>
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
    exit() {
      localStorage.clear();
      window.location.href = '/login';
    },
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
  }
  .info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: auto;
    max-width: 50%;
  }
  .info__button-close {
    border: 0;
    background-color: initial;
    color: var(--color-red);
    font-size: 20px;
    width: 40px;
    cursor: pointer;
  }
  .info__text {
    margin: 0;
    margin-right: 20px;
  }
  .home__title {
    margin: 0;
    justify-self: center;
  }
</style>
