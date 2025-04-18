<script>
export default {
  props: ['title'],
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <dialog open="true">
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="actions"> </slot>
      </menu>
    </dialog>
  </div>
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

div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;

}

dialog {
  position: fixed;
  top: 25vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  overflow: hidden;

}

dialog:hover {
  transform: scale(1.09);
  transition: 1.4s;
}

header {
  background-color: #daa700;
  color: white;
  width: 100%;
  padding: 1rem;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
