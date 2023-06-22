import { Octokit } from "@octokit/core";
import { OwnerEnum } from "../../api/enum/owner.enum.js";
export declare class Request {
    protected clientOctokit: Octokit;
    protected owner: string;
    protected ownerEnum: OwnerEnum;
    protected header: {
        'X-GitHub-Api-Version': '2022-11-28';
    };
    protected org: string;
    constructor(clientOctokit: Octokit, owner: string, ownerEnum: OwnerEnum);
    fetch(...args: any[]): Promise<any>;
    client(route: string, options?: any): Promise<any>;
    withClientOctokit(clientOctokit: Octokit): Request;
    withOwner(owner: string): Request;
    withOwnerEnum(ownerEnum: OwnerEnum): Request;
    withOrg(org: string): Request;
}
