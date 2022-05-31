// For create keypress vue + tab
<template>
    <h2>Counter</h2>
    <p class="counter">{{ counter }} <sup>2</sup> = {{ squareValue }}</p>
    <button @click="increase">+1</button>
    <button v-on:click="decrease">-1</button>
</template>

<script>
export default {
    name: 'Counter',
    data() {
        return {
            counter: 8
        }
    },
    methods: {
        getSquareValue(value) {
            return value * valuer;
        },
        increase() {
            this.counter += 1;
        },
        decrease() {
            this.counter -= 1;
        }
    },
    computed: {
        squareValue() {
            return this.counter * this.counter;
        }
    }
}
</script>

<style>
  @import './Counter.scss';
</style>