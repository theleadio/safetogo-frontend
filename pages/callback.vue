  
<template>
    <div class="container">
    <img src="~/assets/img/loading.svg" alt="Loading..." width="80px" />
    Logging in...
    </div>
</template>
<script>
export default {
    middleware: ['auth']
}
</script>

<style scoped>
.container {
  min-height: 70vh;
}
</style>