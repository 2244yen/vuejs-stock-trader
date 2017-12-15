export default {
  filters: {
    convertCurrency (value) {
      return '$' + value.toLocaleString()
    }
  }
}