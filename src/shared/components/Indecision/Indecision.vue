<template>
  <h1>Indecision</h1>
  <img v-if="image" :src="image" alt="Indecision image"/>
  <div class="bg-dark"></div>
  <div class="indecision-container">
      <input type="text" placeholder="Hazme una pregunta" v-model="question" />
      <small>*Recuerda terminar con un signo de interrogación(?)</small>

      <div v-if="isValidQuestion">
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
            image: null, // https://via.placeholder.com/260
            isValidQuestion: false,
        }
    },
    methods: {
        setDefaultValues() {
            this.image = null;
            this.answer = "";
            this.isValidQuestion = false;
        },
        async getAnswerFromApi() {
            this.isValidQuestion = true;
            this.answer = 'Pensando...';
            const translateAnswers = {
                maybe: 'Talvez',
                no: 'Noo',
                yes: 'Si!!',
            }
            let { answer, image } = await getRandomAnswer();
            this.image = image;
            this.answer = translateAnswers[answer.toLowerCase()];
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