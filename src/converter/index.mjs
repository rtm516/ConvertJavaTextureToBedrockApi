import {AbstractConverter} from "@ozelot379/convert-base-api";
import {ArrowConverter} from "./ArrowConverter.mjs";
import {AtlasConverter} from "./AtlasConverter.mjs";
import {BannerPatternConverter} from "./BannerPatternConverter.mjs";
import {BannerPatternBlackConverter} from "./BannerPatternBlackConverter.mjs";
import {BannerPatternPreviewMaxSizeConverter} from "./BannerPatternPreviewMaxSizeConverter.mjs";
import {BarConverter} from "./BarConverter.mjs";
import {BedConverter} from "./BedConverter.mjs";
import {BeeConverter} from "./BeeConverter.mjs";
import {ChestFrontConverter} from "./ChestFrontConverter.mjs";
import {ChestLeftRightDoubleConverter} from "./ChestLeftRightDoubleConverter.mjs";
import {ChestNormalConverter} from "./ChestNormalConverter.mjs";
import {ChestSideConverter} from "./ChestSideConverter.mjs";
import {ColorizeOverlayConverter} from "./ColorizeOverlayConverter.mjs";
import {CopyConverter} from "./CopyConverter.mjs";
import {DeleteConverter} from "./DeleteConverter.mjs";
import {DespriteConverter} from "./DespriteConverter.mjs";
import {DespriteExperimentalConverter} from "./DespriteExperimentalConverter.mjs";
import {DestroyStageConverter} from "./DestroyStageConverter.mjs";
import {DialogConverter} from "./DialogConverter.mjs";
import {DolphinConverter} from "./DolphinConverter.mjs";
import {DrownedConverter} from "./DrownedConverter.mjs";
import {EnchantedItemGlintConverter} from "./EnchantedItemGlintConverter.mjs";
import {FishHookConverter} from "./FishingConverter.mjs";
import {FireworksConverter} from "./FireworksConverter.mjs";
import {FixWrongRootFolderConverter} from "./FixWrongRootFolderConverter.mjs";
import {FoxConverter} from "./FoxConverter.mjs";
import {HorseConverter} from "./HorseConverter.mjs";
import {IconsConverter} from "./IconsConverter.mjs";
import {MapIconsConverter} from "./MapIconsConverter.mjs";
import {MetadataConverter} from "./MetadataConverter.mjs";
import {NineSliceConverter} from "./NineSliceConverter.mjs";
import {OpaqueConverter} from "./OpaqueConverter.mjs";
import {OverlayToTranslateConverter} from "./OverlayToTranslateConverter.mjs";
import {Particles1_13Converter} from "./Particles1_13Converter.mjs";
import {PistonArmConverter} from "./PistonArmConverter.mjs";
import {PlaceholderConverter} from "./PlaceholderConverter.mjs";
import {PngToTgaConverter} from "./PngToTgaConverter.mjs";
import {RedstoneDustConverter} from "./RedstoneDustConverter.mjs";
import {RenameConverter} from "./RenameConverter.mjs";
import {SheepConverter} from "./SheepConverter.mjs";
import {SideRotateConverter} from "./SideRotateConverter.mjs";
import {SpriteConverter} from "./SpriteConverter.mjs";
import {TitleConverter} from "./TitleConverter.mjs";
import {TurtleConverter} from "./TurtleConverter.mjs";
import {VillagerConverter} from "./VillagerConverter.mjs";
import {WaterConverter} from "./WaterConverter.mjs";
import {WeatherConverter} from "./WeatherConverter.mjs";

/**
 * @type {Function<AbstractConverter>[]}
 */
const converters = [
    FixWrongRootFolderConverter,
    MetadataConverter,
    RenameConverter,
    AtlasConverter,
    BannerPatternConverter,
    BedConverter,
    ChestNormalConverter,
    ChestLeftRightDoubleConverter,
    ChestFrontConverter,
    ChestSideConverter,
    DrownedConverter,
    DolphinConverter,
    FireworksConverter,
    FishHookConverter,
    FoxConverter,
    HorseConverter,
    IconsConverter,
    BannerPatternBlackConverter,
    MapIconsConverter,
    PistonArmConverter,
    RedstoneDustConverter,
    SheepConverter,
    VillagerConverter,
    TurtleConverter,
    WeatherConverter,
    OpaqueConverter,
    WaterConverter,
    BeeConverter,
    TitleConverter,
    DespriteConverter,
    DespriteExperimentalConverter,
    BarConverter,
    NineSliceConverter,
    DialogConverter,
    OverlayToTranslateConverter,
    ColorizeOverlayConverter,
    PlaceholderConverter,
    SideRotateConverter,
    ArrowConverter,
    Particles1_13Converter,
    SpriteConverter,
    DestroyStageConverter,
    EnchantedItemGlintConverter,
    BannerPatternPreviewMaxSizeConverter,
    PngToTgaConverter,
    CopyConverter,
    DeleteConverter
];

export {converters};
