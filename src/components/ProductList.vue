<template>
  <div>
    <h1>Product List</h1>
    <img
      v-if="loading"
      src="https://i.imgur.com/JfPpwOA.gif">
    <ul v-else>
      <!-- <li v-for="product in products" v-bind:key="product">{{product.title}} - {{product.price}}</li> -->
      <!-- <li v-for="product in products">{{product.title}} - {{product.price}}</li> -->
      <li v-for="(product, idx) in products" v-bind:key="idx">{{product.title}} - {{product.price}}</li>
    </ul>
  </div>
</template>

<script>
import shop from "@/api/shop"
import store from '@/store/index'
export default {
  data () {
    return {
      loading: false
    }
  },

  computed: {
    products() {
      // return store.state.products
      return store.getters.availableProducts
    }
  },

  created () {
    // shop.getProducts(products => {
    //   // this.products = products
    //   // store.state.products = products;
    //   store.commit('setProducts', products);
    // })
    this.loading = true;
    store.dispatch('fetchProducts')
      .then(() => this.loading = false);
  }
}
</script>

<style scoped>

</style>
