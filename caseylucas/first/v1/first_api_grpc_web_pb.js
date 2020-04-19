/**
 * @fileoverview gRPC-Web generated client stub for caseylucas.first.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.caseylucas = {};
proto.caseylucas.first = {};
proto.caseylucas.first.v1 = require('./first_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.caseylucas.first.v1.FirstAPIClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.caseylucas.first.v1.FirstAPIPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.caseylucas.first.v1.EchoRequest,
 *   !proto.caseylucas.first.v1.EchoResponse>}
 */
const methodInfo_FirstAPI_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.caseylucas.first.v1.EchoResponse,
  /** @param {!proto.caseylucas.first.v1.EchoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.caseylucas.first.v1.EchoResponse.deserializeBinary
);


/**
 * @param {!proto.caseylucas.first.v1.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.caseylucas.first.v1.EchoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.caseylucas.first.v1.EchoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.caseylucas.first.v1.FirstAPIClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/caseylucas.first.v1.FirstAPI/Echo',
      request,
      metadata || {},
      methodInfo_FirstAPI_Echo,
      callback);
};


/**
 * @param {!proto.caseylucas.first.v1.EchoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.caseylucas.first.v1.EchoResponse>}
 *     A native promise that resolves to the response
 */
proto.caseylucas.first.v1.FirstAPIPromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/caseylucas.first.v1.FirstAPI/Echo',
      request,
      metadata || {},
      methodInfo_FirstAPI_Echo);
};


module.exports = proto.caseylucas.first.v1;

