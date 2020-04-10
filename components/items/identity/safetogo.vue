<template>
    <div class="flex justify-start">
        <div class="flex-col px-2 logo-bg" @click="toggleHowToMessage">
            <logo class="mx-auto h-8 w-8 "/>
            <div class="text-center text-xs font-medium font-sans">SafeToGo</div>
        </div>
    </div>
</template>
<script>
import Logo from '~/components/items/identity/Logo.vue';
import { mapMutations } from 'vuex';

export default {
    name:"safetogo",
    components:{
        "logo": Logo
    },
    methods:{
        ...mapMutations({
            toggleHowToMessage : "setting/toggleHowToMessage"
        })
    }
}
</script>
<style>
.logo-bg{
    background-color: rgb(255,255,255,.5);
}
</style>