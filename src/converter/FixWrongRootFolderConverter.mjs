import {AbstractConverter} from "@ozelot379/convert-base-api";

/**
 * Class FixWrongRootFolderConverter
 */
class FixWrongRootFolderConverter extends AbstractConverter {
    /**
     * @inheritDoc
     */
    async convert() {
        const [pack_mcmeta, others] = this.data;

        if (await this.output.exists(pack_mcmeta)) {
            return [];
        }

        this.log.warn(`${pack_mcmeta} not found in root folder (But are needed in the root folder, even in the Java version) - Try to lookup in sub folders ...`);

        const path = await this.output.lookupFile(pack_mcmeta);
        if (!path) {
            throw new Error(`${pack_mcmeta} not found! Is this really a Java texture pack?`);
        }

        this.log.log(`Root folder found in sub folder ${path}`);

        for (const file of [pack_mcmeta, ...others]) {
            if (await this.output.exists(`${path}/${file}`)) {
                await this.output.rename(`${path}/${file}`, `${file}`);
            }
        }

        return [];
    }

    /**
     * @inheritDoc
     */
    static get DEFAULT_CONVERTER_DATA() {
        return [
            ["pack.mcmeta", ["pack.png", "assets/", "bedrock_textures/", "bedrock_uuid_header", "bedrock_uuid_module"]]
        ];
    }
}

export {FixWrongRootFolderConverter};
