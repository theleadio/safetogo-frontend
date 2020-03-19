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
        <!-- <p>{{ $auth.refreshToken.get() || '-' }}></p> -->
        <button class="btn btn-outline-primary" @click="googleSignIn"><i class="fab fa-google">  Sign In</i></button>
      </div>
    </div>

  </div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'Search',
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
    googleSignIn () {
        this.provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(this.provider).then(result => {
          // store the user ore wathever
          console.log(result["additionalUserInfo"]["profile"])
          let profile = result["additionalUserInfo"]["profile"];
          this.$store.commit('user/loginUser', {
            id: profile["id"],
            name: profile["name"],
            img_url: profile["picture"],
            email: profile["email"]
          })
          // this.$router.push('/')
        }).catch(e => {
          console.log(e)
        })
      }
  },
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
