import Vuex, { Store } from 'vuex';
import Vue from 'vue'
import shop from '@/api/shop';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    // {id, quantity}
    cart: []
  },

  getters: {
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },

  actions: {
    fetchProducts({commit}) {
      return new Promise((resolve, reject) => {
        shop.getProducts(products => {
          commit('setProducts', products),
          resolve()
        })
      })
    },

    addProductToCart(context, product) {
      if (product.inventory > 0) {
        const cartItem = context.state.cart.find(item => item.id === product.id)
        if (!cartItem) {
          context.commit('pushProductToCart', product.id)
        } else {
          context.commit('incrementItemQuantity', cartItem)
        }
        context.commit('decrementProductInventory', product)
      }
    }
  },

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },

    // const cartItem = {id: 123, quantity: 2}
    pushProductToCart(state, productId /* cartItem */) {
      state.cart.push({
        id: productId,
        quantity: 1
      })
      // state.cart.push(cartItem)
    },

    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++
    },

    decrementProductInventory(state, product) {
      product.inventory--
    }

  }
})
