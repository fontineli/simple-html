
'use strict';

window.onload = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
        console.info('serviceWorker loaded!');
    }
}


customElements.define('current-year', class CurrentYear extends HTMLElement {
    constructor() {
        super();
        this.textContent = (new Date()).getFullYear();
    }
});