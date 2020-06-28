import {AbstractInput} from "../input/AbstractInput.mjs";
import {AbstractInputEntry} from "../input/entry/AbstractInputEntry.mjs";
import {AbstractLog} from "../log/AbstractLog.mjs";
import {Options} from "../Options.mjs";

/**
 * Class AbstractOutput
 *
 * @abstract
 */
class AbstractOutput {
    /**
     * AbstractOutput constructor
     *
     * @throws {Error}
     */
    constructor() {
        if (this.constructor === AbstractOutput) {
            throw new Error("Can't instantiate abstract class!");
        }

        /**
         * @type {AbstractInput}
         *
         * @protected
         */
        this.input;
        /**
         * @type {AbstractLog}
         *
         * @protected
         */
        this.log;
        /**
         * @type {Object}
         *
         * @protected
         */
        this.options;
    }

    /**
     * @param {AbstractInput} input
     * @param {AbstractLog} log
     * @param {Options} options
     *
     * @returns Promise<void>
     */
    async _init(input, log, options) {
        this.input = input;
        this.log = log;
        this.options = options;
    }

    /**
     * @param {AbstractInputEntry} entry
     *
     * @returns {Promise<void>}
     *
     * @throws {Error}
     *
     * @abstract
     */
    async applyInputEntry(entry) {

    }

    /**
     * @returns {Promise<*>}
     *
     * @throws {Error}
     *
     * @abstract
     */
    async generate() {

    }

    /**
     * @param {string} path
     *
     * @returns {Promise<boolean>}
     *
     * @throws {Error}
     *
     * @abstract
     */
    async exists(path) {

    }

    /**
     * @param {string} from
     * @param {string} to
     *
     * @returns {Promise<void>}
     *
     * @throws {Error}
     *
     * @abstract
     */
    async rename(from, to) {

    }

    /**
     * @param {string} file
     *
     * @returns {Promise<Buffer>}
     *
     * @throws {Error}
     *
     * @abstract
     */
    async read(file) {

    }

    /**
     * @param {string} file
     * @param {Buffer} data
     *
     * @returns {Promise<void>}
     *
     * @throws {Error}
     *
     * @abstract
     */
    async write(file, data) {

    }

    /**
     * @param {string} path
     *
     * @returns {Promise<void>}
     *
     * @throws {Error}
     *
     * @abstract
     */
    async delete(path) {

    }

    /**
     * @param {string} from
     * @param {string} to
     *
     * @returns {Promise<void>}
     *
     * @throws {Error}
     *
     * @abstract
     */
    async copy(from, to) {

    }

    /**
     * @param {string} name
     *
     * @returns {Promise<string|null>}
     *
     * @throws {Error}
     *
     * @abstract
     */
    async lookupFile(name) {

    }
}

export {AbstractOutput};
