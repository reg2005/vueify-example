<style lang="stylus" src="./app.styl"></style>

<template lang="jade">
h1 {{msg}}
comp-a
comp-b
</template>

<script lang="coffee">
module.exports =
  data: ->
    msg: 'hello'
  components:
    compA: require './components/a.vue'
    compB: require './components/b.vue'
</script>
