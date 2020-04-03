<template>
    <div class="absolute z-600 w-full top-0 left-0 form-wrapper how-to-background" v-if="showMessage">
        <div class="flex justify-start xs:mt-2 xs:px-1 md:mt-20 md:px-5 lg:mt-16 lg:px-5">
            <img class="h-12 w-12 lg:h-20 lg:w-20 mr-3" src="~/assets/img/helmet.png">
            <div class="relative bg-white-400 w-2/3 py-3 px-3 shadow-xl rounded-lg">
                <div class="up-arrow left-0 mt-2 lg:mt-4"></div>
                <div class="flex justify-between">
                    <div class="font-semibold text-2xl"> Welcome to SafeToGo </div>
                    <i class="fas fa-times cursor-pointer" @click="toggle"></i>
                </div>
                <div class="text-base">
                    <div class="text-sm mb-4">( Community-Powered Platform )</div>
                    <p class="san-serif text-sm">
                    <p class="san-serif text-sm"> <span class="font-medium">1.</span> Login with your Google Account to create a post on the pin. </p>
                        Drop a pin in <label class="text-lg text-yellow-600 font-medium">SafeToGo</label> and tell the community what happened there
                    </p>
                    <p class="san-serif text-sm"> <span class="font-medium">2.</span> Right Click on the map to drop a pin, left click to remove the temporary pin </p>
                    <p class="san-serif text-sm"> ( Mobile ) Long press on the map to drop a pin</p>
                    <p class="san-serif text-sm"> <span class="font-medium">3.</span> Simply up-vote / down-vote to verify the post created. </p>
                    <p class="san-serif flex items-center text-sm"> <span class="font-medium">4.</span> Click on the <span class="block h-4 w-6 md:px-1"><img class="h-full w-full object-cover" src="~/assets/img/helmet.png"></span> (helmet)  to show this message box again =] </p>
                    <p class="san-serif text-xs">Disclaimer: Our numbers include state government data. May not tally with MOH.</p>
                </div>
                <div class="flex justify-start items-center py-3 text-sm mt-1">
                    <img class="h-8 w-8 mr-3" src="~/assets/img/lead-logo-nowords.png"> 
                    <div class="font-medium antialiased font-serif">This is a community project by LEAD (<a href="https://www.thelead.io">https://www.thelead.io</a>) for further details please email <span class="px-1 font-bold">edmund@thelead.io</span> or <span class="px-1 font-bold">csr@thelead.io</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed:{
        ...mapState({
            showMessage: state => state.setting.howToMessage
        })
    },
    methods:{
        ...mapMutations({
            toggle: "setting/toggleHowToMessage"
        })
    }
}
</script>
<style>
.up-arrow{
    border-style: solid;
    position: absolute;
    border-color: #fff transparent transparent transparent;
    border-width: 8px 8px 0px 8px;
    transform: rotate(90deg);
    margin-left:-12px;
}
.how-to-background{
    background-color: rgb(0, 0, 0, .5);
    backdrop-filter: blur(4px);
}
</style>
