<template>
  <table>
    <TableHeader :headerData="filteredHeaders" />
    <TableBody :filteredData="filteredData" @showcase:data="$emit('showcase:data', $event)" />
  </table>
</template>

<script>
import TableHeader from "./TableHeader.vue";
import TableBody from "./TableBody.vue";
export default {
  components: { TableHeader, TableBody },
  props: {
    allData: Object,
  },
  data() {
    return {
      impracticalData: ['_id', '__v', 'createdAt', 'updatedAt']
    }
  },
  computed: {
    filteredHeaders() {
      return Object.keys(this.allData[0])
        .filter(key => !this.impracticalData.includes(key))
    },
    filteredData() {
      let array = []
      for (const data of this.allData) {
        array.push(Object.keys(data)
          .filter(key => !this.impracticalData.includes(key))
          .reduce((obj, key) => {
            let dataKey = data[key]

            // if dataKey is Array return 1 or 2 values
            if (Array.isArray(dataKey)) {
              if (dataKey.length >= 2) {
                dataKey = dataKey[0] + ' || ' + dataKey[1]
              } else {
                dataKey = dataKey[0]
              }
            }

            // if dataKey is Object return 1st property of object
            if (dataKey instanceof Object && dataKey.constructor === Object) {
              dataKey = dataKey[Object.keys(dataKey)[0]]
            }
            if (Date.parse(dataKey) && !Number.isInteger(dataKey)) {
              let date = new Date(dataKey)
              let d = date.getDate()
              let m = date.getMonth() + 1
              let y = date.getFullYear()
              dataKey = (d < 10 ? '0' + d : d) + '/' + (m < 10 ? '0' + m : m) + '/' + y
            }
            return Object.assign(obj, {
              [key]: dataKey
            })
          }, {})
        )
      }
      return array
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;

}
</style>