<script lang="ts">
import { defineComponent } from "vue";
import IconLink from "./IconLink.vue";
import { fetchRandomBeer } from "../requests/fetchRandomBeer";

export default defineComponent({
  name: "RandomBeer",
  components: { IconLink },
  async setup() {
    const {
      name,
      imageUrl,
      tagline,
      description,
      abv,
      ibu,
      malts,
      hops,
      foodPairing,
      tipText,
      tipAuthor,
    } = await fetchRandomBeer();

    console.log({
      name,
      imageUrl,
      tagline,
      description,
      abv,
      ibu,
      malts,
      hops,
      foodPairing,
      tipText,
      tipAuthor,
    });

    return {
      name,
      imageUrl,
      tagline,
      description,
      abv,
      ibu,
      malts,
      hops,
      foodPairing,
      tipText,
      tipAuthor,
    };
  },
});
</script>

<template>
  <h1 class="main-header">{{ name }}</h1>

  <img class="beer-image" v-if="imageUrl !== null" :src="imageUrl" alt="" />
  <p v-else>MISSING IMAGE</p>

  <p class="tagline">"{{ tagline }}"</p>

  <h2 class="description-header">Description:</h2>

  <p class="description">{{ description }}</p>

  <div class="wrapper">
    <p class="abbreviation">
      <abbr class="abbreviation__title" title="Alcohol by volume.">ABV: </abbr>
      <span class="abbreviation__text"> {{ abv }}%</span>
    </p>

    <p class="abbreviation">
      <abbr class="abbreviation__title" title="International bittering unit.">IBU: </abbr>
      <span class="abbreviation__text">{{ ibu }}</span>
    </p>
  </div>

  <h3 class="label"><img class="label__icon" src="../assets/malt.png" alt="" />Malts:</h3>

  <p class="list">
    {{ malts.join(", ") }}
  </p>

  <h3 class="label"><img class="label__icon" src="../assets/hop.png" alt="" />Hops:</h3>

  <p class="list">
    {{ hops.join(", ") }}
  </p>

  <h3 class="label"><img class="label__icon" src="../assets/pizza.png" alt="" />Food pairing:</h3>

  <ol class="food-list">
    <li class="food-list__item" v-for="item of foodPairing" :key="item">{{ item }}</li>
  </ol>

  <div class="brewers-tip">
    <h3 class="brewers-tip__header">Brewers tip:</h3>

    <p class="brewers-tip__text">{{ tipText }}</p>

    <p class="brewers-tip__author">{{ tipAuthor }}</p>
  </div>

  <IconLink text="ROLL AGAIN" location="/random" />
</template>

<style lang="scss" scoped>
.main-header {
}

.beer-image {
  width: 140px;
  height: auto;
}

.tagline {
  font-size: 32px;
  font-style: italic;
}

.description-header {
}

.description {
}

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: #{"min(320px, 100%)"};
}

.abbreviation {
  &__title {
  }

  &__text {
    margin-left: 10px;
  }
}

.label {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  font-size: 22px;

  &__icon {
    display: inline-block;
    width: 40px;
    height: auto;
    margin-right: 12px;
  }
}

.list {
  margin-top: 10px;
  margin-bottom: 50px;
}

.food-list {
  margin-bottom: 50px;
  padding: 0;
  list-style-position: inside;

  &__item {
    margin-bottom: 6px;
    font-size: 18px;
    text-transform: capitalize;
  }
}

.brewers-tip {
  margin-bottom: 60px;
  padding: 20px 30px;
  border: solid 2px #ffffff;
  background-color: rgba(0, 0, 0, 0.7);

  &__header {
    font-size: 22px;
  }

  &__text {
  }

  &__author {
    font-style: italic;
  }
}
</style>
