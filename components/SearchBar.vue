<template>
  <div class="row search-bar-wrapper">
    <div class="col-12 col-md-2">
      <div class="navi row">
        <img src="~/assets/img/helmet.png"/>
        <h1>SafeToGo</h1>
      </div>
    </div>
    <div class="col-12 col-md-10">
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
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'Search',
  data: function () {
    return {
      term: '',
      timeoutID: null,
      results: [],
      state: 'idle',
      focusCounter: 0,
      focusTimeoutId: null
    }
  },
  methods:{
    hideAllPost: function(){
      this.$store.commit('story/hidePost');
      this.$store.commit('news/hideNews');
    },
    performSearch: function(keywords) {
      this.state = 'loading';
      console.log(keywords)
      this.$api
        .location
        .searchAddress(keywords)
        .then((value)=> {
          // console.log(value);
          this.hideAllPost();
          this.$store.commit('map/set_location', value); 
          // this.$store.commit('map/setUserFocus', value);
          })
        .catch((err) => {console.log(err)});
    },
    search: function() {
      this.performSearch(this.term.split(' ').join('+'));
    },
  }
}
</script>
<style>
.search-bar-wrapper{
    width: 80%;
    position: absolute;
    z-index: 1000;
    margin-left:2%;
    padding:1%;
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
