<template>
    <div class="md:relative lg:relative">
        <div class="block">
            <div class="relative px-3 flex-col">
                <div class="absolute h-10 left-0 top-0 flex items-center pl-4">
                    <svg class="h-4 w-4 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path></svg>
                </div>
                <input v-bind:class="{
                    'block':true,
                    'w-full':true,
                    'bg-light_primary':true,
                    'text-gray-700':true,
                    'text-base':true,
                    'rounded-t-sm':searchSuggestion? true: false,
                    'rounded-sm': searchSuggestion? false: true,
                    'pl-10':true,
                    'pr-2':true,
                    'py-2':true,
                    'transition':true,
                    'duration-100':true,
                    'focus:outline-none':true,
                    'focus:bg-white':true,
                    'focus:shadow':true,
                    'active:outline-none':true,
                    'active:border-blue':true,
                    }" 
                    id="inline-full-name" 
                    type="text"
                    :placeholder="placeHolder"
                    v-model="searchTerm"
                    @input="suggest"
                    @keyup.enter="performSearch"
                    @keyup.esc="disableSuggestions"
                >
            </div>
        </div>
        <SearchSuggestion  :callback="selectKeyword" v-if="searchSuggestion"/>
    </div> 
</template>
<script>
import SearchSuggestion from '~/components/items/SearchSuggestion.vue'
import { mapState, } from 'vuex';

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
        showSuggestions: function(keywordList){
            this.$store.commit("search/resetState")
            this.$store.commit("search/setKeywordSuggestions", keywordList);
            this.$store.commit("setting/openSearchSuggestion");
        },
        disableSuggestions: function(){
            this.$store.commit("search/resetState")
            this.$store.commit("setting/closeSearchSuggestion");
        },
        searchText: function(){
            this.suggestKeywords = [];
            this.$api
                .location
                .searchKeywords(this.searchTerm.split(' ').join('+'))
                .then((value)=>{
                    let results = []
                    for(let index in value){
                        results.push(
                            {
                                name:value[index]["display_name"],
                                id: value[index]["place_id"]
                            }
                        );
                    }
                    this.showSuggestions([...new Set(results)]);
                })
                .catch(err => {console.log(err)});
        },
        suggest: function(event){
            if(this.searchTerm.length > 2 || 
                ( this.searchTerm.length > 2 && event["inputType"] === 'deleteContentBackward' )){
                this.searchText();
            }else{
                this.disableSuggestions();
            }
        },
        performSearch: function(){
            this.$api
                .location
                .searchAddress(this.searchTerm.split(' ').join('+'))
                .then((value)=> {
                    this.disableSuggestions();
                    this.$store.commit("leafletmap/updateCenter",
                        [value[0]["lat"],value[0]["lon"]]
                    );
                    this.$store.commit("leafletmap/updateFocusLevel", 12)
                    // this.$store.commit('map/updateLocation', value); 

                    // let searchData = {
                    //     searched_by: this.$store.state.user.profile.name,
                    //     user_email: this.$store.state.user.profile.email,
                    //     user_id: this.$store.state.user.profile.id,
                    //     searched_result: value,
                    //     created_date: this.getDate()
                    // }
                    // this.$api
                    //     .location
                    //     .storeSearchAddress(searchData)

                })
                .catch((err) => {console.log(err)});
            
        },
        selectKeyword: function(keyword){
            this.searchTerm = keyword;
            this.performSearch(keyword);
            this.disableSuggestions();
        }
    },
    computed:{
        ...mapState({
            searchSuggestion : state => state.setting.searchSuggestion,
        })
    }
}
</script>