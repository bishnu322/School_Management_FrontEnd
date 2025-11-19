export type TResponse<T> = Promise<{
  data: T;
}>;

export interface IResponse {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
