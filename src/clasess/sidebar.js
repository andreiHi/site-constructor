import {TextBlock, TitleBlock} from "./block";

export class Sidebar {
    constructor(selector, update) {
        this.$el = document.querySelector(selector)
        this.update = update
        this.init();
    }

    init() {
        this.$el.addEventListener('submit', this.addBlock.bind(this))
        this.$el.innerHTML = this.template
    }

    get template() {
        return [
            block('text'),
            block('title')
        ].join('')
    }

    addBlock(event) {
        event.preventDefault()
        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value
        //debugger
        const Constructor = type === 'text' ? TextBlock : TitleBlock
        let newBlock = new Constructor(value, {styles});
        console.log(newBlock)
        this.update(newBlock)

        event.target.value.value = '';
        event.target.styles.value = '';
    }
}

function block(type) {
    return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `
}
