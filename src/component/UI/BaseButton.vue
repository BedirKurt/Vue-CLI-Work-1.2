<script>
export default {
  props: ['mode'],
  data() {
    return {};
  },
};
</script>

<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<style>
button {
  background-color: rgb(2, 2, 2);
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-family: sans-serif;
  margin: 0px 5px;
  font-weight: bolder;
}

button:hover {
  background-color: rgb(255, 1, 1);
  color: white;
  transform: scale(1.05);
}
</style>
