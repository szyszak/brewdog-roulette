<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error",
});
</script>

<template>
  <img class="error-image" src="../assets/missing.jpg" alt="" />
  <h1>Something went wrong, try again later.</h1>
</template>

<style lang="scss" scoped>
.loader-image {
  display: block;
  width: 160px;
  height: auto;
}
</style>
