/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClient, ServiceClientOptions, ServiceCallback, HttpOperationResponse, ServiceClientCredentials } from 'ms-rest';
import * as models from "./models";

export default class PixelshiftApi extends ServiceClient {
  /**
   * @class
   * Initializes a new instance of the PixelshiftApi class.
   * @constructor
   *
   * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(credentials: ServiceClientCredentials, baseUri?: string, options?: ServiceClientOptions);

  credentials: ServiceClientCredentials;


  /**
   * @summary Endpoint for submitting batches for processing
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.batch] The batch to be processed
   *
   * @param {array} options.batch.items Collection of transform graphs for
   * processing. Each item represents a single billable operation.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<BatchStartReportResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  processImageBatchWithHttpOperationResponse(options?: { batch? : models.Batch, customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.BatchStartReportResponse>>;

  /**
   * @summary Endpoint for submitting batches for processing
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.batch] The batch to be processed
   *
   * @param {array} options.batch.items Collection of transform graphs for
   * processing. Each item represents a single billable operation.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {BatchStartReportResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {BatchStartReportResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link BatchStartReportResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  processImageBatch(options?: { batch? : models.Batch, customHeaders? : { [headerName: string]: string; } }): Promise<models.BatchStartReportResponse>;
  processImageBatch(callback: ServiceCallback<models.BatchStartReportResponse>): void;
  processImageBatch(options: { batch? : models.Batch, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.BatchStartReportResponse>): void;


  /**
   * @summary List all batches
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<AllBatchesPageResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  allBatchesWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AllBatchesPageResponse>>;

  /**
   * @summary List all batches
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {AllBatchesPageResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {AllBatchesPageResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link AllBatchesPageResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  allBatches(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AllBatchesPageResponse>;
  allBatches(callback: ServiceCallback<models.AllBatchesPageResponse>): void;
  allBatches(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AllBatchesPageResponse>): void;


  /**
   * @summary The processing status of a batch
   *
   * @param {uuid} batchId the id of the batch to query
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<BatchReportResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  batchInfoWithHttpOperationResponse(batchId: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.BatchReportResponse>>;

  /**
   * @summary The processing status of a batch
   *
   * @param {uuid} batchId the id of the batch to query
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {BatchReportResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {BatchReportResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link BatchReportResponse} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  batchInfo(batchId: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.BatchReportResponse>;
  batchInfo(batchId: string, callback: ServiceCallback<models.BatchReportResponse>): void;
  batchInfo(batchId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.BatchReportResponse>): void;


  /**
   * @summary The processing status of a specific operation
   *
   * @param {uuid} operationId the id of the operation
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<OperationStatusReportResponse>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  operationStatusWithHttpOperationResponse(operationId: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.OperationStatusReportResponse>>;

  /**
   * @summary The processing status of a specific operation
   *
   * @param {uuid} operationId the id of the operation
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {OperationStatusReportResponse} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {OperationStatusReportResponse} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link OperationStatusReportResponse} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  operationStatus(operationId: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.OperationStatusReportResponse>;
  operationStatus(operationId: string, callback: ServiceCallback<models.OperationStatusReportResponse>): void;
  operationStatus(operationId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationStatusReportResponse>): void;


  /**
   * @summary A description of the original operation parameters.
   *
   * @param {uuid} operationId the operation id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<TransformGraphMetadataEnvelope>} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  operationDescriptionWithHttpOperationResponse(operationId: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.TransformGraphMetadataEnvelope>>;

  /**
   * @summary A description of the original operation parameters.
   *
   * @param {uuid} operationId the operation id
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {ServiceCallback} [optionalCallback] - The optional callback.
   *
   * @returns {ServiceCallback|Promise} If a callback was passed as the last
   * parameter then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned.
   *
   *                      @resolve {TransformGraphMetadataEnvelope} - The deserialized result object.
   *
   *                      @reject {Error|ServiceError} - The error object.
   *
   * {ServiceCallback} optionalCallback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {TransformGraphMetadataEnvelope} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link TransformGraphMetadataEnvelope} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
   */
  operationDescription(operationId: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.TransformGraphMetadataEnvelope>;
  operationDescription(operationId: string, callback: ServiceCallback<models.TransformGraphMetadataEnvelope>): void;
  operationDescription(operationId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.TransformGraphMetadataEnvelope>): void;
}

export { PixelshiftApi, models as PixelshiftApiModels };
