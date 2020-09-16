import shop from "@/api/shop";
export default {
  state: {
    // {id, quantity}
    // cart: [],
    items: [],
    checkoutStatus: null
  },

  getters: {
    cartProducts(state, getters, rootState) {
      return state.items.map(cartItem => {
        // const product = state.products.find(product => product.id === cartItem.id)
        const product = rootState.products.items.find(product => product.id === cartItem.id)
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
  },

  mutations: {
    // const cartItem = {id: 123, quantity: 2}
    pushProductToCart(state, productId /* cartItem */) {
      state.items.push({
        id: productId,
        quantity: 1
      })
      // state.items.push(cartItem)
    },

    incrementItemQuantity(state, cartItem) {
      cartItem.quantity++
    },

    setCheckoutStatus(state, status) {
      state.checkoutStatus = status
    },

    emptyCart(state) {
      state.items = []
    }
  },

  actions: {
    addProductToCart({state, getters, commit, rootState}, product) {
      // if (product.inventory > 0) {
      if (getters.productIsInStock(product)) {
        const cartItem = state.items.find(item => item.id === product.id)
        if (!cartItem) {
          commit('pushProductToCart', product.id)
        } else {
          commit('incrementItemQuantity', cartItem)
        }
        commit('decrementProductInventory', product)
      }
    },

    checkout({state, commit}) {
      shop.buyProducts(
        state.items,
        () => {
          commit('emptyCart')
          commit('setCheckoutStatus', 'success')
        },
        () => {
          commit('setCheckoutStatus', 'fail')
        }
      )
    }
  }
}
