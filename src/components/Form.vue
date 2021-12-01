<template>
  <form @submit.prevent="submit">
    <label>
      Name
      <input v-model="name">
    </label>
    <label>
      Email
      <input v-model="email">
    </label>
    <label>
      Password
      <input v-model="password">
    </label>
    <button type="submit">Отправить</button>
  </form>
</template>

<script>
import api from '../utils/api';

export default {
  name: 'Form',
  date: () => ({
    email: '',
    name: '',
    password: '',
  }),
  methods: {
    submit() {
      if (this.email && this.password && this.name) {
        api.register({ email: this.email, password: this.password, name: this.name });
      }
    },
  },
};
</script>

<style scoped>
  .form {
    max-width: 500px;
  }
</style>
