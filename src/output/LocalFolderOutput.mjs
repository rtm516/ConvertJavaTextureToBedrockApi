import {AbstractOutput} from "./AbstractOutput.mjs";
import {copyFile, mkdir, readdir, readFile, rename, rmdir, stat, writeFile} from "fs/promises";
import {dirname, join} from "path";
import {existsSync} from "fs";

/**
 * Class LocalFolderOutput
 */
class LocalFolderOutput extends AbstractOutput {
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
    async _init(input, log) {
        await super._init(input, log);

        if (await this.exists(".")) {
            this.log.log(`Remove exists output`);

            await this.delete(".");
        }
    }

    /**
     * @inheritDoc
     */
    async applyInputEntry(entry) {
        await entry.applyToFolder(this.path);
    }

    /**
     * @inheritDoc
     */
    async generate() {
        this.log.log(`Output: ${this.path}`);

        return this.path;
    }

    /**
     * @inheritDoc
     */
    async exists(path) {
        return existsSync(this.p(path));
    }

    /**
     * @inheritDoc
     */
    async rename(from, to) {
        if (await this.output.exists(to)) {
            await this.delete(to);
        }

        await rename(this.p(from), this.p(to));
    }

    /**
     * @inheritDoc
     */
    async read(file) {
        return readFile(this.p(file));
    }

    /**
     * @inheritDoc
     */
    async write(file, data) {
        await mkdir(dirname(this.p(file)), {recursive: true});
        await writeFile(this.p(file), data);
    }

    /**
     * @inheritDoc
     */
    async delete(path) {
        await rmdir(this.p(path), {recursive: true});
    }

    /**
     * @inheritDoc
     */
    async copy(from, to) {
        if ((await stat(this.p(from))).isDirectory()) {
            await this.copyScanFiles(from, to);
        } else {
            await mkdir(this.p(dirname(to)), {recursive: true});
            await copyFile(this.p(from), this.p(to));
        }
    }

    /**
     * @param {string} from
     * @param {string} to
     *
     * @returns {Promise<void>}
     *
     * @private
     */
    async copyScanFiles(from, to) {
        for (const dirent of await readdir(this.p(from), {withFileTypes: true})) {
            if (dirent.isDirectory()) {
                await mkdir(this.p(to, dirent.name), {recursive: true});
                await this.copyScanFiles(join(from, dirent.name), join(to, dirent.name));
            } else {
                await mkdir(this.p(to), {recursive: true});
                await copyFile(this.p(from, dirent.name), this.p(to, dirent.name));
            }
        }
    }

    /**
     * @param {string} p
     *
     * @returns {string}
     *
     * @protected
     */
    p(...p) {
        return join(this.path, ...p);
    }
}

export {LocalFolderOutput};
