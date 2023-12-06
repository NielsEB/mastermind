<script setup>
const boardStore = useBoardStore();
const { undoLastColor, checkRow, resetGame} = boardStore;
const { ready } = storeToRefs(boardStore);
</script>

<template>
    <div class="flex flex-col p-2 mt-4 space-y-2">
        <div @click="undoLastColor()" class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl cursor-pointer"><Icon name="mingcute:back-2-line" /></div>
        <div @click="resetGame()" class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl cursor-pointer"><Icon name="fluent:arrow-reset-20-filled" /></div>
        <div @click="checkRow()" :class="{active: ready}" class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl pointer-events-none opacity-30 act:opacity-100 act:pointer-events-auto act:cursor-pointer"><Icon name="tabler:zoom-check" /></div>
    </div>
</template>