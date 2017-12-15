<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>Price: {{ stock.price }} | Qty: {{ stock.qty }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="qty" :class="{error: insufficientFunds}">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="sellStock" :disabled="insufficientFunds || qty <= 0">{{ insufficientFunds ? 'Not enough' : 'Sell' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    props: {
      stock: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        qty: 0
      }
    },
    methods: {
      ...mapActions({
        placeSellStock: 'sellStock'
      }),
      sellStock () {
        const order = {
          id: this.stock.id,
          price: this.stock.price,
          qty: Number(this.qty)
        }
        this.placeSellStock(order)
        this.qty = 0
      }
    },
    computed: {
      insufficientFunds () {
        return this.qty  > this.stock.qty
      }
    }
  }
</script>

<style scoped>
  .error {
    border: 1px solid red
  }
</style>