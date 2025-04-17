<script>
import StoredResources from './component/learning-course/StoredResources.vue';

export default {
  components: {
    StoredResources,
  },
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Offical Guide',
          description: 'The offical Vue.js domentation',
          link: 'https://vuejs.org/guide/introduction.html',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google. ',
          link: 'https://www.google.com',
        },
      ],
    };
  },
  methods: {},
};
</script>

<template>
  <the-header title="Remember Me"></the-header>
  <div>
    <StoredResources :resources="storedResources"> </StoredResources>
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
