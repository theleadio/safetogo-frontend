<template>
    <div class="create-form overlay" v-if="show">
        <div class="container">
            <form id="story-create" class="box-drop-shadow">
                <i class="fas fa-times" v-on:click="hide"></i>
                <label>Create a Post</label>
                <div class="form-group">
                    <input id="title" v-model="title" class="form-control form-control-sm" type="text" placeholder="Title">
                    <input id="latlng" v-model="latlng" class="form-control form-control-sm" type="text" placeholder="Latitude & Longitude" :disabled="1">
                    <input id="source" v-model="source" class="form-control form-control-sm" type="text" placeholder="Source (https://...)">
                    <textarea id="content" v-model="content" class="form-control form-control-sm" type="text" placeholder="Content" rows="10"></textarea>
                    <button class="btn btn-primary" v-on:click="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    computed:{
        storeylatLng(){
            this.latlng = this.$store.state.story.latlng
            return this.latlng
        },
        show(){
            return this.$store.state.showCreateForm
        }
    },
    data: () => {
        return {
            title: "",
            latlng: "",
            source: "",
            content: "",
        }
    },
    methods:{
        hide: function(event){
            this.$store.commit('disableCreateForm');
        },
        submit: function(){
            let params = {
                title: this.title,
                latlng: this.latlng,
                source: this.source,
                content: this.content,
                createdBy: this.$store.state.user.profile.name,
                email: this.$store.state.user.profile.email,
                profile_img: this.$store.state.user.profile.img_url
            }
            // this.$api
            //     .news
            //     .createPost(params)
            //     .then((value)=> {
            //         this.hide();
            //         this.$store.commit('post/resetValues');
            //     })
            //     .catch((err) => {console.log(err)});
        }
    }

}
</script>
<style>
    .create-form{
        margin-top: 10%;
        margin-left: auto;
        margin-right: auto;
    }
    #story-create{
        padding: 5%;
        background-color: rgba(0, 0, 0, .3);
        backdrop-filter: blur(5px);
    }
    input[type=text], textarea{
        margin-bottom: 10px;
    }
    #story-create label{
        font-size: 22px;
        font-weight: bold;
        color:aliceblue;
    }
    #story-create .fa-times{
        color: #fefefe;
        float:right;
        margin-right: 10px;
        cursor: pointer;
    }
</style>