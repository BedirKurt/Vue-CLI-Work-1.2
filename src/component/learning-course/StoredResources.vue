<script>
import LearningResource from './LearningResource.vue';
export default {
  props: ['resources'],
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
  <ul>
    <LearningResource
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    >
    </LearningResource>
  </ul>
</template>

<style scoped>

</style>
