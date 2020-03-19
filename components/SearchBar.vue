<template>
  <div class="row search-bar-wrapper">
    <div class="col-12 col-md-2">
      <div class="navi row">
        <img src="~/assets/img/helmet.png"/>
        <h1>SafeToGo</h1>
      </div>
    </div>


    <div class="col-12 col-md-9">
      <div class="input-group box-drop-shadow">
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
    </div> 

    <div class="col-md-1">
      <div class="account">
        <p>{{user}}</p>
        <p>User: {{ $auth.hasScope('user') }}</p>
        <p>Test: {{ $auth.hasScope('test') }}</p>
        <p>Admin: {{ $auth.hasScope('admin') }}</p>
        <p> {{state}}</p>
        <p>{{ $auth.$state.loggedIn }}</p>
        <!-- <p>{{ $auth.refreshToken.get() || '-' }}></p> -->
        <form>
          <input v-model="email" type="email" ref="username"/>
          <input v-model="password" type="password"/>
          <button @click="googleLogin"> Sign in </button>
        </form>
        <button outline fab @click="googleSignIn" color="#4285F4"><i>fab fa-google</i></button>
      </div>
    </div>

  </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'
import firebase from 'firebase'

export default {
  name: 'Search',
  middleware: ['auth'],
  computed:{
    userImg(){
      return this.$store.state.user.profile.img_url
    },
    user(){
      return this.$store.state.user.profile
    },
    state() {
      return JSON.stringify(this.$auth.$state, undefined, 2)
    }
  },
  data: function () {
    return {
      term: '',
      timeoutID: null,
      results: [],
      focusCounter: 0,
      focusTimeoutId: null,
      userProfile: {},
      email: '',
      password: ''
    }
  },
  methods:{
    hideAllPost: function(){
      this.$store.commit('story/hidePost');
      this.$store.commit('news/hideNews');
    },
    performSearch: function(keywords) {
      this.$api
        .location
        .searchAddress(keywords)
        .then((value)=> {
          this.hideAllPost();
          this.$store.commit('map/set_location', value); 
          })
        .catch((err) => {console.log(err)});
    },
    search: function() {
      this.performSearch(this.term.split(' ').join('+'));
    },
    async googleLogin(){
      await this.$auth.loginWith('google').catch(e => {
        this.$toast.show('Error', {icon: "fingerprint"});
      })
    },
    googleSignIn () {
        this.provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(this.provider).then(result => {
          // store the user ore wathever
          console.log(result)
          // this.$router.push('/')
        }).catch(e => {
          console.log(e)
        })
      }
  },
  // mounted: function (){
  //   this.$nextTick(()=>{
  //     console.log("nextTick")
  //     let userProfile = {};
  //     gapi.load('auth2,signin2', function() {
  //       let auth2 = gapi.auth2.init({
  //         client_id: '468040312422-9jeej0dqrcjis4vt0k6rt7g2lg3tsaja.apps.googleusercontent.com',
  //         fetch_basic_profile: false,
  //         scope: 'profile'
  //       });
  //       console.log(auth2.isSignedIn.get());
  //       // Sign the user in, and then retrieve their ID.
  //       if(!auth2.isSignedIn.get()){
  //         console.log(!auth2.isSignedIn.get())
  //         auth2.signIn().then(function(googleUser) {
  //           let profile = googleUser.getBasicProfile();
  //           console.log("signin profile")
  //           this.userProfile = {
  //             id: profile.getId(),
  //             name: profile.getName(),
  //             img_url: profile.getImageUrl(),
  //             email: profile.getEmail(),
  //           }
  //           console.log(userProfile)  
  //         });
  //         console.log(userProfile)  
  //         this.$store.commit('user/loginUser', userProfile);
  //         console.log("set user signed IN")
  //         this.$store.commit('user/signedIn');
  //       }
  //     });
  //   });
  // }
}
</script>
<style>
.search-bar-wrapper{
    width: 100%;
    position: absolute;
    z-index: 1000;
    margin-left:2%;
    padding:1%;
  }
.account{
  font-size: 12px;
}
.account img{
  width: 50px;
  border-radius: 50%;
  display:block;
  right: 0;
}
.account a {
  text-decoration: none;
  font-size: 14px;
}
@media screen and (min-width:1440px) {
  h1{
    padding-top:1%;
    font-size:32px;
  }
  .navi img{
    width: 40px;
    height:40px;
    margin-right:10px;
  }
  .search-bar-wrapper .input-group{
    width: 70%;
  }
}

@media screen and (max-width:1024px) {
  h1{
    padding-top:2%;
    font-size: 24px;
  }
  .navi img{
    width: 30px;
    height: 30px;
    margin-right:10px;
  } 
  .search-bar-wrapper .input-group{
    width: 80%;
  }
}

@media screen and (max-width: 411px){
  h1{
    padding-top:1%;
    font-size: 20px;
  }
  .search-bar-wrapper .input-group{
    margin-top: 1%;
  }
  .search-bar-wrapper{
    width: 100%  !important;
    margin-left:15%;
  }
  .navi img{
    width: 35px;
    height: 35px;
    margin-left: 25%;
  } 
}
</style>
