<style lang="stylus" src="./app.styl"></style>

<template lang="jade">
div#app
  h1 {{msg}}
  comp-a
  comp-b
  counter
</template>

<script>
import CompA from './components/a.vue'
import CompB from './components/b.vue'
import Counter from './components/counter.vue'

export default {
  data() {
    return {
      msg: 'Hello Vueify'
    }
  },
  components: {
    CompA,
    CompB,
    Counter
  }
}
</script>
