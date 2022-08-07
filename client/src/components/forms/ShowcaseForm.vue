<template>
  <div class="showcase-wrapper">
    <div class="row" v-for="(value, key, index) in allData">
      <div class="key col">
        {{ key }}
      </div>
      <div class="value col">
        <p>{{ value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PrimaryInput from '../ui/inputs/PrimaryInput.vue';
import SwitchingInput from '../ui/inputs/SwitchingInput.vue';
export default {
  props: {
    allData: Object
  },
  components: { PrimaryInput, SwitchingInput }
}
</script>

<style scoped>
.showcase-wrapper {
  background-color: var(--color-lighter);
  border: 5px solid var(--color-light);
  padding: 1rem 1rem;
}

.row {
  display: flex;
  margin-bottom: .5rem;
}

.key {
  flex-basis: 30%;
  font-size: 1.1rem;
  font-weight: 800;
  text-transform: capitalize;
}

.value {
  flex-basis: 70%;
  font-size: 1.1rem;
  font-weight: 500;
}
</style>