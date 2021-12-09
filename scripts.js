
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
        this.textContent = new Date().getFullYear();
    }
});

customElements.define('time-spent', class TimeSpent extends HTMLElement {
    constructor() {
        super();
        const self = this;
        self.textContent = parseInt(localStorage.getItem('timeSpent'));
        setInterval(function() {
            self.textContent = parseInt(self.textContent) + 1;
            localStorage.setItem('timeSpent', self.textContent);
        }, 1000);
    }
});


customElements.define('render-content', class RenderContent extends HTMLElement {
    constructor() {
        super();
        const self = this;
        const model = self.dataset ? self.dataset.model : '';
        this.textContent = localStorage.getItem(model);
        setInterval(function() {
            self.textContent = localStorage.getItem(model);
        }, 100);
    }
});

customElements.define('storage-input', class StorageInput extends HTMLInputElement {
    constructor() {
        super();
        const self = this;
        const model = self.name;
        self.value = localStorage.getItem(model) || '';
        setInterval(function() {
            localStorage.setItem(model, self.value);
        }, 100);
    }
}, { extends: 'input' });