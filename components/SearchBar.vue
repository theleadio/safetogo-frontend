<template>
    <button v-on:click="count++" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
    data: function () {
    return {
      count: 0
    }
  }
}
</script>