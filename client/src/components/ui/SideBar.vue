<template>
  <div class="sidebar-wrapper">
    <div class="logo">
      <LogoImage class="logo-img" />
      <LogoText class="logo-text" />
    </div>

    <div class="divider"></div>

    <div class="items">
      <SidebarButton class="active"
      text="Dashboard" 
      faIcon="fa-solid fa-chart-simple"
      />
      <SidebarButton 
      text="Folha de Obras" 
      faIcon="fa-regular fa-clipboard"
      />
      <SidebarButton 
      text="Veiculos" 
      faIcon="fa-solid fa-truck"
      />
    </div>
  </div>
</template>

<script>
import LogoImage from '../logo/LogoImage.vue';
import LogoText from '../logo/LogoText.vue';
import SidebarButton from './buttons/SidebarButton.vue';
export default {
  components: { LogoImage, LogoText, SidebarButton }
}
</script>

<style scoped>

.sidebar-wrapper {
  width: 100%;
  height: 100vh;
  grid-area: sidebar;
  background-color: var(--color-dark);
  outline: 1px solid var(--color-light);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-inline: 2rem;
}

.logo {
  display: flex;
  justify-content: center;
  height: 70px;

  padding: .5rem;
}

.logo-img {
  flex-basis: fit-content;
}

.logo-text {
  filter: invert(1);
  flex-basis: auto;
  padding-block: .2rem;
}

.divider {
  height: 2px;
  width: 100%;

  background-color: var(--color-light);
}

.items {
  width: 100%;
  display: grid;
  row-gap: .5rem;
  margin-top: 3rem;
}
</style>