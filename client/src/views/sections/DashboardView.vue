<template>
  <div class="dashboard-wrapper">
    <div class="warning">
      <div class="icon">
        <font-awesome-icon icon="fa-solid fa-screwdriver-wrench" />
      </div>
      <h1>EM CONSTRUÇÃO</h1>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.dashboard-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
}
.warning {
  color: var(--color-grey);
  text-align: center;
}
.icon {
  font-size: 8rem;
}
h1 {
  font-size: 3rem;
}
</style>