<template>
  <form class="form" @submit.prevent="submitForm">
    <template v-if='theme === "login"'>
      <label>
        <input
          class="form__input"
          placeholder="Email"
          type="email"
          v-model="obj.email"
          required
        >
      </label>
      <label>
        <input
          class="form__input"
          placeholder="Password"
          type="password"
          autocomplete="false"
          v-model="obj.password"
          required
        >
      </label>
    </template>
    <template v-else-if='theme === "register"'>
      <label>
        <input
          class="form__input"
          placeholder="Name"
          type="text"
          v-model="obj.name"
          required
        >
      </label>
      <label>
        <input
          class="form__input"
          placeholder="Email"
          type="email"
          v-model="obj.email"
          required
        >
      </label>
      <label>
        <input
          class="form__input"
          placeholder="Password"
          type="password"
          autocomplete="false"
          v-model="obj.password"
          required
        >
      </label>
    </template>
    <template v-else>
      <label>
        <input
          class="form__input"
          placeholder="Тема задачи:"
          type="text"
          v-model="obj.title"
          required
        >
      </label>
      <label>
        <input
        class="form__input"
        placeholder="Описание:"
        type="text"
        v-model="obj.body"
        required
      >
      </label>
    </template>
    <button
      class="form__button-submit"
      type="submit"
    >
      Отправить
    </button>
  </form>
</template>

<script>

export default {
  name: 'Form',
  props: {
    submit: Function,
    theme: String,
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
    display: flex;
    max-width: 600px;
    margin: 20px auto;
  }
  .form__button-submit {
    cursor: pointer;
    border: 0;
  }
  .form__input {
    border: 0;
    border-bottom: 1px solid var(--color-grey);
  }
  .form__input:focus {
    outline: none;
    border-bottom: 2px solid var(--color-grey);
  }
</style>
