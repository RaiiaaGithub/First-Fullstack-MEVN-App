<template>
  <div class="main-app">
    <AuthChecker path="employee" />
    <div class="global-wrapper">
      <SideBar @select:tab="selectTab"/>
      <Navbar />

      <TabWrapper>
        <Tab v-show="selectedTab === tabs[0]">OLA</Tab>
        <Tab v-show="selectedTab === tabs[1]">Adeus</Tab>
        <Tab v-show="selectedTab === tabs[2]">Goodbye?</Tab>
      </TabWrapper>
    </div>
  </div>
</template>

<script>
import AuthChecker from "../components/AuthChecker.vue";
import SideBar from "../components/ui/SideBar.vue";
import Navbar from "../components/ui/Navbar.vue";
import TabWrapper from "../components/ui/TabWrapper.vue";
import Tab from "../components/ui/Tab.vue";

export default {
  components: {
    AuthChecker,
    SideBar,
    Navbar,
    TabWrapper,
    Tab
  },
  data() {
    return {
      tabs: ['dashboard', 'folha-obras', 'veiculos'],
      selectedTab: 'dashboard',
    }
  },
  methods: {
    selectTab(e) {
      this.selectedTab = e
    }
  }
}
</script>

<style scoped>
.global-wrapper {
  display: grid;
  grid-template-columns: 300px 1rem auto 1rem;
  grid-template-rows: 70px 1rem auto;
  grid-template-areas:
    "sidebar navbar navbar navbar"
    "sidebar . . ."
    "sidebar . content .";
}
</style>