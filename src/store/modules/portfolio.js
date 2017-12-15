const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  'SELL_STOCK' (state, order) {
    const record = state.stocks.find(elem => elem.id === order.id)
    if (record.qty > order.qty) {
      record.qty -= order.qty
    } else {
      state.stocks.splice(state.stocks.indexOf(record.id), 1)
    }
    state.funds += order.price * order.qty
  },
  'BUY_STOCK' (state, order) {
    const record = state.stocks.find(elem => elem.id == order.id)
    if (record !== undefined && record !== null) {
      record.qty += order.qty
    } else {
      state.stocks.push({
        id: order.id,
        qty: order.qty
      })
    }
    state.funds -= order.price * order.qty
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
    state.funds = portfolio.funds
  }
}

const actions = {
  sellStock ({commit}, order) {
    commit('SELL_STOCK', order)
  }
}

const getters = {
  stockPortfolio (state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id == stock.id);
      return {
        id: stock.id,
        qty: stock.qty,
        name: record.name,
        price: record.price
      }
    })
  },
  funds (state) {
    return state.funds
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
