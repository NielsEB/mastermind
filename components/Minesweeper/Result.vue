<script setup>
const minesweeperStore = useMinesweeperStore();
const { done, total, success } = storeToRefs(minesweeperStore);
</script>

<template>
    <div v-if="done" class="fixed w-full h-full flex items-center justify-center bg-gray-400/50 backdrop-blur-sm p-4">
        <div class="md:min-w-[400px] md:min-h-[200px] bg-white rounded-xl p-12 flex flex-col">
            <div v-if="success">
                <h1 class="font-bold text-2xl mb-12">Je hebt alle mijnen gevonden!</h1>
                <div class="mb-4 font-bold flex items-center">
                    <div class="flex flex-1">Jouw Score</div>
                    <div class="flex-1 font-bold text-4xl flex w-full items-center justify-center">
                        <div class="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 to-green-500 p-4 rounded-xl">{{ total }}</div>
                    </div>
                    <div class="flex-1"></div>
                </div>
            </div>
            <div v-if="!success">
                <h1 class="font-bold text-2xl mb-12">Helaas, je bent op een mijn gaan staan.</h1>
            </div>
            <div class="mt-10 flex justify-center p-2 px-4 rounded-xl bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500 to-red-500 font-bold self-center text-white" @click="minesweeperStore.setDefaults();">Nogmaals spelen!</div>
        </div>
    </div>
</template>

<style>

</style>