<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stock.name }}</h3>
        <small>Price: {{ stock.price }}</small>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="qty" :class="{error: insufficientFunds}">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || qty <= 0">{{ insufficientFunds ? 'Insufficient fund' : 'Buy' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      stock: {
        type: Object
      }
    },
    data () {
      return {
        qty: 0
      }
    },
    methods: {
      buyStock () {
        const order = {
          id: this.stock.id,
          price: this.stock.price,
          qty: Number(this.qty)
        }
        this.$store.dispatch('buyStock', order)
        this.qty = 0
      }
    },
    computed: {
      funds () {
        return this.$store.getters.funds
      },
      insufficientFunds () {
        return this.qty * this.stock.price > this.funds
      }
    }
  }
</script>

<style scoped>
  .error {
    border: 1px solid red
  }
</style>
