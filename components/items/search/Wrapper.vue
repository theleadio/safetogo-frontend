<template>
    <div v-bind:class="{
        'wrapper-bg': searchWrapperBg,
        'transparent-bg': !searchWrapperBg,
        'h-screen': searchWrapperBg,
        'w-full': true,
        'flex-col':true
    }"
    >
        <SearchMenu class="z-700"/>
        <Suggestions class="block z-600"/>
        <FilterCard class="block z-500" v-if="countryFilterCard"/>
        <SummaryCard class="block z-500" v-if="keywordSuggestions.length === 0 && summaryMarkers.length > 0"/>
    </div>
</template>
<script>
import SearchMenu from '~/components/items/search/Input.vue';
import Suggestions from '~/components/items/search/Suggestions.vue';
import FilterCard from '~/components/items/cards/FilterCard.vue';
import SummaryCard from '~/components/items/cards/SummaryStateCard.vue';
import { mapState } from 'vuex'

export default {
    components:{
        SearchMenu,
        Suggestions,
        FilterCard,
        SummaryCard
    },
    computed:{
        ...mapState({
            searchWrapperBg : state => state.setting.searchWrapperBg,
            countryFilterCard : state => state.setting.countryFilterCard,
            keywordSuggestions : state => state.search.keywordSuggestions,
            summaryMarkers : state => state.leafletmap.summaryMarkers
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