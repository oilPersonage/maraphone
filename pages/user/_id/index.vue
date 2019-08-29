<template>
  <div class="catalogBigContainer">
    <div class="title">
      Личный кабинет
    </div>
    <CatalogFilter :options="options" :filters="filters" />
    <Catalog :create="true" :list="list" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Catalog from '../../../components/catalogTemplate/catalogTemplate.vue'
import CatalogFilter from '../../../components/catalogTemplate/catalogFilter'

export default {
  components: {
    Catalog,
    CatalogFilter
  },
  data () {
    const options = ['Популярности', 'Просмотрам']
    const filters = ['Растяжка', 'Face fitness', 'Йога', 'Очистить']
    return { options, filters }
  },
  transition: {
    name: 'page'
  },
  computed: {
    ...mapGetters({ list: 'course/getCourseUser' })
  },
  async asyncData ({ store, params }) {
    await store.dispatch('course/getCourseByUser', params.id)
    store.commit('setPersonal', true)
  }
}
</script>

<style lang="sass">
  @import '~assets/main.sass'

  .userTabs
    display: flex
    background-color: $white
    width: max-content
    border-radius: 3px
    box-shadow: 0 1px 3px rgba(0,0,0,.1), 0 6px 12px rgba(0,0,0,0.05)
    .item
      padding: 15px 25px
      cursor: pointer
      transition: 0.15s ease-out
      &.active
        color: $accent
      &:hover
        color: $accent

</style>
