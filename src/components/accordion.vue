<template lang="pug">
    main.accordion
        accordion-header(:title="title")
        section.accordion__content
            ol.accordion__list(role="list")
                list-item(v-for="(a, index) in items" :key="`list-item-${index}`", :item="a")

</template>
<script>

import listItem from './list-item'
import AccordionHeader from './accordion-header'

    export default {
        name: 'accordion',
        components : {
            listItem,
            AccordionHeader
        },
        props : {
            items : Array
        },
        data () {
            return {
                title : 'Beers'
            }
        }
    }
</script>
<style lang="sass">

@import '../scss/main.scss'

.accordion
    display: flex
    flex-direction: column
    justify-content: flex-star

    height: 100vh
    max-width: 35.500em

    padding: 2.813em

    background-color: $white-three

    &__content
        max-height: 100vh
        overflow: auto

    &__list
        display: flex
        flex-wrap: wrap

        margin: 0
        padding: 0
        list-style: none
        text-align: left
        font-weight: 700

        color: $metallic-blue



</style>
