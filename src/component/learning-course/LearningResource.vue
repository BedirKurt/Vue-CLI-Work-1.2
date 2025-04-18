<script>
export default {
  props: ['id', 'title', 'description', 'link'],
  inject: ['deleteResource'],
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <base-card>
    <header>
      <h3>{{ title }}</h3>
      <base-button mode="flat" @click="deleteResource(id)">Delete</base-button>
    </header>
    <p>{{ description }}</p>
    <nav>
      <a :href="link">View Resource</a>
    </nav>
  </base-card>
</template>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ff0000;
}

a:hover,
a:active {
  color: #e97c7c;
}
</style>
