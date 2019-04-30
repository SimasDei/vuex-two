<template>
  <div class="hello">
    <div class="left">
      {{ title }}
    </div>
    <ul>
      <li v-for="link in links" :key="link">{{ link }}</li>
    </ul>
    <div class="right">
      <stats />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import Stats from "@/components/Stats.vue";
export default {
  name: "HelloWorld",
  components: {
    Stats
  },
  computed: {
    ...mapState(["title", "links"])
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
