import PictureItem from "./pictureItem";
import TextItem from "./textItem";

export default class Factory {
    /**
     * @param {string} type
     * @param {object} parameters
     * @returns {TextItem|PictureItem}
     */
    createItem(type, parameters) {
        let item;
        switch (type.toLowerCase()) {
            case 'text':
                item = new TextItem(parameters);
                break;
            case 'picture':
                item = new PictureItem(parameters);
                break;
            default:
                throw 'Error: item type property not allowed. Saw "' + type + '" instead of "text", "picture".';
        }

        return item;
    }
}