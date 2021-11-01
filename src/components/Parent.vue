<template>
  <div v-bind="attrs">
    Parent
    <slot />
  </div>
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
