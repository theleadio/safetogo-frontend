<template>
    <div>
        <div v-bind:class="{
            'pl-2':show,
            'pr-3':show,
            'summary-card': !countryFilterCard,
            'filter-card-showned': countryFilterCard,
            'w-0':!show
            }">
            <div v-bind:class="{
                'absolute':true,
                'rounded-full':true,
                'h-8':true,
                'w-8':true,
                'right-0':show,
                'left-0':!show,
                'bg-white':true,
                'p-2':true,
                'shadow-card':true,
                'my-4':true,
                'cursor-pointer':true,
                'items-center':true,
                'close-wrapper':!show
                }" @click="show = !show">
                    <div class="absolute ml-4 top-0 mt-1 z-500">
                        <div v-bind:class="{
                            'bg-white': true,
                            'ml-1': true,
                            'p-1': true,
                            'px-2': true,
                            'rounded-lg': true,
                            'shadow-card': true,
                            'text-xs': true,
                            'visible': !show,
                            'invisible': show
                            }">Summary</div>
                    </div>
                <img v-bind:class="{
                    'h-full':true, 
                    'w-full':true, 
                    'transform':true,
                    'duration-500':true,
                    'rotate-90':show,
                    '-rotate-90': !show
                    }" src="~/assets/svg/down-arrow.svg">
            </div>
            <div v-bind:class="{
                'bg-white': true,
                'shadow-card': true,
                'rounded-lg': true,
                'px-2': true,
                'py-2': show,
                'visible':show,
                'invisible': !show
                }">
                <div v-bind:class="{
                    'flex-col':true,
                    'justify-between': true,
                    'px-2': true,
                    'py-2': show,
                    'items-center': true
                    }">
                    <div class="text-sm font-medium mb-1">{{currentDistrict}}'s Stats Overview</div>
                    <div class="grid grid-cols-2 text-sm">
                        <div class="flex-col">
                            <div class="text-center text-base font-semibold text-green-600">{{summary["confirmed"]}}</div>
                            <div class="text-center font-medium text-green-600">
                                Confirmed</div>
                        </div>
                        <!-- <div class="flex-col">
                            <div class="text-center">{{summaryMarkers.find(obj => obj.district === districtSelected).total}}</div>
                            <div class="text-center">Recovered</div>
                        </div> -->
                        <div class="flex-col">
                            <div class="text-center text-base font-semibold text-gray-600">{{summary["death"]}}</div>
                            <div class="text-center text-gray-600">Deaths</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: "summary-card",
    data: function(){
        return {
            show: true
        }
    },
    computed:{
        summary(){
            let districtSelected = this.$store.state.countryfilter.districtSelected;
            let summaryMarkers = this.$store.state.leafletmap.summaryMarkers;
            if( summaryMarkers.length > 0 ){
                return summaryMarkers.find(obj => obj.district === districtSelected)
            }else{
                return {confirmed:0, death:0}
            }
        },
        ...mapState({
            currentDistrict: state => state.countryfilter.districtSelected,
            // summaryMarkers: state => state.leafletmap.summaryMarkers
            countryFilterCard : state => state.setting.countryFilterCard
        })
    }
}
</script>
<style>

.summary-card{
    margin-top: 4rem;
}
.filter-card-showned{
    margin-top: 1rem;
}
.close-wrapper{
    margin-left: -5px;
}

</style>