<template>
    <l-popup 
        :lat-lng="coordinate"
        :options="options"
        style="width:250px"
        class="font-sans"
    >
        <div class="block p-2">
            <div class="absolute overflow-hidden h-16 w-16 top-0 right-0 mr-4 rounded-full bg-white profile-img shadow-card focus:outline-none">
                <img class="w-full h-full object-cover" :src="marker.img_url" />
            </div>
        </div>
        <div>
            <slot name="popup-content"></slot>
        </div>
        <div>
            <div class="absolute bottom-0 right-0 p-2">
                <div class="text-xs text-gray-700 text-right">
                    Info Pinned by:
                </div>
                <div class="text-sm text-indigo-700 overflow-x-scroll w-64 text-right px-1">
                    {{marker.createdBy ? marker.createdBy: "SafeToGo"}}
                </div>
            </div>
        </div>
        
        <div class="w-16 absolute bottom-0 right-0 social-panel">
            <div class="grid grid-rows-2 font-sans shadow-card rounded-lg">
                <div class="flex py-2 text-gray-600 pl-3 items-center text-sm cursor-pointer hover:text-gray-800"><i class="far fa-thumbs-up mr-2"></i> {{marker.upvote}} </div>
                <div class="flex py-2 text-gray-600 pl-3 items-center text-sm cursor-pointer hover:text-gray-800"><i class="far fa-thumbs-down mr-2"></i> {{marker.downvote}} </div>
            </div>
        </div>
    </l-popup>
</template>
<script>
export default {
    name:"leaflet-popup",
    props:{
        coordinate : Array,
        options: Object,
        marker: Object
    }
}
</script>
<style>
.social-panel{
    margin-right: -56px;
    z-index:-1;
    backdrop-filter: blur(5px);
}
</style>