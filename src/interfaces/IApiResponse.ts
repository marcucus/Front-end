import { ErrorEntity } from "interfaces.foudroyer.com";
import { InternalErrorEntity } from "../entities/InternalErrorEntity";

export type IApiResponse<T> =
  | ({ statusCode: 200 } & T)
  | { statusCode: 400; message: ErrorEntity };

export type IRepositoryResponse<T> =
  | ({ error: false } & { body: T })
  | { error: true; code: ErrorEntity | InternalErrorEntity };
