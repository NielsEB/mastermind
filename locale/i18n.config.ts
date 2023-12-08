import en from './languages/en.json'
import nl from './languages/nl.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'nl',
    messages: {
        en,
        nl
    }
}))