import {AbstractInput} from "./input/AbstractInput.mjs";
import {AbstractLog} from "./log/AbstractLog.mjs";
import {AbstractOutput} from "./output/AbstractOutput.mjs";
import {addAdditionalConverters, getConverters} from "./converter/converters.mjs";
import {Options} from "./Options.mjs";

/**
 * Class ConvertJavaTextureToBedrockApi
 */
class ConvertJavaTextureToBedrockApi {
    /**
     * ConvertJavaTextureToBedrockApi constructor
     *
     * @param {AbstractInput} input
     * @param {AbstractOutput} output
     * @param {AbstractLog} log
     * @param {Options} options
     */
    constructor(input, output, log, options = {}) {
        /**
         * @type {AbstractInput}
         *
         * @protected
         */
        this.input = input;
        /**
         * @type {AbstractOutput}
         *
         * @protected
         */
        this.output = output;
        /**
         * @type {AbstractLog}
         *
         * @protected
         */
        this.log = log;
        /**
         * @type {AsyncIterableIterator<AbstractConverter>}
         *
         * @protected
         */
        this.converters = getConverters();
        /**
         * @type {Options}
         *
         * @protected
         */
        this.options = {
            ...new Options(),
            ...options
        };
    }

    /**
     * @returns {Promise<*>}
     */
    async convert() {
        this.log.log("Start conversion");

        if (this.options.experimental) {
            this.log.warn(`EXPERIMENTAL CONVERSIONS ENABLED!`)
        }

        await this.handleInput();

        await this.handleConverters();

        const output = await this.handleOutput();

        this.log.log("Conversion finished");

        this.log.log("Please reopen Minecraft after selecting the converted texture pack, because in the current version it seems to be a bug to reload the texture cache (Otherwise it's possible that you will have a mix between your previous and new texture pack, which can lead to appearance bugs that would not occur)");

        return output;
    }

    /**
     * @returns {Promise<void>}
     *
     * @protected
     */
    async handleInput() {
        await this.output._init(this.input, this.log, this.options);

        for await (const entry of this.input.getEntries()) {
            await entry._init(this.log, this.options);

            await this.output.applyInputEntry(entry);
        }
    }

    /**
     * @returns {Promise<void>}
     *
     * @protected
     */
    async handleConverters() {
        for await (const converter of this.converters) {
            await converter._init(this.input, this.output, this.log, this.options);

            await addAdditionalConverters(...await converter.convert());
        }
    }

    /**
     * @returns {Promise<*>}
     *
     * @protected
     */
    async handleOutput() {
        return this.output.generate();
    }
}

export {ConvertJavaTextureToBedrockApi};
