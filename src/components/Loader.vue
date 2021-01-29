<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loader",
  props: {
    text: {
      type: String,
      default: "Loading...",
    },
  },
});
</script>

<template>
  <img class="loader-image" src="../assets/beer.png" alt="" />
  <h1>{{ text }}</h1>
</template>

<style lang="scss" scoped>
.loader-image {
  display: block;
  width: 160px;
  height: auto;
  transform-origin: bottom;
  animation: wobble;
  animation-duration: 0.7s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes wobble {
  from {
    transform: rotateZ(-20deg);
  }

  to {
    transform: rotateZ(20deg);
  }
}

@media (prefers-reduced-motion) {
  .loader-image {
    animation-name: none;
  }
}
</style>
