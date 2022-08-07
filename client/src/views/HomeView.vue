<template>
  <div class="main-app">
    <AuthChecker path="employee" />
    <div class="global-wrapper">
      <SideBar @select:tab="selectTab" />
      <Navbar />

      <keep-alive>
        <TabWrapper>
          <component :is="currentTab" />
        </TabWrapper>
      </keep-alive>
      
    </div>
  </div>
</template>

<script>
import AuthChecker from "../components/AuthChecker.vue";
import SideBar from "../components/ui/SideBar.vue";
import Navbar from "../components/ui/Navbar.vue";
import TabWrapper from "../components/ui/TabWrapper.vue";
import DashboardView from "../views/sections/DashboardView.vue"
import FolhaDeObraView from "../views/sections/FolhaDeObraView.vue"
import VeiculoView from "../views/sections/VeiculoView.vue"


export default {
  components: {
    AuthChecker,
    SideBar,
    Navbar,
    TabWrapper,
    DashboardView,
    FolhaDeObraView,
    VeiculoView,
  },
  data() {
    return {
      currentTab: 'DashboardView',
    }
  },
  methods: {
    selectTab(e) {
      this.currentTab = e
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