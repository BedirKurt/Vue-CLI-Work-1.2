<script>
export default {
  inject: ['setNewResources'],
  data() {
    return {
      newLink: '',
      newTitle: '',
      inputIsInvalid: false,
    };
  },
  provide() {
    return {
      newResources: this.newResources,
    };
  },
  methods: {
    addNewResources() {
      const newDescription = this.$refs.newDescription.value;
      if (
        newDescription?.trim() === '' ||
        this.newTitle?.trim() === '' ||
        this.newLink?.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }
      this.setNewResources(this.newTitle, newDescription, this.newLink);
      this.$refs.newDescription.value = '';
      this.newLink = '';
      this.newTitle = '';
    },

    errorControl() {
      this.inputIsInvalid = !this.inputIsInvalid;
    },
  },
};
</script>
<template>
  <base-dialog v-if="inputIsInvalid" title="Warning">
    <template #default>
      <p>
        <strong>Please fill in the relevant fields</strong>
      </p>
    </template>

    <template #actions>
      <base-button mode="flat" @click="errorControl()">Confirm</base-button>
    </template>
  </base-dialog>



  <base-card>
    <form @submit.prevent="addNewResources">
      <div class="form-control">
        <label for="tittle">Title</label>
        <input type="text" name="" id="" v-model="newTitle" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="" rows="3" ref="newDescription"></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" v-model="newLink" />
      </div>
      <div>
        <base-button type="submit">Add</base-button>
      </div>
    </form>
  </base-card>
</template>

<style scoped>
label {
  color: #ff0000;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: none;
  border-bottom: 1px solid #ccc;
  font-weight: 600;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
