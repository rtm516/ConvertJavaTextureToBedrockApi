import {BufferOutput} from "./BufferOutput.mjs";

/**
 * Class BlobOutput
 */
class BlobOutput extends BufferOutput {
    /**
     * @inheritDoc
     */
    async generate() {
        this.log.log(`Generate ${Blob.name} zip`);

        return this.generateZip("blob");
    }
}

export {BlobOutput};
