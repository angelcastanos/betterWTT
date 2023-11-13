/**
 * @interface IRequestOptions
 * @description Interface to define the request options
 * @property {Method} method - Method of the request
 * @property {HeadersInit_} headers - Headers of the request
 * @property {BodyInit_} body - Body of the request
 * @property {AbortSignal} signal - Signal of the request
 */
export interface FetchOptions extends RequestInit {
    method: "GET" | "POST" | "PUT" | "DELETE";
}