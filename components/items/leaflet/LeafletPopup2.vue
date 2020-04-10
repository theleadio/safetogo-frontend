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
                <button v-bind:class="{
                    'flex': true,
                    'py-2': true,
                    'text-gray-600': (marker.disableUpVote?false:true),
                    'text-blue-500':(!isLogin)?false:(marker.disableUpVote?true:false),
                    'pl-3': true,
                    'items-center': true,
                    'text-sm': true,
                    'cursor-pointer': true,
                    'hover:text-gray-800': (!isLogin)?false:(marker.disableUpVote?false:true),
                    'focus:outline-none': true
                    }"
                    v-bind:disabled="(!isLogin)? true:((marker.disableUpVote)? true:false)"
                    v-on:click="upVote(marker)"
                    >
                        <i class="far fa-thumbs-up mr-2"></i> 
                        {{marker.upvote}}
                </button>
                <button v-bind:class="{
                    'flex': true,
                    'py-2': true,
                    'text-gray-600': (marker.disableDownVote?false:true),
                    'text-blue-500':(!isLogin)?false:(marker.disableDownVote?true:false),
                    'pl-3': true,
                    'items-center': true,
                    'text-sm': true,
                    'cursor-pointer': true,
                    'hover:text-gray-800': (!isLogin)?false:(marker.disableDownVote?false:true),
                    'focus:outline-none': true
                    }"
                    v-bind:disabled="(!isLogin)? true:((marker.disableDownVote)? true:false)"
                    v-on:click="downVote(marker)"
                    >
                        <i class="far fa-thumbs-down mr-2"></i>
                        {{marker.downvote}}
                </button>
            </div>
        </div>
    </l-popup>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name:"leaflet-popup",
    props:{
        coordinate : Array,
        options: Object,
        marker: Object
    },
    computed:{
        ...mapState({
            isLogin: state => state.profile.loginStatus,
            user_id: state => state.profile.profile.safetogo_id
        })
    },
    methods:{
        vote: function(upvote, downvote, marker){
            this.$api
                .location
                .voteV2({
                    user_id: this.user_id,
                    district: marker.district,
                    country: marker.country,
                    case_id: marker.case_id,
                    // lat: marker.latlng[0],
                    // lng: marker.latlng[1],
                    upvote: upvote,
                    downvote: downvote,
                    // email: this.$store.state.profile.profile.email,
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
.social-panel{
    margin-right: -56px;
    z-index:-1;
    backdrop-filter: blur(5px);
}
</style>