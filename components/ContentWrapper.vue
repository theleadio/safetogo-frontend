<template>
    <div class="container">
        <div class="row">
            <form>
                <input id="title" class="form-control form-control-sm" type="text" placeholder="Title" :value="title">
                <input id="latlng" class="form-control form-control-sm" type="text" placeholder="Latitude \& Longitude" :value="latLng" :disabled="1">
                <input id="tags" class="form-control form-control-sm" type="text" placeholder="tagging">
                <textarea id="content" class="form-control form-control-sm" type="text" placeholder="content" rows="10"></textarea>
            </form>
        </div>
    </div>  
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    computed:{
        title() {
            return this.$store.state.story.title
        },
        latLng(){
            return this.$store.state.story.latlng
        }
    }
}
</script>