<template>
    <div>
        <l-marker
            :lat-lng="[lat, lng]"
            v-if="lat != 0.0 && lng != 0.0"
        >
        <l-popup :lat-lng="[lat, lng]">
            <form>
                <div class="flex justify-between">
                    <label class="text-base font-medium">Create a Post</label>
                </div>
                <label class="text-red-600 text-xs" v-if="!userLogin"> Login is required to create a new post </label>
                <div class="mb-3">
                    <inputElement :labelName="'Title'" :labelId="'title'" :focus="false" :value="title" @input="setTitle($event); isTitleFilled()" 
                    :disabled="!userLogin"/>
                    <label class="text-red-600 text-xs" v-if="titleFilled"> Please provide a title for your post. </label>
                </div>
                <div class="mb-3">
                    <inputElement :labelName="'Location Name'" :labelId="'locationName'" :focus="false" :value="locationName" @input="setLocationName($event); isLocationFilled()" :disabled="!userLogin"
                    />
                    <label class="text-red-600 text-xs" v-if="locationFilled"> Please provide the location name. </label>
                </div>
                <div class="mb-3">
                    <inputElement :labelName="'Source'" :labelId="'source'" :focus="false" :value="source" @input="setSource($event); isSourceFilled()" :disabled="!userLogin"/>
                    <label class="text-red-600 text-xs" v-if="sourceFilled"> Please provide a source for your post. </label>
                </div>
                <div class="mb-3">
                    <textElement :labelName="'Content'" :labelId="'content'" :focus="false" :value="content" @input="setContent($event); isContentFilled()" :disabled="!userLogin"/>
                    <label class="text-red-600 text-xs" v-if="contentFilled"> Tell us more about what happened here. </label>
                </div>
                <div class="flex items-center justify-between">
                    <button v-bind:class="{
                        'bg-blue-500':true, 
                        'w-full':true,
                        'text-white':true,
                        'font-bold':true,
                        'py-3':true,
                        'px-4':true,
                        'mb-3':true,
                        'rounded':true,
                        'transition':true,
                        'duration-200':true,
                        'hover:bg-blue-400':userLogin,
                        'focus:outline-none':true,
                        'focus:shadow-outline':true,
                        }" 
                        type="button"
                        @click="submitNewPost"
                        :disabled="!userLogin"
                        >
                        Create Post
                    </button>
                </div>
            </form>
        </l-popup>
        </l-marker>
    </div>
</template>
<script>
import inputElement from '~/components/items/InputElement.vue';
import textElement from '~/components/items/TextArea.vue';
import utils from '~/utils/utils.js';
import { mapState, mapMutations, mapGetters } from 'vuex';

export default {
    components:{
        inputElement,
        textElement
    },
    computed:{
        ...mapState({
            center : state => state.leafletmap.center,
            title : state => state.newmarker.title,
            locationName : state => state.newmarker.locationName,
            source : state => state.newmarker.source,
            content : state => state.newmarker.content,
            userLogin: state => state.profile.loginStatus,
            lat : state => state.newmarker.lat,
            lng: state => state.newmarker.lng
        })
    },
    data: () => {
        return{
            titleFilled: false,
            locationFilled: false,
            sourceFilled: false,
            contentFilled: false
        }
    },
    methods: {
        openPopup(event){
            this.$nextTick(()=>{
                    event.target.openPopup();
                }
            );
        },
        submitNewPost: function(){
            let params = this.markerContent()
            this.titleFilled = params.title.length == 0 ? true : false;
            this.locationFilled = params.locationName.length == 0 ? true : false;
            this.sourceFilled = params.source.length == 0 ? true : false;
            this.contentFilled = params.title.content == 0 ? true : false;
            if(
                this.titleFilled === false &&
                this.locationFilled === false &&
                this.sourceFilled === false &&
                this.contentFilled === false
            ){
                params["reportedDate"] = utils.getUTCDate();
                this.$api
                    .news
                    .createPostV2(params)
                    .then((value)=> {
                        this.disablePostForm();
                        this.removeClickedMarker();
                        this.addNewMarker(params);
                        this.resetContent();
                    })
                    .catch((err) => {console.log(err)});
            }
        },
        isTitleFilled: function(){
            this.titleFilled = false
        },
        isLocationFilled: function(){
            this.locationFilled = false
        },
        isSourceFilled: function(){
            this.sourceFilled = false
        },
        isContentFilled: function(){
            this.contentFilled = false
        },
        ...mapGetters({
            markerContent : "newmarker/getContents"
        }),
        ...mapMutations({
            disablePostForm: "setting/togglePostForm",
            setTitle: "newmarker/setTitle",
            setLocationName: "newmarker/setLocationName",
            setSource: "newmarker/setSource",
            setContent: "newmarker/setContent",
            addNewMarker: "leafletmap/addNewMarker",
            removeClickedMarker: "leafletmap/removeClickedMarker",
            resetContent: "newmarker/resetContent"
        })
    },
}
</script>