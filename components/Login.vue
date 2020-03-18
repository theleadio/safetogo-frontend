<template>
    <div class="login-form box-drop-shadow">
        <div class="login-form-label">
            <label>Login to drop pin</label>
        </div>
        <div class="g-signin2" data-onsuccess="onSignIn">
        </div>
    </div>
</template>
<script>

import {mapMutations} from 'vuex'

export default {
    data: function () {
        return {}
    },
    methods:{
        onSignIn: function(googleUser){
            let profile = googleUser.getBasicProfile();
            this.$store.commit('user/loginUser',{
                id: profile.getId(),
                name: profile.getName(),
                img_url: profile.getImageUrl(),
                email: profile.getEmail(),
            });
        }
    }
}
</script>
<style>
    .login-form{
        position: absolute;
        display:block;
        /* right: 0px; */
        top: 0px;
        padding:1%;
        margin-top: 15%;
        margin-right: 45%;
        margin-left: 45%;
        /* width: 20%; */
        z-index: 1000;
        background-color:rgba(255,255 ,255 , .8);
        border-radius: 2%;
    }
    .login-form .login-form-label{
        font-size: 18px;
        color: #9e9e9e;
        font-weight: 500;
    }
    .google-login-btn{
        margin-right:5px;
        width:24px;
    }
    .login-button{
        margin-top:10px;
        margin-bottom: 10px;
        display:block;
        width: 100%;
    }
</style>