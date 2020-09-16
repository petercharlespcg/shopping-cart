<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in products">
        {{product.title}} - {{product.price | currency}} - {{product.quantity}}
      </li>
    </ul>
    <p>Total: {{total | currency}}</p>
    <!-- <button @click="$store.dispatch('checkout')"> -->
    <button @click="checkout">
      Checkout
    </button>
    <!-- <p v-if="$store.state.checkoutStatus">{{$store.state.checkoutStatus}}</p> -->
    <p v-if="checkoutStatus">{{checkoutStatus}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    // ...mapGetters({
    ...mapGetters('cart', {
      products: 'cartProducts',
      // products: 'cart/cartProducts',
      total: 'cartTotal'
      // total: 'cart/cartTotal'
    }),

    // ...mapGetters('products', {
    //   productIsInStock: 'productIsInStock'
    // }),

    ...mapState('cart', {
      checkoutStatus: 'checkoutStatus'
      // checkoutStatus: state => state.cart.checkoutStatus
    }),

    // products() {
    //   return this.$store.getters.cartProducts
    // },
    // total() {
    //   return this.$store.getters.cartTotal
    // }
  },

  methods: {
    // ...mapActions(['checkout'])
    ...mapActions('cart', ['checkout'])
  }
}
</script>
