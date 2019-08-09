<template>
  <div
    class="loginBox"
    :class="{activeL: isHover === 1 && index === 1, activeR: isHover === 2 && index === 2}"
    @mouseover="changeHover(index)"
  >
    <div class="titleLogin">
      {{ title }}
    </div>
    <form class="formBox" @submit.prevent="onClick">
      <Input :item="login" />
      <Input :item="password" />
      <Input v-if="!isLogin" :item="userName" />
      <Input v-if="!isLogin" :item="slogan" />
      <button type="submit" class="button">
        {{ buttonText }}
      </button>
    </form>
  </div>
</template>

<script>
import Input from '../smallComponents/input'

export default {
  components: {
    Input
  },
  props: ['isHover', 'changeHover', 'buttonText', 'title', 'index', 'onSubmit', 'isLogin'],
  data: () => ({
    hover: false,
    userName: {
      name: 'ФИО',
      value: 'Масленников Андрей',
      focus: false
    },
    slogan: {
      name: 'Ваш слоган',
      value: 'Лучше всех',
      focus: false
    },
    login: {
      name: 'Ваш логин',
      value: '1@1',
      focus: false
    },
    password: {
      name: 'Ваш пароль',
      value: '1',
      focus: false
    }
  }),
  methods: {
    onClick () {
      const data = this.isLogin
        ? {login: this.login.value, password: this.password.value }
        : {login: this.login.value, password: this.password.value, userName: this.userName.value, slogan: this.slogan.value }
      this.onSubmit(data, this.isLogin)
    }
  }
}
</script>
