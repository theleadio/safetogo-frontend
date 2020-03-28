<template>
    <div>
        <div id="map-wrap">
            <client-only>
                <l-map :zoom="5" :center="focusLocation" :options="{zoomControl:false}">
                    <l-tile-layer :url="mapUrl" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'></l-tile-layer>
                    <l-control-zoom position="bottomright"  ></l-control-zoom>
                </l-map>
            </client-only>
        </div>
    </div>
</template>
<script>

export default {
    data: () =>{
        return {
            focusLocation: [0.0,0.0],
            // mapUrl: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
            mapUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        }
    },
    mounted(){
    }
}
</script>
<style>
#map-wrap{
    height: 93vh;
    width: 100%;
}
.overlay-bg-black{
    background-color: rgb(111,111,119,.3);
    transition: all 0.2s ease-in-out;
}
</style>