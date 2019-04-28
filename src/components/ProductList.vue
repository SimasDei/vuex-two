<template>
  <div>
    <h1>Products List</h1>
    <ul>
      <li v-for="product in products" :key="product.id">{{product.title}} - {{product.price}}</li>
    </ul>
  </div>
</template>

<script>
import shop from "../api/shop.js";
export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    shop.getProducts(products => {
      this.products = products;
    });
  }
};
</script>

<style>
</style>
