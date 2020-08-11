import {AbstractBaseApi} from "@ozelot379/convert-base-api";
import {converters} from "./converter/index.mjs";

/**
 * Class ConvertJavaTextureToBedrockApi
 */
class ConvertJavaTextureToBedrockApi extends AbstractBaseApi {
    /**
     * @inheritDoc
     */
    async convert() {
        if (this.options.experimental) {
            this.log.warn(`EXPERIMENTAL CONVERSIONS ENABLED!`)
        }

        const output = await super.convert();

        this.log.log("Please reopen Minecraft after selecting the converted texture pack, because in the current version it seems to be a bug to reload the texture cache (Otherwise it's possible that you will have a mix between your previous and new texture pack, which can lead to appearance bugs that would not occur)");

        return output;
    }

    /**
     * @inheritDoc
     */
    async getInitConverters() {
        return converters;
    }
}

export {ConvertJavaTextureToBedrockApi};
