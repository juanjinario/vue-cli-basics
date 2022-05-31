<template>
  <h1>Indecision</h1>
  <img src="https://via.placeholder.com/260" alt="Indecision image"/>
  <div class="bg-dark"></div>
  <div class="indecision-container">
      <input type="text" placeholder="Hazme una pregunta" v-model="question" @keypress="getRandomAnswer" />
      <small>*Recuerda terminar con un signo de interrogación(?)</small>

      <div>
          <h2>{{ question }}</h2>
          <div>{{ response }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Indecision',
    data() {
        return {
            question: "",
            response: ""
        }
    },
    methods: {
        getRandomAnswer() {
            console.log(this.question);
            return 1;
        },
    },
    watch: {
        question(value, oldValue) {
            if (value.includes('?')) {
                console.log('entro');
            }
        }
    }
}
</script>

<style lang="scss" scoped>
  @import './Indecision.scss';
</style>