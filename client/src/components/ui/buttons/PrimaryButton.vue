<template>
  <div class="button-component">
    <button>
      <div class="icon" v-if="faIcon">
        <font-awesome-icon  :icon="faIcon" />
      </div>
      <div v-if="text">
        {{ text }}
      </div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    faIcon: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped>
button {
  padding: .5em 1em;
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 1rem;

  background-color: var(--color-primary);
  border: none;
  border-radius: var(--border-radius);

  color: var(--text-color-secondary);
  transition: 100ms;

  width: 100%;

  display: flex;
  gap: .5rem;
  justify-content: center;
}

button:hover {
  background-color: var(--color-lighter);
  color: var(--color-primary);
  outline: 3px solid var(--color-primary);
}

button:active {
  transform: scale(0.95);
}
</style>