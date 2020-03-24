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
                    @add="openPopUp($event, marker)"
                    >
                    <l-popup v-if="marker.popup.show" @l-add="$event.target.openPopup()">
                        <div class="row">
                            <div class="col-xl-8">
                                <div class="popup-title">
                                    {{marker.popup.title}}
                                </div>
                                <div class="pop-details">
                                    <p>{{marker.popup.details}}</p>
                                </div>
                                <br/>
                                <div class="popup-source" v-if="marker.popup.source">
                                    <a :href="marker.popup.source" target="_blank">source</a>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="popup-img">
                                    <img :src="(marker.popup.img_url)?marker.popup.img_url:'~/assets/img/helmet.png'" >
                                </div>
                            </div>
                        </div>
                        <div class="vote-wrapper">
                            <button class="btn up-vote" v-on:click="upVote(marker)">
                                {{(marker.popup.upVote)?(marker.popup.upVote):0}} 
                                <i class="far fa-thumbs-up"></i>
                            </button>
                            <button class="btn down-vote" v-on:click="downVote(marker)">
                                {{(marker.popup.downVote)?(marker.popup.downVote):0}} <i class="far fa-thumbs-down"></i>
                            </button>
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
            this.$store.commit('post/setForm', {
                latlng: marker.latlng,
                locationName: marker.id
            });
            this.hideAllPost();
            if(marker.create){
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
        openPopUp: function(event, marker){
            
            this.$nextTick(()=>{
                if(marker.id === "TheLead"){
                    event.target.openPopup()
                }
            });
        },
        upVote: function(marker){
            this.$store.commit('map/upVote', marker);
        },
        downVote: function(marker){
            this.$store.commit('map/downVote', marker);
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
                    console.log(value);
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
        font-size: 16px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
    }
    .popup-details{
        font-size: 14px;
        font-family: sans-serif;
    }
    .popup-img{
        padding:7px;
        margin-top:40px;
    }
    .popup-img img{
        width:80px;
    }
</style>