import {AbstractConverter} from "./AbstractConverter.mjs";
import {MetadataConverter} from "./MetadataConverter.mjs";

/**
 * Class PlaceholderConverter
 */
class PlaceholderConverter extends AbstractConverter {
    /**
     * @inheritDoc
     */
    async convert() {
        const [from, x, y, width, height, factor_detect, to, square_mode, min_pack_format] = this.data;

        if (min_pack_format && MetadataConverter.mcmeta.pack.pack_format < min_pack_format) {
            return [];
        }

        if (!await this.output.exists(from)) {
            return [];
        }

        this.log.log(`Create placeholder ${to}`);

        let image = await this.readImage(from);

        image.ensureMinWidth(factor_detect);

        const factor = (image.getWidth() / factor_detect);

        image.crop((x * factor), (y * factor), (width * factor), (height * factor));

        switch (square_mode) {
            case 1: {
                // Left top
                const size = Math.max(width, height);

                image = (await this.createImage((size * factor), (size * factor))).composite(image, 0, 0);
            }
                break;

            case 2:
                // No
                break;

            case 0:
            default: {
                // Center
                const size = Math.max(width, height);

                image = (await this.createImage((size * factor), (size * factor))).composite(image, (((size * factor) - (width * factor)) / 2), (((size * factor) - (height * factor)) / 2));
            }
                break;
        }

        await this.writeImage(to, image);

        return [];
    }

