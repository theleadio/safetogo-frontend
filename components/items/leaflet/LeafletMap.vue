<template>
    <div>
        <div id="map-wrap">
            <client-only>
                <!-- @contextmenu="addClickMarker($event['latlng'])" -->
                <l-map 
                    :zoom="zoom" 
                    :center="center" 
                    :options="{
                        zoomControl:false, 
                        zoomAnimation:true,
                        fadeAnimation:true
                    }"
                    @update:center="updateCenter"
                    @update:zoom="updateZoom"
                    
                    @click="removeClickedMarker(); resetPost(); closePostForm(); closeProfileDropDown();"
                    >
                    <l-tile-layer :url="mapUrl" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'></l-tile-layer>
                    <leaftlet-layer :markers="locationMarkers" :showLayer="true" v-if="zoom > 6"/>
                    <leaftlet-layer :markers="summaryMarkers" :showLayer="true"/>
                    <!-- <l-control-zoom position="bottomright"></l-control-zoom> -->
                </l-map>
            </client-only>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import LeafletMarker from '~/components/items/leaflet/LeafletMarker.vue';
import LeafletGroupLayer from '~/components/items/leaflet/LeafletLayerGroup.vue';

export default {
    name:"leaflet-map",
    components:{
        'leaflet-marker':LeafletMarker,
        'leaftlet-layer': LeafletGroupLayer
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

            resetPost: "newmarker/resetContent",
            
            closePostForm : "setting/closePostForm",
            closeProfileDropDown : "setting/closeProfileDropDown",
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