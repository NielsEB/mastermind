<script setup>
definePageMeta({
    name: 'minesweeper',
});

useHead({
    title: 'Mijnenveger',
    meta: [
        {name: 'description', content: 'Probeer zo snel mogelijk alle vakjes waar zich geen mijn bevindt te identificeren.'}
    ]
})
</script>

<template>
    <Navigation />

    <Minesweeper />
</template>