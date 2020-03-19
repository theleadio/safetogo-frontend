<template>
    <div>
        <p>{{$auth.$state.redirect}}</p>
        <p>You have to login before accessing to <strong>{{ $auth.$state.redirect }}</strong></p>
        <p>{{fetchUser}}</p>
        <p>User: {{ $auth.hasScope('user') }}</p>
        <p>Test: {{ $auth.hasScope('test') }}</p>
        <p>Admin: {{ $auth.hasScope('admin') }}</p>
        <p> {{state}}</p>
        <p>{{ $auth.$state.loggedIn }}</p>
        <form>
          <input v-model="email" type="email" ref="username"/>
          <input v-model="password" type="password"/>
          <button @click="googleLogin"> Sign in </button>
        </form>
    </div>
</template>
<script>
export default {
    middleware:['auth'],
    data: function(){
        return {
            email: '',
            password: ''
        }
    },
    computed:{
        fetchUser(){
            return JSON.stringify(this.$auth.fetchUser(), undefined, 2)
        }
    },
    methods:{
    async googleLogin(){
      await this.$auth.loginWith('google').then(e => {console.log(e)}).catch(e => {
        this.$toast.show('Error', {icon: "fingerprint"});
      })
    },
  }
}
</script>