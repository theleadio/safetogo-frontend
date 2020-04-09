<template>
    <div>
        <l-layer-group
            v-for="marker in caseMarkers"
            :key="marker.lat+marker.lng+marker.locationName"
        >
            <div v-if="marker.district === districtSelected && focusLevel > 8">
            <!-- <div> -->
                <l-marker
                    :lat-lng="[marker.lat, marker.lng]"
                >
                    <leaflet-popup
                        :coordinate="[marker.lat, marker.lng]"
                        :options="{}"
                        :marker="marker"
                    >
                        <template v-slot:popup-content>
                            <div class="text-base font-medium text-gray-800">{{marker.locationName}}</div>
                            <div class="block grid grid-rows-1 pb-10">
                                <div class="p-1 text-xs text-gray-700">{{marker.content}}</div>
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
import { mapState, mapMutations } from 'vuex';
import LeafletPopup from '~/components/items/leaflet/LeafletPopup2.vue'

export default {
    name:"case-layer",
    components:{
        'leaflet-popup' : LeafletPopup
    },
    computed:{
        ...mapState({
            districtSelected : state => state.countryfilter.districtSelected,
            caseMarkers : state => state.leafletmap.caseMarkers,
            focusLevel: state => state.leafletmap.focusLevel
        })
    },
    methods:{
        ...mapMutations({
            loadCaseMarkers: "leafletmap/loadCaseMarkers"
        })
    },
    async mounted(){
        await this.$api.location.getUserLocationCity()
                .then(value=>{
                    this.$api
                        .location
                        .getCases(value["country_name"])
                        .then(value =>{
                            this.loadCaseMarkers(value);
                        })
                        .catch(err => console.error(err));
                });
    }
}
</script>