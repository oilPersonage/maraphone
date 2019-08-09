<template>
  <div class="commentsBox">
    <div class="commentTitle">Комментарии</div>
    <div class="commentScrollBox">
      <Item  v-for="item in comments" :item="item" :key="item.name" />
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import Item from './item'

  export default {
    components: {
      Item
    },
    data: () => {
      return {
        comments: [
           {
              name: 'Сидоров Антон',
              videoName: 'Название видео какое-то',
              commentary: 'Какой-то комментарий по поводу видео, нравится он или нет мне пофигу',
              value: '',
              placeholder: "Напишите текст",
              focus: false,
              time: moment("05.02.2019 12:00").format('LLL'),
              id: '1231'
            },
          {
            name: 'Я такая крутая',
            videoName: 'Название видео какое-то',
            commentary: 'Какой-то комментарий по поводу видео, нравится он или нет мне пофигу,' +
            'Какой-то комментарий по поводу видео, нравится он или нет мне пофигу',
            value: '',
            placeholder: "Напишите текст",
            focus: false,
            time: moment("01.02.2019 12:00").format('LLL'),
              id: '12311231'
          }
        ]
      }
    }
  }
</script>

<style lang="sass">
  @import "~assets/main.sass"
  .commentTitle
    padding: 10px 15px
    text-align: center
    background-color: $accent
    margin-bottom: 30px
    border-radius: 3px
    color: $white
  .commentsBox
    position: fixed
    right: 15px
    min-width: 350px
    max-width: 350px
  .commentScrollBox
    padding: 0 5px
    max-height: 800px
    overflow: auto
</style>
