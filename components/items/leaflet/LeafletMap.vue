<template>
    <div>
        <div id="map-wrap">
            <client-only>      
                <l-map 
                    :zoom="zoom" 
                    :center="center" 
                    :options="{
                        zoomControl:false
                    }"
                    @update:zoom="updateZoom"
                    @contextmenu="setCoordinate($event['latlng'])"
                    @click="removeClickedMarker(); resetPost(); closePostForm(); closeProfileDropDown();"
                    >
                    <l-tile-layer :url="mapUrl" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'></l-tile-layer>
                    <leaflet-summary />
                    <leaflet-case />
                    <leaflet-search />
                    <leaflet-borneo />
                </l-map>
            </client-only>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import LeafletSummary from '~/components/items/leaflet/LeafletSummary.vue';
import LeafletCase from '~/components/items/leaflet/LeafletCases.vue';
import LeafletSearch from '~/components/items/leaflet/LeafletSearchMark.vue';
import LeafletBorneo from '~/components/items/leaflet/LeafletBorneo';

export default {
    name:"leaflet-map",
    components:{
        'leaflet-summary': LeafletSummary,
        'leaflet-case': LeafletCase,
        'leaflet-search': LeafletSearch,
        'leaflet-borneo': LeafletBorneo
    },
    data: () =>{
        return {
        }
    },
    methods:{
        ...mapMutations({
            updateCenter: "leafletmap/updateCenter",
            updateZoom: "leafletmap/updateFocusLevel",
            addClickMarker: "leafletmap/addClickMarker",
            removeClickedMarker: "leafletmap/removeClickedMarker",
            loadCaseMarkers: "leafletmap/loadCaseMarkers",

            resetPost: "newmarker/resetContent",
            setCoordinate: "newmarker/setCoordinate",
            
            closePostForm : "setting/closePostForm",
            closeProfileDropDown : "setting/closeProfileDropDown",

            updateCountry : "countryfilter/updateCountry",
            updateDistrict : "countryfilter/updateDistrict",
        })
    },
    computed:{
        ...mapState({
            center : state => state.leafletmap.center,
            zoom : state => state.leafletmap.focusLevel,
            mapUrl : state => state.leafletmap.mapUrl,
            locationMarkers : state => state.leafletmap.markers.location,
            summaryMarkers : state => state.leafletmap.markers.summary
        })
    },
    async mounted(){
        // await navigator.geolocation.getCurrentPosition(
        //         (value) => {
        //             console.log("navigator");
        //             console.log(this.center);
        //             this.updateCenter([
        //                 value["coords"]["latitude"], value["coords"]["longitude"]
        //             ]);
        //             this.updateZoom(8);
        //             console.log(this.center);
        //         }
        //     );
        await this.$api.location.getUserLocationCity()
                .then(value=>{
                    this.updateCountry(value["country_name"]);
                    this.updateDistrict(value["state"]);
                    this.updateCenter([value["latitude"], value["longitude"]])
                });
    }
}
</script>
<style>
#map-wrap{
    height: 100vh;
    width: 100%;
}
.overlay-bg-black{
    background-color: rgb(111,111,119,.3);
    transition: all 0.2s ease-in-out;
}
</style>