<template>
  <div>
    <input :placeholder="holder">
  </div>
</template>

<script>
export default {
  props: {
    holder: String
  }
}
</script>

<style scoped>
input {
  font-size: 1rem;
  padding: 0.5em 1em;

  border-radius: var(--border-radius);
  border: none;
  outline: 2px solid var(--color-dark);
  color: var(--color-dark);
  transition: outline 100ms;

  width: 100%;
}

input:hover {
  outline: 2px solid var(--color-secondary);
}

input:focus {
  outline: 2px solid var(--color-secondary);
  color: var(--color-secondary);
}
</style>