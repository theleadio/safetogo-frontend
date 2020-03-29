<template>
    <div>
        <Navi />
        <div class="w-full h-full">
            <Map />
            <CreatePost />
        </div>
    </div>
</template>
<script>
import Navi from '~/components/Navi.vue'
import Map from '~/components/items/leaflet/LeafletMap.vue'
import CreatePost from '~/components/FloatingForm.vue'

export default {
    components:{
        Navi,
        Map,
        CreatePost
    }
}
</script>
<style>
.top-layer{
    z-index: 500;
}
</style>