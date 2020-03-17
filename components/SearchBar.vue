<template>
  <div class="row search-bar">
    <div class="col-8">
      <div class="input-group">
        <input
          v-on:keyup.enter="search"
          v-model="term"
          type="text"
          class="form-control"
          :placeholder="'Search' + '...'"
          />
        <div class="input-group-append">
            <button v-on:click="search" class="btn btn-primary">
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
    performSearch: function(keywords) {
      this.state = 'loading';
      console.log(keywords)
      this.$api
        .location
        .searchAddress(keywords)
        .then((value)=> {
          console.log(value);
          this.$store.commit('map/set_location', value); 
          this.$store.commit('map/setUserFocus', value);
          })
        .catch((err) => {console.log(err)});
    },
    search: function() {
      this.performSearch(this.term.split(' ').join('+'));
    },
  }
}
</script>
