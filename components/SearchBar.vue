<template>
  <div class="row search-bar">
    <div class="col-8">
      <input
          v-model="term"
          type="text"
          class="form-control"
          :placeholder="'Search' + '...'"
        />
    </div>
    <div class="col-2">
      <button v-on:click="search" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
    </div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  name: 'Search',
  data: function () {
    return {
      term:''
    }
  },
  methods:{
    performSearch: function(keywords) {
      this.$api
        .location
        .searchAddress(keywords)
        .then((value)=> {
          console.log(value);
          this.$store.commit('map/set_location', value); 
          })
        .catch((err) => {console.log(err)});
    },
    search: function() {
      this.performSearch(this.term.split(' ').join('+'));
    }
  }
}
</script>
