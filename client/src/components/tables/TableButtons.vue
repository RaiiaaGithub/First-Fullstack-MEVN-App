<template>
  <div class="table-buttons">
    <div class="left-buttons">
      <PrimaryButton text="Adicionar" faIcon="fa-solid fa-plus" @click="$emit('post:data')" />
      <PrimaryButton faIcon="fa-solid fa-rotate-right" @click="$emit('refresh:data')" />
    </div>

    <PrimaryInput holder="Procurar" type="text" v-model="searching" faIcon="fa-solid fa-magnifying-glass" @input="$emit('search:data', $event.target.value)" />
  </div>
</template>

<script>
import PrimaryButton from '../ui/buttons/PrimaryButton.vue';
import PrimaryInput from '../ui/inputs/PrimaryInput.vue';
export default {
  components: { PrimaryButton, PrimaryInput },
  data() {
    return {
      searching: ''
    }
  }
}
</script>

<style scoped>
.table-buttons {
  display: flex;
  justify-content: space-between;
  padding: .5rem 0;
}

.left-buttons {
  display: flex;
  gap: .5rem;
}
</style>