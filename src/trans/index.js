import _ from 'lodash';

import { trans } from '../config';
import en from './en';

const terms = {
    en
}

export function detectLanguage() {

    const lang = detectLanguageFromHead();

    if(trans.locales.indexOf(lang) === -1) {
        return trans.default_locale;
    }

    return lang;
}

export function translations(lang) {

    if(trans.locales.indexOf(lang) === -1 || !_.has(terms, lang)) {
        return terms[trans.default_locale];
    }
    
    return terms[lang];
}

function detectLanguageFromHead() {
    const language = document.head.querySelector('meta[name="language"]');
    return !_.isNull(language) && language.content !== '' ? language.content : null;
}