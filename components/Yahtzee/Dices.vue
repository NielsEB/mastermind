<script setup>
const yahtzeeStore = useYahtzeeStore();
const { dices, turn } = storeToRefs(yahtzeeStore);
const { rollDices } = yahtzeeStore;
</script>
<template>
    <div class="flex flex-col md:mr-8">
        <div class="flex md:flex-col text-6xl bg-white self-start p-4 rounded-xl gap-4">
            <div v-for="dice in dices" class="flex relative pr-4">
                <Icon :name="yahtzeeStore.getDice(dice.number)"></Icon>
                <div @click="dice.locked = !dice.locked" :class="{active: turn != 0}" class="flex items-center justify-center pointer-events-none opacity-30 act:opacity-100 act:pointer-events-auto act:cursor-pointer absolute w-4 h-4 rounded border border-gray-300 right-[-9px] top-[22px]">
                    <Icon v-if="dice.locked" class="text-[10px]" name="fluent-emoji-high-contrast:locked"></Icon>
                </div>
            </div>
        </div>
        <div class="mt-4 flex justify-center">
            <div :class="{active: turn != 3}" @click="rollDices()" class="text-4xl flex p-4 shadow hover:shadow-none bg-white border rounded-xl pointer-events-none opacity-30 act:opacity-100 act:pointer-events-auto act:cursor-pointer">
                <Icon name="game-icons:rolling-dice-cup" />
            </div>
        </div>
    </div>
</template>