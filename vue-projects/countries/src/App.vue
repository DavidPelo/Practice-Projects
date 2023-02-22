<script>
import CountryCard from './components/CountryCard.vue'

export default {
  components: {
    CountryCard,
  },

  data: () => ({
    countries: [],
    dataFetched: false
  }),

  created() {
    // fetch on init
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const url = 'https://restcountries.com/v3.1/all'
      const countries = await (await fetch(url)).json()
      console.log(countries)
      this.countries = countries
      this.dataFetched = true;
      console.log('data has been fetched')
    },
  },
  computed: {
    topCountries() {
      return this.countries
        .sort((a, b) => b.population - a.population)
        .slice(0, 10)
    },
  },
}
</script>

<template>
  <h1>Countries</h1>
  <section v-if="dataFetched">
    <ul>
      <CountryCard
        v-for="country in topCountries" :country="country"
      ></CountryCard>
    </ul>
  </section>
</template>

<style></style>
