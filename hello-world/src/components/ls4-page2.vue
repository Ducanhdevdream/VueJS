<template>
  <baselayout>
    <template v-slot:header>
      <h1>Page 2</h1>
    </template>
    
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
      <p>Default content</p>
        
    <template v-slot:footer>
      <p>Lorem ipsum dolor sit amet.</p>
    </template>
  </baselayout>
</template>

<script>
import baselayout from "./BaseLayout.vue";
export default {
  components: {
    baselayout,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: inline;
  align-items: center;
  justify-content: center;
  height: 500px;
}
</style>
