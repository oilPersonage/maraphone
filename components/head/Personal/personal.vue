<template>
  <div class="personalBox">
    <div class="personalImg">
      <div class="box">
        <img src="../../../static/img/2.jpg" alt="">
      </div>
      <div class="personalName">
        {{ user.userName }}
      </div>
      <div class="personalSlogan">
        {{ user.slogan }}
      </div>
      <div class="extra">
        <div class="currentVideos">
          <font-awesome-icon :icon="['fas', 'video']" />
          <p>{{ user.show }}</p>
        </div>
        <div class="currentLike">
          <font-awesome-icon :icon="['fas', 'heart']" />
          <p>{{ user.likes }}</p>
        </div>
      </div>
    </div>
    <nuxt-link :to="!getPersonal ? `/catalog` : `/user/${user._id}`" class="linkToAccount">
      <div class="goToAccount" :class="!getPersonal ? 'left' : 'right'" @click="setPersonal()">
        <div class="arrowAccount">
          <font-awesome-icon :icon="['fas', 'chevron-right']" />
        </div>
        <transition
          mode="out-in"
          name="component"
        >
          <p v-if="!getPersonal" key="1">
            Личный кабинет
          </p>
          <p v-else key="2">
            На главную
          </p>
        </transition>
      </div>
    </nuxt-link>
    <div class="linkToAccount">
      <nuxt-link to="/logout" class="goToAccount no">
        <p>Выход</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: { ...mapGetters({
    user: 'auth/getUser',
    getPersonal: 'getPersonal'
  }) },
  methods: { ...mapActions({
    logout: 'auth/logout',
    setPersonal: 'setPersonal'
    })
  },
}
</script>

<style lang="sass">
  @import "~assets/main.sass"

  .component-enter-active, .component-leave-active
    transition: 0.3s ease
    opacity: 0

  /*.component-enter, .component-leave-to*/
    /*opacity: 1*/

  @keyframes ArrowAnimation
    0%
      transform: translateX(0)
    33.3%
      transform: translateX(3px)
    66.6%
      transform: translateX(-3px)
    100%
      transform: translateX(0px)

  @keyframes ArrowAnimationLeft
    0%
      transform: rotate(180deg) translateX(0)
    33.3%
      transform: rotate(180deg) translateX(-3px)
    66.6%
      transform: rotate(180deg) translateX(3px)
    100%
      transform: rotate(180deg) translateX(0px)

  .personalBox
    position: fixed
  .personalName, .personalSlogan
    text-align: center
    margin-bottom: 10px
  .personalSlogan
    color: $accent
    font-weight: bold
  .linkToAccount
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15), 0px 8px 16px rgba(0, 0, 0, 0.1)
    background-color: $white
    display: block
    cursor: pointer
    margin-top: 30px
    border-radius: 3px
    overflow: hidden
  .goToAccount
    display: flex
    flex-direction: row-reverse
    font-size: 14px
    &:hover
      svg
        animation: ArrowAnimation 1s linear infinite
    p
      display: flex
      width: max-content
      transition: 0.3s ease
      text-align: center
    &.right
      .arrowAccount
        transform: translateX(-162px)
        svg
          transform: rotate(180deg)
      &:hover
        .arrowAccount
          svg
            animation: ArrowAnimationLeft 1s linear infinite !important
    &.left
      p
        padding: 0px 15px
      .arrowAccount
        transform: translateX(0px) rotate(0deg)
    &.no
      justify-content: center
  .arrowAccount
    display: flex
    align-items: center
    background-color: $accent
    padding: 0 15px
    transition: 0.3s ease-out
    svg
      transition: 0.3s ease-out
    svg path
      fill: $white
  .personalImg
    border-radius: 3px
    display: flex
    flex-direction: column
    min-width: 200px
    max-width: 200px
    background-color: $white
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15)
    .box
      width: calc(200px - 60px)
      margin: 30px
      overflow: hidden
      border-radius: 50%
      height: 140px
      img
        width: 100%
        height: 100%
        object-fit: cover
    .extra
      display: flex
      justify-content: space-between
      padding: 0 20px
      > div
        display: flex
        align-items: center
        p
          margin-left: 5px
  .currentLike, .currentVideos
    p
      font-size: 14px
    svg path
      fill: $accent
</style>
