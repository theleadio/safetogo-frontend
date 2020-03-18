<template>
    <div id="map-wrap" style="height: 100vh">
          <client-only>
            <l-map :zoom="zoom" :center="center" v-on:click="hide">
              <l-tile-layer :url="url"></l-tile-layer>
              <l-marker v-for="marker in markers" :key="marker.id" :lat-lng="marker.latlng" 
                :l-tooltip="marker.tooltip" :l-popup="marker.popup"  v-on:click="innerClick(marker.latlng, marker.create)" @add="openPopUp">
                <l-icon 
                  :icon-url="marker.icon.iconUrl"
                  :shadow-url="marker.icon.shadowUrl"
                  ></l-icon>
                <l-tooltip text="aloha">
                  {{marker.tooltip.content}}
                </l-tooltip>
                <l-popup v-if="marker.popup.show">
                  {{marker.popup.content}}
                </l-popup>
              </l-marker>
            </l-map>
          </client-only>
        </div>
</template>
<script>
import { mapGetters, mapMutations} from 'vuex'


export default {
  beforeMount(){
    
    navigator.geolocation.getCurrentPosition(
            (value) => {
              let lat = value["coords"]["latitude"];
              let lon = value["coords"]["longitude"];
              this.center = {lon: lon, lat: lat};
            }
        );
  },
  computed: {
    markers(){
      let location = this.$store.state.map.location
      if (location.length == 0 && this.center["lat"] != 0.0){
        this.$store.commit('map/setUserLatLng', [{
          address:{
            road:"You are here"
            },
          lat:this.center["lat"],
          lon:this.center["lon"],
          display_name: "You are here"
          }]);
      }
      return location
    },
    zoom() {
      return this.$store.state.map.focus.zoom
    }
  },
  data: () => {
    return {
      center: {lon: 0, lat: 0},
      keepInView: true,
      url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    }
  },
  methods: {
    hideAllPost: function(){
      this.$store.commit('story/hidePost');
      this.$store.commit('news/hideNews');
    },
    innerClick: function(location, create) {
      this.$store.commit('story/setLatLng', location);
      this.hideAllPost();
      if(create){
        this.$store.commit('story/showPost');
      }
      else{
        this.$store.commit('news/showNews');
      }
    },
    openPopUp: function(event){
      this.$nextTick(() => {
					event.target.openPopup();
				})
    },
    hide: function(event){
      this.hideAllPost();
    }
  }
}
</script>
<style>
  #map-wrap{
    position: relative;
  }
  @media screen and (min-width:1024px) {
    .leaflet-top .leaflet-control{
        margin-top: 70px !important;
    }   
  }

  @media screen and (max-width: 812px){
    .leaflet-top .leaflet-control{
        margin-top: 100px !important;
    }
  }
</style>