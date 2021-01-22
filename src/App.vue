<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;1,400;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

body {
  padding: 40px 30px;
  background-image: url("./assets/wood_bg.jpg");
  background-position: center center;
  color: #ffffff;
  font-family: "PT Sans", sans-serif;
  text-align: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Bebas Neue", serif;
  letter-spacing: 2px;
}

p {
  font-size: 20px;
}
</style>
