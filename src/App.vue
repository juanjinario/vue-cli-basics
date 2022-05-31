<template>
  <p class="extra-info">Cositas</p>
  <!-- <Counter :start="7" title="Entraron" />
  <Counter title="Salieron" /> -->
  <Indecision />
</template>

<script>
import Counter from '@/shared/components/Counter/Counter.vue';
import Indecision from '@/shared/components/Indecision/Indecision.vue';

export default {
  components: { Counter, Indecision },
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
