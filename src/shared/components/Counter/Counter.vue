// For create keypress vue + tab
<template>
    <h2>{{ customTitle }}</h2>
    <p class="counter">{{ counter }} <sup>2</sup> = {{ squareValue }}</p>
    <button class="myButton" @click="increase">+1</button>
    <button class="myButton" v-on:click="decrease">-1</button>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            default: 100,
            required: false,
            type: Number,
            validator(value) {
                return value >= 100 ? true : false;
            } 
        }
    },
    name: 'Counter',
    data() {
        return {
            counter: this.start
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
        },
        customTitle() {
            return this.title || 'Counter';
        }
    }
}
</script>

<style lang="scss">
  @import './Counter.scss';
</style>