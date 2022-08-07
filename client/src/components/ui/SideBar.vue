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
        data-component="DashboardView"
        faIcon="fa-solid fa-chart-simple"
        @click="activateTab"
      />
      <SidebarButton 
        text="Folha de Obras" 
        data-component="FolhaDeObraView"
        faIcon="fa-regular fa-clipboard"
        @click="activateTab"
      />
      <SidebarButton 
        text="Veiculos"
        data-component="VeiculoView" 
        faIcon="fa-solid fa-truck"
        @click="activateTab"
      />
    </div>
  </div>
</template>

<script>
import LogoImage from '../logo/LogoImage.vue';
import LogoText from '../logo/LogoText.vue';
import SidebarButton from './buttons/SidebarButton.vue';
export default {
  components: { LogoImage, LogoText, SidebarButton },
  methods: {
    activateTab(e) {
      const buttonItems = document.querySelectorAll('.button-box')
      buttonItems.forEach(button => {
        button.classList.remove('active')
      });

      const target = e.currentTarget
      target.classList.add('active')
      this.$emit('select:tab', target.getAttribute('data-component'))
    }
  }
}
</script>

<style scoped>

.sidebar-wrapper {
  width: 300px;
  height: 100vh;
  grid-area: sidebar;
  position: fixed;
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
  height: 1px;
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