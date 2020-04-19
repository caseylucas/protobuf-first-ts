import * as grpcWeb from 'grpc-web';

import {
  EchoRequest,
  EchoResponse} from './first_api_pb';

export class FirstAPIClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  echo(
    request: EchoRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: EchoResponse) => void
  ): grpcWeb.ClientReadableStream<EchoResponse>;

}

export class FirstAPIPromiseClient {
  constructor (hostname: string,
               credentials: null | { [index: string]: string; },
               options: null | { [index: string]: string; });

  echo(
    request: EchoRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<EchoResponse>;

}

