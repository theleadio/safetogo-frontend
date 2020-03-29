<template>
    <div>
        <l-marker
            v-for="marker in markers"
            :key="marker.id"
            :lat-lng="marker.latlng"
            @click="updateCenter(marker.latlng)"
        >
            <leaflet-popup :marker="marker"/>
        </l-marker>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import LeafletPopup from '~/components/items/leaflet/LeafletPopup.vue';

export default {
    name:"leaflet-marker",
    components:{
        'leaflet-popup': LeafletPopup
    },
    methods:{
        ...mapMutations({
            updateCenter: "leafletmap/updateCenter",
        })
    },
    computed:{
        ...mapState({
            markers: state => state.leafletmap.markers
        })
    }
}
</script>