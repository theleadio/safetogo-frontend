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
                        <div class="popup-title">
                            {{marker.popup.title}}
                        </div>
                        <br/>
                        <div class="popup-source">
                            <a :href="marker.popup.source" target="_blank">source</a>
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
        },
        innerClick: function(marker){
            if(this.$store.state.user.login){
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
                console.log(this.$store.state.showCreateForm);
            }
            else if(marker.showPopUp){
                console.log("show pop up");
            }
            else{
                console.log("Please login");
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
    }

}
</script>
<style>
    #map-wrap{
        width:100%;
        height:100vh;
        position:relative;
    }
</style>