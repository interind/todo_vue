<template>
  <div id="app" class="container">
    <b-navbar class="links" type="dark" variant="dark">
    <template v-if="token">
      <b-button variant="outline-info" class="m-2" @click="exit">
        <b-icon icon="power" aria-hidden="true"></b-icon> Logout
      </b-button>
    </template>
    <template v-else>
      <router-link
        class="link"
        active-class="link link_active"
        to="/login">
          Login
        </router-link> |
      <router-link
        class="link"
        active-class="link link_active"
        to="/register">
          Register
        </router-link>
    </template>
    </b-navbar>
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
}
.links {
  display: flex;
  justify-content: flex-end;
}
.link {
  text-decoration: none;
  color: #fff;
  margin-right: 5px;
}
.link_active {
  color: #f0f;
}
</style>
