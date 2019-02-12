<template lang="pug">
    .accordion
        h1.accordion__title {{ title }}
        main.accordion__content
            ul.accordion__list
                list-item(v-for="(a, index) in items" :key="`list-item-${index}`", :item="a")
                //- li.accordion__list-item {{ item.name }}
                //-     .accordion__card(v-show="show")
                //-         img.accordion__list-img(:src="item.image_url")
                //-         p.accordion__list-text {{ item.description }}

</template>
<script>
import axios from 'axios'
import listItem from './list-item'

    export default {
        name: 'accordion',
        components : {
            listItem
        },
        data () {
            return {
                title: 'Title',
                items : []
            }
        },
        created () {
            axios
            .get('https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6')
            .then(response => {
                this.items = response.data
                console.log(response.data);
            })
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

    &__title
        color: $dark-blue-grey
        font-family: 'Roboto', sans-serif
        font-weight: 300
        font-size: 4em

        margin: 0 0 2.813em
        text-align: left

    &__content
        margin: 0 3.063em

    &__list
        display: flex

        margin: 0
        padding: 0
        list-style: none
        text-align: left
        font-weight: 700

        color: $metallic-blue

        &::before
            content: url(../assets/img/chevron-right.svg)
            margin-right: 0.875em

</style>
