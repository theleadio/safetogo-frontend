<template>
    <div class="absolute left-0 md:center-0 lg:center-0 w-full top-layer">
        <div class="md:px-4 lg:px-4 xl:px-4">
            <div class="bg-white-400 border-b-2 shadow-2xl p-3 rounded-b-sm">
                <ul class="border-t-2 border-gray-300">
                    <li class="pt-2 pl-2 text-sm font-sans"
                        v-for="keyword in suggestKeywords"
                        :key="keyword.id"
                        v-on:click="callback(keyword.name)"
                     >
                        <span class="font-semibold">
                            {{keyword.name}}
                        </span>
                        <span class="text-xs font-medium text-gray-600 ">
                            (id: {{keyword.id}})
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
.top-layer{
    z-index: 500;
}
</style>
<script>

export default {
    props:{
        keywords: Array,
        callback: Function
    }
}
</script>