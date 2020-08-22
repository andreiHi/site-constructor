export class Site {

    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    render(model) {
        this.$el.innerHTML = ''
        model.forEach(block => {
            let html = block.toHtml();
            this.$el.insertAdjacentHTML('beforeend', html); // подключает по id в конец блока
        })
    }
}
