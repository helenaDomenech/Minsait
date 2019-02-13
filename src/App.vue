<template lang="pug">
  div(id="app")
    accordion(:items="items")
</template>

<script>
import axios from 'axios'

import Accordion from './components/accordion.vue'

export default {
  name: 'app',
  components: {
    Accordion
  },
  data () {
      return {
          items : []
      }
  },
  created () {
    axios
        .get('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6')
        .then(response => {
            this.items = response.data
        })
    }
}
</script>

<style lang="sass">

  @import './scss/main.scss'

  #app
    font-family: 'Roboto', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    background-color: $white-two

    display: flex
    justify-content: center

    padding: 4em 4.5em

</style>
