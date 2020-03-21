<template>
    <div class="create-form overlay" v-if="show">
        <div class="container">
            <form id="story-create" class="box-drop-shadow">
                <i class="fas fa-times" v-on:click="hide"></i>
                <label>Create a Post</label>
                <div class="form-group">
                    <input id="title" v-model="title" class="form-control form-control-sm" type="text" placeholder="Title">
                    <input id="title" v-model="locationName" class="form-control form-control-sm" type="text" placeholder="Location Name">
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
        latlng(){
            return this.$store.state.post.latlng
        },
        show(){
            return this.$store.state.showCreateForm
        },
    },
    data: () => {
        return {
            title: "",
            source: "",
            content: "",
            locationName: ""
        }
    },
    methods:{
        hide: function(event){
            this.$store.commit('disableCreateForm');
        },
        getDate: function () {
            let d = new Date()
            let month = '' + (d.getUTCMonth() + 1);
            let day = '' + d.getUTCDate();
            let year = d.getUTCFullYear();
            let hour = ' '+ d.getUTCHours();
            let min = '' + d.getUTCMinutes();
            let seconds = '' + d.getUTCSeconds();


            if (month.length < 2){month = '0' + month};
            if (day.length < 2){day = '0' + day};

            return [year, month, day].join('-') + [hour, min, seconds].join(':');
        },
        submit: function(){
            let params = {
                title: this.title,
                lng: this.latlng[0],
                lat: this.latlng[1],
                source: this.source,
                content: this.content,
                createdBy: this.$store.state.user.profile.name,
                locationName: this.locationName,
                email: this.$store.state.user.profile.email,
                img_url: this.$store.state.user.profile.img_url,
                reportDate: this.getDate()
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