<template>
  <baselayout>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>
    <template v-slot:content>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
    <el-button type="primary" plain>Primary</el-button>
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
