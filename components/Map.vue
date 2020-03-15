<template>
    <div id="map-wrap" style="height: 100vh">
          <client-only>
            <l-map :zoom=13 :center="[5.4164, 100.3327]">
              <l-tile-layer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"></l-tile-layer>
              <l-marker v-for="marker in markers" :key="marker.id" :lat-lng="marker.latlng" :l-tooltip="marker.tooltip" >
                <l-tooltip text="aloha"/>
              </l-marker>
            </l-map>
          </client-only>
        </div>
</template>
<script>
export default {
    data: () => {
        return {
            markers: [
                {
                id:"penang",
                "latlng":[5.4164, 100.3327],
                "tooltip": {
                    content:"welcome"          
                }
                },
                {
                id:"permatang-pauh",
                "latlng": [5.4111, 100.4133],
                "tooltip": {
                    content:"welcome"          
                }
                }
            ]
        }
    }
}
</script>