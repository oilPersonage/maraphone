export const state = () => ({
  courseList: [],
  courseUserList: [],
  selectedCourse: {}
})

export const mutations = {
  setCourse (s, data) { s.courseList = data },
  setCourseUser (s, data) { s.courseUserList = data },
  setCourseShow (s, el) { s.selectedCourse = el }
}

export const actions = {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('getCourse')
  },
  async getCourse ({ commit }) {
    const course = await this.$axios.$get('/api/course/getCourseAll')
    commit('setCourse', course)
  },
  async createCourse ({ commit }, data) {
    await this.$axios.$post('/api/course/create', data)
  },
  async getCourseByUser ({ commit }, id) {
    const course = await this.$axios.$get('/api/users/getUserCourse/' + id)
    commit('setCourseUser', course)
  },
  async getCurrentCourse ({ commit, state }, id) {
    const course = await this.$axios.$get(`/api/course/getCourse/${id}`)
    commit('setCourseShow', course)
  }
}

export const getters = {
  getCourse: s => s.courseList,
  getCourseUser: s => s.courseUserList,
  getShowCourse: s => s.selectedCourse
}
