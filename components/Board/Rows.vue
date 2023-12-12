<script setup>
const boardStore = useBoardStore();
const { answer, rows, guesses, done, found } = storeToRefs(boardStore);
</script>

<template>
    <div class="bg-white rounded-xl md:rounded-none md:rounded-tr-xl md:rounded-br-xl md:rounded-bl-xl py-2">
        <div class="flex p-4 py-2 items-center" v-for="(row, index) in rows">
            <div class="text-gray-400 mr-6 flex justify-center w-4">{{ index + 1 }}</div>
            <div class="w-8 h-8 rounded-full mr-4" :class="boardStore.getColor(row.colors[0]) ?? 'bg-gray-200'"></div>
            <div class="w-8 h-8 rounded-full mr-4" :class="boardStore.getColor(row.colors[1]) ?? 'bg-gray-200'"></div>
            <div class="w-8 h-8 rounded-full mr-4" :class="boardStore.getColor(row.colors[2]) ?? 'bg-gray-200'"></div>
            <div class="w-8 h-8 rounded-full mr-8" :class="boardStore.getColor(row.colors[3]) ?? 'bg-gray-200'"></div>

            <div class="flex flex-col w-8 h-8">
                <div class="flex mb-2">
                    <div class="w-3 h-3 mr-2 bg-gray-200 rounded-full" 
                        :class="{
                            'bg-red-500': (row.score[0] == '1'),
                            'bg-white border border-gray-200': (row.score[0] == '2'),
                        }"></div>
                    <div class="w-3 h-3 bg-gray-200 rounded-full"
                        :class="{
                            'bg-red-500': (row.score[1] == '1'),
                            'bg-white border border-gray-200': (row.score[1] == '2'),
                        }"></div>
                </div>
                <div class="flex">
                    <div class="w-3 h-3 mr-2 bg-gray-200 rounded-full"
                        :class="{
                            'bg-red-500': (row.score[2] == '1'),
                            'bg-white border border-gray-200': (row.score[2] == '2'),
                        }"></div>
                    <div class="w-3 h-3 bg-gray-200 rounded-full"
                        :class="{
                            'bg-red-500': (row.score[3] == '1'),
                            'bg-white border border-gray-200': (row.score[3] == '2'),
                        }"></div>
                </div>
            </div>
        </div>
    </div>
</template>