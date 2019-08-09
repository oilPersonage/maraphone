<template>
  <div class="comment">
    <nuxt-link to="#" class="imgBox">
      <img src="../../../static/img/man.svg" alt="">
      <p to="#" class="name">{{item.name}}</p>
    </nuxt-link>
    <div class="commentBody">
      <p class="commentBodyName">
        {{item.videoName}}
        <span class="time">{{item.time}}</span>
      </p>
      <p class="commentary">
        {{item.commentary}}
      </p>
      <div class="labelGroup commentLabel">
              <textarea
                v-model="item.value"
                @focus="item.focus = true"
                @blur="item.focus = false"
                @value="item.value"
                type="text"
                v-bind:id="item.placeholder + item.id"
                autocomplete="off">
              </textarea>
        <label :class="{active: item.value !== '' }" v-bind:for="item.placeholder + item.id">{{item.placeholder}}</label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="sass">
  @import "~assets/main.sass"
  .imgBox
    border-radius: 3px
    padding: 10px 0
    position: relative
    display: flex
    width: max-content
    &:hover
      .name
        color: $accent
    img
      width: 30px
    .name
      margin: 0 15px
      display: flex
      align-items: center
      transition: 0.15s ease-out
  .commentBody
    background-color: $white
    padding: 10px 30px 0
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15)
    border-radius: 3px
  .commentBodyName
    font-weight: 600
    color: $accent
    .time
      font-size: 10px
      color: #000
      display: block
      margin-top: 5px
      font-weight: 100
  .commentary
    font-size: 14px
    margin-bottom: 25px
  .comment
    display: flex
    flex-direction: column
    margin-bottom: 30px
</style>
