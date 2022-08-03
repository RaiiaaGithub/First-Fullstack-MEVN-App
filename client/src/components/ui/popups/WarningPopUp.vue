<template>
  <div class="popup-wrapper">
    <div class="popup-panel">
      <div class="popup-icon"></div>
      <div class="popup-text">
        <p>{{ message }}</p>
      </div>
      <div class="popup-close">
        <font-awesome-icon icon="fa-regular fa-circle-xmark" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    popupType: String,
  },
  data() {
    return {
      mainColor: '',
      secColor: '',
      extraColor: '',
    }
  },
  mounted() {
    this.mainColor = `var(--color-${this.popupType})`
    this.secColor = `var(--text-color-${this.popupType})`
    this.extraColor = `var(--extra-color-${this.popupType})`
  }
}
</script>

<style scoped>
.popup-wrapper {
  margin-bottom: 1rem;
  border-radius: var(--border-radius);
  border-left: 5px solid v-bind(extraColor);
  cursor: pointer;

  transition: 100ms;
}

.popup-panel {
  display: flex;
  align-items: center;
  gap: .5rem;
  background-color: v-bind(mainColor);
  padding: .5em .75em .5em .3em;
  color: v-bind(secColor);
  user-select: none;
}

.popup-wrapper:hover {
  box-shadow: 0 0 0.3rem 0 v-bind(mainColor);
  transform: scale(1.02);
}

.popup-wrapper:active {
  transform: scale(0.98);
}
</style>