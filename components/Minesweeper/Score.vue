<script setup>
const minesweeperStore = useMinesweeperStore();
const { mines, time, markMines } = storeToRefs(minesweeperStore);
</script>

<template>
    <div class="bg-white flex rounded-xl gap-4 mb-4 p-4">
        <div class="w-16 h-8 bg-gray-200 rounded text-red-600 flex items-center justify-center font-bold text-2xl">
            {{ minesweeperStore.getFormattedMineCount(mines) }}
        </div>

        <div class="w-28 h-8 px-6 flex">
            <div @click="markMines = !markMines" :class="{'active': markMines}" class="bg-gray-200 flex-1 rounded-full cursor-pointer flex act:justify-end">
                <div class="m-1 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                    <Icon :class="{'active': !markMines}" class="!hidden act:!block" name="carbon:checkmark-filled" />
                    <Icon :class="{'active': markMines}" class="!hidden act:!block" name="solar:flag-bold" />
                </div>
            </div>
        </div>
        
        <div class="w-16 h-8 bg-gray-200 rounded text-red-600 flex items-center justify-center font-bold text-2xl">
            {{ minesweeperStore.getFormattedTime(time) }}
        </div>
    </div>
</template>