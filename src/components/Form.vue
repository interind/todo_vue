<template>
  <b-form @submit.prevent="submitForm">
    <template v-if='theme === "login"'>
      <b-form-group>
        <b-form-input
          class="m-1"
          placeholder="Email"
          type="email"
          v-model="obj.email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          class="m-1"
          placeholder="Password"
          type="password"
          minlength="6"
          autocomplete="false"
          v-model="obj.password"
          required
        ></b-form-input>
      </b-form-group>
    </template>
    <template v-else-if='theme === "register"'>
      <b-form-group>
        <b-form-input
          class="m-1"
          placeholder="Name"
          type="text"
          minlength="2"
          maxlength="30"
          v-model="obj.name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          class="m-1"
          placeholder="Email"
          type="email"
          v-model="obj.email"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          class="m-1"
          placeholder="Password"
          type="password"
          minlength="6"
          autocomplete="false"
          v-model="obj.password"
          required
        ></b-form-input>
      </b-form-group>
    </template>
    <template v-else>
      <b-form-group>
        <b-form-input
          class="m-1"
          placeholder="Тема задачи:"
          type="text"
          minlength="2"
          maxlength="30"
          v-model="obj.title"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-textarea
        class="m-1"
        placeholder="Описание:"
        type="text"
        v-model="obj.body"
        minlength="10"
        maxlength="200"
        required
        ></b-form-textarea>
      </b-form-group>
    </template>
    <b-button
      type="submit"
    >
      Отправить
    </b-button>
  </b-form>
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
      this.submit(this.obj)
        .then(() => this.$el.reset())
        .catch((err) => console.error(err));
    },
  },
};
</script>
