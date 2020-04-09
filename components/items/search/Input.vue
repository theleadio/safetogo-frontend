<template>
    <div class="pt-2 w-full relative text-gray-600 pl-2 pr-3 mb-2">
        <div class="absolute left-0 top-0 mt-3 ml-4">
            <img class="w-4 h-4 object-cover mt-1" src="~/assets/svg/hamburger.svg"/>
        </div>
        <input class="
            w-full
            bg-white 
            h-10 
            pl-5
            pr-5 
            rounded-lg
            text-sm 
            shadow-card
            focus:outline-none"
          type="search" 
          name="search" 
          placeholder="Search"
          v-model="searchTerm"
          @input="suggest"
          @keyup.enter="performSearch"
          @keyup.esc="resetKeywordState()"
          >
        <div class="absolute right-0 top-0 mt-3 mr-4 cursor-pointer" @click="performSearch">
          <svg class="text-gray-600 h-4 w-4 fill-current mt-1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name:"search-input",
  computed:{
    searchTerm:{
      set: function(val){
        this.setKeyword(val)
      },
      get: function(val){
        return this.$store.state.search.keyword
      }
    }
  },
  methods:{
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
                                name:value[index]["name"],
                                id: value[index]["id"],
                                lat: value[index]["lat"],
                                lng: value[index]["lng"],
                                address: value[index]["formatted_address"]
                            }
                        );
                    }
                    this.setKeywordSuggestions([...new Set(results)]);
                })
                .catch(err => {console.log(err)});
        },
    suggest: function(event){

      if(this.searchTerm.length > 2 || 
          ( this.searchTerm.length > 2 && event["inputType"] === 'deleteContentBackward' )){
          this.searchText();
      }
      else if (this.searchTerm.length === 0){
        this.resetSuggestions();
      }
    },
    performSearch: function(){
        this.$api
            .location
            .searchAddress(this.searchTerm.split(' ').join('+'))
            .then((value)=> {
                this.resetSuggestions();
                this.updateCenter([value["lat"], value["lng"]]);
                this.updateFocusLevel(14);
            })
            .catch((err) => {console.log(err)});
        
    },
    ...mapMutations({
      setKeywordSuggestions : "search/setKeywordSuggestions",
      resetSuggestions: "search/resetSuggestions",
      setKeyword: "search/setKeyword",
      updateCenter : "leafletmap/updateCenter",
      updateFocusLevel : "leafletmap/updateFocusLevel"
    })
  }
}
</script>