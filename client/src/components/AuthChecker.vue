<template>
  <div class="auth">
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async mounted() {
    try {
      const response = await axios.post('http://localhost:3000/api/refresh-token', {
        refreshToken: localStorage.getItem('refreshToken')
      })

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('refreshToken', response.data.refreshToken)

    } catch (error) {
      this.$router.push({ name: 'login' })
    }

    const authElement = document.querySelector('.auth')
    authElement.remove()
  },
  props: {
    path: String
  },
}
</script>

<style scoped>
.auth {
  display: none;
}
</style>