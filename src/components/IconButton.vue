<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconButton",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <button class="button">
    <img class="button__icon" src="../assets/beer.png" alt="" />
    <span class="button__text">{{ text }}</span>
  </button>
</template>

<style lang="scss" scoped>
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border: 2px solid #ffffff;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;

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
