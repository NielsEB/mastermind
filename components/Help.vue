<script setup>
const open = ref(false);
</script>

<template>
    <div @click="open = !open" class="mr-4 text-2xl cursor-pointer">
        <Icon name="fxemoji:blackquestionmark" />
    </div>
    <div :class="{'active': open}" class="hidden act:block fixed text-xs left-0 top-0 w-screen min-h-screen bg-white z-10 p-4 md:p-16 md:text-base">
        <slot></slot>
        <div @click="open = !open" class="absolute top-2 md:top-4 right-2 md:right-4 text-2xl cursor-pointer">
            <Icon name="iconamoon:close" />
        </div>
    </div>
</template>