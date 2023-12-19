<script setup>
const boardStore = useBoardStore();
const { done, found, guesses, endScore, time } = storeToRefs(boardStore);
</script>

<template>
    <div v-if="done" class="fixed w-full h-full flex items-center justify-center bg-gray-400/50 backdrop-blur-sm">
        <div class="md:min-w-[400px] md:min-h-[200px] bg-white rounded-xl p-12 flex flex-col">
            <div v-if="found">
                <h1 class="font-bold text-2xl mb-12">Gefeliciteerd, je hebt de code gekraakt!</h1>
                <p class="mb-4 font-bold flex items-center">
                    <div class="flex flex-1">Jouw Score</div>
                    <div class="flex-1 font-bold text-4xl flex w-full items-center justify-center">
                        <div class="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 to-green-500 p-4 rounded-xl">{{ endScore }}</div>
                    </div>
                    <div class="flex-1"></div>
                </p>
            </div>
            <div v-else-if="!found">
                <h1 class="font-bold text-2xl mb-4">Helaas!</h1>
                <p>Je hebt deze keer de code niet gekraakt. Probeer het opnieuw.</p>
            </div>

            <div class="mt-10 flex justify-center p-2 px-4 rounded-xl bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500 to-red-500 font-bold self-center text-white" @click="boardStore.setDefaults();">Nogmaals spelen!</div>
        </div>
    </div>
</template>

<style>

</style>