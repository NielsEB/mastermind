<script setup>
definePageMeta({
    name: 'mastermind',
});

useHead({
    title: 'Mastermind',
    meta: [
        {name: 'description', content: 'Speel Mastermind op Snelle Spelletjes. Vind de juiste kleurencode en versla je record.'}
    ]
})
</script>

<template>
    <Navigation />

    <Board />
</template>