import Vuex, { Store } from 'vuex';
import Vue from 'vue'
// import shop from '@/api/shop';
import actions  from "./action";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    // {id, quantity}
    cart: [],
    checkoutStatus: null
  },

  getters: {
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0)
    },

    cartProducts(state) {
      return state.cart.map(cartItem => {
        const product = state.products.find(product => product.id === cartItem.id)
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    },

    cartTotal(state, getters) {
      // let total = 0
      // getters.cartProducts.forEach(product => {
      //   total += product.price * product.quantity
      // });
      // return total;
      return getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0)
    },

    productIsInStock() {
      return (product) => {
        return product.inventory > 0
      }
    }
  },

  // actions: actions /* {
  //   fetchProducts({commit}) {
  //     return new Promise((resolve, reject) => {
  //       shop.getProducts(products => {
  //         commit('setProducts', products),
  //         resolve()
  //       })
  //     })
  //   },

  //   addProductToCart({state, getters, commit}, product) {
  //     // if (product.inventory > 0) {
  //     if (getters.productIsInStock(product)) {
  //       const cartItem = state.cart.find(item => item.id === product.id)
  //       if (!cartItem) {
  //         commit('pushProductToCart', product.id)
  //       } else {
  //         commit('incrementItemQuantity', cartItem)
  //       }
  //       commit('decrementProductInventory', product)
  //     }
  //   },

  //   checkout({state, commit}) {
  //     shop.buyProducts(
  //       state.cart,
  //       () => {
  //         commit('emptyCart')
  //         commit('setCheckoutStatus', 'success')
  //       },
  //       () => {
  //         commit('setCheckoutStatus', 'fail')
  //       }
  //     )
  //   }
  // }*/,
  actions,

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
    },

    setCheckoutStatus(state, status) {
      state.checkoutStatus = status
    },

    emptyCart(state) {
      state.cart = []
    }

  }
})
