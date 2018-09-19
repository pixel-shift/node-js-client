const getTokenAsync = require('./getTokenAsync');
const PixelshiftApi = require("PixelshiftApi");
const PixelshiftApiModels = require("PixelshiftApi/lib/models/index.js");

const msRest = require("ms-rest");
const TokenCredentials = msRest.TokenCredentials;

const clientId = "__client_id__"; //replace with "public key" from https://www.pixelshift.io/Dashboard/ApiAccess
const clientSecret = "__client_secret__"; //replace with "secret key" https://www.pixelshift.io/Dashboard/ApiAccess


const host = "www.pixelshift.io";


(async () => {

    const token = await getTokenAsync(host, clientId, clientSecret);
    const creds = new TokenCredentials(token);

    const api = new PixelshiftApi(creds, "https://www.pixelshift.io");


    const storageSource = new PixelshiftApiModels.StorageSourceS3();
    storageSource.sourceBucket = "sourcebucket";
    storageSource.sourceKey = "sourcekey";

    const resize = new PixelshiftApiModels.ImageResizeMax();
    resize.width = 500;
    resize.height = 500;
    resize.resizeKernel = 'lanczos3';

    const jpeg = new PixelshiftApiModels.ImageFormatJpeg();
    jpeg.quality = 60;


    const storageSink = new PixelshiftApiModels.StorageSinkS3();
    storageSink.allowOverwrite = true;
    storageSink.destinationBucket = "destbucket";
    storageSink.destinationKey = "destkey.jpg";


    const graph = new PixelshiftApiModels.TransformGraph();
    graph.transforms = [storageSource, resize, jpeg, storageSink];

    const batch = new PixelshiftApiModels.Batch();
    batch.items = [graph];


    addTypeDiscriminatorsToBatch(batch);

    const apiResponse = await api.processImageBatch({batch});

    console.log(JSON.stringify(apiResponse, null, 2));
})();


function addTypeDiscriminatorsToBatch(batch) {
    batch.items.forEach(tg => addTypeDiscriminatorsToTransformGraph(tg));
}

function addTypeDiscriminatorsToTransformGraph(tg) {
    tg.transforms && tg.transforms.forEach(t => t.kind = t.mapper().serializedName);
    tg.outputs && tg.outputs.forEach(o => addTypeDiscriminatorsToTransformGraph(o));
}