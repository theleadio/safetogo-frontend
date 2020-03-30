<template>
    <div>
        <div id="map-wrap">
            <client-only>
                <l-map 
                    :zoom="zoom" 
                    :center="center" 
                    :options="{zoomControl:false}"
                    @update:center="updateCenter"
                    @update:zoom="updateZoom"
                    @contextmenu="addClickMarker($event['latlng'])"
                    @click="removeClickedMarker(); resetPost(); closePostForm(); closeProfileDropDown();"
                    >
                    <l-tile-layer :url="mapUrl" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'></l-tile-layer>
                    <leaflet-marker />
                    <l-control-zoom position="bottomright"  ></l-control-zoom>
                </l-map>
            </client-only>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import LeafletMarker from '~/components/items/leaflet/LeafletMarker.vue';

export default {
    name:"leaflet-map",
    components:{
        'leaflet-marker':LeafletMarker
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
            mapUrl : state => state.leafletmap.mapUrl
        })
    },
    async mounted(){
        await navigator.geolocation.getCurrentPosition(
                (value) => {
                    this.$store.commit("leafletmap/updateCenter", [
                        value["coords"]["latitude"], value["coords"]["longitude"]
                    ]);
                }
            );
        await this.$api
                .location.getNews()
                .then(
                    (value) =>{this.$store.commit('leafletmap/loadMarkers', value)}
                ).catch(e=>{console.error(e)});
    }
}
</script>
<style>
#map-wrap{
    height: 93vh;
    width: 100%;
}
.overlay-bg-black{
    background-color: rgb(111,111,119,.3);
    transition: all 0.2s ease-in-out;
}
</style>