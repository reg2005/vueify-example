<style scoped>
div {
  color: #333;
}
.count {
  color: red;
}
</style>

<template>
  <div class="counter">
    <p>I am a Counter Component. Edit me in dev mode.</p>
    <p class="count">Current count: {{count}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return { count: 0 }
  },

  ready () {
    this.handle = setInterval(() => {
      this.count++
    }, 1000)
  },

  destroyed () {
    clearInterval(this.handle)
  }
}
</script>
