<script setup>
useHead({
    htmlAttrs: {
        lang: 'nl' // TODO: GET THIS FROM LOCALE
    }
})
</script>
<template>
    <div id="applicationHolder" class="min-h-screen w-full flex-1 flex flex-col">
        <slot />
    </div>
</template>

<style>
html,body, #__nuxt, #__layout{
    height:100%!important;
    width: 100%!important;
    font-family: 'Montserrat', sans-serif;
}

#__nuxt {
    white-space: pre-line;
}
</style>