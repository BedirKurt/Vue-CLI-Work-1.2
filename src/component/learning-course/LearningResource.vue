<script>
export default {
  props: ['title', 'description', 'link'],
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
      <base-button mode="flat">Delete</base-button>
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

button {
  background-color: rgb(228, 0, 114);
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-family: sans-serif;
}
button:hover {
  background-color: rgb(255, 1, 1);
}

.flat{
  background-color: black;
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-family: sans-serif;

}

</style>
