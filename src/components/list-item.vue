<template lang="pug">
    li.list-item(@click="show = !show") {{ item.name }}
        .list-item__card(v-show="show")
            img.list-item__img(:src="item.image_url")
            p.list-item__text {{ item.description }}
</template>

<script>
export default {
    name: 'list-item',
    props : {
        item : Object
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

    &__img
        max-height: 5.500em

    &__text
        font-family: 'Roboto', sans-serif
        font-weight: 300

</style>



