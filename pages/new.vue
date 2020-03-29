<template>
    <div>
        <Navi />
        <div class="">
            <Map />
        </div>
    </div>
</template>
<script>
import Navi from '~/components/Navi.vue'
import Map from '~/components/items/leaflet/LeafletMap.vue'

export default {
    components:{
        Navi,
        Map
    }
}
</script>
<style>
.top-layer{
    z-index: 500;
}
.black_highlight{
    background-color: rgb(0, 0, 0);
}
</style>