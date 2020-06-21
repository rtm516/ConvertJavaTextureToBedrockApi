import {AbstractConverter} from "./AbstractConverter.mjs";

/**
 * Class CropConverter
 */
class CropConverter extends AbstractConverter {
    /**
     * @inheritDoc
     */
    async convert() {
        const [from, width, height] = this.data;

        if (!await this.output.exists(from)) {
            return [];
        }

        const newWidth = image.getWidth() * width
        const newHeight = image.getHeight() * height

        this.log.log(`Crop ${from} to ${newWidth}x${newHeight}`);

        const image = await this.readImage(from);

        image.crop(0, 0, newWidth, newHeight)
        
        await this.writeImage(from, image);

        return [];
    }

    /**
     * @inheritDoc
     */
    static get DEFAULT_CONVERTER_DATA() {
        return [
            // Conduit
            ["textures/blocks/conduit_base.png", 0.75, 0.75],
            ["textures/blocks/conduit_closed.png", 0.5, 0.5],
            ["textures/blocks/conduit_open.png", 0.5, 0.5],
        ];
    }
}

export {CropConverter};
