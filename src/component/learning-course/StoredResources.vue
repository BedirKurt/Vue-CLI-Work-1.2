<script>
import LearningResource from './LearningResource.vue';
export default {
  inject: ['resources'],
  components: {
    LearningResource,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <LearningResource
    v-for="res in resources"
    :key="res.id"
    :id="res.id"
    :title="res.title"
    :description="res.description"
    :link="res.link"
  >
  </LearningResource>
</template>

<style scoped></style>
