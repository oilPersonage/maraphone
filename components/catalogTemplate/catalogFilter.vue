<template>
  <div class="filterBox">
    <div class="item">
      <div class="title">
        Сортировать:
      </div>
      <SelectInput :value="options[0]" :options="options" />
    </div>
    <div class="item">
      <div class="title">
        Фильтр:
      </div>
      <SelectInput :value="filters[0]" :change="filtersOn" :options="filters" />
    </div>
  </div>
</template>

<script>
  import SelectInput from '../smallComponents/inputSelect/inputSelect'
  export default {
    props: ['options', 'filters'],
    components: {
      SelectInput
    },
    methods: {
      filtersOn(name) {
        this.$store.commit('course/clearList')
        if(name === 'Очистить') {
          this.$store.dispatch('course/find')
        } else {
          this.$store.dispatch('course/find', {query: {type: name, $limit: 10}})
        }
      }
    }
  }
</script>

<style lang="sass">
  @import '~assets/main.sass'

  .filterBox
    display: flex
    justify-content: space-between
    .item
      align-items: center
      border-radius: 3px
      display: flex
      .title
        margin-right: 10px
</style>
