<template>
  <div>
    <div class="flex mb-4">
      <div class="w-1/2 p-2 bg-gray-400 text-center">
        <img src='helmet.png' style='width:40px;' class='ml-4'/><h1 class='text-2xl ml-3 mr-3'>SafeToGo</h1>
      </div>
      <div class="w-1/2 p-2 bg-gray-500 text-center">.w-1/2</div>
    </div>
    
    <div class="flex mb-4 mt-4">
      <div class="w-1/2">
        <img src='helmet.png' style='width:40px;' class='ml-4'/><h1 class='text-2xl ml-3 mr-3'>SafeToGo</h1>
        <SearchBar />
      </div>

      <div class="w-1/2">
        half
      </div>
    </div>

    <div class="flex mb-4">
    
      <div class="w-full">
        <Map />
        <h1 class="title">
          safetogo
        </h1>
        <h2 class="subtitle">
          Hmmm Display the locations where Coronavirus cases have been reported
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SearchBar from '~/components/SearchBar.vue'
import Map from '~/components/Map.vue'


export default {
  components: {
    Logo,
    SearchBar,
    Map
  },

  data: function () {
    return {
      // markers: [
      //   {
      //     id:"penang",
      //     "latlng":[5.4164, 100.3327],
      //     "tooltip": {
      //       content:"welcome"          
      //     }
      //   },
      //   {
      //     id:"permatang-pauh",
      //     "latlng": [5.4111, 100.4133],
      //     "tooltip": {
      //       content:"welcome"          
      //     }
      //   }
      // ]
      }
    }

}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
