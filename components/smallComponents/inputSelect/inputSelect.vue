<template>
  <div class="selectBox">
    <transition name="slide-fade">
      <div class="selectOptions" v-if="show">
        <div class="options" v-for="op in options" @click="onChange(op)" :key="op">
          {{op}}
        </div>
      </div>
    </transition>
    <div class="selectInput" :class="{active: show}"  @click="show = !show">
      {{value}}
      <!--<font-awesome-icon style="font-size: 10px" v-if="show" :icon="['fas', 'chevron-up']"/>-->
      <!--<font-awesome-icon style="font-size: 10px" v-else :icon="['fas', 'chevron-down']"/>-->
    </div>

  </div>
</template>

<script>
  export default {
    props: ['options', 'value', 'change'],
    data: () => {
      return {
        show: false
      }
    },
    methods: {
      onChange(op) {
        this.show = !this.show
        this.change(op)
      }
    }
  }
</script>

<style lang="sass">
  @import "~assets/main.sass"

  .slide-fade-enter-active
    transition: all .15s ease-out

  .slide-fade-leave-active
    transition: all .15s cubic-bezier(1.0, 0.5, 0.8, 1.0)

  .slide-fade-enter, .slide-fade-leave-to
    transform: translateY(-10px)
    opacity: 0


  .selectAnimation-class
    opacity: 0
    transform: translateY(-100px)
  .selectAnimation-active-class
    opacity: 1
    transition: 0.15s ease-out
    transform: translateY(0)

  .selectBox
    position: relative
  .selectOptions
    position: absolute
    bottom: 40px
    left: 0px
    z-index: 2
    background-color: #fff
    border-radius: 3px
    overflow: hidden
    width: max-content
    box-shadow: 0 1px 3px rgba(0,0,0,.1), 0 5px 10px rgba(0,0,0,0.05)
    .options
      cursor: pointer
      width: 100%
      padding: 10px 15px
      transition: 0.15s ease-out
      &:hover
        color: $accent
  .selectInput
    cursor: pointer
    display: flex
    justify-content: space-between
    box-shadow: 0 1px 3px rgba(0,0,0,.1)
    padding: 10px 25px
    background-color: $white
    border-radius: 3px
    transition: 0.15s ease-out
    &.active
      color: $accent
      svg path
        fill: $accent
    svg
      position: relative
      top: 3px
      margin-left: 10px
    &:hover
      color: $accent
      svg path
        transition: 0.15s ease-out
        fill: $accent
</style>
