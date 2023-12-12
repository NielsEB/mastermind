<script setup>
const boardStore = useBoardStore();
const { undoLastColor, checkRow, resetGame} = boardStore;
const { ready } = storeToRefs(boardStore);
</script>

<template>
    <div class="flex md:flex-col justify-center w-full p-2 md:mt-4 md:space-y-2 bg-white md:bg-transparent rounded-b-xl md-rounded-0">
        <div @click="undoLastColor()" class="border mr-2 md:mr-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl cursor-pointer"><Icon name="mingcute:back-2-line" /></div>
        <div @click="resetGame()" class="border mr-2 md:mr-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl cursor-pointer"><Icon name="fluent:arrow-reset-20-filled" /></div>
        <div @click="checkRow()" :class="{active: ready}" class="border w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl pointer-events-none opacity-30 act:opacity-100 act:pointer-events-auto act:cursor-pointer"><Icon name="tabler:zoom-check" /></div>
    </div>
</template>