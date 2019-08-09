<template>
  <div class="catalogBigContainer showCourseBox">
    <div class="title">
      {{getCurrentCourse.name}}
      <div class="buttonTitle">
        <div class="likes">
          <font-awesome-icon style="font-size: 18px" :icon="['fas', 'heart']"/>
          {{getCurrentCourse.likes}}
        </div>
        <div class="show">
          <font-awesome-icon style="font-size: 18px" :icon="['fas', 'eye']"/>
          {{getCurrentCourse.show}}
        </div>
      </div>
    </div>
    <div class="name">{{getCurrentCourse.createdUser.userName}}</div>
    <div class="date">{{$moment(getCurrentCourse.createdAt).format('LLL')}}</div>
    <div class="description">{{getCurrentCourse.description}}</div>
    <div class="bottomShowCourse">
      <div class="price">Стоимость курса - </div>
      <div class="buy">
        <a href="/#">Купить <span>{{getCurrentCourse.price}}</span>₽</a>
      </div>
    </div>
    </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "showCourse",
    layout: 'default',
    data() {
      return {
        title: 'Название курса',
      }
    },
    methods: mapActions(['fetchCurrentCourse']),
    computed: mapGetters(['getCurrentCourse']),
    mounted() {
      console.log(this.getCurrentCourse)
      this.fetchCurrentCourse()
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

</style>
