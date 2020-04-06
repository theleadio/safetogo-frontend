<template>
    <div id="suggestion" class="absolute pl-2 pr-3 w-full md:pr-10 lg:pr-10 xl:pr-8">
        <ul class="bg-white px-2 shadow-card rounded-b-lg pt-2 pb-3" v-if="keywordSuggestions.length > 0">
            <!-- <li v-for="keyword in keywordSuggestions" :key="keyword.id">
                <div class="flex justify-start items-center">
                    <img class="h-5 w-5 mr-2" src="~/assets/svg/pin.svg" /> 
                    <div class="w-full sans-serif border-b py-1">
                        <div class="pl-2 text-sm font-medium">Kuala Lumpur</div>
                        <div class="pl-2 text-xs text-gray-600">Wilayah Persekutuan Kuala Lumpur</div>
                    </div>
                </div>
            </li> -->
            <li>
                <div class="flex justify-start items-center">
                    <img class="h-5 w-5 mr-2" src="~/assets/svg/pin.svg" /> 
                    <div class="w-full sans-serif border-b py-1">
                        <div class="pl-2 text-sm font-medium">Kuala Lumpur</div>
                        <div class="pl-2 text-xs text-gray-600">Wilayah Persekutuan Kuala Lumpur</div>
                    </div>
                </div>
            </li>
            <li>
                <div class="flex justify-start items-center">
                    <img class="h-5 w-5 mr-2" src="~/assets/svg/pin.svg" /> 
                    <div class="w-full sans-serif border-b py-1">
                        <div class="pl-2 text-sm font-medium">Kuala Lumpur</div>
                        <div class="pl-2 text-xs text-gray-600">Wilayah Persekutuan Kuala Lumpur</div>
                    </div>
                </div>
            </li>
        </ul>
        <div v-else class="bg-white px-2 shadow-card rounded-b-lg pt-2 pb-3">
            <div class="flex justify-start items-center cursor-pointer">
                <img class="h-3 w-3 mr-2 ml-2" src="~/assets/svg/down-arrow.svg" /> 
                <div class="w-full sans-serif border-b py-1">
                    <p class="pl-2 text-sm font-medium" @click="showFilterCard();showSearchWrapperBg();">Check by State</p>
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
            keywordSuggestions : state => state.search.keywordSuggestions
        })
    },
    methods:{
        ...mapMutations({
            showFilterCard : "setting/showFilterCard",
            showSearchWrapperBg : "setting/showSearchWrapperBg"
        })
    }
}
</script>
<style>
#suggestion {
    margin-top: -5px;
}
</style>