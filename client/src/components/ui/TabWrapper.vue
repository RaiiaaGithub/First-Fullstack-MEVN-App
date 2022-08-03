<template>
  <div class="tab-wrapper">
    <slot />
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .tab-wrapper {
    grid-area: content;
  }
</style>