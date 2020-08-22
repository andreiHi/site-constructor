import {col, row} from "./util";
import {Block} from "./clasess/block";

function title(block) {
    return block.toHtml();
}

function text(block) {
    return block.toHtml();
}

function textColumns(block) {
    return block.toHtml();
}

function image(block) {
    return block.toHtml();
}

export const templates = {title, text, textColumns, image};
