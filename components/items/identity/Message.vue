<template>
    <div>
        <div v-bind:class="{
            'absolute':howToMessage,
            'top-0':howToMessage,
            'w-screen':howToMessage,
            'h-screen':howToMessage,
            'backdrop':howToMessage,
            'my-auto':howToMessage,
            }">
            <div class="absolute bg-white-400 w-screen mt-8 sm:mt-8 md:mt-64 p-2 shadow-card" v-if="howToMessage">
                <div class="container">
                    <div class="flex justify-between">
                        <div class="font-semibold text-2xl"> SafeToGo </div>
                    </div>
                    <div class="text-base">
                        <div class="text-sm mb-4">( Community-Powered Platform )</div>
                        <p class="san-serif text-sm">
                        <p class="san-serif text-sm"> <span class="font-medium">1.</span> Login with your Google Account to create a post on the pin. </p>
                            <p class="san-serif text-sm ml-2">Drop a pin in <label class="text-lg text-yellow-600 font-medium">SafeToGo</label> and tell the community what happened there
                        </p>
                        <p class="san-serif text-sm"> <span class="font-medium">2.</span> Right Click on the map to drop a pin, left click to remove the temporary pin </p>
                        <p class="san-serif text-sm"> ( Mobile ) Long press on the map to drop a pin</p>
                        <p class="san-serif text-sm"> <span class="font-medium">3.</span> Simply up-vote / down-vote to verify the post created. </p>
                        <p class="san-serif flex items-center text-sm"> <span class="font-medium">4.</span> Click on the <span class="block h-4 w-6 md:px-1"><img class="h-full w-full object-cover" src="~/assets/img/helmet.png"></span> (helmet)  to show this message box again =] </p>
                        <p class="flex items-center text-sm"><span class="block h-4 w-6 md:px-1"><img class="h-full w-full object-cover" src="~/static/map/virus.svg"></span> Summary Report  <span class="block h-4 w-6 md:px-1"><img class="h-full w-full object-cover" src="~/static/map/pinned.svg"></span> Post Pinned by Community</p>
                        <p class="san-serif text-xs">Disclaimer: Our numbers include state government data. May not tally with MOH.</p>
                    </div>
                    <div class="flex justify-start items-center py-3 text-sm mt-1">
                        <img class="h-8 w-8 mr-3" src="~/assets/img/lead-logo-nowords.png"> 
                        <div class="font-medium antialiased font-serif">This is a community project by LEAD (<a href="https://www.thelead.io">https://www.thelead.io</a>) for further details please email <span class="px-1 font-bold">edmund@thelead.io</span> or <span class="px-1 font-bold">csr@thelead.io</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    computed:{
        ...mapState({
            howToMessage : state => state.setting.howToMessage
        })
    }
}
</script>
<style>
.backdrop{
    background-color: rgb(0, 0, 0, .3);
    backdrop-filter: blur(5px);
    transition: all 0.1s ease-in-out;
}
</style>