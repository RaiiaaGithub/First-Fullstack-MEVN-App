<template>
  <thead>
    <tr>
      <th v-for="key in headerData">
        {{ key }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: {
    headerData: Object
  },
}
</script>

<style scoped>
  thead {
    background-color: var(--color-dark);
    color: var(--color-lighter);
  }

  th {
    text-transform: capitalize;
    padding: .5em .75em;
  }
</style>