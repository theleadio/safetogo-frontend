<template>
  <div class="row">
    <LeaflfetMap />
    <NavigationBar  />
    <SubmitForm />
    <!-- <div class="wrapper"> -->
      <!-- <SearchBar />
      <Map />
      <NewForm />
      <ContentWrapper /> -->
  </div>
</template>

<script>
import LeaflfetMap from '~/components/LeaftletMap.vue'
import NavigationBar from '~/components/NavigationBar.vue'
import SubmitForm from '~/components/SubmitForm.vue'

export default {
  computed:{
  },
  components: {
    LeaflfetMap,
    NavigationBar,
    SubmitForm
  },
  data: function () {
    return {
      }
    }

}

</script>

<style>
 
</style>
