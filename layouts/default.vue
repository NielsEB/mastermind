<template>
    <div id="applicationHolder" class="w-full h-full flex-1 overflow-hidden flex flex-col bg-gray-100">
        <slot />
    </div>
</template>

<style>
html,body, #__nuxt, #__layout{
    height:100%!important;
    width: 100%!important;
    font-family: 'Raleway', sans-serif;
}
</style>