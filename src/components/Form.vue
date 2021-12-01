<template>
  <form @submit.prevent="submitForm">
    <label>
      Name
      <input type="text" v-model="obj.name">
    </label>
    <label>
      Email
      <input type="email" v-model="obj.email">
    </label>
    <label>
      Password
      <input type="password" autocomplete="false" v-model="obj.password">
    </label>
    <label>
      Тема
      <input type="text" v-model="obj.title">
    </label>
    <label>
      Описание
      <input type="text" v-model="obj.body">
    </label>
    <button type="submit">Отправить</button>
  </form>
</template>

<script>

export default {
  name: 'Form',
  props: {
    submit: Function,
  },
  data: () => ({
    obj: {},
  }),
  methods: {
    submitForm() {
      this.submit(this.obj);
    },
  },
};
</script>

<style scoped>
  .form {
    max-width: 500px;
  }
</style>
