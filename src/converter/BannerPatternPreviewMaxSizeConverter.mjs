import {AbstractConverter} from "@ozelot379/convert-base-api";

/**
 * Class BannerPatternPreviewMaxSizeConverter
 */
class BannerPatternPreviewMaxSizeConverter extends AbstractConverter {
    /**
     * @inheritDoc
     */
    async convert() {
        const [from, max_width] = this.data;

        if (!await this.output.exists(from)) {
            return [];
        }

        this.log.log(`Fix banner pattern preview max size ${from}`);

        const image = await this.readImage(from);

        image.ensureMaxWidth(max_width);

        this.writeImage(from, image);

        return [];
    }

    /**
     * @inheritDoc
     */
    static get DEFAULT_CONVERTER_DATA() {
        return [
            ["textures/entity/banner_base.png", 64],
            ["textures/entity/banner/border.png", 64],
            ["textures/entity/banner/bricks.png", 64],
            ["textures/entity/banner/circle.png", 64],
            ["textures/entity/banner/creeper.png", 64],
            ["textures/entity/banner/cross.png", 64],
            ["textures/entity/banner/curly_border.png", 64],
            ["textures/entity/banner/diagonal_left.png", 64],
            ["textures/entity/banner/diagonal_right.png", 64],
            ["textures/entity/banner/diagonal_up_left.png", 64],
            ["textures/entity/banner/diagonal_up_right.png", 64],
            ["textures/entity/banner/flower.png", 64],
            ["textures/entity/banner/gradient.png", 64],
            ["textures/entity/banner/gradient_up.png", 64],
            ["textures/entity/banner/half_horizontal.png", 64],
            ["textures/entity/banner/half_horizontal_bottom.png", 64],
            ["textures/entity/banner/half_vertical.png", 64],
            ["textures/entity/banner/half_vertical_right.png", 64],
            ["textures/entity/banner/mojang.png", 64],
            ["textures/entity/banner/piglin.png", 64],
            ["textures/entity/banner/rhombus.png", 64],
            ["textures/entity/banner/skull.png", 64],
            ["textures/entity/banner/small_stripes.png", 64],
            ["textures/entity/banner/square_bottom_left.png", 64],
            ["textures/entity/banner/square_bottom_right.png", 64],
            ["textures/entity/banner/square_top_left.png", 64],
            ["textures/entity/banner/square_top_right.png", 64],
            ["textures/entity/banner/straight_cross.png", 64],
            ["textures/entity/banner/stripe_bottom.png", 64],
            ["textures/entity/banner/stripe_center.png", 64],
            ["textures/entity/banner/stripe_downleft.png", 64],
            ["textures/entity/banner/stripe_downright.png", 64],
            ["textures/entity/banner/stripe_left.png", 64],
            ["textures/entity/banner/stripe_middle.png", 64],
            ["textures/entity/banner/stripe_right.png", 64],
            ["textures/entity/banner/stripe_top.png", 64],
            ["textures/entity/banner/triangle_bottom.png", 64],
            ["textures/entity/banner/triangle_top.png", 64],
            ["textures/entity/banner/triangles_bottom.png", 64],
            ["textures/entity/banner/triangles_top.png", 64],
        ];
    }
}

export {BannerPatternPreviewMaxSizeConverter};
