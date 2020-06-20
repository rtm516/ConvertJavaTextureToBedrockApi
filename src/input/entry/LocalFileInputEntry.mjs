import {BufferInputEntry} from "./BufferInputEntry.mjs";
import {parse} from "path";
import {readFile} from "fs/promises";

/**
 * Class LocalFileInputEntry
 */
class LocalFileInputEntry extends BufferInputEntry {
    /**
     * @inheritDoc
     *
     * @param {string} path
     */
    constructor(path) {
        super(Buffer.alloc(0)); // `await readFile(path)` not works here without change the usage of this class

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
    async applyToFolder(folder) {
        await this.read();

        await super.applyToFolder(folder);
    }

    /**
     * @inheritDoc
     */
    async applyToZip(zip) {
        await this.read();

        await super.applyToZip(zip);
    }

    /**
     * @inheritDoc
     */
    async getName() {
        return parse(this.path).name; // Name without file extension
    }

    /**
     * @returns {Promise<void>}
     *
     * @protected
     */
    async read() {
        if (this.buffer.byteLength === 0) {
            this.log.log(`Read ${this.path}`);

            this.buffer = await readFile(this.path);
        }
    }
}

export {LocalFileInputEntry};
