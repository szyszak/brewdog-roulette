<script lang="ts">
import { defineComponent } from "vue";
import RandomBeer from "../components/RandomBeer.vue";

export default defineComponent({
  name: "Random",
  components: { RandomBeer },
});
</script>

<template>
  <Suspense>
    <template #default>
      <RandomBeer />
    </template>
    <template #fallback>
      <h1>Loading... Please wait.</h1>
    </template>
  </Suspense>
</template>

<style lang="scss" scoped>
</style>
