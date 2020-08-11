import {AbstractConverter} from "@ozelot379/convert-base-api";

/**
 * Class DolphinConverter
 */
class DolphinConverter extends AbstractConverter {
    /**
     * @inheritDoc
     */
    async convert() {
        const from = this.data;

        if (!await this.output.exists(from)) {
            return [];
        }

        this.log.log(`Convert dolphin`);

        const image_from = await this.readImage(from);

        const factor = (image_from.getWidth() / 64);

        const image = await this.createImage((64 * factor), (64 * factor));

        // Nose
        image.composite(image_from.clone().crop(0, (13 * factor), (12 * factor), (6 * factor)), 0, (13 * factor));

        // Head
        image.composite(image_from.clone().crop(0, 0, (28 * factor), (13 * factor)), 0, 0);

        // Body
        image.composite(image_from.clone().crop((35 * factor), 0, (16 * factor), (13 * factor)), (13 * factor), (13 * factor));
        image.composite(image_from.clone().crop((22 * factor), (13 * factor), (42 * factor), (7 * factor)), 0, (26 * factor));

        // Tail 1
        image.composite(image_from.clone().crop((11 * factor), (19 * factor), (8 * factor), (11 * factor)), (11 * factor), (33 * factor));
        image.composite(image_from.clone().crop(0, (30 * factor), (30 * factor), (5 * factor)), 0, (44 * factor));

        // Tail 2
        image.composite(image_from.clone().crop((19 * factor), (20 * factor), (32 * factor), (7 * factor)), 0, (49 * factor));

        // Top
        image.composite(image_from.clone().crop((62 * factor), (5 * factor), factor, (4 * factor)), (33 * factor), 0);
        image.composite(image_from.clone().crop((56 * factor), (5 * factor), factor, (4 * factor)), (34 * factor), 0);
        image.composite(image_from.clone().crop((51 * factor), (5 * factor), (5 * factor), (4 * factor)).rotateSimple(-90), (29 * factor), (4 * factor));
        image.composite(image_from.clone().crop((56 * factor), 0, factor, (5 * factor)), (33 * factor), (4 * factor));
        image.composite(image_from.clone().crop((57 * factor), (5 * factor), (5 * factor), (4 * factor)).rotateSimple(90), (34 * factor), (4 * factor));
        image.composite(image_from.clone().crop((57 * factor), 0, factor, (5 * factor)), (38 * factor), (4 * factor));

        // Right
        image.composite(image_from.clone().crop((56 * factor), (27 * factor), (8 * factor), (4 * factor)), (44 * factor), 0);
        image.composite(image_from.clone().crop((48 * factor), (27 * factor), (8 * factor), (4 * factor)).flip(true, false), (52 * factor), 0);
        image.composite(image_from.clone().crop((55 * factor), (20 * factor), factor, (7 * factor)).rotateSimple(90), (40 * factor), (4 * factor));
        image.composite(image_from.clone().crop((55 * factor), (20 * factor), factor, (5 * factor)).rotateSimple(90), (47 * factor), (4 * factor));
        image.composite(image_from.clone().crop((56 * factor), (20 * factor), factor, (7 * factor)).rotateSimple(90), (52 * factor), (4 * factor));
        image.composite(image_from.clone().crop((56 * factor), (20 * factor), factor, (5 * factor)).rotateSimple(90), (59 * factor), (4 * factor));

        // Left
        image.composite(image_from.clone().crop((56 * factor), (27 * factor), (8 * factor), (4 * factor)).flip(true, false), (44 * factor), (6 * factor));
        image.composite(image_from.clone().crop((48 * factor), (27 * factor), (8 * factor), (4 * factor)), (52 * factor), (6 * factor));
        image.composite(image_from.clone().crop((55 * factor), (20 * factor), factor, (7 * factor)).rotateSimple(90), (40 * factor), (10 * factor));
        image.composite(image_from.clone().crop((55 * factor), (20 * factor), factor, (5 * factor)).rotateSimple(90), (47 * factor), (10 * factor));
        image.composite(image_from.clone().crop((56 * factor), (20 * factor), factor, (7 * factor)).rotateSimple(90), (52 * factor), (10 * factor));
        image.composite(image_from.clone().crop((56 * factor), (20 * factor), factor, (5 * factor)).rotateSimple(90), (59 * factor), (10 * factor));

        await this.writeImage(from, image);

        return [];
    }

    /**
     * @inheritDoc
     */
    static get DEFAULT_CONVERTER_DATA() {
        return [
            "textures/entity/dolphin.png"
        ];
    }
}

export {DolphinConverter};
