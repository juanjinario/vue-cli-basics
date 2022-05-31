<template>
  <h1>Indecision</h1>
  <img :src="image" alt="Indecision image"/>
  <div class="bg-dark"></div>
  <div class="indecision-container">
      <input type="text" placeholder="Hazme una pregunta" v-model="question" @keypress="getRandomAnswer" />
      <small>*Recuerda terminar con un signo de interrogación(?)</small>

      <div>
          <h2>{{ question }}</h2>
          <div>{{ answer }}</div>
      </div>
  </div>
</template>

<script>
import { getRandomAnswer } from "@/core/services/indecision.service";

export default {
    name: 'Indecision',
    data() {
        return {
            question: "",
            answer: "",
            image: "https://via.placeholder.com/260",
        }
    },
    methods: {
        setDefaultValues() {
            this.image = "https://via.placeholder.com/260";
            this.answer = "";
        },
        async getAnswerFromApi() {  
            this.answer = 'Pensando...';
            let { answer, image } = await getRandomAnswer();
            this.image = image;
            this.answer = answer;
        },
    },
    watch: {
        question(value, oldValue) {
            this.setDefaultValues();
            if (!value.includes('?')) return;
            this.getAnswerFromApi();
        }
    }
}
</script>

<style lang="scss" scoped>
  @import './Indecision.scss';
</style>