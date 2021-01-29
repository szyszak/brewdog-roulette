<script lang="ts">
import { defineComponent } from "vue";
import RandomBeer from "../components/RandomBeer.vue";
import SuspenseWithError from "../components/SuspenseWithError.vue";
import Loader from "../components/Loader.vue";
import Error from "../components/Error.vue";

export default defineComponent({
  name: "Random",
  components: { RandomBeer, SuspenseWithError, Loader, Error },
});
</script>

<template>
  <SuspenseWithError>
    <template #default>
      <RandomBeer />
    </template>
    <template #fallback>
      <Loader text="Pouring, please wait..." />
    </template>
    <template #error>
      <Error />
    </template>
  </SuspenseWithError>
</template>

<style lang="scss" scoped>
</style>
