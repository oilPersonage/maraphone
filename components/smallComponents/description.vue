<template>
  <div class="labelGroup">
              <textarea
                v-model="item.value"
                @focus="item.focus = true"
                @blur="item.focus = false"
                @value="item.value"
                type="text"
                v-bind:id="item.name"
                autocomplete="off">
              </textarea>
    <label :class="{active: item.value !== '' }" v-bind:for="item.name">{{item.name}}</label>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    name: "description"
  }
</script>

<style scoped>

</style>
