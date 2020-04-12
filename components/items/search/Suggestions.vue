<template>
    <div class="block">
        <div id="suggestion" class="absolute pl-2 pr-3 w-full md:pr-10 lg:pr-10 xl:pr-8" v-if="searchSuggestion || keywordSuggestions.length > 0">
            <ul class="bg-white px-2 shadow-card rounded-b-lg pt-2 pb-3" v-if="keywordSuggestions.length > 0">
                <li v-for="keyword in keywordSuggestions" :key="keyword.id" class="cursor-pointer hover:bg-gray-200" @click="selectSuggestion(keyword)">
                    <div class="flex justify-start items-center">
                        <img class="h-5 w-5 mr-2" src="~/assets/svg/pin.svg" /> 
                        <div class="w-full sans-serif border-b py-1">
                            <div class="pl-2 text-sm font-medium">{{keyword.name}}</div>
                            <div class="pl-2 text-xs text-gray-600">{{keyword.address}}</div>
                        </div>
                    </div>
                </li>
            </ul>
            <div v-else class="bg-white px-2 shadow-card rounded-b-lg pt-2 pb-3">
                <div class="flex justify-start items-center cursor-pointer">
                    <img class="h-3 w-3 mr-2 ml-2" src="~/assets/svg/down-arrow.svg" /> 
                    <div class="w-full sans-serif border-b py-1">
                        <p class="pl-2 text-xs font-medium" @click="showFilterCard();showSearchWrapperBg();">Check Summary by District</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
    computed:{
        ...mapState({
            keywordSuggestions : state => state.search.keywordSuggestions,
            searchSuggestion : state => state.setting.searchSuggestion
        })
    },
    methods:{
        selectSuggestion: function(keyword){
            console.log(keyword);
            this.setKeyword(keyword.name);
            this.updateCenter([keyword["lat"], keyword["lng"]]);
            this.updateFocusLevel(14);
            this.resetSuggestions();
            this.setCoordinate([keyword["lat"], keyword["lng"]]);
            this.setCountryState(value["country"], value["state"]);
        },
        ...mapMutations({
            showFilterCard : "setting/showFilterCard",
            showSearchWrapperBg : "setting/showSearchWrapperBg",
            setKeyword : "search/setKeyword",
            resetSuggestions: "search/resetSuggestions",
            updateCenter : "leafletmap/updateCenter",
            updateFocusLevel : "leafletmap/updateFocusLevel",
            setCoordinate: "newmarker/setCoordinate",
            setCountryState : "newmarker/setCountryState"
        })
    }
}
</script>
<style>
#suggestion {
    margin-top: -10px;
}
</style>