<template>
    <div>
        <nav v-bind:class="{
                'flex': true, 
                'items-center': true, 
                'flex-wrap': true, 
                'bg-black':true, 
                'border-b-black':true,
                'shadow-nav':true,
                'py-3':true,
                'pt-1':true,
                'transition': true,
                'duration-200': true
        }">
            <div class="justify-between w-full flex items-center lg:px-10">
                <Logo class="mx-3 lg:mr-10 lg:flex" :small="true"/>
                <SearchInput 
                    :placeHolder="'Search here'"
                    class="sm:w-3/5 md:w-3/5 lg:w-3/5" />
                <UserProfile />
            </div>
        </nav>
    </div>
</template>
<script>
import Logo from "~/components/items/Logo.vue";
import SearchInput from '~/components/items/SearchInput.vue'
import UserProfile from '~/components/items/UserProfile.vue'

export default {
    components:{
        Logo,
        SearchInput,
        UserProfile
    },
    data: function() {
      return {
        showSideBar: true,
      }
    },
    props:{
        // path: Array
    }
}
</script>