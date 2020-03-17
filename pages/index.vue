<template>
  <div class="row">
    <div class="wrapper">
      <SearchBar />
      <Map />
      <NewForm />
      <ContentWrapper />
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import SearchBar from '~/components/SearchBar.vue'
import Map from '~/components/Map.vue'
import NewForm from '~/components/InputForm.vue'
import ContentWrapper from '~/components/ContentWrapper.vue'


export default {
  components: {
    Logo,
    SearchBar,
    Map,
    NewForm,
    ContentWrapper
  },

  data: function () {
    return {
      }
    }

}
</script>

<style>
.wrapper{
  width:100%;
}
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
