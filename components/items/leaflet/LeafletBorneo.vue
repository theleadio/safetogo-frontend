<template>
    <div>
        <l-layer-group
            v-for="marker in borneoMarkers"
            :key="marker.city"
        >
            <div v-if="marker.district === districtSelected">
                <l-marker
                    :lat-lng="[marker.lat, marker.lng]"
                >
                    <leaflet-popup
                        :coordinate="[marker.lat, marker.lng]"
                        :options="{ 
                            autoClose: focusLevel < 8 ? true:false
                        }"
                        :marker="marker"
                    >
                        <template v-slot:popup-content>
                            <div class="text-base font-medium text-gray-800">[ {{marker.level}} ]{{marker.city}}'s COVID-19 Summary</div>
                            <div class="block grid grid-rows-1 pb-6">
                                <div class="p-1 text-xs text-gray-700">Active Cases : <span class="text-sm font-medium">{{marker.active}}</span></div>
                                <div class="p-1 text-xs text-gray-700">Total Confirmed : <span class="text-sm font-medium">{{marker.confirmed}}</span></div>
                                <div class="p-1 text-xs text-gray-700">Total Recovered : <span class="text-sm font-medium">{{marker.recovered?marker.recovered:0}}</span></div>
                                <div class="p-1 text-xs text-gray-700">Total Death : <span class="text-sm font-medium">{{marker.death?marker.death:0}}</span></div>
                                <div class="p-1 text-xs"><a :href="marker.source" class="hover:no-underline">source</a></div>
                            </div>
                        </template>
                    </leaflet-popup>
                    <l-icon
                        :icon-url="marker.icon"
                        :icon-size="[32, 37]"
                    ></l-icon>
                </l-marker>
            </div>
        </l-layer-group>
    </div>
</template>
<script>
import LeafletPopup from '~/components/items/leaflet/LeafletPopup2.vue'
import { mapState, mapMutations } from 'vuex';
import { DISTRICT_COORD } from '../../../utils/country.js'

export default {
    name:"borneo-layer",
    components:{
        'leaflet-popup' : LeafletPopup
    },
    computed:{
        ...mapState({
            borneoMarkers : state => state.leafletmap.borneoMarkers,
            districtSelected : state => state.countryfilter.districtSelected,
            focusLevel: state => state.leafletmap.focusLevel
        })
    },
    methods:{
        ...mapMutations({
            loadBorneoMarkers: "leafletmap/loadBorneoMarkers",
        })
    },
    async mounted(){
        await this.$api.location.getUserLocationCity()
                .then(value=>{
                    this.$api.location.getBorneo()
                        .then(value=>{
                            this.loadBorneoMarkers(value);
                        });
                })
    }
}
</script>
<style>
.profile-img{
    margin-top:-40px;
}
</style>