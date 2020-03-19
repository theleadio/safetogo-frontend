<template>
    <div>
        <p>{{$auth.$state.redirect}}</p>
        <p>You have to login before accessing to <strong>{{ $auth.$state.redirect }}</strong></p>
        <p>{{fetchUser}}</p>
        <button @click="$auth.loginWith('google')"> Sign in </button>
    </div>
</template>
<script>
export default {
    middleware:['auth'],
    computed:{
        fetchUser(){
            return JSON.stringify(this.$auth.fetchUser(), undefined, 2)
        }
    }
}
</script>