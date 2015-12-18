<style scoped>
h2 {
  color: #f66;
}
</style>

<template>
  <div class="component">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello from Component A!'
    }
  }
}
</script>
