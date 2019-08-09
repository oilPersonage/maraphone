<template>
  <div class="catalogBox">
    <div class="catalogContainer">
      <nuxt-link v-if="create" to="/user/1/create" class="shadowItem">
        <p>Нажмите для создания курса</p>
      </nuxt-link>
      <Item v-for="(el, index) in list" :key="el.name" :index="index" :item="el" />
    </div>
  </div>
</template>

<script>
import img from '../../static/img/1.jpg'
import Item from './item.vue'

export default {
  components: {
    Item
  },
  props: ['list', 'create']
}
</script>

<style lang="sass" scoped>
  .catalogBox
    display: flex
    justify-content: center
    width: 100%
  .catalogBox.fdColumn
    flex-direction: column
    justify-content: flex-start
    align-items: center
  .catalogContainer
    flex: 1
    margin: 0 -30px
    align-items: flex-start
    flex-wrap: wrap
    display: flex

</style>
