<template>
  <div class="register">
    <h1>Register in</h1>
    <Form theme="register" :submit="register"/>
  </div>
</template>

<script>

import Form from '@/components/Form.vue';
import { filterKeys, getResponse } from '../utils/utils';

export default {
  name: 'Register',
  components: { Form },
  methods: {
    register(arg) {
      fetch('/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ ...filterKeys(arg) }),
      })
        .then((res) => getResponse(res, 'Ошибка регистрации'))
        .then((res) => {
          this.$store.commit('updateInfoUser', res);
          this.$router.push('/login');
        })
        .catch((err) => window.confirm(err.message));
    },
  },
};
</script>
<style scoped>

</style>
