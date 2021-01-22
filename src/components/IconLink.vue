<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconLink",
  props: {
    text: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      default: "/",
    },
  },
});
</script>

<template>
  <router-link :to="location" class="link">
    <img class="link__icon" src="../assets/beer.png" alt="" />
    <span class="link__text">{{ text }}</span>
  </router-link>
</template>

<style lang="scss" scoped>
.link {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border: 2px solid #ffffff;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.7);

  &__icon {
    display: inline-block;
    width: 30px;
    height: 100%;
    margin-right: 16px;
  }

  &__text {
    font-size: 18px;
    color: #ffffff;
  }
}
</style>
