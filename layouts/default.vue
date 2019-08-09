<template>
  <div class="containerBox">
    <Personal />
    <nuxt />
    <Comments />
  </div>
</template>

<script>
import Personal from '../components/head/Personal/personal'
import Comments from '../components/head/comments/comments'

export default {
  components: {
    Personal,
    Comments
  },
}
</script>

<style>
  .bgCatalog {
    background-color: #fafafa;
    max-height: calc(100vh - 110px);
    overflow: scroll;
  }
</style>
