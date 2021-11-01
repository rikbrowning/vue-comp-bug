<template>
  <div v-bind="attrs">Child</div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    attrs() {
      return {
        "data-type": this.type,
      };
    },
  },
};
</script>
