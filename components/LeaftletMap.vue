<template>
    <div id="map-wrap">
        <client-only>
            <l-map 
                :zoom="zoom" 
                :center="focusLocation"
                v-on:click="hide"
                v-on:dblclick="checkLocation">
                <l-tile-layer :url="mapUrl"></l-tile-layer>
                <l-marker 
                    v-for="marker in markers" 
                    :key="marker.id" 
                    :lat-lng="marker.latlng"
                    :l-tooltop="marker.tooltop"
                    :l-popup="marker.popup"
                    v-on:click="innerClick(marker)"
                    >
                    <l-popup v-if="marker.popup.show">
                        <div class="row">
                            <div class="popup-title">
                                {{marker.popup.title}}
                            </div>
                            <!-- <div class="pop-details">
                                <p>{{marker.popup.details}}</p>
                            </div> -->
                            <div class="popup-source" v-if="marker.popup.source">
                                <a :href="marker.popup.source" target="_blank">source</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="popup-img">
                                <div style="display:block">
                                    <img :src="marker.popup.img_url" >
                                    <p>
                                        By: {{marker.popup.createdBy}} <span v-if="marker.popup.createdAt">@ {{marker.popup.createdAt}}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="vote-wrapper">
                            <button v-bind:class="{'btn':true, 'up-vote':true, 'btn-active':(!isLogin)?false:(marker.popup.disableUpVote?true:false)}" v-on:click="upVote(marker)" v-bind:disabled="(!isLogin)? true:((marker.popup.disableUpVote)? true:false)">
                                {{(marker.popup.upVote)?(marker.popup.upVote):0}}
                                <i class="far fa-thumbs-up"></i>
                            </button>
                            <button v-bind:class="{'btn':true, 'down-vote':true, 'btn-active':(!isLogin)?false:(marker.popup.disableDownVote?true:false)}" v-on:click="downVote(marker)"  v-bind:disabled="(!isLogin)? true:((marker.popup.disableDownVote)? true:false)">
                                {{(marker.popup.downVote)?(marker.popup.downVote):0}} <i class="far fa-thumbs-down"></i>
                            </button>
                            <label class="vote-label" v-if="!isLogin">Please login to vote</label>
                        </div>
                    </l-popup>
                    <l-icon
                        :icon-url="marker.icon.iconUrl"
                        :shadow-url="marker.icon.shadowUrl"
                        ></l-icon>
                    <l-tooltip text="aloha">
                        {{marker.tooltip.content}}
                    </l-tooltip>
                </l-marker>
            </l-map>
        </client-only>
    </div>
</template>
<script>

import { mapGetters, mapMutations} from 'vuex'

export default {
    computed: {
        markers(){
            return this.$store.state.map.location
        },
        zoom(){
            return this.$store.state.map.focus.zoom
        },
        focusLocation(){
            return this.$store.state.map.focus.location
        },
        isLogin(){
            return this.$store.state.user.login
        }
    },
    data: () => {
        return {
            tmpLocation : false,
            mapUrl: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        }
    },
    methods:{
        hideAllPost: function(){
            this.$store.commit('disableCreateForm');
            // this.$store.commit('changeContentList');
            this.$store.commit("disableSearchSuggestion");
        },
        innerClick: function(marker){
            this.$store.commit('map/focus',marker.latlng);
            this.hideAllPost();
            if(marker.create){
                this.$store.commit('post/setForm', {
                    latlng: marker.latlng,
                    locationName: marker.id
                });
                this.$store.commit('enableCreateForm');
            }
            else{
                // this.$store.commit('changeContentList');
            }
        },
        removeTmpLocation: function(){
            if(this.tmpLocation){
                this.$store.commit('map/removeTmpLocation')
                this.tmpLocation = false;
            }
        },
        hide: function(event){
            this.hideAllPost();
            this.removeTmpLocation();
        },
        checkLocation: function(event){

            this.removeTmpLocation();

            this.$store.commit('map/addTmpLocation',{
                id: "Pinned",
                latlng:[event.latlng["lat"],event.latlng["lng"]],
                tooltip:{
                    content: "Pin is dropped! What happened here ?"
                },
                popup:{
                    content: "Pin is dropped! What happened here ?",
                    show:false
                }
            })
            this.tmpLocation = true;
        },
        vote: function(upvote, downvote, marker){
            this.$api
                .location
                .vote({
                    user_id: this.$store.state.user.profile.safetogo_id,
                    lat: marker.latlng[0],
                    lng: marker.latlng[1],
                    upvotes: upvote,
                    downvotes: downvote,
                    email: this.$store.state.user.profile.email
                })
                .catch(err => console.log(err))
        },
        upVote: function(marker){
            this.$store.commit('map/upVote', marker);
            this.vote(1, 0, marker);
        },
        downVote: function(marker){
            this.$store.commit('map/downVote', marker);
            this.vote(0, 1, marker);
        }
    },
    mounted(){
        navigator.geolocation.getCurrentPosition(
                (value) => {
                    this.$store.commit("map/setUserLocation", [{
                            address:{
                                road:"You are here"
                                },
                            lat:value["coords"]["latitude"],
                            lon: value["coords"]["longitude"],
                            display_name: "You are here"
                            }
                        ]
                    ); 
                }
            );
        this.$api
            .location
            .getNews()
            .then(
                (value) => {
                    this.$store.commit('map/loadLocationData', value)
                }
            ).catch( e => {console.log(e)});
    },

}
</script>
<style>
    #map-wrap{
        width:100%;
        height:100vh;
        position:relative;
    }
    .leaflet-top .leaflet-control{
        margin-top: 140px !important;
    }
    #map-wrap .vote-wrapper button{
        color:#9b9b9b;
        padding-top:1%;
        margin-left: 5px;
        font-size:16px;
    }
    .popup-title{
        padding-top:10px;
        font-size: 16px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        width: 100%;
    }
    .popup-details{
        font-size: 14px;
        font-family: sans-serif;
    }
    .popup-img{
        padding:7px;
        display:inline-block;
    }
    .popup-img img{
        width:60px;
        border-radius: 50%;
    }
    .btn-active{
        color:#3c74f3 !important;
    }
    .vote-label{
        font-size:12px;
        color: #bdbdbd;
    }
</style>