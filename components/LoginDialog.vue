<template>
    <div class="login-dialog overlay">
        <div class="login-dialog-content">
            <button class="btn btn-light">
                Login with Google
            </button>
            <div 
                class="fb-login-button" 
                data-width="" 
                data-size="large" 
                data-button-type="continue_with" 
                data-layout="default" 
                data-auto-logout-link="false" 
                data-use-continue-as="false"
                ></div>
        </div>
    </div>
</template>
<style>
.login-dialog{
    background-color: black;
    margin-top:10%;
    margin-left: auto;
    margin-right: auto;
}
</style>