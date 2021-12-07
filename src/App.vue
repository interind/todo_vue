<template>
  <div id="app">
    <template v-if="token">
      <nav class="links">
        <button class="button-close" @click="exit">Exit</button>
      </nav>
    </template>
    <template v-else>
      <nav class="links">
        <router-link class="link" active-class="link_active" to="/login">Login</router-link> |
        <router-link class="link" active-class="link_active" to="/register">Register</router-link>
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
  methods: {
    exit() {
      localStorage.clear();
      window.location.href = '/login';
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  justify-content: center;
  color: var(--color-black);
  padding-top: 30px;
}
.links {
  justify-self: end;
}
.link {
  text-decoration: none;
  color: var(--color-black);
}
.button-close {
    border: 0;
    background-color: initial;
    color: var(--color-red);
    font-size: 20px;
    width: 40px;
    cursor: pointer;
  }
.link_active {
  border-bottom: 1px solid var(--color-black);
}
</style>
