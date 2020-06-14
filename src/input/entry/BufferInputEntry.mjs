import {AbstractInputEntry} from "./AbstractInputEntry.mjs";
import {dirname, join} from "path";
import JSZip from "jszip";
import {mkdir, writeFile} from "fs/promises";

/**
 * Class BufferInputEntry
 */
class BufferInputEntry extends AbstractInputEntry {
    /**
     * @inheritDoc
     *
     * @param {Buffer|ArrayBufferOutput|Uint8Array} buffer
     */
    constructor(buffer) {
        super();

        /**
         * @type {Buffer|ArrayBufferOutput|Uint8Array}
         *
         * @protected
         */
        this.buffer = buffer;
    }

    /**
     * @inheritDoc
     */
    async applyToFolder(folder) {
        this.log.log(`Extract zip`);

        let zip = new JSZip();

        zip = await zip.loadAsync(this.buffer);

        for (const entry of Object.values(zip.files)) {
            const destPath = join(folder, entry.name);

            if (entry.dir) {
                await mkdir(destPath, {recursive: true}); // Empty folders
            } else {
                await mkdir(dirname(destPath), {recursive: true});
                await writeFile(destPath, await zip.file(entry.name).async("nodebuffer"));
            }
        }
    }

    /**
     * @inheritDoc
     */
    async applyToZip(zip) {
        this.log.log(`Read zip`);

        let zip2 = new JSZip();

        zip2 = await zip2.loadAsync(this.buffer);

        for (const entry of Object.values(zip2.files)) {
            const destPath = entry.name;

            if (entry.dir) {
                zip.folder(destPath); // Empty folders
            } else {
                zip.file(destPath, await zip2.file(entry.name).async("nodebuffer"));
            }
        }
    }

    /**
     * @inheritDoc
     */
    async getName() {
        return ""; // No name available from buffer
    }
}

export {BufferInputEntry};
