<template>
    <div v-bind:class="{
        'absolute':true,
        'top-0':true,
        'right-0':true,
        'form-background':true, 
        'form-wrapper':true,
        'w-full':true,
        'md:w-1/2':true,
        'lg:w-1/2':true,
        'show_post_form': showPostForm,
        'hide_post_form': !showPostForm
        }">
        <div class="container pt-10 px-10">
            <form class="bg-white shadow-md rounded px-6 pt-10 pb-12 mb-4">
                <div class="flex justify-between">
                    <label>Create a Post</label>
                    <i class="fas fa-times cursor-pointer" v-on:click="disablePostForm"></i>
                </div>
                <label class="text-red-600 text-xs"> Login is required to create a new post </label>
                <div class="mb-3">
                    <inputElement :labelName="'Title'" :labelId="'title'" :focus="false" :value="title" @input="setTitle($event); isTitleFilled()" :required="true"/>
                    <label class="text-red-600 text-xs" v-if="titleFilled"> Please provide a title for your post. </label>
                </div>
                <div class="mb-3">
                    <inputElement :labelName="'Location Name'" :labelId="'locationName'" :focus="false" :value="locationName" @input="setLocationName($event); isLocationFilled()" :required="true"
                    />
                    <label class="text-red-600 text-xs" v-if="locationFilled"> Please provide the location name. </label>
                </div>
                <div class="mb-3">
                    <inputElement :labelName="'Source'" :labelId="'source'" :focus="false" :value="source" @input="setSource($event); isSourceFilled()" :required="true"/>
                    <label class="text-red-600 text-xs" v-if="sourceFilled"> Please provide a source for your post. </label>
                </div>
                <div class="mb-3">
                    <textElement :labelName="'Content'" :labelId="'content'" :focus="false" :value="content" @input="setContent($event); isContentFilled()" :required="true"/>
                    <label class="text-red-600 text-xs" v-if="contentFilled"> Tell us more about what happened here. </label>
                </div>
                <div class="flex items-center justify-between">
                    <button class="
                        bg-blue-500  
                        w-full
                        text-white 
                        font-bold 
                        py-3 
                        px-4 
                        rounded
                        transition
                        duration-200
                        hover:bg-blue-400
                        focus:outline-none 
                        focus:shadow-outline" 
                        type="button"
                        @click="submitNewPost"
                        >
                        Create Post
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import inputElement from '~/components/items/InputElement.vue';
import textElement from '~/components/items/TextArea.vue';
import { mapState, mapMutations, mapGetters } from 'vuex';
import utils from '~/utils/utils.js';

export default {
    components:{
        inputElement,
        textElement
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
                    .createPost(params)
                    .then((value)=> {
                        this.disablePostForm();
                        this.$store.commit("leafletmap/removeClickedMarker")
                        this.$store.commit("newmarker/resetContent");
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
            setContent: "newmarker/setContent"
        })
    },
    computed:{
        ...mapState({
            showPostForm : state => state.setting.postForm,
            title : state => state.newmarker.title,
            locationName : state => state.newmarker.locationName,
            source : state => state.newmarker.source,
            content : state => state.newmarker.content
        })
    }
}
</script>
<style>
.form-background{
    background-color: rgb(0, 0, 0, .3)
}
.form-wrapper{
    height: 94vh;
    margin-top:72px;
    z-index:500;
}
.hide_post_form{
    transition: all 0.3s ease-out;
    right: -0.1rem;
    width:0%;
    overflow-x: hidden;
}
.show_post_form{
    transition: all 0.2s ease-in;
}
</style>