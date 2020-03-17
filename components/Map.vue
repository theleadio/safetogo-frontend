<template>
    <div id="map-wrap" style="height: 100vh">
          <client-only>
            <l-map :zoom="zoom" :center="center">
              <l-tile-layer :url="url"></l-tile-layer>
              <l-marker v-for="marker in markers" :key="marker.id" :lat-lng="marker.latlng" 
                :l-tooltip="marker.tooltip" :l-popup="marker.popup" v-on:click="innerClick(marker.latlng)" @add="openPopUp">
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
              this.center = {lon: lon, lat: lat}
            }
        );
  },
  computed: {
    markers(){
      return this.$store.state.map.location
    },
    zoom() {
      return this.$store.state.map.focus.zoom
    },
    currentLocation(){
      return this.$store.state.map.focus.center
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
    innerClick: function(location) {
      this.$store.commit('story/setLatLng', location);
    },
    openPopUp: function(event){
      this.$nextTick(() => {
					event.target.openPopup();
				})
    }
  }
}
</script>