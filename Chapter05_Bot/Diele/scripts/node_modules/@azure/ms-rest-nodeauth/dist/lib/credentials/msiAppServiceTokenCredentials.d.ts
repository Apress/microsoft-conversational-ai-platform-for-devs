import { MSITokenCredentials, MSIOptions, MSITokenResponse } from "./msiTokenCredentials";
import { WebResource } from "@azure/ms-rest-js";
/**
 * @interface MSIAppServiceOptions Defines the optional parameters for authentication with MSI for AppService.
 */
export interface MSIAppServiceOptions extends MSIOptions {
    /**
     * @property {string} [msiEndpoint] - The local URL from which your app can request tokens.
     * Unless this property is specified, any of the two environment variables `IDENTITY_ENDPOINT` or `MSI_ENDPOINT` will be used as the default value.
     */
    msiEndpoint?: string;
    /**
     * @property {string} [msiSecret] - The secret used in communication between your code and the local MSI agent.
     * Unless this property is specified, any of the two environment variables `IDENTITY_SECRET` or `MSI_SECRET` will be used as the default value.
     */
    msiSecret?: string;
    /**
     * @property {string} [msiApiVersion] - The api-version of the local MSI agent. Default value is "2017-09-01".
     */
    msiApiVersion?: string;
    /**
     * @property {string} [clientId] - The clientId of the managed identity you would like the token for. Required, if
     * your app service has user-assigned managed identities.
     */
    clientId?: string;
}
/**
 * @class MSIAppServiceTokenCredentials
 */
export declare class MSIAppServiceTokenCredentials extends MSITokenCredentials {
    /**
     * @property {string} msiEndpoint - The local URL from which your app can request tokens.
     * Unless this property is specified, any of the two environment variables `IDENTITY_ENDPOINT` or `MSI_ENDPOINT` will be used as the default value.
     */
    msiEndpoint: string;
    /**
     * @property {string} msiSecret - The secret used in communication between your code and the local MSI agent.
     * Unless this property is specified, any of the two environment variables `IDENTITY_SECRET` or `MSI_SECRET` will be used as the default value.
     */
    msiSecret: string;
    /**
     * @property {string} [msiApiVersion] The api-version of the local MSI agent. Default value is "2017-09-01".
     */
    msiApiVersion?: string;
    /**
     * @property {string} [clientId] - The clientId of the managed identity you would like the token for. Required, if
     * your app service has user-assigned managed identities.
     */
    clientId?: string;
    /**
     * Creates an instance of MSIAppServiceTokenCredentials.
     * @param {string} [options.msiEndpoint] - The local URL from which your app can request tokens.
     * Unless this property is specified, any of the two environment variables `IDENTITY_ENDPOINT` or `MSI_ENDPOINT` will be used as the default value.
     * @param {string} [options.msiSecret] - The secret used in communication between your code and the local MSI agent.
     * Unless this property is specified, any of the two environment variables `IDENTITY_SECRET` or `MSI_SECRET` will be used as the default value.
     * @param {string} [options.resource] - The resource uri or token audience for which the token is needed.
     * For e.g. it can be:
     * - resource management endpoint "https://management.azure.com/" (default)
     * - management endpoint "https://management.core.windows.net/"
     * @param {string} [options.msiApiVersion] - The api-version of the local MSI agent. Default value is "2017-09-01".
     * @param {string} [options.clientId] - The clientId of the managed identity you would like the token for. Required, if
     * your app service has user-assigned managed identities.
     */
    constructor(options?: MSIAppServiceOptions);
    /**
     * Prepares and sends a GET request to a service endpoint indicated by the app service, which responds with the access token.
     * @return {Promise<MSITokenResponse>} Promise with the tokenResponse (tokenType and accessToken are the two important properties).
     */
    getToken(): Promise<MSITokenResponse>;
    protected prepareRequestOptions(): WebResource;
}
//# sourceMappingURL=msiAppServiceTokenCredentials.d.ts.map