    /**
     * @inheritDoc
     */
    static get DEFAULT_CONVERTER_DATA() {
        return [
            // Bed
            ["textures/entity/bed/red.png", 2, 6, 14, 14, 64, "textures/blocks/bed_head_top.png"],
            ["textures/entity/bed/red.png", 0, 6, 6, 14, 64, "textures/blocks/bed_head_side.png"],
            ["textures/entity/bed/red.png", 6, 0, 14, 6, 64, "textures/blocks/bed_head_end.png"],
            ["textures/entity/bed/red.png", 2, 20, 14, 14, 64, "textures/blocks/bed_feet_top.png"],
            ["textures/entity/bed/red.png", 22, 0, 14, 6, 64, "textures/blocks/bed_feet_end.png"],
            ["textures/entity/bed/red.png", 0, 20, 6, 14, 64, "textures/blocks/bed_feet_side.png"],

            // Bed item
            ["textures/entity/bed/black.png", 6, 6, 16, 32, 64, "textures/items/bed_black.png"],
            ["textures/entity/bed/blue.png", 6, 6, 16, 32, 64, "textures/items/bed_blue.png"],
            ["textures/entity/bed/brown.png", 6, 6, 16, 32, 64, "textures/items/bed_brown.png"],
            ["textures/entity/bed/cyan.png", 6, 6, 16, 32, 64, "textures/items/bed_cyan.png"],
            ["textures/entity/bed/gray.png", 6, 6, 16, 32, 64, "textures/items/bed_gray.png"],
            ["textures/entity/bed/green.png", 6, 6, 16, 32, 64, "textures/items/bed_green.png"],
            ["textures/entity/bed/light_blue.png", 6, 6, 16, 32, 64, "textures/items/bed_light_blue.png"],
            ["textures/entity/bed/lime.png", 6, 6, 16, 32, 64, "textures/items/bed_lime.png"],
            ["textures/entity/bed/magenta.png", 6, 6, 16, 32, 64, "textures/items/bed_magenta.png"],
            ["textures/entity/bed/orange.png", 6, 6, 16, 32, 64, "textures/items/bed_orange.png"],
            ["textures/entity/bed/pink.png", 6, 6, 16, 32, 64, "textures/items/bed_pink.png"],
            ["textures/entity/bed/purple.png", 6, 6, 16, 32, 64, "textures/items/bed_purple.png"],
            ["textures/entity/bed/red.png", 6, 6, 16, 32, 64, "textures/items/bed_red.png"],
            ["textures/entity/bed/silver.png", 6, 6, 16, 32, 64, "textures/items/bed_silver.png"],
            ["textures/entity/bed/white.png", 6, 6, 16, 32, 64, "textures/items/bed_white.png"],
            ["textures/entity/bed/yellow.png", 6, 6, 16, 32, 64, "textures/items/bed_yellow.png"],

            // Chain
            ["textures/blocks/chain.png", 3, 0, 3, 16, 16, "textures/blocks/chain1.png", 1],
            ["textures/blocks/chain.png", 0, 0, 3, 16, 16, "textures/blocks/chain2.png", 1],

            // Chest
            ["textures/entity/chest/normal.png", 14, 0, 14, 14, 64, "textures/blocks/chest_top.png"],
            ["textures/entity/chest/ender.png", 14, 0, 14, 14, 64, "textures/blocks/ender_chest_top.png"],

            // Conduit
            ["textures/blocks/conduit_base.png", 0, 0, 24, 12, 32, "textures/blocks/conduit_base.png", 2],
            ["textures/blocks/conduit_closed.png", 0, 0, 8, 8, 16, "textures/blocks/conduit_closed.png", 2, 5],
            ["textures/blocks/conduit_open.png", 0, 0, 8, 8, 16, "textures/blocks/conduit_open.png", 2, 5],

            // Command block
            ["textures/blocks/chain_command_block_back.png", 0, 0, 16, 16, 16, "textures/blocks/chain_command_block_back_mipmap.png"],
            ["textures/blocks/chain_command_block_conditional.png", 0, 0, 16, 16, 16, "textures/blocks/chain_command_block_conditional_mipmap.png"],
            ["textures/blocks/chain_command_block_front.png", 0, 0, 16, 16, 16, "textures/blocks/chain_command_block_front_mipmap.png"],
            ["textures/blocks/chain_command_block_side.png", 0, 0, 16, 16, 16, "textures/blocks/chain_command_block_side_mipmap.png"],
            ["textures/blocks/command_block_back.png", 0, 0, 16, 16, 16, "textures/blocks/command_block_back_mipmap.png"],
            ["textures/blocks/command_block_conditional.png", 0, 0, 16, 16, 16, "textures/blocks/command_block_conditional_mipmap.png"],
            ["textures/blocks/command_block_front.png", 0, 0, 16, 16, 16, "textures/blocks/command_block_front_mipmap.png"],
            ["textures/blocks/command_block_side.png", 0, 0, 16, 16, 16, "textures/blocks/command_block_side_mipmap.png"],
            ["textures/blocks/repeating_command_block_back.png", 0, 0, 16, 16, 16, "textures/blocks/repeating_command_block_back_mipmap.png"],
            ["textures/blocks/repeating_command_block_conditional.png", 0, 0, 16, 16, 16, "textures/blocks/repeating_command_block_conditional_mipmap.png"],
            ["textures/blocks/repeating_command_block_front.png", 0, 0, 16, 16, 16, "textures/blocks/repeating_command_block_front_mipmap.png"],
            ["textures/blocks/repeating_command_block_side.png", 0, 0, 16, 16, 16, "textures/blocks/repeating_command_block_side_mipmap.png"],

            // Compass & clock
            ["textures/items/compass_atlas.png", 0, 0, 16, 16, 16, "textures/items/compass_item.png"],
            ["textures/items/watch_atlas.png", 0, 0, 16, 16, 16, "textures/items/clock_item.png"],

            // Sign
            ["textures/entity/sign_acacia.png", 2, 2, 24, 12, 64, "textures/ui/sign_acacia.png", 2],
            ["textures/entity/sign_birch.png", 2, 2, 24, 12, 64, "textures/ui/sign_birch.png", 2],
            ["textures/entity/sign_crimson.png", 2, 2, 24, 12, 64, "textures/ui/sign_crimson.png", 2],
            ["textures/entity/sign_darkoak.png", 2, 2, 24, 12, 64, "textures/ui/sign_darkoak.png", 2],
            ["textures/entity/sign_jungle.png", 2, 2, 24, 12, 64, "textures/ui/sign_jungle.png", 2],
            ["textures/entity/sign.png", 2, 2, 24, 12, 64, "textures/ui/sign.png", 2],
            ["textures/entity/sign_spruce.png", 2, 2, 24, 12, 64, "textures/ui/sign_spruce.png", 2],
            ["textures/entity/sign_warped.png", 2, 2, 24, 12, 64, "textures/ui/sign_warped.png", 2],

            // Water, lava & co.
            ["textures/blocks/cauldron_water.png", 0, 0, 16, 16, 16, "textures/blocks/cauldron_water_placeholder.png"],
            ["textures/blocks/fire_0.png", 0, 0, 16, 16, 16, "textures/blocks/fire_0_placeholder.png"],
            ["textures/blocks/fire_1.png", 0, 0, 16, 16, 16, "textures/blocks/fire_1_placeholder.png"],
            ["textures/blocks/lava_still.png", 0, 0, 16, 16, 16, "textures/blocks/lava_placeholder.png"],
            ["textures/blocks/portal.png", 0, 0, 16, 16, 16, "textures/blocks/portal_placeholder.png"],
            ["textures/blocks/water_still.png", 0, 0, 16, 16, 16, "textures/blocks/water_placeholder.png"],

            // Zombie
            ["textures/entity/pig/pigzombie.png", 0, 0, 64, 32, 64, "textures/entity/pig/pigzombie.png", 2],
            ["textures/entity/zombie/husk.png", 0, 0, 64, 32, 64, "textures/entity/zombie/husk.png", 2],
            ["textures/entity/zombie/zombie.png", 0, 0, 64, 32, 64, "textures/entity/zombie/zombie.png", 2]
        ];
    }
}

export {PlaceholderConverter};
