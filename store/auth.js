import cookies from 'js-cookie'
import cookie from 'cookie'
import jwtDecode from 'jwt-decode'

export const state = () => ({
  token: null,
  publicPages: ['login'],
  user: {}
})

export const actions = {
  async login ({ commit }, data) {
    try {
      const { token, user } = await this.$axios.$post('/api/auth/login', data)
      console.log({user})
      commit('setToken', token)
      commit('setUser', user)
      cookies.set('user', user)
      cookies.set('token', token)
      this.$axios.setToken(token, 'Bearer')
    } catch (e) {
      this.$toast.error(e.response.data.message)
    }
  },
  async create (ctx, data) {
    try {
      await this.$axios.$post('/api/auth/create', data)
      this.$toast.success('Пользователь создан. Вы можете войти на сайт')
    } catch (e) {

    }
  },
  autoLogin ({ commit }) {
    const cookieStr = process.browser
      ? document.cookie
      : this.app.context.req.headers.cookie
    const cook = cookie.parse(cookieStr || '') || {}
    const { token, user } = cook
    if (isJwtValid(token)) {
      commit('setToken', token)
      commit('setUser', JSON.parse(user))
    } else {
      commit('logout')
    }
  },
  logout ({ commit }) {
    this.$axios.setToken(false)
    commit('logout')
  }
}

export const mutations = {
  setToken (state, token) {
    state.token = token
  },
  setUser (state, user) {
    state.user = user
    this.$router.push('/catalog')
  },
  logout (state) {
    cookies.remove('user')
    cookies.remove('token')
    state.token = null
    state.user = {}
    this.$router.push('/login')
  }
}

export const getters = {
  getUser: s => s.user,
  getToken: s => !!s.token,
  token: s => s.token
}

function isJwtValid (token) {
  if (!token) { return false }

  const jwtData = jwtDecode(token) || {}
  const { exp } = jwtData || 0
  return (new Date().getTime() / 1000) < exp
}
