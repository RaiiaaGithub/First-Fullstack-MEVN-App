<template>
  <div class="button-box">
    <div class="icon">
      <font-awesome-icon :icon="faIcon" />
    </div>
    <div class="text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    faIcon: {
      type: String,
      default: '',
    }
  }
}
</script>

<style scoped>
.button-box {
  color: var(--text-color-secondary);
  background-color: var(--color-dark);

  display: flex;
  gap: .5rem;
  justify-content: flex-start;
  padding: .5em 1em;
  border-radius: var(--border-radius);

  width: 100%;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 100ms;
}

.button-box:hover {
  filter: brightness(1.2);
}
.button-box:active {
  transform: scale(0.98);
}
.active {
  background-color: var(--color-primary);
}
</style>