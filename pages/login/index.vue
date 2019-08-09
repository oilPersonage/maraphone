<template>
  <section class="container loginContainer">
    <TemplateLogin
      :is-hover="hover"
      :change-hover="changeHover"
      :index="1"
      title="Вход"
      button-text="Войти"
      :on-submit="onSubmit"
      :is-login="true"
      name="login"
    />
    <TemplateLogin
      :is-hover="hover"
      :change-hover="changeHover"
      :index="2"
      title="Создать аккаунт"
      button-text="Создать"
      :on-submit="onSubmit"
      name="registartion"
    />
  </section>
</template>

<script>
import { mapActions } from 'vuex'
import TemplateLogin from '../../components/login/login'

export default {
  layout: 'login',
  components: {
    TemplateLogin
  },
  data () {
    return {
      hover: 0
    }
  },
  methods: {
    ...mapActions(['auth/login', 'auth/create']),
    changeHover (number) {
      this.hover = number
    },
    onSubmit (data, login) {
      login
        ? this['auth/login'](data)
        : this['auth/create'](data)
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '~assets/main.sass'

  @keyframes AnimationError
    0%
      transform: translateY(-50px)
    20%, 80%
      transform: translateY(50px)
    100%
      transform: translateY(-50px)
  .container
    min-height: 100vh
    display: flex
    align-items: center
    justify-content: center
</style>
