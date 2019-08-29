<template>
  <div class="catalogItem">
    <div class="catalogImgBox">
      <div v-if="create && item.img === ''" class="customFileBox">
        <input id="customImg" type="file" name="image2" accept=".gif, .jpg, .png" @change="changeImg">
        <label for="customImg">
          <span>Загрузить изображение</span>
          <font-awesome-icon size="2x" style="color: white}" :icon="['fas', 'download']" />
        </label>
      </div>
      <img v-else :src="item.img">
      <div v-if="create && item.img !== ''" class="deleteImg" @click="clearImg">
        <font-awesome-icon icon="trash" style="font-size: 20px;" color="white" />
      </div>
      <div v-if="!create" class="showCourse">
        <nuxt-link :to="`/showCourse/${item._id}`">Посмотреть</nuxt-link>
      </div>
    </div>
    <h2 class="title">
      {{ create ? item.name.value : item.name }}
    </h2>
    <div class="createdOn">
      <p>{{ item.createdUser.userName }}</p>
      <p>{{ this.$moment(item.createdAt).format('LLL') }}</p>
    </div>
    <!--<p class="description">{{create ? item.description.value : item.description}}</p>-->
    <div class="dopBox">
      <div class="amountShow">
        <font-awesome-icon :icon="['fas', 'eye']" />
        {{ item.show || 0 }}
      </div>
      <div class="like">
        <font-awesome-icon :icon="['fas', 'heart']" />
        {{ item.like || 0 }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['item', 'index', 'create', 'changeImg', 'clearImg'],
  methods: {
    ...mapActions({ setCurrentCourse: 'course/setCurrentCourse' }),
    enter (el) {
      el.style.transition = `all 0.3s ease-out 0.${this.index}s`
      el.style.opacity = 1
    },
    leave (el) {
      el.style.transition = `all 0.3s ease-out 0.${this.index}s`
      el.style.opacity = 0
    }
  },
  mounted () {
    console.log(this.item)
  }
}
</script>

<style lang="sass">
  @import "~assets/main.sass"

  .catalogItem, .shadowItem
    font-size: 0
    display: block
    min-width: 260px
    max-width: 260px
    margin: 30px 5px
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
    border: 1px solid rgba(0, 0, 0, .08)
    border-radius: 5px
    padding-top: 0px
    overflow: hidden
    .title, .description
      padding: 0 25px
      margin: 0
    .title
      font-weight: 600
      margin-top: 10px
      font-size: 20px
      transition: 0.3s ease-out
      font-family: "Roboto"
    .description
      font-family: "Roboto"
      margin-top: 15px
      margin-bottom: 45px
      font-size: 16px
      font-weight: 100
    img
      width: 100%
      transition: 3s ease-out
    &:hover
      img
        transform: scale(1.04)
  @keyframes AnimationText
    0%
      transform: translateX(-100%)
    100%
      transform: translateX(0)
      opacity: 1
  .showCourse
    position: absolute
    transition: 0.2s ease-out
    top: 0
    left: 0
    height: 100%
    padding-top: 30px
    width: 100%
    opacity: 0
    background-color: rgba(0,0,0,.6)
    display: flex
    align-items: flex-start
    justify-content: center
    a
      padding: 15px 25px
      background-color: $accent
      border-radius: 3px
      color: $white
  .catalogImgBox
    cursor: pointer
    position: relative
    height: 200px
    overflow: hidden
    img
      width: 100%
      object-fit: cover
      height: 100%
    &:hover
      .showCourse
        padding-top: 60px
        opacity: 1
      .deleteImg
        right: 0px
    .text
      font-size: 16px
      transition: 0.15s ease-out
      display: flex
      align-items: center
      flex-direction: column
      justify-content: center
      position: absolute
      top: 0px
      left: 0
      width: 100%
      height: 100%
      background-color: rgba(0, 0, 0, .9)
      opacity: 0
      p
        color: $white
      a
        opacity: 0
        color: $white
        padding: 5px 10px
        background-color: $accent
        border-radius: 3px
        margin-top: 15px
  .dopBox
    display: flex
    font-size: 16px
    padding: 0 25px
    margin-bottom: 15px
    justify-content: space-between
    .like
      color: $accent
      svg path
        fill: $accent
  .shadowItem
    transform: none
    opacity: 1
    flex-direction: column
    height: 300px
    font-size: 14px
    display: flex
    align-items: center
    justify-content: center
    p
      margin-bottom: 15px
    > div
      background-color: $accent
      padding: 10px 25px
      border-radius: 3px
      color: $white
  .deleteImg
    position: absolute
    max-width: 40px
    padding: 0 12px
    background-color: $accent
    height: 40px
    display: flex
    align-items: center
    top: 0
    cursor: pointer
    border-radius: 3px
    right: -50px
    transition: 0.1s ease-out
    svg path
      fill: $white
  .createdOn
    padding: 15px 25px 0 25px
    margin-bottom: 15px
    p
      font-size: 12px
      margin: 5px 0 0
      color: $accent
      &:last-child
        color: $text
        font-size: 10px
</style>
