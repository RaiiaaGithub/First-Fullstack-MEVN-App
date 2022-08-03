<template>
  <div class="button-component">
    <button>{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  }
}
</script>

<style scoped>
button {
  padding: .5em 1em;
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 1rem;

  background-color: var(--color-secondary);
  border: none;
  border-radius: var(--border-radius);

  color: var(--text-color-secondary);
  transition: 100ms;

  width: 100%;
}

button:hover {
  background-color: var(--color-lighter);
  color: var(--color-secondary);
  outline: 3px solid var(--color-secondary);
}

button:active {
  transform: scale(0.95);
}
</style>