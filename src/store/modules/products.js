import shop from "@/api/shop"

export default {
  namespaced: true,

  state: {
    // products: [],
    items: []
  },

  getters: {
    availableProducts(state, getters) {
      // return state.products.filter(product => product.inventory > 0)
      return state.items.filter(product => product.inventory > 0)
    },

    productIsInStock() {
      return (product) => {
        return product.inventory > 0
      }
    }
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
      state.items = products;
    },

    decrementProductInventory(state, product) {
      product.inventory--;
    }
  },

  actions: {
    fetchProducts({commit}) {
      // console.log('hi from products')
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products),
          resolve()
        })
      })
    },
  }
};
