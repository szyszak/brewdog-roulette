<script lang="ts">
import { defineComponent, ref, onErrorCaptured } from "vue";

export default defineComponent({
  name: "SuspenseWithError",
  setup() {
    const error = ref();

    onErrorCaptured((err) => {
      error.value = err;

      return true;
    });

    return { error };
  },
});
</script>

<template>
  <slot v-if="error" name="error"></slot>
  <Suspense v-else>
    <template #default>
      <slot name="default"></slot>
    </template>
    <template #fallback>
      <slot name="fallback"></slot>
    </template>
  </Suspense>
</template>

<style lang="scss" scoped>
</style>
