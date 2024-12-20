<script setup>
import DarkMode from "./DarkMode.vue";
</script>

<template>
  <nav>
    <h3>Khang Tran</h3>
    <span id="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/projects">Projects</RouterLink>
      <a href="/Khang_Tran_Resume.pdf">Resume</a>
      <DarkMode/>
    </span>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  filter: drop-shadow(0 0 10px #000000aa);
  background: var(--background);
  color: var(--white);

  padding: 0 0.5rem;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
h3 {
  margin: 1em 0.5em;
}
#links {
  display: flex;
  align-items: center;
}
#links > * {
  padding: 0 0.5em;
}
a {text-decoration: none;}
a.router-link-active {
  text-decoration: underline;
}
</style>