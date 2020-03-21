<template>
    <div class="container-fluid overlay">
        <nav class="navbar navbar-expand-lg">
            <div class="navbar-brand">
                <img src="~/assets/img/helmet.png"/>
                <h1>SafeToGo</h1>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="input-group search-wrapper box-drop-shadow">
                    <input
                        v-on:keyup.enter="search"
                        v-model="term"
                        type="text"
                        class="form-control search-bar"
                        :placeholder="'Search' + '...'"
                    />
                    <div class="input-group-append">
                        <button v-on:click="search" class="btn btn-outline-primary">
                        <i class="fas fa-search-location "></i> Search
                        </button>
                    </div>
                </div>
                <div class="user-prof" v-if="isLogin" title="Sign Out">
                    <a href="#" v-on:click="signOut"><img :src="userProfileImg"/></a>
                </div>
                <div class="user-prof" v-else title="Sign In">
                    <a href="#" v-on:click="googleSignIn"><img src="~/assets/img/google-icon.jpeg"/></a>
                </div>
            </div>
        </nav>
        
    </div>
</template>
<script>

import { mapMutations, mapGetters } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    computed:{
        isLogin(){
            return this.$store.state.user.login
        },
        userProfileImg(){
            return this.$store.state.user.profile.img_url
        },
        userProfile(){
            return this.$store.state.user.profile
        }
    },
    data: function(){
        return {
            term:""
        }
    },
    methods:{
        hideAllPost: function(){
            this.$store.commit('story/hidePost');
            this.$store.commit('news/hideNews');
        },
        performSearch: function(keywords){
            this.$api
                .location
                .searchAddress(keywords)
                .then((value)=> {
                    this.hideAllPost();
                    this.$store.commit('map/updateLocation', value); 
                })
                .catch((err) => {console.log(err)});
        },
        search: function() {
            this.performSearch(this.term.split(' ').join('+'));
        },
        googleSignIn: function(){
            this.provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(this.provider).then(result => {
            // store the user ore wathever
            let profile = result["additionalUserInfo"]["profile"];
            this.$store.commit('user/loginUser', {
                id: profile["id"],
                name: profile["name"],
                img_url: profile["picture"],
                email: profile["email"]
            })
            }).catch(e => {
                console.log(e)
            })
        },
        signOut: function(){
            firebase.auth().signOut().then(result => {
                console.log('Signed Out');
                this.$store.commit('user/signOut')
            }, function(error) {
                console.error('Sign Out Error', error);
            });
        }   
    }
}
</script>
<style>
    .container-fluid{
        display: flex !important;
    }
    .navbar{
        height:80px;
        width:100%;
    }
    .navbar-brand img{
        height:100%;
        margin-top:-5%;
    }
    .user-prof img{
        height: 70%;
        margin-top:15%;
        border-radius: 50%;
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, .19);
         
    }
    .navbar-brand h1{
        font-family: sans-serif;
        color: #000;
        display:inline-block;
        padding-top:1%;
        margin-top:4%
    }
    #navbarNav, .user-prof, .navbar-brand{
        height: 100%
    }
    .search-wrapper{
        width: 80%;
        margin-right:2%;
    }
    .navbar-collapse.collapse {
        display: contents!important;
    }

    .navbar-nav>li, .navbar-nav {
        float: left !important;
    }

    .navbar-nav.navbar-right:last-child {
        margin-right: -15px !important;
    }

    .navbar-right {
        float: right!important;
    }
</style>