<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
import { Confetti } from 'fast-confetti';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'StoredResources',
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
      confetti: null,
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      setNewResources: this.setNewResources,
      deleteResource: this.removeResources,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'StoredResources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'AddResource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    setNewResources(title, description, url) {
      const newResource = {
        id: new Date().toLocaleTimeString(),
        title: title,
        description: description,
        link: url,
      };
      // console.log(newResource);
      this.storedResources.unshift(newResource);
      this.selectedTab = 'StoredResources';
      const confetti = new Confetti();
      confetti.pride({
        duration: 2000,
        colors: ['#000000', '#ff0000'],
      });
    },
    removeResources(resId) {
      const resIndex = this.storedResources.findIndex(
        (res) => res.id !== resId
      );
      this.storedResources.splice(resIndex, 1);
      const confetti = new Confetti();
      confetti.pride({
        duration: 2000,
        colors: ['#ffffff', '#000000'],
      });
    },
  },
};
</script>

<template>
  <base-card>
    <base-button
      @click="setSelectedTab('StoredResources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="setSelectedTab('AddResource')" :mode="addResButtonMode"
      >Add Resource</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<style scoped>
.flat {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border: none;
  padding: 5px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-family: sans-serif;
}
</style>
