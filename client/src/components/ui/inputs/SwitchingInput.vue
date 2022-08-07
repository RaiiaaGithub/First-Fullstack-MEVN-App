<template>
  <div :class="{active: isActive}" class="edit-input" >
    <PrimaryInput class="text" :modelValue="value" :disabled="!isActive"/>
    <PrimaryButton class="icon" faIcon="fa-solid fa-pencil" @click="isActive = !isActive"/>
  </div>
</template>

<script>
import PrimaryInput from './PrimaryInput.vue';
import PrimaryButton from '../buttons/PrimaryButton.vue';
  export default {
    props: {
        value: undefined
    },
    components: { PrimaryInput, PrimaryButton },
    data() {
      return {
        isActive: false,
      }
    },
}
</script>

<style scoped>
  .edit-input {
    display: flex;
    gap: 1rem;
  }

  .text {
    width: 100%;
  }

  .text >*:focus-within {
    background-color: aqua;
  }
</style>