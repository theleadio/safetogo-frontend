<template>
    <div id="map-wrap" style="height: 100vh">
          <client-only>
            <l-map :zoom="zoom" :center="center">
              <l-tile-layer :url="url"></l-tile-layer>
              <l-marker v-for="marker in markers" :key="marker.id" :lat-lng="marker.latlng" :l-tooltip="marker.tooltip" v-on:click="innerClick(marker.latlng)" >
                <l-tooltip>
                  Tooltip for marker display here.
                </l-tooltip>
              </l-marker>
            </l-map>
          </client-only>
        </div>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    markers(){
      return this.$store.state.map.location
    },
    data() {
      return this.$store.state.map.focus_location
    }
  },
  data: () => {
    return {
      zoom: 3,
      center: [0.0, 0.0],
      url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    }
  },
  methods: {
    innerClick: (location) => {
      alert(location);
    }
  }
}
</script>