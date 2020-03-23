<template>
  <div class="row">
    <LeaflfetMap />
    <NavigationBar  />
    <SubmitForm />
    <!-- <PostList /> -->
    <Footer/>
  </div>
</template>

<script>
import LeaflfetMap from '~/components/LeaftletMap.vue'
import NavigationBar from '~/components/NavigationBar.vue'
import SubmitForm from '~/components/SubmitForm.vue'
import PostList from '~/components/PostList.vue'
import Footer from '~/components/Footer.vue'

export default {
  computed:{
  },
  components: {
    LeaflfetMap,
    NavigationBar,
    SubmitForm,
    PostList,
    Footer
  },
  data: function () {
    return {
      }
    },
  head () {
    return {
      title: "SafeToGo - Use it when you can't #stayathome"
    }
  }

}

</script>
