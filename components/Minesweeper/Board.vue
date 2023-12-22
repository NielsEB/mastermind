<script setup>
const minesweeperStore = useMinesweeperStore();
const { grid } = storeToRefs(minesweeperStore);
</script>

<template>
    <div class="p-4 bg-white rounded-xl">
        <div></div>
        <div class="gap-1 grid grid-cols-10">
            <div v-for="(row, x) in grid" :key="row" class="grid gap-1">
                <div @click="minesweeperStore.checkCell(x,y)" v-for="(cell, y) in row" :key="cell" class="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xl cursor-pointer" :class="{'bg-gray-50': cell.revealed}">
                    <Icon v-if="cell.revealed && cell.isMine" name="mdi:mine" />
                    <div class="flex items-center justify-center font-bold text-sm" v-if="cell.revealed && !cell.isMine && cell.count">{{ cell.count }}</div>
                </div>
            </div>
            
        </div>
    </div>
</template>