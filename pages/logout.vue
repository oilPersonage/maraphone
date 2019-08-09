<template />

<script>
export default {
  layout: 'default',
  name: 'Logout',
  beforeCreate () {
    this.$store.dispatch('auth/logout')
    this.$router.push('/login')
  }
}
</script>

<style scoped>

</style>
