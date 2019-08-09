export const state = () => ({
  personal: false
})

export const actions = {
  nuxtServerInit ({ commit, dispatch }, { req }) {
    if (req.headers.cookie) {
      dispatch('auth/autoLogin')
    }
  },
  setPersonal ({ commit }, data) {
    commit('setPersonal', data)
  }
}
export const mutations = {
  setPersonal (state, data) {
    state.personal = data || !state.personal
  }
}
export const getters = {
  getPersonal: s => s.personal
}
