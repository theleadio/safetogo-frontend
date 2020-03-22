<template>
  <div class="row">
    <LeaflfetMap />
    <NavigationBar  />
    <SubmitForm />
    <!-- <PostList /> -->
  </div>
</template>

<script>
import LeaflfetMap from '~/components/LeaftletMap.vue'
import NavigationBar from '~/components/NavigationBar.vue'
import SubmitForm from '~/components/SubmitForm.vue'
import PostList from '~/components/PostList.vue'

export default {
  computed:{
  },
  components: {
    LeaflfetMap,
    NavigationBar,
    SubmitForm,
    PostList
  },
  data: function () {
    return {
      }
    }

}

</script>
