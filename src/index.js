import {Site} from "./clasess/site";
import {model} from './model'
import './module'
import './styles/main.css'
import {Sidebar} from "./clasess/sidebar";


const site = new Site('#site');

const updateCallBack = newBlock => {
    model.push(newBlock)
    site.render(model)
}
const sidebar = new Sidebar('#panel', updateCallBack);

site.render(model);


