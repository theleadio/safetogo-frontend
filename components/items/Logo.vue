<template>
    <div class="flex items-center text-txt_primary">
        <img v-bind:class="{
            'h-6': true,
            'w-6': true,
            'md:h-12': true,
            'md:w-12': true,
            'mr-2':true,
            'object-cover':true
            }" :src="logoUrl">

        <span v-bind:class="{
                'font-semibold': true,
                'text-lg': true,
                'md:text-2xl': true,
                'tracking-tight': true,
                'text-white':true
            }">SafeToGo</span>
    </div>
</template>
<script>
import logoUrl from '~/assets/img/helmet.png';

export default {
    name: "Logo",
    data() {
        return{
            logoUrl
        }
    },
    props:{
        small: Boolean
    }
}
</script>