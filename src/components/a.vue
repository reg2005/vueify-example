<style>
.red {
  color: #f66;
}
</style>

<template>
  <h2 class="red">{{msg}}</h2>
</template>

<script>
module.exports = {
  data: function () {
    return {
      msg: 'Hello from Component A!'
    }
  }
}
</script>
