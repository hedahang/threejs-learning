<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <RouterLink to="/demo1">Demo1</RouterLink>
        <RouterLink to="/demo2">Demo2</RouterLink>
      </nav>
    </div>
  </header>
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
header {
  width: 200px;
  height: 100vh;
  background-color: aliceblue;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  /* color: var(--color-text); */
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

nav a:first-of-type {
  border: 0;
}
.main{
  width: calc(100vw - 200px);
  height: 100vh;
}
</style>
