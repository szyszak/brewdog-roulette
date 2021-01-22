<script lang="ts">
import { defineComponent } from "vue";
import IconLink from "../components/IconLink.vue";

export default defineComponent({
  name: "Index",
  components: { IconLink },
});
</script>

<template>
  <h1 class="header">Brewdog Roulette</h1>
  <p class="paragraph">
    This app allows you to find a random beer from the Brewdog brewery catalogue and see information
    about it.
  </p>
  <p class="paragraph paragraph--last">To begin click the button below.</p>

  <IconLink :location="'/random'" :text="'ROLL'" />
</template>

<style lang="scss" scoped>
.header {
  margin-bottom: 40px;
  font-size: 44px;
}

.paragraph {
  &--last {
    margin-bottom: 60px;
  }
}
</style>
