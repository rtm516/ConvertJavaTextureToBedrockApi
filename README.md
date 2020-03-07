THIS PROJECT IS NO OFFICIAL MINECRAFT PRODUCT - NOT AUTHORIZED OR ASSOCIATED BY MOJANG

---

# Convert Minecraft Java texture packs to Bedrock texture packs

## Description
It supports the follow Minecraft versions:

| Minecraft | Version |
|-----------|---------|
| Java | v1.13.x, v1.14.x or v1.15.x |
| Bedrock | v1.14.x |

Some conversions of HD texture packs may takes a while

This project is inspired by the no longer continued [PCTexture2PE](https://github.com/rodrigojxd/PCTexture2PE)

It supports to convert blocks, items, entities, paintings, particles, map icons, mob effects and hotbar

Please reopen Minecraft after selecting the converted texture pack, because in the current version it seems to be a bug to reload the texture cache (Otherwise it's possible that you will have a mix between your previous and new texture pack, which can lead to appearance bugs that would not occur)

Some experimental conversions are disabled by default, but can be enabled if you want to try, but please be warned, it contains many bugs and may are not beautiful and may not usable:
- UI
    - Buttons
    - Tabs
    - Dialogs
    - Inventory / Recipe book
    - Tables

## Use it direct in your code
Add it as a dependency to your `package.json`

```bash
yarn add @ozelot379/convert-minecraft-java-texture-to-bedrock
```

Import it in your code
```javascript
import ConvertJavaTextureToBedrock, {ConsoleLog, Input, LocalFileInputEntry, LocalFileOutput} from "@ozelot379/convert-minecraft-java-texture-to-bedrock";
```

You can now convert your texture packs
```javascript
let output;
try {
    output = await new ConvertJavaTextureToBedrock(input, output, log, options).convert();
} catch (err) {

}
```

### Input
| Import | Description |
|--------|-------------|
| `Input` | The input consists on one input entry (Common) |
| `ArrayInput` | The input consists on multiple input entries (For instance a selected folder with multiple `FileInputEntry`) |
| `AbstractInput` | Base input |

### Input entry
| Import | For type |
|--------|----------|
| `BufferInputEntry` | - `ArrayBuffer`<br>- `Blob`<br>- `Buffer`<br>- `Uint8Array` |
| `FileInputEntry` | `File` |
| `LocalFileInputEntry` | Local file |
| `LocalFolderInputEntry` | Local folder |
| `AbstractInputEntry` | Base input entry |

### Output
| Import | For type |
|--------|----------|
| `ArrayBufferOutput` | `ArrayBuffer` |
| `BlobOutput` | `Blob` |
| `BufferOutput` | `Buffer` |
| `FileBlobOutput` | `File` |
| `LocalFileOutput` | Local file |
| `LocalFolderOutput` | Local folder |
| `Uint8ArrayOutput` | `Uint8Array` |
| `AbstractOutput` | Base output |

### Log
| Import | Description |
|--------|-------------|
| `ConsoleLog` | Log to console |
| `SlientLog` | Disable log |
| `AbstractLog` | Base log |

### Options
| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `experimental` | `bool` | `false` | Enable experimental conversions |

### Example
```javascript
import ConvertJavaTextureToBedrock, {ConsoleLog, Input, LocalFileInputEntry, LocalFileOutput} from "@ozelot379/convert-minecraft-java-texture-to-bedrock";

(async () => {
    let output;

    try {
        output = await new ConvertJavaTextureToBedrock(new Input(new LocalFileInputEntry("input/java_texture_pack.zip")), new LocalFileOutput("output/bedrock_texture_pack.mcpack"), new ConsoleLog()).convert();
    } catch (err) {
        console.log(err);

        return;
    }

    console.log(`Output: ${output}`);
})();
```

## Extras (for texture pack creators)

### UUID
You can create the `bedrock_uuid_header` and `bedrock_uuid_module` files in your input, to keep the same uuid on repeating conversions - otherwise, random uuids are generated each time and you need to reselect the texture pack again in the game

### Custom textures
You can put custom textures in a `bedrock_textures` folder in your input

For instance for textures, that can not be converted or are not converted correctly

This files are applied additionally before output

## How this work
This project uses the follow main features or external libraries:

- [Web Worker](https://developer.mozilla.org/docs/Web/API/Web_Workers_API) for convert it in the background to not freeze the browser ui (web app)
- [jszip](https://www.npmjs.com/package/jszip) for read, modify and write zip files
- [jimp](https://www.npmjs.com/package/jimp) for graphic manipulation
- [file-saver](https://www.npmjs.com/package/file-saver) for deliver the converted pack to download
- [webpack](https://www.npmjs.com/package/webpack) for bundle the dist code
- [gh-pages](https://www.npmjs.com/package/gh-pages) for publish a new version to the github static page (web app)
- [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) for offline cache and usage (web app)

## Web app

## CLI

## Report issue
Use github repo issues (https://github.com/ozelot379/ConvertJavaTextureToBedrock/issues/new/choose)
