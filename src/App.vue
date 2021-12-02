<template>
  <div id="app">
    <template v-if="token">
      <nav class="links">
        <router-link class="link" to="/">Home</router-link> |
      </nav>
    </template>
    <template v-else>
      <nav class="links">
        <router-link class="link" to="/login">Login</router-link> |
        <router-link class="link" to="/register">Register</router-link>
      </nav>
    </template>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    token: localStorage.getItem('jwt'),
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  color: var(--color-black);
  max-width: 1280px;
  margin: 0 auto;
}
.links {
  justify-self: end;
}
.link {
  text-decoration: none;
  color: var(--color-black);
}
</style>
