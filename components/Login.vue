<template>
    <div class="login-form box-drop-shadow">
        <div class="login-form-label">
            <label>Login to drop pin</label>
        </div>
        <fb:login-button 
            scope="public_profile,email"
            onlogin="checkLoginState();">
        </fb:login-button>
        <!-- <div 
            class="fb-login-button login-button" 
            data-width="" 
            data-size="large" 
            data-button-type="continue_with" 
            data-layout="default" 
            data-auto-logout-link="false" 
            data-use-continue-as="false">
            
        </div> -->
        <!-- <button class="btn btn-light login-button" v-on:click="GoogleLogin">
            <img alt="Google sign-in" class="google-login-btn"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                    Continue with Google
        </button> -->
    </div>
</template>
<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1555723304582235',
      xfbml      : true,
      version    : 'v6.0'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

</script>
<script>

export default {
    mounted(){
        FB.getLoginStatus(function(response) {
        console.log(response);
    });
    },
    data: function () {
        return {}
    },
    methods:{
        checkLoginState: function(){
            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
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