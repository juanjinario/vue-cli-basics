<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p class="extra-info">Cositas</p>
  <Counter :start="7" title="Entraron"></Counter>
  <Counter title="Salieron"></Counter>
</template>

<script>
import Counter from './shared/components/Counter.vue'

export default {
  components: { Counter },
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .extra-info {
    color: red;
  }
}
</style>
