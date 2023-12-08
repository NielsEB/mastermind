<template>
    <div id="applicationHolder" class="w-full h-full flex-1 overflow-hidden flex flex-col">
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