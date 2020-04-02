<template>
    <div>
        <l-layer-group v-if="showLayer">
            <LeafletMarker :markers="markers"/>
        </l-layer-group>
    </div>
</template>
<script>
import LeafletMarker from '~/components/items/leaflet/LeafletMarker.vue';


export default {
    name:"leaflet-layer",
    components:{
        LeafletMarker
    },
    props:{
        markers: Array,
        showLayer: Boolean
    }
}
</script>