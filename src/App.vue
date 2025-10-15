<script setup lang="ts">
// Main app component with router view
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

:root {
  --Neutral-Grey-400: #1B1B1C;
  --Neutral-Grey-300: #222325;
  --Neutral-Grey-100: #E6E1F3;
  --Neutral-Grey-250: #363A3E;
  --Primary-500: #0CBA4A;
  --Neutral-White: #FFF;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', -apple-system, Roboto, Helvetica, sans-serif;
  background-color: var(--Neutral-Grey-400);
  color: var(--Neutral-White);
}

#app {
  min-height: 100vh;
}
</style>
