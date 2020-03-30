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
                <!-- <button class="
                bg-transparent 
                font-semibold 
                text-white-300 
                border 
                border-white-300 
                py-1 
                px-3
                rounded-sm
                text-xs
                hover:border-white-400
                hover:text-white-400">
                    Sign Out
                </button> -->
            </div>
        </nav>
    </div>
</template>
<script>
import Logo from "~/components/items/Logo.vue";
import SearchInput from '~/components/items/SearchInput.vue'
import UserProfile from '~/components/items/UserProfile.vue'
import { mapMutations } from 'vuex'

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
    },
    methods:{
        ...mapMutations({
            toggle: "setting/toggleSidebar"
        })
    }
}
</script>