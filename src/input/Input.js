import {ArrayInput} from "./ArrayInput";
import {AbstractInputEntry} from "./entry/AbstractInputEntry";

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
