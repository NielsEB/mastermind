<script setup>
const boardStore = useBoardStore();
const { setColor } = boardStore;
</script>

<template>
    <div class="bg-white rounded-xl md:rounded-none md:rounded-tl-xl md:rounded-bl-xl flex md:flex-col items-center justify-center py-4 px-4 md:px-0 shrink-0">
        <div @click="setColor(0)" class="rounded-full w-8 h-8 bg-yellow-500 mr-4 md:mb-4 md:mr-0"></div>
        <div @click="setColor(1)" class="rounded-full w-8 h-8 bg-orange-500 mr-4 md:mb-4 md:mr-0"></div>
        <div @click="setColor(2)" class="rounded-full w-8 h-8 bg-red-500 mr-4 md:mb-4 md:mr-0"></div>
        <div @click="setColor(3)" class="rounded-full w-8 h-8 bg-purple-500 mr-4 md:mb-4 md:mr-0"></div>
        <div @click="setColor(4)" class="rounded-full w-8 h-8 bg-blue-500 mr-4 md:mb-4 md:mr-0"></div>
        <div @click="setColor(5)" class="rounded-full w-8 h-8 bg-green-500"></div>
    </div>
</template>