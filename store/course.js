export const state = () => ({
  courseList: [],
  courseUserList: []
})

export const mutations = {
  setCourse (state, data) { state.courseList = data },
  setCourseUser (state, data) { state.courseUserList = data }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('getCourse')
  },
  async getCourse ({ commit }) {
    const course = await this.$axios.$get('/api/course/getCourseAll')
    commit('setCourse', course)
  },
  async getCourseByUser ({ commit }, id) {
    const course = await this.$axios.$get('/api/course/getCourseByUser/' + id)
    commit('setCourseUser', course)
  }
}

export const getters = {
  getCourse: s => s.courseList,
  getCourseUser: s => s.courseUserList
}
