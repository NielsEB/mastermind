<script setup>
definePageMeta({
    name: 'yahtzee',
});

useHead({
    title: 'Yahtzee',
    meta: [
        {name: 'description', content: 'Yahtzee is een spel dat wordt gespeeld met vijf dobbelstenen en een scoreblok. Elke speler laat tijdens zijn beurt de dobbelstenen rollen en probeert zo bepaalde combinaties te bekomen waarmee hij punten scoort.'}
    ]
})
</script>

<template>
    <Navigation />

    <Yahtzee />
</template>