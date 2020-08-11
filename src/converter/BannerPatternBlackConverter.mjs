import {AbstractConverter} from "@ozelot379/convert-base-api";

/**
 * Class BannerPatternBlackConverter
 */
class BannerPatternBlackConverter extends AbstractConverter {
    /**
     * @inheritDoc
     */
    async convert() {
        const from = this.data;

        if (!await this.output.exists(from)) {
            return [];
        }

        this.log.log(`Fix banner pattern black ${from}`);

        const image = await this.readImage(from);

        image.scan(0, 0, image.getWidth(), image.getHeight(), (x, y, idx) => {
            if (image.bitmap.data[idx] === 0 && image.bitmap.data[idx + 1] === 0 && image.bitmap.data[idx + 2] === 0 && image.bitmap.data[idx + 3] === 255) {
                image.bitmap.data[idx + 3] = 0;
            }
        });

        this.writeImage(from, image);

        return [];
    }

    /**
     * @inheritDoc
     */
    static get DEFAULT_CONVERTER_DATA() {
        return [
            "textures/entity/banner/border.png",
            "textures/entity/banner/bricks.png",
            "textures/entity/banner/circle.png",
            "textures/entity/banner/creeper.png",
            "textures/entity/banner/cross.png",
            "textures/entity/banner/curly_border.png",
            "textures/entity/banner/diagonal_left.png",
            "textures/entity/banner/diagonal_right.png",
            "textures/entity/banner/diagonal_up_left.png",
            "textures/entity/banner/diagonal_up_right.png",
            "textures/entity/banner/flower.png",
            "textures/entity/banner/gradient.png",
            "textures/entity/banner/gradient_up.png",
            "textures/entity/banner/half_horizontal.png",
            "textures/entity/banner/half_horizontal_bottom.png",
            "textures/entity/banner/half_vertical.png",
            "textures/entity/banner/half_vertical_right.png",
            "textures/entity/banner/mojang.png",
            "textures/entity/banner/piglin.png",
            "textures/entity/banner/rhombus.png",
            "textures/entity/banner/skull.png",
            "textures/entity/banner/small_stripes.png",
            "textures/entity/banner/square_bottom_left.png",
            "textures/entity/banner/square_bottom_right.png",
            "textures/entity/banner/square_top_left.png",
            "textures/entity/banner/square_top_right.png",
            "textures/entity/banner/straight_cross.png",
            "textures/entity/banner/stripe_bottom.png",
            "textures/entity/banner/stripe_center.png",
            "textures/entity/banner/stripe_downleft.png",
            "textures/entity/banner/stripe_downright.png",
            "textures/entity/banner/stripe_left.png",
            "textures/entity/banner/stripe_middle.png",
            "textures/entity/banner/stripe_right.png",
            "textures/entity/banner/stripe_top.png",
            "textures/entity/banner/triangle_bottom.png",
            "textures/entity/banner/triangle_top.png",
            "textures/entity/banner/triangles_bottom.png",
            "textures/entity/banner/triangles_top.png"
        ];
    }
}

export {BannerPatternBlackConverter};
