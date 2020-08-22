import './module'
import {model} from './model'
import './styles/main.css'
import {templates} from "./templates";

const site =  document.querySelector('#site');

model.forEach(block => {
    // let html;
    // const generate = templates[block.type]
    // if (generate) {
    //     html = generate(block);
    //}
    let html = block.toHtml();
    site.insertAdjacentHTML('beforeend', html); // подключает по id в конец блока
});


