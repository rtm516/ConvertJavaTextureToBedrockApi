import {AbstractInputEntry} from "./AbstractInputEntry.mjs";
import {copyFile, mkdir, readdir, readFile} from "fs/promises";
import {join, parse} from "path";
import JSZip from "jszip";

/**
 * Class LocalFolderInputEntry
 */
class LocalFolderInputEntry extends AbstractInputEntry {
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
    async applyToFolder(folder) {
        this.log.log(`Copy ${this.path}`);

        await this.applyToFolderScanFiles(this.path, folder);
    }

    /**
     * @param {string} from
     * @param {string} to
     *
     * @returns {Promise<void>}
     *
     * @private
     */
    async applyToFolderScanFiles(from, to) {
        for (const dirent of await readdir(from, {withFileTypes: true})) {
            if (dirent.isDirectory()) {
                await mkdir(join(to, dirent.name), {recursive: true});
                await this.applyToFolderScanFiles(join(from, dirent.name), join(to, dirent.name));
            } else {
                await mkdir(to, {recursive: true});
                await copyFile(join(from, dirent.name), join(to, dirent.name));
            }
        }
    }

    /**
     * @inheritDoc
     */
    async applyToZip(zip) {
        this.log.log(`Pack ${this.path}`);

        await this.applyToZipScanFiles(zip, ".");

    }

    /**
     * @param {JSZip} zip
     * @param {string} p
     *
     * @returns {Promise<void>}
     *
     * @private
     */
    async applyToZipScanFiles(zip, p) {
        for (const dirent of await readdir(join(this.path, p), {withFileTypes: true})) {
            const destPath = join(p, dirent.name).replace(/\\/g, "/");

            if (dirent.isDirectory()) {
                zip.folder(destPath); // Empty folders
                await this.applyToZipScanFiles(zip, destPath);
            } else {
                zip.file(destPath, await readFile(join(this.path, destPath)));
            }
        }
    }

    /**
     * @inheritDoc
     */
    async getName() {
        return parse(this.path).name; // Name without file extension
    }
}

export {LocalFolderInputEntry};
