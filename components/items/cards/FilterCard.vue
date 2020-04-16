<template>
    <div v-bind:class="{
        'block':true,
        'w-full':true,
        'pl-2':true,
        'pr-3':true,
        'filter-card':searchSuggestion,
        'flow-up':!searchSuggestion
        }">
        <div class="bg-white shadow-card rounded-lg px-2 py-2">
            <div class="flex justify-between px-2 py-2 items-center">
                <div class="text-sm font-medium">Filter by:</div>
                <i class="fas fa-times cursor-pointer text-sm" @click="
                hideFilterCard();
                hideSearchWrapperBg();
                openSearchSuggestion();"></i>
            </div>
            <div class="w-full">
                <button v-bind:class="{
                    'w-full':true,
                    'border-t':true,
                    'border-l':true,
                    'border-r':true,
                    'text-gray-700':true,
                    'font-medium':true,
                    'py-2':true,
                    'px-4':true,
                    'rounded-t-lg':true,
                    'rounded-b-lg':!showCountryList,
                    'border-b': !showCountryList,
                    'inline-flex':true,
                    'items-center':true,
                    'focus:outline-none':true,
                    'text-xs':true
                    }"
                    @click="showCountryList = !showCountryList"
                    >
                    <span>{{countrySelected}}</span>
                </button>
                <div class="absolute w-full pr-10">
                    <ul class="block rounded-b-lg border-b border-r border-l w-full h-32 overflow-y-scroll bg-white-400"  v-if="showCountryList">
                        <li v-for="country in countryList" :key="country" >
                            <a class="py-2 px-4 cursor-pointer text-xs block hover:bg-gray-200 hover:no-underline" 
                            href="#"
                            @click="
                                updateMapWithoutDistrict(country);
                                updateCountry(country); 
                                showCountryList = !showCountryList"
                            >{{country}}</a>
                        </li>
                    </ul>
                </div>
                <button v-bind:class="{
                    'w-full':true,
                    'border-t':true,
                    'border-l':true,
                    'border-r':true,
                    'text-gray-700':true,
                    'font-medium':true,
                    'py-2':true,
                    'px-4':true,
                    'rounded-t-lg':true,
                    'rounded-b-lg':!showDistrictList,
                    'border-b': !showDistrictList,
                    'inline-flex':true,
                    'items-center':true,
                    'focus:outline-none':true,
                    'mt-1':true,
                    'text-xs':true
                    }"
                    @click="showDistrictList = !showDistrictList"
                    v-if="districtsList[this.countrySelected].length > 0"
                    >
                    <span>{{districtSelected}}</span>
                </button>
                <div class="absolute w-full pr-10 ">
                    <ul class="block rounded-b-lg border-b w-full h-32 overflow-y-scroll bg-white-400"  v-if="showDistrictList">
                        <li v-for="district in districtsList[this.countrySelected]" :key="district" >
                            <a class="border-r border-l py-2 px-4 cursor-pointer text-xs  block hover:bg-gray-200 hover:no-underline" 
                            href="#"
                            @click="updateMap(district)"
                            >{{district}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { COUNTRIES, DISTRICTS, DISTRICT_COORD } from '../../../utils/country.js'
import { mapState, mapMutations } from 'vuex'

export default {
    data: function(){
        return{
            showCountryList: false,
            showDistrictList: false
        }
    },
    computed:{
        countryList: function(){ return COUNTRIES },
        districtsList: function(){return DISTRICTS},
        ...mapState({
            countrySelected: state => state.countryfilter.countrySelected,
            districtSelected: state => state.countryfilter.districtSelected,
            focusLevel : state => state.leafletmap.focusLevel,
            searchSuggestion : state => state.setting.searchSuggestion
        })
    },
    methods:{
        updateMap: function(district){
            this.showDistrictList = !this.showDistrictList;
            this.updateDistrict(district); 
            let country = this.countrySelected;
            let selection = DISTRICT_COORD[country.replace(/ /g, "_")][district.replace(/ /g, "_")];
            this.updateCenter([
                selection["lat"], selection["lng"]
            ]);
            this.hideSearchWrapperBg();
            setTimeout(()=>{this.updateFocusLevel(selection["zoom"])},200)
            this.closeSearchSuggestion();
        },
        getCasesByCountry: async function(country){
            await this.$api
                    .location
                    .getCases(country)
                    .then(value =>{
                        this.loadCaseMarkers(value);
                    })
                    .catch(err => console.error(err));
        },
        getSummaryByCountry: async function(country){
            await this.$api.location.getSummaryV2(country)
                        .then(value=>{
                            this.loadSummaryMarkers(value);
                        });
        },
        updateMapWithoutDistrict: function(country){
            if (country !== this.countrySelected){
                this.resetMarkers();
                let selection = DISTRICT_COORD[country.replace(/ /g, "_")][country.replace(/ /g, "_")];

                this.updateCenter([
                    selection["lat"], selection["lng"]
                ]);
                this.hideSearchWrapperBg();
                setTimeout(()=>{this.updateFocusLevel(selection["zoom"])},200)
                this.closeSearchSuggestion();
                this.getCasesByCountry(country);
                this.getSummaryByCountry(country);
                this.districtsList[country].length === 0? this.updateDistrict(country):this.updateDistrict(this.districtsList[country][0]);
            }
        },
        ...mapMutations({
            updateCenter: "leafletmap/updateCenter",
            updateFocusLevel: "leafletmap/updateFocusLevel",
            loadCaseMarkers: "leafletmap/loadCaseMarkers",
            loadSummaryMarkers: "leafletmap/loadSummaryMarkers",
            resetMarkers: "leafletmap/resetMarkers",

            hideSearchWrapperBg : "setting/hideSearchWrapperBg",
            hideFilterCard: "setting/hideFilterCard",
            hideSearchWrapperBg : "setting/hideSearchWrapperBg",
            closeSearchSuggestion: "setting/closeSearchSuggestion",
            openSearchSuggestion: "setting/openSearchSuggestion",

            updateCountry: "countryfilter/updateCountry",
            updateDistrict: "countryfilter/updateDistrict"
            
        })
    }
}
</script>
<style>
.filter-card{
    margin-top: 4rem;
    transition: all 0.3s ease-out;
}
.flow-up{
    margin-top:.5rem;
    transition: all 0.3s ease-out;
}
</style>