<script>
export default {
  props: ['title'],
  data() {
    return {

    };
  },
  methods: {},
};
</script>
<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<style scoped>
header{
    background-color: black;
    color: white;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

header h1{
    text-align: center;
}

</style>
