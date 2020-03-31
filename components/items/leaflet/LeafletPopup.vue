<template>
    <div>
        <l-popup class="w-56">
            <div class="absolute right-0 top-0 mr-4 h-16 w-16 rounded-full overflow-hidden float-up">
                <img class="h-full w-full object-cover" :src="marker.popup.img_url">
            </div>
            <div class="flex w-auto">
                <div class="py-4 px-1 mb-1">
                    <div class="font-semibold text-base">{{marker.id}}</div>
                    <div>
                        <div v-for="line in marker.popup.content.split('|')" :key="marker.id+line">{{line}}</div>
                    </div>
                    <div><a :href="marker.popup.source" target="_blank">source</a></div>
                </div>
                <div class="absolute bottom-0 w-24 right-0 py-2">
                    <div class="text-xs">Info pinned by:</div>
                    <div class="text-sm text-yellow-600 font-semibold overflow-x-scoll">{{marker.popup.createdBy}}</div>
                </div>
                <div class="absolute bottom-0 left-0 py-2 pl-4">
                    <div class="flex flex-row justify-between text-base">
                        <div class="justify-start mx-1">
                            <button v-bind:class="{
                                'focus:outline-none': true,
                                'text-gray-500':(marker.popup.disableUpVote?false:true),
                                'text-blue-500':(!isLogin)?false:(marker.popup.disableUpVote?true:false)
                                }"
                                v-bind:disabled="(!isLogin)? true:((marker.popup.disableUpVote)? true:false)"
                                v-on:click="upVote(marker)"
                                >
                                {{(marker.popup.upVote)?(marker.popup.upVote):0}} <i class="far fa-thumbs-up"></i>
                            </button>
                        </div> 
                        <div class="justify-start mx-1">
                            <button v-bind:class="{
                                'focus:outline-none': true,
                                'text-gray-500': (marker.popup.disableDownVote?false:true),
                                'text-blue-500':(!isLogin)?false:(marker.popup.disableDownVote?true:false)
                                }"
                                v-bind:disabled="(!isLogin)? true:((marker.popup.disableDownVote)? true:false)"
                                v-on:click="downVote(marker)"
                                >
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
import { mapState, mapMutations } from 'vuex'

export default {
    name:"leaflet-popup",
    props:{
        marker: Object
    },
    computed:{
        ...mapState({
            isLogin: state => state.profile.loginStatus
        })
    },
    methods:{
        vote: function(upvote, downvote, marker){
            this.$api
                .location
                .vote({
                    user_id: this.$store.state.profile.profile.safetogo_id,
                    lat: marker.latlng[0],
                    lng: marker.latlng[1],
                    upvotes: upvote,
                    downvotes: downvote,
                    email: this.$store.state.profile.profile.email,
                    reference: marker.reference
                })
                .catch(err => console.log(err))
        },
        upVote: function(marker){
            this.upMarkerVote(marker);
            this.vote(1, 0, marker);
        },
        downVote: function(marker){
            this.downMarkerVote(marker);
            this.vote(0, 1, marker);
        },
        ...mapMutations({
            upMarkerVote: "leafletmap/upVote",
            downMarkerVote: "leafletmap/downVote"
        })
    }
}
</script>
<style>
.float-up{
    margin-top: -30px;
}
</style>