<template lang="pug">
  div(id="app")
    Accordion
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
    background-color: $white-two

    display: flex
    justify-content: center

    padding: 4em 4.5em

</style>
