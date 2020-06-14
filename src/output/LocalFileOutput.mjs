import {BufferOutput} from "./BufferOutput.mjs";
import {dirname} from "path";
import {mkdir, writeFile} from "fs/promises";

/**
 * Class LocalFileOutput
 */
class LocalFileOutput extends BufferOutput {
    /**
     * @inheritDoc
     *
     * @param {string} path
     */
    constructor(path) {
        super();

        /**
         * @type {string}
         *
         * @protected
         */
        this.path = path;
    }

    /**
     * @inheritDoc
     */
    async generate() {
        const data = await super.generate();

        this.log.log(`Write ${this.path}`);

        await mkdir(dirname(this.path), {recursive: true});
        await writeFile(this.path, data);

        return this.path;
    }
}

export {LocalFileOutput};
