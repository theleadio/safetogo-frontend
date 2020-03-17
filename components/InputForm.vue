<template>
    <div class="row">
        <form id="story-create" v-if="show" class="box-drop-shadow">
            <label>Create a Post</label>
            <div class="form-group">
                <input id="title" class="form-control form-control-sm" type="text" placeholder="Title" :value="title">
                <input id="latlng" class="form-control form-control-sm" type="text" placeholder="Latitude \& Longitude" :value="latLng" :disabled="1">
                <input id="tags" class="form-control form-control-sm" type="text" placeholder="Tags">
                <input id="source" class="form-control form-control-sm" type="text" placeholder="Source (https://...)">
                <textarea id="content" class="form-control form-control-sm" type="text" placeholder="content" rows="10"></textarea>
                <button class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>  
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    computed:{
        title() {
            return this.$store.state.story.title
        },
        latLng(){
            return this.$store.state.story.latlng
        },
        show(){
            return this.$store.state.story.createStory
        }
    }
}
</script>
<style>
    #story-create{
        float: right;
        position: absolute;
        right: 0px;
        top: 0px;
        padding:1%;
        margin-top: 8%;
        margin-right:2%;
        width:30%;
        z-index: 1000;
        /* background-color:rgb(255,255,255,.2) */
        background-color:rgba(92, 63, 63, 0.4);
    }
    #story-create label{
        font-size: 16px;
        font-weight: bold;
        color:aliceblue;
    }
    input[type=text], textarea{
        margin-bottom: 10px;
    }
    
</style>