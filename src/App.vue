<template>
  <div id="app">
    <nav class="links">
      <template v-if="token">
        <router-link class="link" to="/home">Home</router-link> |
      </template>
      <template v-else>
        <router-link class="link" to="/login">Login</router-link> |
        <router-link class="link" to="/register">Register</router-link>
      </template>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    token: localStorage.getItem('jwt') || '',
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
