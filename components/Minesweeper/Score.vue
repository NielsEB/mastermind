<script setup>
const minesweeperStore = useMinesweeperStore();
const { mines, time } = storeToRefs(minesweeperStore);
</script>

<template>
    <div class="bg-white flex rounded-xl gap-4 mb-4 p-4">
        <div class="w-16 h-8 bg-gray-200 rounded text-red-600 flex items-center justify-center font-bold text-2xl">
            {{ minesweeperStore.getFormattedMineCount(mines) }}
        </div>

        <div class="w-28 h-8 flex">
            <div class="bg-gray-100 flex-1 rounded-full">

            </div>
        </div>
        
        <div class="w-16 h-8 bg-gray-200 rounded text-red-600 flex items-center justify-center font-bold text-2xl">
            {{ minesweeperStore.getFormattedTime(time) }}
        </div>
    </div>
</template>