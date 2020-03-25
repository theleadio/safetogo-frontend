<template>
    <div class="social-login-wrapper">
        <div class="user-prof" v-if="isLogin" title="Sign Out">
            <a href="#" v-on:click="signOut"><img :src="userProfileImg"/></a>
        </div>
        <div class="user-prof" v-else title="Sign In">
            <a href="#" v-on:click="googleSignIn"><img src="~/assets/img/google-icon.jpeg"/></a>
            <!-- <a href="#" v-on:click="googleSignIn"><img src="~/assets/img/facebook-icon.png"/></a> -->
        </div>
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
    },
    data: () =>{
        return {
            
        }
    },
    methods:{
        googleSignIn: function(){
            this.provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(this.provider).then(result => {
            let profile = result["additionalUserInfo"]["profile"];
            this.$store.commit('user/loginUser', {
                id: profile["id"],
                name: profile["name"],
                img_url: profile["picture"],
                email: profile["email"]
            })
            this.$api
                .user
                .signIn({
                    email: profile["email"],
                    name: profile["name"],
                    img_url: profile["picture"]
                })
                .then((value)=>{
                    this.$store.commit('user/updateUserProfile', value)
                    this.$store.commit('map/disableVote', value["votes"])
                })
                .catch(err => console.log(err))
            }).catch(e => {
                console.log(e)
            })
        },
        signOut: function(){
            firebase.auth().signOut().then(result => {
                this.$api
                    .user
                    .signOut({
                        user_id: this.$store.state.user.profile.safetogo_id
                    });
                this.$store.commit('user/signOut')
            }, function(error) {
                console.error('Sign Out Error', error);
            });
        },
    }
}
</script>
<style>
.social-login-wrapper{
    height: 100%;
    padding: 1px;
}
.social-login-wrapper img{
    height: 70%;
    margin-top:17%;
    border-radius: 50%;
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, .3);
}
</style>