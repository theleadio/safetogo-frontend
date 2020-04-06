<template>
    <div v-bind:class="{
        'bg-white': searchWrapperBg,
        'h-screen': true,
        'w-full': true
    }"
    >
        <SearchMenu class="z-600"/>
        <Suggestions class="block z-500"/>
        <FilterCard class="block z-500" v-if="countryFilterCard"/>
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