<template>
  <div id="app">
    <Parent :type="parentType">
      <Child type="child" @click.native="childClick" />
    </Parent>
  </div>
</template>

<script>
import Parent from "./components/Parent.vue";
import Child from "./components/Child.vue";

export default {
  name: "App",
  data() {
    return { parentType: "parent" };
  },
  methods: {
    childClick() {
      this.parentType = "parent-clicked";
    },
  },
  components: {
    Parent,
    Child,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
