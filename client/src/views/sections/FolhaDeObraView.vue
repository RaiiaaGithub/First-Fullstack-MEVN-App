<template>
  <div class="folha-wrapper">
    <div class="folha-panel">

      <div>
        <div>
          <TableButtons @refresh:data="fetchData" @search:data="filterData" />
        </div>
        <Table v-if="isFetched" :allData="response" @showcase:data="getData" />
      </div>


      <ShowcaseForm v-if="isShowcaseActive" :allData="showcaseData"/>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import TableButtons from '../../components/tables/TableButtons.vue'
import Table from '../../components/tables/Table.vue'
import ShowcaseForm from '../../components/forms/ShowcaseForm.vue'

export default {
  components: { TableButtons, Table, ShowcaseForm },
  data() {
    return {
      response: {},
      isFetched: false,

      showcaseData: {},
      isShowcaseActive: false,
    }
  },
  methods: {
    async fetchData() {
      const res = await axios.get('http://localhost:3000/api/folha-obra', {
        headers: {
          'Authorization': 'Raiiaa ' + localStorage.getItem('token')
        }
      })

      this.response = res.data.data
      this.isFetched = true
    },
    getData(e) {
      this.showcaseData = this.response[e];
      this.isShowcaseActive = true;
    }, 
    filterData(e) {
      if (!isFetched) {
        return
      }

      for (const element of this.response) {
        
      }
    }
  },
  mounted() {
    this.fetchData()
  },
  
}
</script>

<style scoped>
.folha-wrapper {
  height: 100%;
}
.folha-panel {
  display: grid;
  gap: 3rem;
  grid-template-rows: 3fr 4fr;
  height: 100%;
}
</style>