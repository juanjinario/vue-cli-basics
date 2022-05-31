<template>
  <h1>Indecision</h1>
  <img src="https://via.placeholder.com/260" alt="Indecision image"/>
  <div class="bg-dark"></div>
  <div class="indecision-container">
      <input type="text" placeholder="Hazme una pregunta" />
      <small>*Recuerda terminar con un signo de interrogación(?)</small>

      <div>
          <h2>Seré millonario?</h2>
          <div></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Indecision',
}
</script>

<style lang="scss" scoped>
  @import './Indecision.scss';
</style>