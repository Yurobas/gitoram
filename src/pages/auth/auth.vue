<template>
  <div class="auth page">
    <div class="container">
      <div class="auth__content">
        <logo/>
        <h1 class="auth__title">
          More than just one repository.
          This is our digital world.
        </h1>
        <div class="auth__button">
          <xButton 
            iconName="github"
            @click="getCode"
          >
            Authorize with github
          </xButton>
        </div>
        <div class="auth__image">
          <img src="../../../public/images/auth-bg.png" alt="Пример">
        </div>
        <div class="auth__copyright">
          © Gitogram from Loftschool
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '../../api'
import env from '../../../env.js'
import { logo } from '../../components/logo'
import { xButton } from '../../components/xButton'

export default {
  name: 'auth',
  components: { 
    logo,
    xButton
  },
  methods: {
    getCode () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'

      const params = new URLSearchParams()
      params.append('client_id', env.clientID)
      params.append('scope', 'repo:status read:user')

      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')
    if (code) {
      try {
        const { data } = await api.auth.getCode(env.clientID, env.clientSecret, code)
        localStorage.setItem('token', data.token)
        this.$router.replace({ name: 'main' })
      } catch (e) {
        console.error(e)
        throw e
      }
    }
  }
}
</script>

<style src="./auth.scss" lang="scss"></style>
