<script setup>
const yahtzeeStore = useYahtzeeStore();
const { partOne, partTwo, total, scoreSheet, bonus } = storeToRefs(yahtzeeStore);
const { lockScore } = yahtzeeStore;

const partOneRows = scoreSheet.value.filter((row) => row.part == 1);
const partTwoRows = scoreSheet.value.filter((row) => row.part == 2);
</script>
<template>
    <div class="grid grid-columns-2 border-t border-gray-400 bg-white">
        <div class="flex border-b border-gray-400 h-8">
            <div class="px-4 flex-1 py-1 items-center flex border-l border-gray-400 text-xs font-bold">Deel 1</div>
            <div class="w-10 px-2 border-r border-gray-400"></div>
        </div>

        <div v-for="row in partOneRows" class="flex border-b border-gray-400 h-8">
            <div class="px-4 flex-1 py-1 items-center flex border-x border-gray-400 text-xs"><Icon class="mr-2" name="bi:dice-1"></Icon> {{ row.name }}</div>
            <div @click="lockScore(row)" :class="{'!text-black pointer-events-none font-bold': row.def}" class="w-10 px-2 border-r border-gray-400 flex items-center justify-center text-sm text-gray-400 cursor-pointer">{{ row.score }}</div>
        </div>

        <div class="flex border-b border-gray-400 h-8">
            <div class="px-4 flex-1 py-1 items-center flex border-x border-gray-400 text-xs">Totaal</div>
            <div class="w-10 px-2 border-r border-gray-400 flex items-center justify-center text-sm font-bold">{{ partOne }}</div>
        </div>
        <div class="flex border-b border-gray-400 h-8">
            <div class="px-4 flex-1  justify-center flex flex-col border-x border-gray-400 text-xs">Extra bonus<span class="text-[8px] text-gray-500 leading-3">63 punten of meer</span></div>
            <div class="w-10 px-2 border-r border-gray-400 flex items-center justify-center text-sm font-bold">{{ bonus }}</div>
        </div>
        <div class="flex border-b border-gray-400 h-8">
            <div class="px-4 flex-1 py-1 items-center flex border-x border-gray-400 text-xs font-bold">Totaal deel 1</div>
            <div class="w-10 px-2 border-r border-gray-400 flex items-center justify-center text-sm font-bold">{{ yahtzeeStore.getTotalPartOne() }}</div>
        </div>
        <div class="flex border-b border-gray-400 h-8">
            <div class="px-4 flex-1 py-1 items-center flex border-l border-gray-400 text-xs font-bold">Deel 2</div>
            <div class="w-10 px-2 border-r border-gray-400"></div>
        </div>
        <div v-for="row in partTwoRows" class="flex border-b border-gray-400 h-8">
            <div class="px-4 flex-1  justify-center flex flex-col border-x border-gray-400 text-xs">{{ row.name }}<span class="text-[8px] text-gray-500 leading-3">{{ row.subName }}</span></div>
            <div @click="lockScore(row)" :class="{'!text-black pointer-events-none font-bold': row.def}" class="w-10 px-2 border-r border-gray-400 flex items-center justify-center text-sm text-gray-400 cursor-pointer">{{ row.score }}</div>
        </div>
        <div class="flex border-b border-gray-400 h-8">
            <div class="px-4 flex-1 py-1 items-center flex border-x border-gray-400 text-xs font-bold">Totaal deel 1</div>
            <div class="w-10 px-2 border-r border-gray-400 flex items-center justify-center text-sm font-bold">{{ yahtzeeStore.getTotalPartOne() }}</div>
        </div>
        <div class="flex border-b border-gray-400 h-8">
            <div class="px-4 flex-1 py-1 items-center flex border-x border-gray-400 text-xs font-bold">Totaal deel 2</div>
            <div class="w-10 px-2 border-r border-gray-400 flex items-center justify-center text-sm font-bold">{{ partTwo }}</div>
        </div>
        <div class="flex border-b border-gray-400 h-8">
            <div class="px-4 flex-1 py-1 items-center flex border-x border-gray-400 text-xs font-bold">Eindscore</div>
            <div class="w-10 px-2 border-r border-gray-400 flex items-center justify-center text-sm font-bold">{{ total }}</div>
        </div>
    </div>
</template>