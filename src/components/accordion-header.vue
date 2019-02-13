<template lang="pug">
    header.accordion__header
        h1.accordion__title {{ title }}
</template>
<script>
    export default {
        name: 'accordion-header',
        props : {
            title : String
        }
    }
</script>
<style lang="sass">
@import '../scss/main.scss'

.accordion
    &__title
        color: $dark-blue-grey
        font-family: 'Roboto', sans-serif
        font-weight: 300
        font-size: 4em

        margin: 0 0 .5em
        text-align: left
</style>
