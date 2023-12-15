import { ElizaServiceClient } from "../generated/protos/eliza.client";
import { SayResponse } from "../generated/protos/eliza";
import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

/**
 * @see https://zenn.dev/emiksk/articles/883d8b333ffb26
 */
export const say = (sentence: string) => {
  const client = new ElizaServiceClient(
    new GrpcWebFetchTransport({
      baseUrl: "https://demo.connect.build/",
      format: "binary",
    })
  );

  return new Promise<SayResponse | null>((resolve, reject) => {
    client
      .say({ sentence })
      .then((value) => {
        const { response } = value;
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
