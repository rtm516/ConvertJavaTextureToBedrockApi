import {ArrayInput} from "./ArrayInput.mjs";
import {AbstractInputEntry} from "./entry/AbstractInputEntry.mjs";

/**
 * Class Input
 */
class Input extends ArrayInput {
    /**
     * @inheritDoc
     *
     * @param {AbstractInputEntry} entry
     */
    constructor(entry) {
        super([entry]);
    }
}

export {Input};
