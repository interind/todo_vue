<template>
  <form>
    <label>
      Email
      <input name="email">
    </label>
    <label>
      Password
      <input name="password">
    </label>
  </form>
</template>

<script>

export default {
  name: 'Form',
};
</script>

<style scoped>
  .form {
    max-width: 500px;
  }
</style>
