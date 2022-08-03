<template>
  <div>
      <input 
        :placeholder="holder" 
        v-bind="$attrs"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      >
  </div>
</template>

<script>
  export default {
    props: {
      holder: {
        type: String,
        default: '',
      },
      modelValue: {
        type: [String, Number],
        default: '',
      }
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
    outline: 2px solid var(--color-primary);
  }

  input:focus {
    outline: 2px solid var(--color-primary);
    color: var(--color-primary);
    box-shadow: 0 0 .5rem .1rem var(--color-primary);
  }
</style>