<template>
  <div id="app">
    <nav class="links">
      <router-link class="link" to="/">Home</router-link> |
      <router-link class="link" to="/login">Login</router-link> |
      <router-link class="link" to="/register">Register</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  color: var(--color-white);
  max-width: 1280px;
  margin: 0 auto;
}
.links {
  justify-self: end;
}
.link {
  text-decoration: none;
  color: var(--color-white);
}
</style>
