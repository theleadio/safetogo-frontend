<template>
    <div>
        <l-layer-group
            v-for="marker in summaryMarkers"
            :key="marker.district"
        >
            <div v-if="marker.district === districtSelected">
                <l-marker
                    :lat-lng="getCoord(marker)"
                    @add="openPopup"
                >
                    <leaflet-popup
                        :coordinate="getCoord(marker)"
                        :options="{ autoClose: false, closeOnClick: false }"
                        :marker="marker"
                    >
                        <template v-slot:popup-content>
                            <div class="text-base font-medium text-gray-800">Summary</div>
                            <div class="block grid grid-rows-1 pb-6">
                                <div class="p-1 text-xs text-gray-700">Total Confirmed : <span class="text-sm font-medium">{{marker.confirmed}}</span></div>
                                <div class="p-1 text-xs text-gray-700">Total Recovered : <span class="text-sm font-medium">{{marker.total?marker.total:0}}</span></div>
                                <div class="p-1 text-xs text-gray-700">Total Death : <span class="text-sm font-medium">{{marker.death?marker.death:0}}</span></div>
                            </div>
                        </template>
                    </leaflet-popup>
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
    name:"summary-layer",
    components:{
        'leaflet-popup' : LeafletPopup
    },
    computed:{
        ...mapState({
            summaryMarkers : state => state.map.summaryMarkers,
            districtSelected : state => state.countryfilter.districtSelected
        })
    },
    methods:{
        openPopup(event){
            this.$nextTick(()=>{
                    event.target.openPopup();
                }
            );
        },
        getCoord(marker){
            if(marker){
                let district = DISTRICT_COORD[marker["country"].replace(/ /g, "_")][marker["district"].replace(/ /g, "_")];
                return [district["lat"], district["lng"]]
            }else{
                return []
            }
        },
        ...mapMutations({
            loadSummary: "map/loadSummary",
        })
    },
    async mounted(){
        await this.$api.location.getSummaryV2()
                .then(value=>{
                    this.loadSummary(value);
                });
    }
}
</script>
<style>
.profile-img{
    margin-top:-40px;
}
.social-panel{
    margin-right: -56px;
    z-index:-1;
    backdrop-filter: blur(2px);
}
</style>