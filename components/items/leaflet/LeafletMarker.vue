<template>
    <div>
        <l-marker
            v-for="marker in markers"
            :key="marker.id"
            :lat-lng="marker.latlng"
            @click="(marker.isNew)? (togglePostForm(),setCoordinate(marker.latlng)) : updateCenter(marker.latlng)"
        >
            <leaflet-popup :marker="marker" v-if="('popup' in marker)"/>
            <l-icon
                :icon-url="marker.icon"
                :shadow-url="marker.iconShadow"
            ></l-icon>
            <l-tooltip text="aloha">
                {{marker.tooltip.content}}
            </l-tooltip>
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
    props:{
        markers: Array
    },
    methods:{
        ...mapMutations({
            updateCenter: "leafletmap/updateCenter",
            togglePostForm: "setting/togglePostForm",
            setCoordinate : "newmarker/setCoordinate"
        })
    }
}
</script>