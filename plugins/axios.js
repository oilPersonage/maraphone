
export default function ({ $axios, redirect, store }) {
  $axios.interceptors.request.use((request) => {
    if (store.getters['auth/getToken'] && !request.headers.common.Authorization) {
      const token = store.getters['auth/token']
      request.headers.common.Authorization = `Bearer ${token}`
    }
    return request
  })
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    switch (code) {
      case 400:
        redirect('/400')
        break
      case 401:
        redirect('/logout')
        store.dispatch('auth/logout')
    }
  })
}
