<template>
    <div>
        <Navi />
        <div class="w-full h-full">
            <Map />
            <CreatePost />
            <HowTo />
        </div>
    </div>
</template>
<script>
import Navi from '~/components/Navi.vue'
import Map from '~/components/items/leaflet/LeafletMap.vue'
import CreatePost from '~/components/FloatingForm.vue'
import HowTo from '~/components/items/SpeechBubble.vue'

export default {
    components:{
        Navi,
        Map,
        CreatePost,
        HowTo
    }
}
</script>
<style>
.top-layer{
    z-index: 500;
}
</style>