export default function ({ store, redirect, route }) {
  const { auth } = store.state
  const token = store.getters['auth/getToken']
  console.log({ token })
  if (!auth.publicPages.includes(route.name) && !token) {
    return redirect('/login')
  }
  if (token && route.path === '/login') { return redirect('/catalog') }
  return route
}
