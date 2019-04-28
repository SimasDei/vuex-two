<template>
  <div>
    <h1>Products List</h1>
    <ul>
      <li v-for="product in products">{{product.title}} - {{product.price}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: []
    };
  }
};
</script>

<style>
</style>
