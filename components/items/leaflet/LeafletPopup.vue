<template>
    <div>
        <l-popup>
            <div class="absolute right-0 top-0 mr-4 h-16 w-16 rounded-full overflow-hidden float-up">
                <img class="h-full w-full object-cover" :src="marker.popup.img_url">
            </div>
            <div class="flex w-auto">
                <div class="py-4 px-1 mb-1">
                    <div class="font-semibold text-base">{{marker.id}}</div>
                    <div>{{marker.popup.title}}</div>
                    <div><a :href="marker.popup.source" target="_blank">source</a></div>
                </div>
                <div class="absolute bottom-0 w-24 right-0 py-2 text-lg text-yellow-600 font-semibold overflow-hidden">
                    {{marker.popup.createdBy}}
                </div>
                <div class="absolute bottom-0 left-0 py-2 pl-4">
                    <div class="flex flex-row justify-between text-base text-gray-600 ">
                        <div class="justify-start mx-1">
                            <button class="focus:outline-none">
                                {{(marker.popup.upVote)?(marker.popup.upVote):0}} <i class="far fa-thumbs-up"></i>
                            </button>
                        </div> 
                        <span class="mx-2">|</span>
                        <div class="justify-start mx-1">
                            <button class="focus:outline-none">
                                {{(marker.popup.downVote)?(marker.popup.downVote):0}} <i class="far fa-thumbs-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </l-popup>
    </div>
</template>
<script>
export default {
    name:"leaflet-popup",
    props:{
        marker: Object
    }
}
</script>
<style>
.float-up{
    margin-top: -30px;
}
</style>