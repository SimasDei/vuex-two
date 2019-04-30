<template>
  <div class="stats">
    <h1>Stats Component</h1>
    <p>There are currently {{ countLinks }} links</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Stats",
  computed: {
    ...mapGetters(["countLinks"])
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
