<template lang="pug">
    li.list-item(@click="show = !show", :class="{ 'list-item--active':show }") {{ item.name }}
        .list-item__card(v-show="show")
            img.list-item__img(:src="item.image_url")
            p.list-item__text {{ item.description }}
</template>

<script>
export default {
    name: 'list-item',
    props : {
        item : Object,
    },
    data () {
        return {
            show: false
        }
    }
}
</script>

<style lang="sass">

@import '../scss/main.scss'


.list-item
    width: 100%
    cursor: pointer

    padding: 0.875em 0.875em 0.875em 0

    border-bottom: 1px solid $white

    &::before
        content: url(../assets/img/chevron-right.svg)
        padding-right: 0.875em

    &--active
        &::before
            content: url(../assets/img/chevron-down.svg)
            transition: content 1s ease


    &__card
        display: flex
        align-items: center
        padding: 0.75em 1.5em

    &__img
        max-height: 5.500em
        margin-right: 1.875em

    &__text
        font-family: 'Roboto', sans-serif
        font-size: 0.875em
        font-weight: 300

</style>



