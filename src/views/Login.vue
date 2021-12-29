<template>
  <div class="container">
    <h1>Login in</h1>
    <Form theme="login" :submit="login" />
  </div>
</template>

<script>
import Form from '@/components/Form.vue';
import { filterKeys, getResponse } from '../utils/utils';

export default {
  name: 'Login',
  components: { Form },
  methods: {
    login(arg) {
      return fetch('/signin', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ ...filterKeys(arg) }),
      })
        .then((res) => getResponse(res, 'Ошибка авторизации'))
        .then((res) => {
          localStorage.setItem('jwt', res.token);
          this.$store.commit('updateStatus', true);
          window.location.href = '/';
        })
        .catch((err) => window.confirm(err.message));
    },
  },
};
</script>
