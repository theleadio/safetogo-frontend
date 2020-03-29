<template>
    <div class="absolute top-0 right-0 form-background form-wrapper w-full md:w-1/2 lg:w-1/2">
        <div class="container pt-10 px-10">
            <form class="bg-white shadow-md rounded px-6 pt-10 pb-12 mb-4">
                <div class="flex justify-between">
                    <label>Create a Post</label>
                    <i class="fas fa-times cursor-pointer" v-on:click="hide"></i>
                </div>
                <label class="text-red-600 text-xs"> Login is required to create a new post </label>
                <div class="mb-3">
                    <inputElement :labelName="'Title'" :labelId="'title'" :focus="false" :value="title" @input="title = $event" />
                </div>
                <div class="mb-3">
                    <inputElement :labelName="'Location Name'" :labelId="'locationName'" :focus="false" :value="locationName" @input="locationName = $event" />
                </div>
                <div class="mb-3">
                    <inputElement :labelName="'Source'" :labelId="'source'" :focus="false" :value="source" @input="source = $event" />
                </div>
                <div class="mb-3">
                    <textElement :labelName="'Content'" :labelId="'content'" :focus="false" :value="content" @input="content = $event" />
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
                        type="button">
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

export default {
    components:{
        inputElement,
        textElement
    },
    data: () => {
        return{
            title: "",
            source: "",
            content: "",
            locationName: ""
        }
    },
    methods: {
        hide: function(){
            console.log("hide");
        }
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
</style>