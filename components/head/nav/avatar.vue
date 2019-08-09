<template>
  <div class="logoPersonal">
    <div class="personalBox left">
      <div class="fio" :class="{active: activeMenu}">Андрей Вячеславович</div>
    </div>
    <div class="imgPersonal" @click="activeMenu = !activeMenu"></div>
    <div class="personalBox right">
      <div class="logout" :class="{active: activeMenu }"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "avatar",
    data: () => {
      return {
        activeMenu: false
      }
    },
  }
</script>

<style lang="sass">
  @import '~assets/main.sass'
  .logoPersonal
    filter: url("~static/img/filter.svg#shadowed-goo")
    position: absolute
    top: 50%
    right: 50px
    transform: translateY(-50%)
    padding: 5px
    display: flex
    font-size: 14px
    align-items: center
  .svgFilter
    height: 0
    width: 0
  .imgPersonal
    width: 30px
    cursor: pointer
    position: relative
    z-index: 2
    height: 30px
    background-image: url(~static/img/man.svg)
    border-radius: 50%
    border: 10px solid $accent
    box-sizing: content-box
  .personalBox
    display: flex
    &.left
      transform: translateX(10px)
    &.right
      transform: translateX(-10px)
  .fio, .logout
    max-width: 0
    overflow: hidden
    width: max-content
    white-space: nowrap
    transition: 0.3s ease-out
    color: $white
    border-radius: 20px
    &.active
      max-width: 400px
      padding: 10px 20px
      background-color: $accent
  .logout
    width: 0
    height: 25px
    border-radius: 50%
    background-color: $accent
    padding: 0
    position: absolute
    top: 50%
    transform: translateY(-50%)
    &.active
      right: -25px
      padding: 5px 12px
</style>
