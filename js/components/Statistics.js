class Statistics {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = document.querySelector(this.selector);
        this.init();
    }

    init() {
        this.render()
    }

    generate(data) {
        return `<div class="count-col">
            <div class="count-content">
                <div class="count-icon ${data.icon}"></div>
                <div class="count-num">${data.count}</div>
                <div class="count-text">${data.text}</div>
            </div>
        </div>`

    }

    render() {
        let HTML = '';

        for (const content of this.data) {
            HTML += this.generate(content);
        }

        this.DOM.innerHTML += HTML;

    }
}

export { Statistics }