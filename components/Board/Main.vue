<script setup>
const boardStore = useBoardStore();
const { answer, peak, time } = storeToRefs(boardStore);

function togglePeak() {
    this.peak = !this.peak;
}
</script>

<template>
    <div class="ml-4">
        <BoardRows />

        <div class="mt-4 bg-white flex p-4 rounded-xl items-center">
            <span class="w-10" @click="togglePeak()"><Icon name="mdi:eye-outline" /></span>
            <div :class="{active: peak}" class="flex items-center gap-4 justify-center">
                <div class="w-8 h-8 rounded-full" v-for="(color, index) in answer" :class="!peak ? 'bg-gray-200' : boardStore.getColor(color)"></div>
            </div>
        </div>
    </div>
</template>