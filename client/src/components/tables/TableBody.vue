<template>
  <tbody>
    <tr @click="$emit('showcase:data', index)" v-for="(row, index) in filteredData">
      <td v-for="col in row"> {{ col }} </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    filteredData: Object,
  },
}
</script>

<style scoped>

tr {
  background-color: var(--color-lighter);
  border: 1px solid var(--color-light);
}

tr:hover {
  background-color: var(--color-light);
}

td {
  padding: .5em .75em;
  text-align: center;
}

</style>