import {AbstractConverter} from "./AbstractConverter.mjs";
import {DeleteConverter} from "./DeleteConverter.mjs";

/**
 * Class PiglinConverter
 */
class PiglinConverter extends AbstractConverter {
    /**
     * @inheritDoc
     */
    async convert() {
        const [from, to, delete_from] = this.data;

        const to_delete = [];

        if (!await this.output.exists(from)) {
            return to_delete;
        }

        this.log.log(`Convert piglin ${to}`);

        const image_from = await this.readImage(from);

        const factor = (image_from.getWidth() / 64);

        const image = await this.createImage((128 * factor), (128 * factor));

        image.composite(image_from.clone().crop(0, 0, (36 * factor), (64 * factor)), 0, 0);

        image.composite(image_from.clone().crop((36 * factor), factor, (5 * factor), (5 * factor)), (36 * factor), factor);

        image.composite(image_from.clone().crop((39 * factor), (6 * factor), (10 * factor), (9 * factor)), (57 * factor), (22 * factor));
        image.composite(image_from.clone().crop((51 * factor), (6 * factor), (10 * factor), (9 * factor)), (57 * factor), (38 * factor));

        image.composite(image_from.clone().crop((36 * factor), (16 * factor), (28 * factor), (48 * factor)), (36 * factor), (16 * factor));

        await this.writeImage(to, image);

        if (delete_from) {
            to_delete.push(new DeleteConverter(from));
        }

        return to_delete;
    }

    /**
     * @inheritDoc
     */
    static get DEFAULT_CONVERTER_DATA() {
        return [
            ["textures/entity/piglin/piglin.png", "textures/entity/piglin/piglin.png"],
            ["textures/entity/piglin/zombified_piglin.png", "textures/entity/piglin/zombie_piglin.png", true]
        ];
    }
}

export {PiglinConverter};
