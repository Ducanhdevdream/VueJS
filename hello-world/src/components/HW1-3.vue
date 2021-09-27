<template>
  <div class="calculator">
    <div class="value">
      {{value}}
    </div>
    <div class="row">
      <button v-on:click="value = ''">C</button>
      <button v-on:click="value = ''">del</button>
      <button v-on:click="value += '%'">%</button>
      <button v-on:click="value += '/'">/</button>
    </div>
    <div class="row">
      <button v-on:click="value += '7'">7</button>
      <button v-on:click="value += '8'">8</button>
      <button v-on:click="value += '9'">9</button>
      <button v-on:click="value += '*'">*</button>
    </div>
    <div class="row">
      <button v-on:click="value += '4'">4</button>
      <button v-on:click="value += '5'">5</button>
      <button v-on:click="value += '6'">6</button>
      <button v-on:click="value += '-'">-</button>
    </div>
    <div class="row">
      <button v-on:click="value += '1'">1</button>
      <button v-on:click="value += '2'">2</button>
      <button v-on:click="value += '3'">3</button>
      <button v-on:click="value += '+'">+</button>
    </div>
    <div class="row">
      <button v-on:click="value += '0'">0</button>
      <button v-on:click="value += '.'">.</button>
      <button v-on:click="equal()">=</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value : ''
    };
  },
  methods: {
        equal () {
            this.value = eval(this.value)
        }
    }
};
</script>

<style scoped lang="scss">
.calculator {
  width: 280px;
  height: auto;
  align-items: center;
  justify-content: center;
  background-color: grey;
  .value{
      width: 100%;
      height: 30px;
      background-color: honeydew;
  }
  .row {
    display: flex;
    align-items: center;
    button{
        width: 70px;
        height: 40px;
    }
  }
}
</style>