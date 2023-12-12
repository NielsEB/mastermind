<script setup>
    const router = useRoute();
    // const user = useSupabaseUser();
</script>

<template>
    <div id="title" class="bg-white w-full h-20 px-4 flex items-center text-3xl text-gray-600 border-b">
        <NuxtLink to="/" class="text-base">
            <Icon name="game-icons:rolling-dices" class="text-4xl mr-2 text-black" /> Snelle Spelletjes
        </NuxtLink>
        <!-- <div v-if="router.meta.name">{{ $t(router.meta.name) }}</div> -->
    </div>

    <LanguageSwitch />
</template>

<style scoped>

</style>