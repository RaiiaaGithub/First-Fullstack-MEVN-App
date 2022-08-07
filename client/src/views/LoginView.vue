<template>
  <div class="login-view" >
    <div class="notification-wrapper">
      <WarningPopUp 
        v-for="message in errorMessages" 
        :message="message" 
        popupType="warning"
        @click="$event.currentTarget.remove()"
      />
    </div>
    <div class="logo">
      <LogoFull />
    </div>

    <keep-alive>
      <LoginForm @login:error="loginError" />
    </keep-alive>
  </div>
</template>

<script>
import LoginForm from '../components/forms/LoginForm.vue';
import LogoFull from '../components/logo/LogoFull.vue';
import WarningPopUp from '../components/ui/popups/WarningPopUp.vue';

export default {
  components: { LoginForm, LogoFull, WarningPopUp },
  methods: {
    loginError(e) {
      this.errorMessages.push(e)
    }
  },
  data() {
    return {
      errorMessages: [],
    }
  }
}
</script>

<style scoped>
.logo {
  display: flex;
  width: min(300px, 100%);
}

.login-view {
  padding: 4rem 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 100vh;

  position: relative;
}

.notification-wrapper {
  position: absolute;
  top: 4rem;
  right: 2rem;
}

@media only screen and (max-width: 1000px) {
  .login-view {
    flex-direction: column;
    justify-content: flex-start;
  }
}

@media only screen and (max-width: 400px) {
  .logo {
    flex-direction: column;
  }

  .text {
    height: 100px;
  }
}
</style>