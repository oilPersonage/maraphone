<template>
  <div class="catalogBigContainer showCourseBox">
    <div class="title">
      <div class="nameBox goToAccount">
        <div class="buttonBack" @click="$router.go(-1)">
          Назад
        </div>
        {{ course.name }}
      </div>
      <div class="buttonTitle">
        <div class="likes">
          <font-awesome-icon style="font-size: 18px" :icon="['fas', 'heart']" />
          {{ course.likes }}
        </div>
        <div class="show">
          <font-awesome-icon style="font-size: 18px" :icon="['fas', 'eye']" />
          {{ course.show }}
        </div>
      </div>
    </div>
    <div class="name">
      {{ course.createdUser.userName }}
    </div>
    <div class="date">
      {{ $moment(course.createdAt).format('LLL') }}
    </div>
    <div class="description">
      {{ course.description }}
    </div>
    <div class="bottomShowCourse">
      <div class="price">
        Стоимость курса -
      </div>
      <div class="buy">
        <a href="/#">Купить <span>{{ course.price || 0 }}</span>₽</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ShowCourse',
  layout: 'default',
  data () {
    console.log(this)
    return {
      title: 'Название курса',
    }
  },
  computed: mapGetters({
    course: 'course/getShowCourse'
  }),
  async asyncData ({ store, params }) {
    await store.dispatch('course/getCurrentCourse', params.id)
  }
}
</script>

<style lang="sass">
  @import '~assets/main.sass'
  .showCourseBox
    position: relative
    .title
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .buttonTitle
        margin-top: 10px
        display: flex
        > div
          margin: 0 15px
          display: flex
          align-items: center
          justify-content: center
          svg
            margin-right: 5px
        svg path
          fill: $accent
    .bottomShowCourse
      position: absolute
      bottom: 0px
      right: 150px
      color: $white
      display: flex
      align-items: center
      .price
        margin-right: 30px
      .buy
        cursor: pointer
        padding: 15px 25px
        border-radius: 5px
        background-color: $accent
        width: max-content
        color: inherit
        a
          color: inherit
          span
            margin-left: 10px
            font-size: 20px
            font-weight: bold
            color: inherit
            margin-right: 10px
  .nameBox
    display: flex
    align-items: center
    font-size:  30px
  .buttonBack
    position: absolute
    top: 0
    cursor: pointer
    left: 0
    height: 40px
    color: $white
    padding: 0 25px
    display: flex
    align-items: center
    justify-content: center
    border-radius: 3px
    background-color: $accent
</style>
