THIS PROJECT IS NO OFFICIAL MINECRAFT PRODUCT - NOT AUTHORIZED OR ASSOCIATED BY MOJANG

---

# API for convert Minecraft Java texture packs to Bedrock texture packs

## Description

Look at https://github.com/ozelot379/ConvertJavaTextureToBedrockWebApp#user-content-description

## Requirements

This is an "ES module"

So it requires a current web browser or NodeJS v14

If you need older support, please try to use something like `webpack` or `babel`

## Use it direct in your code

Add it as a dependency to your `package.json`

```bash
yarn add @ozelot379/convert-minecraft-java-texture-to-bedrock
```

Import it in your code

```javascript
import {ConsoleLog, ConvertJavaTextureToBedrockApi, Input, LocalFileInputEntry, LocalFileOutput} from "@ozelot379/convert-minecraft-java-texture-to-bedrock-api";
```

You can now convert your texture packs

```javascript
let output;
try {
    output = await new ConvertJavaTextureToBedrockApi(input, output, log, options).convert();
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
import {ConsoleLog, ConvertJavaTextureToBedrockApi, Input, LocalFileInputEntry, LocalFileOutput} from "@ozelot379/convert-minecraft-java-texture-to-bedrock-api";

(async () => {
    let output;

    try {
        output = await new ConvertJavaTextureToBedrockApi(new Input(new LocalFileInputEntry("input/java_texture_pack.zip")), new LocalFileOutput("output/bedrock_texture_pack.mcpack"), new ConsoleLog()).convert();
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
- [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) for offline cache and usage (web app)

## Web app

Look at https://github.com/ozelot379/ConvertJavaTextureToBedrockWebApp

## CLI

Look at https://github.com/ozelot379/ConvertJavaTextureToBedrockCli

## Report issue

Use github repo issues (https://github.com/ozelot379/ConvertJavaTextureToBedrockWebApp/issues/new/choose)
