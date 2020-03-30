<template>
<div>
    <div class="relative" v-if="isLogin">
        <button class="rounded-full overflow-hidden h-12 w-12 border-2 border-yellow-500 focus:outline-none hover:border-yellow-400  mr-3 md:mr-1 lg:mr-1 xl:mr-1"
        @click="toggleProfileDropDown()">
            <img class="h-full w-full object-cover" src="https://lh3.googleusercontent.com/a-/AOh14Gj03lsgLneIxLB4rq_HHaeHooKHegPlad_U85YR" >
        </button>
        <div class="absolute bg-white rounded-lg mt-2 w-48 py-2 shadow-xl right-0 z-500 mr-3 md:mr-1 lg:mr-1 xl:mr-1" v-if="profileDropDown">
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-400 hover:text-white-400 hover:no-underline" @click="googleSignOut">Sign out</a>
        </div>
    </div>
    <div v-else>
        <button class="
            bg-white-400 
            text-gray-800
            text-xs
            py-2
            px-3
            font-semibold
            rounded-sm 
            inline-flex
            items-center  
            mr-3
            md:py-4
            md:text-sm
            md:mr-1 
            lg:mr-1 
            xl:mr-1
            focus:outline-none 
            hover:text-gray-600"
            @click="googleLogin">
            <img class="
                object-cover 
                w-3 
                h-3 
                mr-2
                md:w-4
                md:h-4
                " src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png">
            <span>Sign In</span>
        </button>
    </div>
</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
    computed:{
        ...mapState({
            isLogin: state => state.profile.loginStatus,
            profileDropDown: state => state.setting.profileDropDown
        })
    },
    methods:{
        googleLogin: async function(){
            this.provider = new firebase.auth.GoogleAuthProvider()
            await firebase.auth().signInWithPopup(this.provider).then(
                result => {
                   let profile = result["additionalUserInfo"]["profile"];
                    this.loginUser(
                        {
                            id: profile["id"],
                            name: profile["name"],
                            img_url: profile["picture"],
                            email: profile["email"]
                        }
                    );
                    this.$api.user.signIn(
                        {
                            email: profile["email"],
                            name: profile["name"],
                            img_url: profile["picture"]
                        })
                        .then((value)=>{
                            this.updateUserProfile(value)
                            // this.$store.commit('map/disableVote', value["votes"])
                        })
                        .catch(err => console.log(err))
                }
            ).catch(e => console.error(e));
        },
        googleSignOut: function(){
            firebase.auth().signOut().then(result => {
                this.$api
                    .user
                    .signOut({
                        user_id: this.$store.state.user.profile.safetogo_id
                    });
                this.signOut();
            }, function(error) {
                console.error('Sign Out Error', error);
            });
        },
        ...mapMutations({
            loginUser: "profile/loginUser",
            updateUserProfile: "profile/updateUserProfile",
            signOut: "profile/signOut",
            toggleProfileDropDown : "setting/toggleProfileDropDown"
        })
    }
}
</script>