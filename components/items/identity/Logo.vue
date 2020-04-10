<template>
    <div>
        <img v-bind:class="{
            'h-full': true,
            'w-full': true,
            'object-cover':true,
            'cursor-pointer':true
            }" src="~/assets/img/helmet.png">
    </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
    name: "Logo"
}
</script>