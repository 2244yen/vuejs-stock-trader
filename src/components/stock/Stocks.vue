<template>
  <div>
    <div class="row">
      <v-stock v-for="stock in stocks" :stock="stock"></v-stock>
    </div>
  </div>
</template>

<script>
  import Stock from './Stock.vue'
  export default {
    components: {
      'v-stock': Stock
    },
    computed: {
      stocks () {
        return this.$store.getters.stocks
      }
    }
  }
</script>

<style>

</style>
