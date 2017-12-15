<template>
  <div class="container">
    <h3>Trade or View Portfolio</h3>
    <h6>You may save and load data</h6>
    <h6>Click on 'End day' để bắt đầu</h6>
    <hr>
    <p>Funds: {{ funds | currency }}</p>
  </div>
</template>

<script>
  // import {mapGetters} from 'vuex'
  export default {
    computed: {
      funds () {
        return this.$store.getters.funds
      }
    }
  }
</script>

<style>

</style>
