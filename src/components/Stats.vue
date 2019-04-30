<template>
  <div class="stats">
    <h1>Stats Component</h1>
    <p>There are currently {{ countLinks }} links</p>
    <button @click="removeAllLinks">Remove all Links</button>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Stats",
  data() {
    return {
      msg: ""
    };
  },
  computed: {
    ...mapGetters(["countLinks"])
  },
  methods: {
    ...mapMutations(["REMOVE_ALL"]),
    ...mapActions(["removeAll"]),
    removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = "Links have been removed o/";
      });
    }
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
button {
  padding: 10px;
  margin-top: 30px;
  width: 100%;
  background: none;
  border: 1px solid #ccc;
  outline: 0;
  cursor: pointer;
}
</style>
