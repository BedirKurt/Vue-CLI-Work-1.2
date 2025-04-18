<script>
import TheResources from './component/learning-course/TheResources.vue';

export default {
  components: {
    TheResources,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div>
    <the-header title="Source Lists"></the-header>
    <TheResources></TheResources>
  </div>
</template>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
