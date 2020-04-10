<template>
    <div>
        <div class="absolute z-500 top-0 left-0 w-4/5 md:w-1/3 xl:w-3/12">
            <SearchWrapper />
        </div>
        <div class="absolute z-500 top-0 right-0">
            <GoogleLogin class="mt-2"/>
        </div>
        <div class="absolute z-600 w-full bottom-0">
            <LogoWrapper />
        </div>
        <div class="absolute z-500">
            <message />
        </div>
        <Map />
    </div>
</template>
<script>
import Map from '~/components/items/leaflet/LeafletMap.vue'
import GoogleLogin from '~/components/items/UserProfile.vue'
import SearchWrapper from '~/components/items/search/Wrapper.vue'
import LogoWrapper from '~/components/items/identity/safetogo.vue'
import Message from '~/components/items/identity/Message.vue'

export default {
    components:{
        Map,
        GoogleLogin,
        SearchWrapper,
        LogoWrapper,
        Message
    }
}
</script>