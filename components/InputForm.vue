<template>
    <div class="row">
        <form id="story-create" v-if="show" class="box-drop-shadow">
            <i class="fas fa-times" v-on:click="hide"></i>
            {{isLogin}}
            <div v-if="isLogin">
                <label>Create a Post</label>
                <div class="form-group">
                    <input id="title" class="form-control form-control-sm" type="text" placeholder="Title" :value="title">
                    <input id="latlng" class="form-control form-control-sm" type="text" placeholder="Latitude \& Longitude" :value="latLng" :disabled="1">
                    <input id="tags" class="form-control form-control-sm" type="text" placeholder="Tags">
                    <input id="source" class="form-control form-control-sm" type="text" placeholder="Source (https://...)">
                    <textarea id="content" class="form-control form-control-sm" type="text" placeholder="content" rows="10"></textarea>
                    <button class="btn btn-primary">Submit</button>
                </div>
            </div>
            <div v-else>

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
        },
        isLogin(){
            return this.$store.state.user.login
        }
    },
    methods:{
        hide: function(event){
            this.$store.commit('story/hidePost');
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
    #story-create .fa-times{
        color: #fefefe;
        float:right;
        margin-right: 10px;
        cursor: pointer;
    }

    #story-create .fa-times:hover{
        color: #9b9b9b;
    }

    @media screen and (min-width:1440px) {
        #story-create{
            margin-right:10%;
        }
    }
    @media screen and (max-width:1024px) {
        #story-create{
            width: 50%;
            margin-top:25%;
            margin-right:10%;
            right: none;
        }
    }
    @media screen and (max-width: 411px) {
        #story-create{
            width: 80%;
            padding:5%;
            margin-top:35%;
            margin-right:10%;
            right: none;
        }
    }
    
</style>