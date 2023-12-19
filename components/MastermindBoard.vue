<script setup>
const boardStore = useBoardStore();

boardStore.setDefaults();
</script>

<template>
    <BoardHolder />

    <BoardResult />
</template>

<style>

</style>
