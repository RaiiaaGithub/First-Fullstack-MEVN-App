<template>
  <div class="main-app">
    <AuthChecker path="employee" />
    <div class="global-wrapper">
      <SideBar/>
      <Navbar/>
    </div>
  </div>
</template>

<script>
import AuthChecker from "../components/AuthChecker.vue";
import SideBar from "../components/ui/SideBar.vue";
import Navbar from "../components/ui/Navbar.vue";

export default {
  components: {
    AuthChecker,
    SideBar,
    Navbar
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