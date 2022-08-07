<template>
  <div class="login-wrapper" @keypress.enter="signIn">
    <div class="login-panel">

      <div class="login-welcome">
        <h1>Bem-vindo ao <span>PLEXYT</span></h1>
        <h3>Introduza as suas credenciais</h3>
      </div>

      <div class="login-form">
        <PrimaryInput 
          holder="Email ou telemóvel"
          type="email"
          v-model="email"
        />

        <PrimaryInput 
          holder="Palavra-passe"
          type="password"
          v-model="password"
        />

        <div class="spacer"></div>

        <PrimaryButton 
          text="Entrar"
          @click="signIn"
        />
      </div>
    </div>

  </div>
</template>

<script>
import PrimaryInput from '../ui/inputs/PrimaryInput.vue';
import PrimaryButton from '../ui/buttons/PrimaryButton.vue';

import axios from 'axios'

export default {
  components: { PrimaryInput, PrimaryButton },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async signIn() {
      try {
        const response = await axios.post('http://localhost:3000/api/login', 
          {username: this.email, password: this.password})

        localStorage.setItem('token', response.data.token)
        localStorage.setItem('refreshToken', response.data.refreshToken)

        window.location = '/home'

      } catch (error) {
        console.error(error.message);
        const message = error.response.data.message
        this.$emit('login:error', message)
      }
      
    }
  }
}
</script>

<style scoped>
.login-wrapper {
  
  width: min(100%, 450px);
}

.login-panel {
  margin-inline: auto;
  color: var(--text-color-primary);

  display: grid;
  gap: 3rem;
}

h1, span {
  font-family: 'Poppins', sans-serif;
}

span {
  font-size: 2.5rem;
  color: var(--color-primary);
}

h3 {
  color: var(--color-gray);
}

.login-welcome {
  text-align: center;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>