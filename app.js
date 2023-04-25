import OAuthPasswordGrant from "@sitecore/sc-contenthub-webclient-sdk/dist/authentication/oauth-password-grant";
import {ContentHubClient} from "@sitecore/sc-contenthub-webclient-sdk/dist/clients/content-hub-client";
import {ArrayBufferUploadSource} from "@sitecore/sc-contenthub-webclient-sdk/dist/models/upload/array-buffer-upload-source";
import * as fs from 'fs';

const endpoint = "https://<>";

const clientid = "";
const clientsec = "";
const username = "";
const pass = "";

    let oauth = new OAuthPasswordGrant(
        clientid,
        clientsec,
        username,
        pass);

const client = new ContentHubClient(endpoint, oauth);
await client.internalClient.authenticateAsync();


const buffer = fs.readFileSync("/Users/red-flowers.jpg");
const uploadSource = new ArrayBufferUploadSource(buffer, "red-flowers.jpg");
const request = new UploadRequest(uploadSource, "AssetUploadConfiguration", "NewAsset");
const result = await client.uploads.uploadAsync(request);
