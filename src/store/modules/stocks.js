import stocks from '../../data/stocks'

const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS' (state) {
    state.stocks.forEach((stock) => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
    })
  }
}

const actions = {
  initStocks: ({commit}) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStock: ({commit}) => {
    commit('RND_STOCKS')
  },
  buyStock ({commit}, order) {
    commit('BUY_STOCK', order)
  }
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
