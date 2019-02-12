<template lang="pug">
  div(id="app")
    Accordion(msg="Welcome to Your Vue.js App")
</template>

<script>
import Accordion from './components/accordion.vue'

export default {
  name: 'app',
  components: {
    Accordion
  }
}
</script>

<style lang="sass">

  @import './scss/main.scss'

  #app
    font-family: 'Roboto', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    background-color: $white-two
    padding: 4em 4.5em

</style>
