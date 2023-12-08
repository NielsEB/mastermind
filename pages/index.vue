<script setup>
useHead({
    title: 'Snelle Spelletjes',
    meta: [
        {name: 'description', content: 'Snelle, korte spelletjes om je brein te trainen en even ontspannen een spel te spelen.'}
    ]
})
</script>

<template>
    <Navigation />
        
    <div class="flex gap-8 w-full p-4">
        <NuxtLink to="mastermind" class="flex flex-col  p-8 w-1/3 aspect-[16/9] border-4 border-black relative">
            <p class="text-sm italic">
                Ontrafel zo snel mogelijk de kleurencode.<br>Maar let op, elke seconde en verkeerde gok kosten je punten!
            </p>
            <div class="text-4xl mt-auto">
                <span class="font-bold text-purple-500">M</span><span class="font-bold text-yellow-500">a</span><span class="font-bold text-blue-500">s</span><span class="font-bold text-green-500">t</span>ermind
            </div>
            <div class="w-16 h-10 bg-black rounded-full absolute right-8 bottom-8 flex items-center justify-center">
                <Icon class="text-white text-xl" name="formkit:arrowright" />
            </div>
        </NuxtLink>

        <NuxtLink to="battleship" class="p-8 w-1/3 aspect-[16/9] border-4 border-black flex flex-col relative">
            <div class="text-4xl">
                <span class="font-bold">Zee</span>slag
            </div>
            <p class="mt-4 text-sm italic">
                Zeeslag!<br>Breng de vijf schepen van je tegenstander tot zinken voordat hij de jouwe naar de haaien stuurt.<br>Zoek, vuur en win dit briljante en bekende Zeeslag spel.
            </p>
            <div class="w-16 h-10 bg-black rounded-full absolute right-8 bottom-8 flex items-center justify-center">
                <Icon class="text-white text-xl" name="formkit:arrowright" />
            </div>
        </NuxtLink>

        <NuxtLink to="battleship" class="p-8 w-1/3 aspect-[16/9] border-4 border-black flex flex-col relative">
            <div class="text-4xl flex-1 flex items-center justify-center">
                <div><span class="font-bold">Y</span>ahtzee</div><Icon name="game-icons:rolling-dices" /> 
            </div>
            
            <div class="w-16 h-10 bg-black rounded-full absolute right-8 bottom-8 flex items-center justify-center">
                <Icon class="text-white text-xl" name="formkit:arrowright" />
            </div>
        </NuxtLink>
    </div>
        
    <!-- </div> -->
</template>

<style>

</style>