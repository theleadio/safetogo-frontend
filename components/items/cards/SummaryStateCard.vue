<template>
    <div>
        <div v-bind:class="{
            'pl-2':true,
            'pr-3':true,
            'transition':true,
            'duration-500':true,
            'summary-card': !countryFilterCard,
            'filter-card-showned': countryFilterCard
            }">
            <div class="bg-white shadow-card rounded-lg px-2 py-2">
                <div class="flex-col justify-between px-2 py-2 items-center">
                    <div class="text-sm font-medium mb-1">{{currentDistrict}}'s Stats Overview</div>
                    <div class="grid grid-cols-2 text-sm">
                        <div class="flex-col">
                            <div class="text-center text-base font-semibold text-green-600">{{summary["confirmed"]}}</div>
                            <div class="text-center font-medium text-green-600">Confirmed</div>
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

</style>