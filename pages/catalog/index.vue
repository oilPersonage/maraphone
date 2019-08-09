<template>
  <div class="catalogBigContainer">
    <h1 class="title">
      Список курсов
    </h1>
    <CatalogFilter :options="options" :filters="filters" />
    <Catalog :list="courseList" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Catalog from '../../components/catalogTemplate/catalogTemplate.vue'
import CatalogFilter from '../../components/catalogTemplate/catalogFilter.vue'

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
  computed: { ...mapGetters({ courseList: 'course/getCourse' }) },
  async fetch ({ store: { commit }, $axios }) {
    const course = await $axios.$get('/api/course/getCourseAll')
    commit('course/setCourse', course)
  }
}
</script>

