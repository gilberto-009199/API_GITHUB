import { Octokit } from "../../../../node_modules/@octokit/core";
import { ConfigApi } from "../../api/config/api.config.js";
import { Request } from "../../api/request/request.js";
import { OwnerEnum } from "../../api/enum/owner.enum.js";
type ConstructorRequest<T extends Request> = new (...args: any[]) => T;
export declare class ManagerApi {
    octokit: Octokit;
    owner: string;
    org: string;
    ownerEnum: OwnerEnum;
    static build(config: ConfigApi): ManagerApi;
    createRequest<T extends Request>(destinationConstructor: ConstructorRequest<T>): T;
}
export {};
