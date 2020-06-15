import {BufferInputEntry} from "./BufferInputEntry.mjs";
import {dirname, join, parse, sep} from "path";
import {mkdir, writeFile} from "fs/promises";

/**
 * Class FileInputEntry
 */
class FileInputEntry extends BufferInputEntry {
    /**
     * @inheritDoc
     */
    async applyToFolder(folder) {
        if (this.buffer.webkitRelativePath) {
            // File is part of selected folder
            this.log.log(`Extract`);

            let destPath = this.buffer.webkitRelativePath.split(sep);
            destPath.shift();
            destPath = join([folder, ...destPath]);

            await mkdir(dirname(destPath), {recursive: true});
            await writeFile(destPath, this.buffer);
        } else {
            // File is a normal Buffer
            await super.applyToFolder(folder);
        }
    }

    /**
     * @inheritDoc
     */
    async applyToZip(zip) {
        if (this.buffer.webkitRelativePath) {
            // File is part of selected folder
            let destPath = this.buffer.webkitRelativePath.split(sep);
            destPath.shift();
            destPath = destPath.join(sep);

            this.log.log(`Pack ${destPath}`);

            zip.file(destPath, this.buffer);
        } else {
            // File is a normal Blob
            await super.applyToZip(zip);
        }
    }

    /**
     * @inheritDoc
     */
    async getName() {
        if (this.buffer.webkitRelativePath) {
            return this.buffer.webkitRelativePath.split(sep).shift(); // First folder is the name of selected folder
        } else {
            return parse(this.buffer.name).name; // Name without file extension
        }
    }
}

export {FileInputEntry};
