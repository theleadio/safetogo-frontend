<template>
    <div class="md:relative lg:relative">
        <div class="block">
            <div class="relative px-3 flex-col">
                <div class="absolute h-10 left-0 top-0 flex items-center pl-4">
                    <svg class="h-4 w-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
                </div>
                <input class="
                    block 
                    w-full 
                    bg-light_primary 
                    text-gray-700
                    text-base
                    rounded-t-sm
                    pl-10 
                    pr-2 
                    py-2
                    transition
                    duration-100
                    focus:outline-none 
                    focus:bg-white 
                    focus:shadow
                    active:outline-none
                    active:border-blue" 
                    id="inline-full-name" 
                    type="text"
                    :placeholder="placeHolder"
                    v-model="searchTerm"
                    v-on:input="suggest"
                    v-on:keyup.enter="search"
                >
            </div>
        </div>
        <SearchSuggestion :keywords="keywordSuggestions" :callback="selectKeyword" v-if="searchSuggestion"/>
    </div> 
</template>
<script>
import SearchSuggestion from '~/components/items/SearchSuggestion.vue'
import { mapState } from 'vuex';

export default {
    components:{
        SearchSuggestion
    },
    data: function(){
        return {
            searchTerm:""
        }
    },
    props:{
        placeHolder: String
    },
    methods:{
        search: function (){
            console.log(this.searchTerm);
        },
        suggest: function(event) {
            console.log(this.searchTerm)
        },
        selectKeyword: function(keyword){
            console.log(keyword)
        }
    },
    computed:{
        ...mapState({
            keywordSuggestions : state => state.search.keywordSuggestions,
            searchSuggestion : state => state.setting.searchSuggestion
        })
    }
}
</script>