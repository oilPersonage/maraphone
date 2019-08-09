<template xmlns:>
  <div class="navigation">
    <div class="navBox">
      <ul class="nav">
        <li v-for="(n, index) in nav" :key="index">
          <n-link :to="n.link">{{n.name}}</n-link>
        </li>
      </ul>
      <Avatar />
    </div>
  </div>
</template>

<script>
  import Avatar from './avatar'
  export default {
    components: {
      Avatar
    },
    data: function () {
      return {
        nav: [
          {name: "Каталог курсов", link: '/catalog'},
          {name: "Мои курсы", link: '/myCatalog'},
          {name: "Корзина", link: '/buy'},
          {name: "Мастерская", link: '/mastery'},
        ]
      }
    }
  }
</script>

<style lang="sass">
  @import '~assets/main.sass'

  .navigation
    position: relative
    z-index: 5
    background: $white
    box-shadow: 0 3px 8px rgba(0,0,0,.1)
  .navBox, .nav
    display: flex
    text-align: center
    justify-content: space-between

  .navBox
    padding: 20px 50px
  .nav
    list-style: none
    flex: 1
    justify-content: center
    li
      a
        padding: 10px 35px
        display: block
        font-family: 'Comfortaa'
        /*font-weight: bold*/
        transition: 0.15s ease-out
        &.nuxt-link-active
          color: $accent
        &:hover
          color: $accent
</style>
