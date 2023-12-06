<script setup>
const boardStore = useBoardStore();
const { setColor } = boardStore;
</script>

<template>
    <div class="bg-white rounded-tl-xl rounded-bl-xl flex flex-col items-center justify-center py-4">
        <div @click="setColor(0)" class="rounded-full w-8 h-8 bg-yellow-500 mb-4"></div>
        <div @click="setColor(1)" class="rounded-full w-8 h-8 bg-orange-500 mb-4"></div>
        <div @click="setColor(2)" class="rounded-full w-8 h-8 bg-red-500 mb-4"></div>
        <div @click="setColor(3)" class="rounded-full w-8 h-8 bg-purple-500 mb-4"></div>
        <div @click="setColor(4)" class="rounded-full w-8 h-8 bg-blue-500 mb-4"></div>
        <div @click="setColor(5)" class="rounded-full w-8 h-8 bg-green-500"></div>
    </div>
</template>