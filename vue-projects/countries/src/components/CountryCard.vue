<script>
export default {
  props: {
    country: Object
  }
}
</script>

<template>
  <li>
    <h2>{{ country.name.common }} - {{ country.population }}</h2>
    <img :src="country.flags.png" :alt="country.flags.alt" />
  </li>
</template>

<style></style>
