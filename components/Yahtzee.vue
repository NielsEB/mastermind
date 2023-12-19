<script setup>
const yahtzeeStore = useYahtzeeStore();

yahtzeeStore.setDefaults();
</script>

<template>
    <YahtzeeHolder />

    <YahtzeeResult />
</template>

<style>

</style>
