<script lang="ts">
import { defineComponent, ref } from "vue";
import IconButton from "./IconButton.vue";
import { fetchRandomBeer } from "../requests/fetchRandomBeer";

export default defineComponent({
  name: "RandomBeer",
  components: { IconButton },
  async setup() {
    const data = ref(await fetchRandomBeer());

    const refetch = async () => {
      data.value = await ref(fetchRandomBeer()).value;
      window.scrollTo({ top: 0 });
    };

    return {
      data,
      refetch,
    };
  },
});
</script>

<template>
  <h1 class="main-header">{{ data.name }}</h1>

  <img class="beer-image" v-if="data.imageUrl" :src="data.imageUrl" alt="" />
  <div class="missing" v-else>
    <img class="missing__image" src="../assets/missing.jpg" alt="" />
    <p class="missing__text">IMAGE NOT AVAILABLE</p>
  </div>

  <p class="tagline">"{{ data.tagline }}"</p>

  <h2 class="description-header">Description:</h2>

  <p class="description">{{ data.description }}</p>

  <div class="wrapper">
    <p class="abbreviation">
      <abbr class="abbreviation__title" title="Alcohol by volume.">ABV</abbr>
      <span class="abbreviation__text">: {{ data.abv }}%</span>
    </p>

    <p class="abbreviation">
      <abbr class="abbreviation__title" title="International bittering unit.">IBU</abbr>
      <span class="abbreviation__text">: {{ data.ibu }}</span>
    </p>
  </div>

  <h3 class="label"><img class="label__icon" src="../assets/malt.png" alt="" />Malts:</h3>

  <p class="list">
    {{ data.malts.join(", ") }}
  </p>

  <h3 class="label"><img class="label__icon" src="../assets/hop.png" alt="" />Hops:</h3>

  <p class="list">
    {{ data.hops.join(", ") }}
  </p>

  <h3 class="label"><img class="label__icon" src="../assets/pizza.png" alt="" />Food pairing:</h3>

  <ol class="food-list">
    <li class="food-list__item" v-for="item of data.foodPairing" :key="item">{{ item }}</li>
  </ol>

  <div class="brewers-tip">
    <h3 class="brewers-tip__header">Brewers tip:</h3>

    <p class="brewers-tip__text">"{{ data.tipText }}"</p>

    <p class="brewers-tip__author">- {{ data.tipAuthor }}</p>
  </div>

  <IconButton text="ROLL AGAIN" @click="refetch" />
</template>

<style lang="scss" scoped>
.main-header {
  margin-bottom: 40px;
  font-size: 44px;
}

.beer-image {
  display: block;
  width: 140px;
  height: auto;
}

.missing {
  &__image {
    display: block;
    width: #{"min(320px, 100%)"};
    height: auto;
    margin: auto;
  }

  /* &__text {
  } */
}

.tagline {
  font-size: 32px;
  font-style: italic;
}

/* .description-header {
} */

/* .description {
} */

.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: #{"min(320px, 100%)"};
}

/* .abbreviation {
  &__title {
  }

  &__text {
  }
} */

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
    font-style: italic;
  }

  /* &__author {
  } */
}
</style>
