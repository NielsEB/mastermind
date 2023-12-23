<script setup>
    const { locale } = useI18n()

    function switchLang() {
        if(this.locale == 'nl'){
            this.locale = 'en';
        } else {
            this.locale = 'nl';
        }
    }
</script>

<template>
    <div class="cursor-pointer" @click="switchLang();">
        <Icon v-if="locale === 'en'" name="twemoji:flag-england" />
        <Icon v-if="locale === 'nl'" name="twemoji:flag-netherlands" />
    </div>
</template>