<template>
    <div v-bind:class="{
        'wrapper-bg': searchWrapperBg,
        'transparent-bg': !searchWrapperBg,
        'h-screen': searchWrapperBg,
        'w-full': true,
        'flex-col':true
    }"
    >
        <SearchMenu class="z-600"/>
        <Suggestions class="block z-500"/>
        <FilterCard class="block z-600" v-if="countryFilterCard"/>
    </div>
</template>
<script>
import SearchMenu from '~/components/items/search/Input.vue'
import Suggestions from '~/components/items/search/Suggestions.vue'
import FilterCard from '~/components/items/cards/FilterCard.vue'
import { mapState } from 'vuex'

export default {
    components:{
        SearchMenu,
        Suggestions,
        FilterCard
    },
    computed:{
        ...mapState({
            searchWrapperBg : state => state.setting.searchWrapperBg,
            countryFilterCard : state => state.setting.countryFilterCard
        })
    }
}
</script>
<style>
.wrapper-bg{
    background-color: #fff;
    transition: all 0.3s ease-out;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .1), 0 1px 5px 2px rgba(0, 25, 25, 0.2);
}
.transparent-bg{
    transition: all 0.3s ease-out;
}
</style>